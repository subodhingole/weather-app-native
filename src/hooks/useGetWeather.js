import { useState, useEffect } from 'react';
import * as Location from 'expo-location'
import { API_URL, API_TOKEN } from '@env'


export const useGetWeather = () => {
    const [weather, setWeather] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);

    const getWeather = async () => {
        try {
            const response = await fetch(`${API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_TOKEN}`)
            const data = await response.json()
            setWeather(data)
        } catch (error) {
            setErrorMsg(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLat(location.coords.latitude)
            setLon(location.coords.longitude)

            await getWeather();

        })();
    }, [lat, lon]);


    return [isLoading, weather, errorMsg]
}