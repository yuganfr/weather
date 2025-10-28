
import { GoogleGenAI, Type } from "@google/genai";
import { WeatherData } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const weatherSchema = {
  type: Type.OBJECT,
  properties: {
    city: {
      type: Type.STRING,
      description: 'The name of the city for the weather forecast, e.g., "San Francisco, CA".',
    },
    current: {
      type: Type.OBJECT,
      description: 'The current weather conditions.',
      properties: {
        temperature: {
          type: Type.INTEGER,
          description: 'Current temperature in Fahrenheit.',
        },
        condition: {
          type: Type.STRING,
          description: 'A brief description of the weather condition, e.g., "Sunny", "Partly Cloudy", "Rain".',
        },
        humidity: {
          type: Type.INTEGER,
          description: 'Current humidity percentage.',
        },
        windSpeed: {
          type: Type.INTEGER,
          description: 'Current wind speed in miles per hour.',
        },
        feelsLike: {
            type: Type.INTEGER,
            description: 'The "feels like" temperature in Fahrenheit.'
        }
      },
      required: ['temperature', 'condition', 'humidity', 'windSpeed', 'feelsLike'],
    },
    forecast: {
      type: Type.ARRAY,
      description: 'An array of 5-day weather forecast.',
      items: {
        type: Type.OBJECT,
        properties: {
          day: {
            type: Type.STRING,
            description: 'The day of the week, e.g., "Monday".',
          },
          temperature: {
            type: Type.INTEGER,
            description: 'The average temperature for the day in Fahrenheit.',
          },
          condition: {
            type: Type.STRING,
            description: 'A brief description of the weather condition for the day.',
          },
        },
        required: ['day', 'temperature', 'condition'],
      },
    },
  },
  required: ['city', 'current', 'forecast'],
};


async function fetchWeatherData(prompt: string): Promise<WeatherData> {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: weatherSchema,
            },
        });

        const jsonText = response.text.trim();
        const weatherData = JSON.parse(jsonText);
        
        if (!weatherData.forecast || weatherData.forecast.length !== 5) {
            throw new Error("Invalid forecast data received. Expected 5-day forecast.");
        }

        return weatherData as WeatherData;
    } catch (error) {
        console.error("Error fetching or parsing weather data from Gemini API:", error);
        throw new Error("Failed to get weather data from Gemini API. " + (error as Error).message);
    }
}

export const fetchWeatherDataByCity = (city: string): Promise<WeatherData> => {
    const prompt = `Provide the current weather and a 5-day forecast for ${city}. Use Fahrenheit for temperature and mph for wind speed. The first day in the forecast should be tomorrow.`;
    return fetchWeatherData(prompt);
};

export const fetchWeatherDataByCoords = (lat: number, lon: number): Promise<WeatherData> => {
    const prompt = `Provide the current weather and a 5-day forecast for the location at latitude ${lat} and longitude ${lon}. Use Fahrenheit for temperature and mph for wind speed. The first day in the forecast should be tomorrow.`;
    return fetchWeatherData(prompt);
};
