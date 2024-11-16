import axios from "axios";

interface GetWeatherDataParams {
  latitude: number;
  longitude: number;
}

export const getAll = async ({ latitude, longitude }: GetWeatherDataParams) => {
  const url = `${
    import.meta.env.VITE_OPEN_METEO_API_URL
  }?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,rain,relative_humidity_2m,wind_speed_10m,cloudcover`;
  const response = await axios.get(url);
  return response.data;
};

//api key

// NEXT_PUBLIC_OPEN_WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
// NEXT_PUBLIC_OPEN_WEATHER_API_KEY=19c5ce24fadd06394909e2842d8c5aca
