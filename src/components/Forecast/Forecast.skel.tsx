import WeatherIconSkeleton from '../WeatherIcon/WeatherIcon.skel';

function ForecastSkeleton() {
  return (
    <li
      role="alert"
      aria-busy="true"
      className="flex animate-pulse flex-col items-center md:px-5"
    >
      <div className="mb-3 mt-2 h-3 w-20 rounded-md bg-slate-600"></div>
      <div>
        <WeatherIconSkeleton className="h-14 w-14 bg-slate-600" />
      </div>
      <section className="flex flex-row items-center gap-2">
        <div className="my-2 h-2 w-8 rounded-md bg-slate-600 md:h-3"></div>
        <div className="my-2 h-2 w-8 rounded-md bg-slate-600 md:h-3"></div>
      </section>
    </li>
  );
}

export default ForecastSkeleton;
