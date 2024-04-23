type PlaceType = {
  id: string;
  translationRu: string;
};

// Arrays for places where people eat
const eateries: PlaceType[] = [
  {id: 'bakery', translationRu: 'Пекарня'},
  {id: 'bar', translationRu: 'Бар'},
  {id: 'cafe', translationRu: 'Кафе'},
  {id: 'restaurant', translationRu: 'Ресторан'},
  {id: 'meal_delivery', translationRu: 'Доставка еды'},
  {id: 'meal_takeaway', translationRu: 'Еда на вынос'},
];

// Arrays for places of entertainment and leisure
const entertainment: PlaceType[] = [
  {id: 'amusement_park', translationRu: 'Парк развлечений'},
  {id: 'aquarium', translationRu: 'Аквариум'},
  {id: 'bowling_alley', translationRu: 'Боулинг'},
  {id: 'casino', translationRu: 'Казино'},
  {id: 'movie_theater', translationRu: 'Кинотеатр'},
  {id: 'night_club', translationRu: 'Ночной клуб'},
  {id: 'park', translationRu: 'Парк'},
  {id: 'zoo', translationRu: 'Зоопарк'},
  {
    id: 'tourist_attraction',
    translationRu: 'Достопримечательность',
  },
  {id: 'stadium', translationRu: 'Стадион'},
  {id: 'campground', translationRu: 'Кемпинг'},
  {id: 'city_hall', translationRu: 'Ратуша'},
];

// Arrays for places of retail and shopping
const retail: PlaceType[] = [
  {id: 'bicycle_store', translationRu: 'Магазин велосипедов'},
  {id: 'book_store', translationRu: 'Книжный магазин'},
  {id: 'clothing_store', translationRu: 'Магазин одежды'},
  {id: 'convenience_store', translationRu: 'Продуктовый магазин'},
  {id: 'department_store', translationRu: 'Универмаг'},
  {id: 'electronics_store', translationRu: 'Магазин электроники'},
  {id: 'florist', translationRu: 'Флорист'},
  {id: 'furniture_store', translationRu: 'Магазин мебели'},
  {id: 'jewelry_store', translationRu: 'Ювелирный магазин'},
  {id: 'liquor_store', translationRu: 'Магазин алкогольных напитков'},
  {id: 'pet_store', translationRu: 'Зоомагазин'},
  {id: 'shoe_store', translationRu: 'Обувной магазин'},
  {id: 'shopping_mall', translationRu: 'Торговый центр'},
  {id: 'store', translationRu: 'Магазин'},
  {id: 'supermarket', translationRu: 'Супермаркет'},
];

// Arrays for places of service
const services: PlaceType[] = [
  {id: 'accounting', translationRu: 'Бухгалтерия'},
  {id: 'atm', translationRu: 'Банкомат'},
  {id: 'bank', translationRu: 'Банк'},
  {id: 'beauty_salon', translationRu: 'Салон красоты'},
  {id: 'car_dealer', translationRu: 'Автодилер'},
  {id: 'car_rental', translationRu: 'Прокат автомобилей'},
  {id: 'car_repair', translationRu: 'Ремонт автомобилей'},
  {id: 'car_wash', translationRu: 'Автомойка'},
  {id: 'dentist', translationRu: 'Стоматология'},
  {id: 'electrician', translationRu: 'Электрик'},
  {id: 'embassy', translationRu: 'Посольство'},
  {id: 'fire_station', translationRu: 'Пожарная часть'},
  {id: 'funeral_home', translationRu: 'Похоронное бюро'},
  {id: 'gas_station', translationRu: 'Заправка'},
  {id: 'hair_care', translationRu: 'Уход за волосами'},
  {id: 'insurance_agency', translationRu: 'Страховое агентство'},
  {id: 'laundry', translationRu: 'Прачечная'},
  {id: 'lawyer', translationRu: 'Юрист'},
  {id: 'library', translationRu: 'Библиотека'},
  {id: 'locksmith', translationRu: 'Слесарь'},
  {id: 'lodging', translationRu: 'Жилье'},
  {id: 'moving_company', translationRu: 'Переезд'},
  {id: 'painter', translationRu: 'Художник'},
  {id: 'pharmacy', translationRu: 'Аптека'},
  {id: 'physiotherapist', translationRu: 'Физиотерапевт'},
  {id: 'plumber', translationRu: 'Водопроводчик'},
  {id: 'police', translationRu: 'Полиция'},
  {id: 'post_office', translationRu: 'Почтовое отделение'},
  {id: 'real_estate_agency', translationRu: 'Агентство недвижимости'},
  {id: 'roofing_contractor', translationRu: 'Кровельщик'},
  {id: 'storage', translationRu: 'Хранение'},
  {id: 'taxi_stand', translationRu: 'Стоянка такси'},
  {id: 'travel_agency', translationRu: 'Туристическое агентство'},
  {id: 'veterinary_care', translationRu: 'Ветеринарная помощь'},
];

// Arrays for places of education
const education: PlaceType[] = [
  {id: 'library', translationRu: 'Библиотека'},
  {id: 'primary_school', translationRu: 'Начальная школа'},
  {id: 'school', translationRu: 'Школа'},
  {id: 'secondary_school', translationRu: 'Средняя школа'},
  {id: 'university', translationRu: 'Университет'},
];

// Arrays for transportation-related places
const transportation: PlaceType[] = [
  {id: 'airport', translationRu: 'Аэропорт'},
  {id: 'bus_station', translationRu: 'Автобусная остановка'},
  {id: 'light_rail_station', translationRu: 'Станция легкого метро'},
  {id: 'subway_station', translationRu: 'Станция метро'},
  {id: 'taxi_stand', translationRu: 'Стоянка такси'},
  {id: 'train_station', translationRu: 'Вокзал'},
  {id: 'transit_station', translationRu: 'Транзитная станция'},
];

// Arrays for places of worship and spirituality
const worship: PlaceType[] = [
  {id: 'church', translationRu: 'Церковь'},
  {id: 'hindu_temple', translationRu: 'Храм'},
  {id: 'mosque', translationRu: 'Мечеть'},
  {id: 'synagogue', translationRu: 'Синагога'},
];

// Arrays for health-related places
const health: PlaceType[] = [
  {id: 'dentist', translationRu: 'Стоматология'},
  {id: 'doctor', translationRu: 'Врач'},
  {id: 'hospital', translationRu: 'Больница'},
  {id: 'pharmacy', translationRu: 'Аптека'},
  {id: 'physiotherapist', translationRu: 'Физиотерапевт'},
  {id: 'veterinary_care', translationRu: 'Ветеринарная помощь'},
];

// Arrays for other types of places
const others: PlaceType[] = [
  {id: 'cemetery', translationRu: 'Кладбище'},
  {id: 'courthouse', translationRu: 'Суд'},
  {id: 'embassy', translationRu: 'Посольство'},
  {id: 'fire_station', translationRu: 'Пожарная часть'},
  {id: 'funeral_home', translationRu: 'Похоронное бюро'},
  {id: 'gas_station', translationRu: 'Заправка'},
  {id: 'local_government_office', translationRu: 'Офис местного правительства'},
  {id: 'moving_company', translationRu: 'Переезд'},
  {id: 'parking', translationRu: 'Парковка'},
  {id: 'post_office', translationRu: 'Почтовое отделение'},
  {id: 'police', translationRu: 'Полиция'},
  {id: 'rv_park', translationRu: 'Парковка для автодомов'},
  {id: 'storage', translationRu: 'Хранение'},
  {id: 'travel_agency', translationRu: 'Туристическое агентство'},
];

export {
  eateries,
  education,
  health,
  others,
  retail,
  worship,
  services,
  entertainment,
  transportation,
};
export type {PlaceType};
