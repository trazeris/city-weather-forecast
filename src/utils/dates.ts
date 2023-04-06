export function getDayFromUnixTimestamp(ts: number) {
  const date = new Date(ts * 1000);
  return date.toLocaleDateString('en-UK', { weekday: 'long', day: 'numeric' });
}
