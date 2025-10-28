
export interface CurrentWeather {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
}

export interface DailyForecast {
  day: string;
  temperature: number;
  condition: string;
}

export interface WeatherData {
  city: string;
  current: CurrentWeather;
  forecast: DailyForecast[];
}
