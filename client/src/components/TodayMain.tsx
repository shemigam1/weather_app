import { MainData } from "../App";

const TodayMain = ({ data }: { data: MainData }) => {
	return (
		<section className="h-[40%] flex flex-col justify-center items-center gap-4">
            <article>
                <p className="text-2xl">{data.location}</p>
            </article>
			<article>
				<p className="">date time small</p>
				<p className="text-7xl">{data.temperature}°C</p>
				<p className="">{data.weather}</p>
			</article>
			<article className="flex items-center justify-between gap-5">
				<div className="">
					<p>Humidity</p>
					<p>{data.humidity}%</p>
				</div>
				<div className="">
					<p>Wind Speed</p>
					<p>{data.windSpeed} m/s</p>
				</div>
			</article>
		</section>
	);
}

export { TodayMain };
