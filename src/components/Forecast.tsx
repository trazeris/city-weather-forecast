import { Temperature } from '../App';

function getDayName(date: Date) {
  return date.toLocaleDateString('en-US', { weekday: 'long' });
}
const now = new Date();
const in2days = new Date(now.setDate(now.getDate() + 2));
const in3days = new Date(now.setDate(now.getDate() + 1));
const dayNames = ['Tomorrow', getDayName(in2days), getDayName(in3days)];

interface Props {
  dateIndex: number;
  temp: Temperature;
}

function Forecast({ dateIndex, temp }: Props) {
  return (
    <li className="inline-block">
      <p>{temp}</p>
      <p>{dayNames[dateIndex]}</p>
    </li>
  );
}

export default Forecast;
