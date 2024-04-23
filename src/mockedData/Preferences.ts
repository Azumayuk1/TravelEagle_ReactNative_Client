import {PlaceType} from '../api/types.ts';

export const mockedIgnoredPlaces: PlaceType[] = [
  {id: 'movie_theater', translationRu: 'Кинотеатр'},
  {id: 'night_club', translationRu: 'Ночной клуб'},
];

export const mockedPriorityPlaces: PlaceType[] = [
  {id: 'zoo', translationRu: 'Зоопарк'},
  {id: 'amusement_park', translationRu: 'Парк развлечений'},
  {
    id: 'tourist_attraction',
    translationRu: 'Достопримечательность',
  },
  {id: 'campground', translationRu: 'Кемпинг'},
];
