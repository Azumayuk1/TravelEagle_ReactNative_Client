import {RouteResponse} from '../api/types.ts';

export const mockedResponseSaintPetersburg: RouteResponse = {
  weatherWarning: 'Ожидается облачная погода без осадков.',
  tripDays: [
    {
      destinations: [
        {
          place: {
            placeId: '1',
            name: 'Новая Голландия',
            type: 'park',
            imageUrl:
              'https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/6991a81d-a0e1-48d3-8348-2ecff50c7629/-/quality/lighter/-/resize/600x400/',
            userRating: 4.6,
            userReviews: 1800,
            likes: 1300,
            website: 'https://newholland.spb.ru/',
            description:
              'Исторический парк в центре Санкт-Петербурга. Культурное пространство на острове, где раньше располагался складской комплекс военно-морской базы.',
            address: 'Новая Голландия, Санкт-Петербург',
          },
          eatery: {
            placeId: '2',
            name: 'Мясо & Вино',
            type: 'cafe',
            imageUrl:
              'https://avatars.mds.yandex.net/get-altay/9753788/2a00000189a1b39ca08d84c7c962df87291b/L_height',
            userRating: 4.4,
            userReviews: 1200,
            likes: 800,
            website: 'https://myasoinvino.ru/',
            description: 'Современная кухня и богатый выбор вин.',
            address: '2б, Новая Голландия, Санкт-Петербург',
          },
          travelTime: '',
        },
        {
          place: {
            placeId: '3',
            name: 'Мариинский театр',
            type: 'theatre',
            imageUrl: 'https://cdn.culture.ru/c/339809.jpg',
            userRating: 4.8,
            userReviews: 2500,
            likes: 2000,
            website: 'https://www.mariinsky.ru/',
            description: 'Известный театр оперы и балета.',
            address: 'ул. Казанская, 6, Санкт-Петербург, 191186',
          },
          eatery: {
            placeId: '4',
            name: 'Кофеин',
            type: 'cafe',
            imageUrl:
              'https://cs13.pikabu.ru/post_img/big/2023/11/05/10/1699201147120447114.jpg',
            userRating: 4.5,
            userReviews: 1000,
            likes: 700,
            website: 'https://cofein.ru/',
            description: 'Кафе с отличным кофе и десертами.',
            address: 'ул. Казанская, 6, Санкт-Петербург, 191186',
          },
          travelTime: '15 минут',
        },
        {
          place: {
            placeId: '5',
            name: 'Исаакиевский собор',
            type: 'church',
            imageUrl:
              'https://kuda-spb.ru/uploads/9ad5dea7cbc86dcda30144494dcb118c.jpg',
            userRating: 4.9,
            userReviews: 3000,
            likes: 2500,
            website: 'https://www.isaac-cathedral.ru/',
            description: 'Памятник архитектуры в центре города.',
            address: 'ул. Казанская, 6, Санкт-Петербург, 191186',
          },
          eatery: {
            placeId: '6',
            name: 'Шоколадница',
            type: 'cafe',
            imageUrl:
              'https://img.restoclub.ru/uploads/place/5/3/b/6/53b639ca3cb1e25f04f614488e334e80_w1230_h820--no-cut.webp?v=3',
            userRating: 4.3,
            userReviews: 1500,
            likes: 1000,
            website: 'https://www.shoko.ru/',
            description:
              'Сеть кафе с разнообразным меню и кондитерскими изделиями.',
            address: 'ул. Казанская, 6, Санкт-Петербург, 191186',
          },
          travelTime: '20 минут',
        },
      ],
    },
    {
      destinations: [
        {
          place: {
            placeId: '7',
            name: 'Эрмитаж',
            type: 'museum',
            imageUrl:
              'https://sk-moskvich.ru/upload/%D1%8D%D1%80%D0%BC%D0%B8%D1%82%D0%B0%D0%B6%20(3).jpg',
            userRating: 4.7,
            userReviews: 2200,
            likes: 1800,
            website: 'https://www.hermitagemuseum.org/',
            description: 'Один из крупнейших музеев мира с богатой коллекцией.',
            address: 'ул. Бережная, 2, Санкт-Петербург, 191186',
          },
          eatery: {
            placeId: '8',
            name: 'Бар «Биржа»',
            type: 'bar',
            imageUrl:
              'https://img.restoclub.ru/uploads/place/c/a/5/e/ca5efc98eeafdbc5159796790dd430b8_w1200_h630--c.jpeg',
            userRating: 4.5,
            userReviews: 1400,
            likes: 1000,
            website: 'https://birzhabar.ru/',
            description: 'Бар с авторскими коктейлями и дегустациями.',
            address: 'ул. Казанская, 6, Санкт-Петербург, 191186',
          },
          travelTime: '',
        },
        {
          place: {
            placeId: '9',
            name: 'Петропавловская крепость',
            type: 'tourist_attraction',
            imageUrl:
              'https://www.spbmuzei.ru/wp-content/uploads/2020/08/petropavl-main-e1596915227647.jpg',
            userRating: 4.8,
            userReviews: 2800,
            likes: 2300,
            website: 'https://www.spbmuseum.ru/',
            description: 'Историческая крепость на Заячьем острове.',
            address: 'ул. Казанская, 6, Санкт-Петербург, 191186',
          },
          eatery: {
            placeId: '10',
            name: 'Ресторан «Ботаника»',
            type: 'restaurant',
            imageUrl: 'https://botanika.spb.ru/home-2/i_photo_08/',
            userRating: 4.6,
            userReviews: 1600,
            likes: 1200,
            website: 'https://botanikarestaurant.ru/',
            description: 'Ресторан с современной русской кухней.',
            address: 'ул. Казанская, 6, Санкт-Петербург, 191186',
          },
          travelTime: '30 минут',
        },
        {
          place: {
            placeId: '15',
            name: 'Петропавловский собор',
            type: 'church',
            imageUrl:
              'https://s.zagranitsa.com/images/guides/18633/original/27dd0ef3da5ffc09068d5bfd38883de2.jpg?1449666379',
            userRating: 4.8,
            userReviews: 2500,
            likes: 2100,
            website: 'https://www.spbmuseum.ru/',
            description: 'Исторический собор в центре крепости.',
            address: 'ул. Казанская, 6, Санкт-Петербург, 191186',
          },
          eatery: {
            placeId: '16',
            name: 'Кафе «Кукуруза»',
            type: 'cafe',
            imageUrl:
              'https://img.restoclub.ru/uploads/place/7/b/f/e/7bfe00d206c41054718dd3f691cc3cd4_w1230_h820--no-cut.webp?v=3',
            userRating: 4.6,
            userReviews: 1700,
            likes: 1300,
            website: 'https://kukuruza-cafe.ru/',
            description: 'Кафе с быстрым питанием и свежей выпечкой.',
            address: 'ул. Казанская, 6, Санкт-Петербург, 191186',
          },
          travelTime: '35 минут',
        },
      ],
    },
    {
      destinations: [
        {
          place: {
            placeId: '13',
            name: 'Петергоф',
            type: 'park',
            imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/RUS-2016-Aerial-SPB-Peterhof_Palace.jpg/1200px-RUS-2016-Aerial-SPB-Peterhof_Palace.jpg',
            userRating: 4.9,
            userReviews: 3200,
            likes: 2700,
            website: 'https://www.peterhofmuseum.ru/',
            description: 'Царское село с прекрасными фонтанами и парками.',
            address: 'ул. Казанская, 6, Петергоф, 191186',
          },
          eatery: {
            placeId: '14',
            name: 'Ресторан «Гранд Петергоф»',
            type: 'restaurant',
            imageUrl:
              'https://tophotels.ru/icache/hotel_photos/1/3634/59936/561643_740x550.jpg',
            userRating: 4.7,
            userReviews: 1900,
            likes: 1500,
            website: 'https://grandpeterhof.ru/',
            description: 'Изысканная кухня с видом на фонтаны.',
            address: 'ул. Казанская, 6, Петергоф, 191186',
          },
          travelTime: '',
        },
        {
          place: {
            placeId: '17',
            name: 'Ораниенбаум',
            type: 'park',
            imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Menshikov_palace_Oranienbaum.JPG/1024px-Menshikov_palace_Oranienbaum.JPG',
            userRating: 4.7,
            userReviews: 2200,
            likes: 1800,
            website: 'https://www.hermitagemuseum.org/',
            description:
              'Дворцово-парковый ансамбль на берегу Финского залива.',
            address: 'ул. Казанская, 6, Ломоносов, 191186',
          },
          eatery: {
            placeId: '18',
            name: 'Евразия',
            type: 'restaurant',
            imageUrl:
              'https://lh5.googleusercontent.com/p/AF1QipOOdP8KXVnvgKnCTUMuuacfnZKKBH5GhkInERof=w426-h240-k-no',
            userRating: 4.5,
            userReviews: 1400,
            likes: 1000,
            website: 'https://laprimavera.ru/',
            description:
              'https://lh5.googleusercontent.com/p/AF1QipOOdP8KXVnvgKnCTUMuuacfnZKKBH5GhkInERof=w426-h240-k-no',
            address: 'ул. Казанская, 6, Ломоносов, 191186',
          },
          travelTime: '30 минут',
        },
        {
          place: {
            placeId: '11',
            name: 'Овражный парк',
            type: 'tourist_attraction',
            imageUrl:
              'https://lh5.googleusercontent.com/p/AF1QipN7wlotwE-FHvtvlYi7GezCUURjqVMuUBc0WLYz=w408-h544-k-no',
            userRating: 4.7,
            userReviews: 2000,
            likes: 1700,
            website: 'https://www.admiralty.com/',
            description: 'Парк в центре Кронштадта.',
            address: 'ул. Казанская, 6, Кронштадт, 191186',
          },
          eatery: {
            placeId: '12',
            name: 'Голландская кухня',
            type: 'cafe',
            imageUrl:
              'https://lh5.googleusercontent.com/p/AF1QipO276nnKvb8ZgWW518ExnHIRWx2u2a2_q4FgAaj=w408-h271-k-no',
            userRating: 4.4,
            userReviews: 1200,
            likes: 900,
            website: 'https://staroyteatr.ru/',
            description: 'Кафе европейской кухни.',
            address: 'ул. Казанская, 6, Кронштадт, 191186',
          },
          travelTime: '45 минут',
        },
      ],
    },
  ],
};
