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
  id: string;
  name: string;
  purpose_name: string;
  image: string;
  general_rating: number;
  general_review_count: number;
  likes: number;
  url?: string;
  description?: string;
  address: string;
};

export type {PlaceType, Place, RouteResponse, TripDay, Destination};
