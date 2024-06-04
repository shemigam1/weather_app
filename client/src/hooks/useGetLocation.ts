import { useState, useEffect } from 'react';

interface location {
    latitude: number;
    longitude: number;
}

export const useGetLocation = () => {
    const [location, setLocation] = useState<location>({ latitude: 0, longitude: 0 });

    useEffect(() => {
        const successCallback = (position: GeolocationPosition) => {
            const { coords } = position;
            setLocation({
                latitude: coords.latitude,
                longitude: coords.longitude,
            });
        };

        const errorCallback = (error: GeolocationPositionError) => {
            console.log(error);
        };

        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }, []);

    return location
}