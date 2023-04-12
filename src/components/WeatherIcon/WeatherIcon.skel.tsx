interface Props {
  className: string;
}

function WeatherIconSkeleton({ className }: Props) {
  return (
    <button>
      <div
        role="alert"
        aria-busy="true"
        className={`${className} rounded-full`}
      ></div>
    </button>
  );
}

export default WeatherIconSkeleton;
