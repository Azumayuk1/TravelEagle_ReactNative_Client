import {Place} from '../api/types.ts';
import {eateriesMap, entertainmentMap} from '../api/placeTypesDefinitions.ts';

export const getPlaceTypeTranslation = (place: Place) => {
  const title = place.type;
  if (entertainmentMap.get(title) !== undefined) {
    return entertainmentMap.get(title)!!;
  } else if (eateriesMap.get(title) !== undefined) {
    return eateriesMap.get(title)!!;
  } else {
    return 'Место';
  }
};
