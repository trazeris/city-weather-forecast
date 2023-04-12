import WeatherIconSkeleton from '../WeatherIcon/WeatherIcon.skel';

function CurrentWeatherSkeleton() {
  return (
    <section
      role="alert"
      aria-busy="true"
      className="flex animate-pulse flex-row-reverse items-center justify-between pb-4 shadow-xl md:gap-20"
    >
      <div className="flex flex-col items-end">
        <div className="my-2 h-4 w-32 rounded-md bg-slate-600 md:h-6"></div>
        <div className="my-1 h-3 w-32 rounded-md bg-slate-600 md:h-4"></div>
        <div className="my-1 h-3 w-20 rounded-md bg-slate-600 md:h-4"></div>
      </div>
      <div className="flex items-center gap-3 text-transparent">
        <WeatherIconSkeleton className="h-24 w-24 bg-slate-600" />
        <div>
          <div className="my-2 h-4 w-24 rounded-md bg-slate-600 md:h-6"></div>
          <div className="my-2 h-4 w-24 rounded-md bg-slate-600 md:h-6">
            weather desc
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeatherSkeleton;
