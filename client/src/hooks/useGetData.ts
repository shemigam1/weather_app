// import axios from "axios"
// import { useEffect, useState } from "react"
// import { useGetLocation } from "./useGetLocation"

// export const useGetData = async () => {
//     const api_key = import.meta.env.API_KEY
//     const location = useGetLocation()
//     const [data, setData] = useState([])

//     useEffect(() => {
//         coordinates().catch(error => console.log('error' + error));
//     })
//     const coordinates = async () => {

//         try {
//             // const locationData = await axios.get(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${location?.latitude}&lon=${location?.longitude}&appid=${api_key}`)
//             setData(await axios.get(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${location?.latitude}&lon=${location?.longitude}&appid=${api_key}`))
//             console.log(data);

//         } catch (error) {
//             console.error(error);
//         }

//     }
//     return data
// }

import axios from "axios";
import { useEffect, useState } from "react";
import { useGetLocation } from "./useGetLocation";

interface WeatherData {
    // Define the shape of the data you expect from the API
    // This is a placeholder and should be replaced with actual data structure
    hourly: Array<{ dt: number, temp: number, weather: Array<{ description: string }> }>;
}

export const useGetData = () => {
    const api_key = import.meta.env.API_KEY as string;
    const location = useGetLocation();
    const [data, setData] = useState<{} | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url1 = `https://api.openweathermap.org/data/2.5/weather?q=Accra&appid=cd7018ff371ad1ee3e7c28219d7cea70`
                // const url2 =`https://pro.openweathermap.org/data/2.5/forecast/hourly`
                const response = await axios.get(url1);
                setData(response.data);
            } catch (error) {
                setError('Error fetching data: ' + (error as Error).message);
            }
        };

        fetchData();
    }, [location, api_key]); // Dependencies array

    return { data, error };
};