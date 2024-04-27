type PlaceType = {
  id: string;
  translationRu: string;
};

type RouteResponse = {
  weatherWarning: string | undefined;
  tripDays: TripDay[];
};

type TripDay = {
  destinations: Destination[];
};

type Destination = {
  place: Place;
  eatery: Place;
  travelTime: string;
};

type Place = {
  placeId: string;
  name: string;
  type: string;
  imageUrl: string;
  userRating: number;
  userReviews: number;
  likes: number;
  website?: string;
  description?: string;
  address: string;
};

export type {PlaceType, Place, RouteResponse, TripDay, Destination};
