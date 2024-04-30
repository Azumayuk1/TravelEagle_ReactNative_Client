import {useEffect, useState} from 'react';
import {RouteResponse} from './types.ts';
import mockedJsonResponse from '../mockedData/mockedResponseSaintPetersburg.json';

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
        // Mocked response
        setIsRouteLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate 2 seconds delay
        // TODO: Real data
        setRouteInfo(mockedJsonResponse);
      } catch (error) {
        setError(`Ошибка: ${error}`);
        console.log('Error:', error);
      } finally {
        setIsRouteLoading(false);
      }
    };

    fetchRoute();
  }, [city, startDate, endDate]);

  return {isRouteLoading, error, routeInfo};
};

export default useTravelEagleRoute;
