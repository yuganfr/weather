
import { useState, useCallback } from 'react';

interface Location {
  latitude: number;
  longitude: number;
}

interface GeolocationState {
  location: Location | null;
  error: string | null;
  getLocation: () => void;
}

export const useGeolocation = (): GeolocationState => {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSuccess = (position: GeolocationPosition) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    setError(null);
  };

  const handleError = (error: GeolocationPositionError) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setError("Location access denied. Please enable it in your browser settings or use the search bar.");
        break;
      case error.POSITION_UNAVAILABLE:
        setError("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        setError("The request to get user location timed out.");
        break;
      default:
        setError("An unknown error occurred while getting location.");
        break;
    }
  };

  const getLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    });
  }, []);

  return { location, error, getLocation };
};
