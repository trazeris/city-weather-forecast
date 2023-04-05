import { Temperature } from '@/model';
import { getDayName } from '@/utils/getDayName';

const now = new Date();
const in2days = new Date(now.setDate(now.getDate() + 2));
const in3days = new Date(now.setDate(now.getDate() + 1));
const dayNames = ['Tomorrow', getDayName(in2days), getDayName(in3days)];

interface Props {
  dateIndex: number;
  temp: Temperature;
}

// arbitrary temperature to use as skeleton when loading
export const SKEL_TEMP = 1000;

function Forecast({ dateIndex, temp }: Props) {
  return (
    <li className="block text-center md:px-5">
      <p className="text-lg text-slate-500">{dayNames[dateIndex]}</p>
      {temp !== 1000 ? (
        <p className="text-2xl text-slate-50 md:text-4xl">
          {Math.round(temp)}°C
        </p>
      ) : (
        <p
          className="animate-pulse bg-slate-500 text-2xl text-transparent md:text-4xl"
          role="alert"
          aria-busy="true"
        >
          Load
        </p>
      )}
    </li>
  );
}

export default Forecast;
