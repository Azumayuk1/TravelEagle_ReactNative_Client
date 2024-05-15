import {useEffect, useState} from 'react';
import {RouteResponse} from './types.ts';
import mockedJsonResponse from '../mockedData/mockedResponseSaintPetersburg.json';
import { Platform } from "react-native";

const useTravelEagleRoute = (
  city: string,
  startDate?: string,
  endDate?: string,
) => {
  const [isRouteLoading, setIsRouteLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();
  const [routeInfo, setRouteInfo] = useState<RouteResponse | undefined>(
    undefined,
  );

  useEffect(() => {
    const fetchRoute = async () => {
      try {
        setIsRouteLoading(true);
        const baseUrl = Platform.OS === 'android' ? 'http://10.0.2.2:8000' : 'http://localhost:8000';
        const apiUrl = `${baseUrl}/get_full_route/?city_name=${encodeURIComponent(city)}`;

        const response = await fetch(apiUrl);

        console.log('Response:', response);
        const responseData = await response.json();
        console.log('Response JSON:', responseData);

        setRouteInfo(responseData);
      } catch (error) {
        setError(`Ошибка: ${error}`);
        console.log('useTravelEagleRouteError:', error);
      } finally {
        setIsRouteLoading(false);
      }
    };

    fetchRoute();
  }, [city, startDate, endDate]);

  return {isRouteLoading, error, routeInfo};
};

export default useTravelEagleRoute;
