// import Search from "./components/Search"
import {TodayMain} from "./components/TodayMain"
// import Carousel from "./components/Carousel"
import { useEffect, useState } from "react"
// import { useGetLocation } from "./hooks/useGetLocation"
// import { useGetData } from "./hooks/useGetData"

export interface MainData {
	location: string,
	temperature: number,
	weather: string,
	humidity: string,
	windSpeed: string,
}

function App() {
  // const data = useGetData()
  const [lat, setLat] = useState<number>()
  const [long, setLong] = useState<number>()
  const [mainData, setMainData] = useState<MainData>({
    location: "",
	temperature: 0,
	weather: "",
	humidity: "",
	windSpeed: "",
  })

  useEffect(() => {
    const fetchData = async () => {
      if (lat && long) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=cd7018ff371ad1ee3e7c28219d7cea70&units=metric`);
        const result = await response.json();
        setMainData({
          location: result.name,
          temperature: result.main.temp,
          weather: result.weather[0].description,
          humidity: result.main.humidity,
          windSpeed: result.wind.speed,
        });
      }
    }

    navigator.geolocation.getCurrentPosition(position => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    fetchData();
  }, [lat, long]);

  return (
    <>
      <div className="bg-black text-white h-screen w-screen">
        {/* <Search /> */}
        <TodayMain data={mainData}  />
        {/* <Carousel /> */}
      </div>
    </>
  )
}

export default App
