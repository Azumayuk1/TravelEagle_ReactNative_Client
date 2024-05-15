import {Platform} from 'react-native';

export const handleLikePlace = async (placeId: string) => {
  const baseUrl =
    Platform.OS === 'android'
      ? 'http://10.0.2.2:8000'
      : 'http://localhost:8000';
  try {
    const response = await fetch(`${baseUrl}/like_place/?place_id=${placeId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error:', error);
  }
};
