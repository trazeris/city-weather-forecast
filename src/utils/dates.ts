export function getDayFromUnixTimestamp(ts: number) {
  const date = new Date(ts * 1000);
  return date.toLocaleDateString('en-UK', { weekday: 'long', day: 'numeric' });
}

export function getDayTimeFromUnixTimestamp(ts: number) {
  const date = new Date(ts * 1000);
  return date.toLocaleDateString('en-UK', {
    hour: 'numeric',
    weekday: 'long',
    day: 'numeric',
    minute: 'numeric',
  });
}
