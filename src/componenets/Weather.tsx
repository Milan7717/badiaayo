import React, { useEffect, useState } from 'react';

interface WeatherData {
    weather: { description: string }[];
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
        pressure: number;
    };
    name: string;
    wind: { speed: number };
    sys: { country: string };
    visibility: number;
}

const WeatherAlert: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const API_KEY = '19c5ce24fadd06394909e2842d8c5aca';
    const LAT = '27.7172'; // Example latitude for Kathmandu
    const LON = '85.3240'; // Example longitude for Kathmandu

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }

                const data = await response.json();
                setWeatherData(data);
            } catch (err: any) {
                setError(err.message || 'Unknown error occurred');
            }
        };

        fetchWeatherData();
    }, []);

    return (
        <div
            className="absolute top-24 right-6 bg-white shadow-lg p-6 rounded-md border border-gray-300"
        >
            {error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : weatherData ? (
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-bold text-blue-600">Weather Alert</h2>
                    <p>
                        <strong>Location:</strong> {weatherData.name}, {weatherData.sys.country}
                    </p>
                    <p>
                        <strong>Temperature:</strong> {weatherData.main.temp}°C
                    </p>
                    <p>
                        <strong>Feels Like:</strong> {weatherData.main.feels_like}°C
                    </p>
                    <p>
                        <strong>Min Temperature:</strong> {weatherData.main.temp_min}°C
                    </p>
                    <p>
                        <strong>Max Temperature:</strong> {weatherData.main.temp_max}°C
                    </p>
                    <p>
                        <strong>Humidity:</strong> {weatherData.main.humidity}%
                    </p>
                    <p>
                        <strong>Pressure:</strong> {weatherData.main.pressure} hPa
                    </p>
                    <p>
                        <strong>Weather:</strong> {weatherData.weather[0].description}
                    </p>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
};

export default WeatherAlert;
