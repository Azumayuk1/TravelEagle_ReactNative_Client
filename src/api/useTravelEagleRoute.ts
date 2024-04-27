import {useEffect, useState} from 'react';
import {RouteResponse} from './types.ts';
import mockedJsonResponse from '../mockedData/mockedResponseSaintPetersburg.json';

const useTravelEagleRoute = (
  city: string,
  startDate: string,
  endDate: string,
) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();
  const [route, setRoute] = useState<RouteResponse | undefined>(undefined);

  useEffect(() => {
    const fetchRoute = async () => {
      try {
        // Mocked response
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate 1 second delay
        // TODO: Real data
        setRoute(mockedJsonResponse);
        setIsLoading(false);
      } catch (error) {
        setError(`Ошибка: ${error}`);
        console.log('Error:', error);
        setIsLoading(false);
      }
    };

    fetchRoute();
  }, [city, startDate, endDate]);

  return {loading: isLoading, error, route};
};

export default useTravelEagleRoute;
