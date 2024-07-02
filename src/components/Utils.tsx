export const imageWeather = (name: string) => `https://openweathermap.org/img/wn/${name}@2x.png`;

export const capitalizefirstLetter = (phrase: string) : string => {
  if (!phrase) return phrase;
  return phrase.charAt(0).toUpperCase() + phrase.slice(1);
}

export const lastUpdate = (time: number) : string | null => {
  if(!time) return null;
  const date = new Date(time * 1000)
  const localTime = date.toLocaleTimeString();
  const localDate = date.toLocaleDateString();
  return `${localDate} ${localTime}`;
}

export const dataTimerFormater = (time: number | undefined) : string | null => {
  if(!time) return null;
  const date = new Date(time * 1000);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}
