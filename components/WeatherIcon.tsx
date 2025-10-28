
import React from 'react';

interface WeatherIconProps {
  condition: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ condition }) => {
  const getIcon = () => {
    const lowerCaseCondition = condition.toLowerCase();

    if (lowerCaseCondition.includes('sun') || lowerCaseCondition.includes('clear')) {
      return ( // Sunny
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-full h-full">
          <path d="M41.5,23.5a18,18,0,0,0-18,0,1,1,0,0,0,0,1,18,18,0,0,0,18,0,1,1,0,0,0,0-1Z" fill="#f9d764"/>
          <path d="M32,15.5a1,1,0,0,0,1-1V6a1,1,0,0,0-2,0v8.5A1,1,0,0,0,32,15.5Z" fill="#f9d764"/>
          <path d="M32,48.5a1,1,0,0,0-1,1V58a1,1,0,0,0,2,0V49.5A1,1,0,0,0,32,48.5Z" fill="#f9d764"/>
          <path d="M19.11,20.61a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l6-6a1,1,0,0,0-1.42-1.42l-6,6A1,1,0,0,0,19.11,20.61Z" fill="#f9d764"/>
          <path d="M38.18,44.89a1,1,0,0,0,-.71-.29,1,1,0,0,0-.71.29l-6,6a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l6-6A1,1,0,0,0,38.18,44.89Z" fill="#f9d764"/>
          <path d="M14.5,33H6a1,1,0,0,0,0,2h8.5a1,1,0,0,0,0-2Z" fill="#f9d764"/>
          <path d="M58,33H49.5a1,1,0,0,0,0,2H58a1,1,0,0,0,0-2Z" fill="#f9d764"/>
          <path d="M19.82,43.48a1,1,0,0,0-1.42,1.42l6,6a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" fill="#f9d764"/>
          <path d="M44.18,19.19a1,1,0,0,0,1.42-1.42l-6-6a1,1,0,0,0-1.42,1.42Z" fill="#f9d764"/>
        </svg>
      );
    }
    if (lowerCaseCondition.includes('cloud')) {
      return ( // Cloudy
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-full h-full">
          <path d="M46.67,29.35a13.33,13.33,0,0,0-26.23,3.37A10.67,10.67,0,0,0,19.33,54h26.23a10.67,10.67,0,0,0,1.11-21.28Z" fill="#e6e7e8"/>
          <path d="M19.33,26.19a13.33,13.33,0,0,0-1.12,26.54,10.67,10.67,0,0,0,20.89-6.33,13.33,13.33,0,0,0-13.43-17.75Z" fill="#b2b3b4"/>
          <path d="M46.67,29.35a13.33,13.33,0,0,0-26.23,3.37A10.67,10.67,0,0,0,19.33,54h26.23a10.67,10.67,0,0,0,1.11-21.28Z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/>
        </svg>
      );
    }
    if (lowerCaseCondition.includes('rain') || lowerCaseCondition.includes('drizzle')) {
      return ( // Rainy
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-full h-full">
          <path d="M46.67,29.35a13.33,13.33,0,0,0-26.23,3.37A10.67,10.67,0,0,0,19.33,54h26.23a10.67,10.67,0,0,0,1.11-21.28Z" fill="#e6e7e8"/>
          <path d="M30,46v8a2,2,0,0,0,4,0v-8a2,2,0,0,0-4,0Z" fill="#4286f4"/>
          <path d="M22,46v8a2,2,0,0,0,4,0v-8a2,2,0,0,0-4,0Z" fill="#4286f4"/>
          <path d="M38,46v8a2,2,0,0,0,4,0v-8a2,2,0,0,0-4,0Z" fill="#4286f4"/>
        </svg>
      );
    }
    if (lowerCaseCondition.includes('snow') || lowerCaseCondition.includes('blizzard')) {
      return ( // Snowy
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-full h-full">
            <path d="M46.67,29.35a13.33,13.33,0,0,0-26.23,3.37A10.67,10.67,0,0,0,19.33,54h26.23a10.67,10.67,0,0,0,1.11-21.28Z" fill="#e6e7e8"/>
            <path d="M24,45a2,2,0,0,0-2,2v4a2,2,0,0,0,4,0v-4A2,2,0,0,0,24,45Z" fill="#fff"/>
            <path d="M24,49a2,2,0,0,0,2-2h-4A2,2,0,0,0,24,49Z" fill="#fff"/>
            <path d="M26.83,46.17a2,2,0,0,0-2.83,0l-2.83,2.83a2,2,0,0,0,2.83,2.83L26.83,49A2,2,0,0,0,26.83,46.17Z" fill="#fff"/>
            <path d="M21.17,51.83a2,2,0,0,0,2.83,0l2.83-2.83a2,2,0,1,0-2.83-2.83Z" fill="#fff"/>
            <path d="M32,45a2,2,0,0,0-2,2v4a2,2,0,0,0,4,0v-4A2,2,0,0,0,32,45Z" fill="#fff"/>
            <path d="M32,49a2,2,0,0,0,2-2h-4A2,2,0,0,0,32,49Z" fill="#fff"/>
            <path d="M34.83,46.17a2,2,0,0,0-2.83,0l-2.83,2.83a2,2,0,0,0,2.83,2.83L34.83,49A2,2,0,0,0,34.83,46.17Z" fill="#fff"/>
            <path d="M29.17,51.83a2,2,0,0,0,2.83,0l2.83-2.83a2,2,0,1,0-2.83-2.83Z" fill="#fff"/>
            <path d="M40,45a2,2,0,0,0-2,2v4a2,2,0,0,0,4,0v-4A2,2,0,0,0,40,45Z" fill="#fff"/>
            <path d="M40,49a2,2,0,0,0,2-2h-4A2,2,0,0,0,40,49Z" fill="#fff"/>
            <path d="M42.83,46.17a2,2,0,0,0-2.83,0l-2.83,2.83a2,2,0,0,0,2.83,2.83L42.83,49A2,2,0,0,0,42.83,46.17Z" fill="#fff"/>
            <path d="M37.17,51.83a2,2,0,0,0,2.83,0l2.83-2.83a2,2,0,1,0-2.83-2.83Z" fill="#fff"/>
        </svg>
      );
    }
    if (lowerCaseCondition.includes('storm') || lowerCaseCondition.includes('thunder')) {
      return ( // Thunderstorm
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-full h-full">
          <path d="M46.67,29.35a13.33,13.33,0,0,0-26.23,3.37A10.67,10.67,0,0,0,19.33,54h26.23a10.67,10.67,0,0,0,1.11-21.28Z" fill="#a4a5a6"/>
          <path d="M33,40.17,25,48h8v7l8-7.83h-8Z" fill="#f9d764"/>
        </svg>
      );
    }

    return ( // Default: Fog/Mist
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-full h-full">
            <path d="M22,32H42a2,2,0,0,0,0-4H22a2,2,0,0,0,0,4Z" fill="#e6e7e8"/>
            <path d="M18,40H46a2,2,0,0,0,0-4H18a2,2,0,0,0,0,4Z" fill="#e6e7e8"/>
            <path d="M26,48H38a2,2,0,0,0,0-4H26a2,2,0,0,0,0,4Z" fill="#e6e7e8"/>
        </svg>
    );
  };

  return <div className="weather-icon-container">{getIcon()}</div>;
};

export default WeatherIcon;
