import {RouteResponse} from '../api/types.ts';

export const mockedResponseSaintPetersburg: RouteResponse = {
  weatherWarning: 'Ожидается облачная погода без осадков.',
  tripDays: [
    {
      destinations: [
        {
          place: {
            id: '1',
            name: 'Новая Голландия',
            purpose_name: 'park',
            image:
              'https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/6991a81d-a0e1-48d3-8348-2ecff50c7629/-/quality/lighter/-/resize/600x400/',
            general_rating: 4.6,
            general_review_count: 1800,
            likes: 1300,
            url: 'https://newholland.spb.ru/',
            description:
              'Исторический парк в центре Санкт-Петербурга. Культурное пространство на острове, где раньше располагался складской комплекс военно-морской базы.',
            address: 'Новая Голландия, Санкт-Петербург',
          },
          eatery: {
            id: '2',
            name: 'Мясо & Вино',
            purpose_name: 'cafe',
            image:
              'https://avatars.mds.yandex.net/get-altay/9753788/2a00000189a1b39ca08d84c7c962df87291b/L_height',
            general_rating: 4.4,
            general_review_count: 1200,
            likes: 800,
            url: 'https://myasoinvino.ru/',
            description: 'Современная кухня и богатый выбор вин.',
            address: '2б, Новая Голландия, Санкт-Петербург',
          },
          travelTime: '',
        },
        {
          place: {
            id: '3',
            name: 'Мариинский театр',
            purpose_name: 'theatre',
            image: 'https://cdn.culture.ru/c/339809.jpg',
            general_rating: 4.8,
            general_review_count: 2500,
            likes: 2000,
            url: 'https://www.mariinsky.ru/',
            description: 'Известный театр оперы и балета.',
            address: 'ул. Казанская, 6, Санкт-Петербург, 191186',
          },
          eatery: {
            id: '4',
            name: 'Кофеин',
            purpose_name: 'cafe',
            image:
              'https://cs13.pikabu.ru/post_img/big/2023/11/05/10/1699201147120447114.jpg',
            general_rating: 4.5,
            general_review_count: 1000,
            likes: 700,
            url: 'https://cofein.ru/',
            description: 'Кафе с отличным кофе и десертами.',
            address: 'ул. Казанская, 6, Санкт-Петербург, 191186',
          },
          travelTime: '15 минут',
        },
        {
          place: {
            id: '5',
            name: 'Исаакиевский собор',
            purpose_name: 'church',
            image:
              'https://kuda-spb.ru/uploads/9ad5dea7cbc86dcda30144494dcb118c.jpg',
            general_rating: 4.9,
            general_review_count: 3000,
            likes: 2500,
            url: 'https://www.isaac-cathedral.ru/',
            description: 'Памятник архитектуры в центре города.',
            address: 'ул. Казанская, 6, Санкт-Петербург, 191186',
          },
          eatery: {
            id: '6',
            name: 'Шоколадница',
            purpose_name: 'cafe',
            image:
              'https://img.restoclub.ru/uploads/place/5/3/b/6/53b639ca3cb1e25f04f614488e334e80_w1230_h820--no-cut.webp?v=3',
            general_rating: 4.3,
            general_review_count: 1500,
            likes: 1000,
            url: 'https://www.shoko.ru/',
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
            id: '7',
            name: 'Эрмитаж',
            purpose_name: 'museum',
            image:
              'https://sk-moskvich.ru/upload/%D1%8D%D1%80%D0%BC%D0%B8%D1%82%D0%B0%D0%B6%20(3).jpg',
            general_rating: 4.7,
            general_review_count: 2200,
            likes: 1800,
            url: 'https://www.hermitagemuseum.org/',
            description: 'Один из крупнейших музеев мира с богатой коллекцией.',
            address: 'ул. Бережная, 2, Санкт-Петербург, 191186',
          },
          eatery: {
            id: '8',
            name: 'Бар «Биржа»',
            purpose_name: 'bar',
            image:
              'https://img.restoclub.ru/uploads/place/c/a/5/e/ca5efc98eeafdbc5159796790dd430b8_w1200_h630--c.jpeg',
            general_rating: 4.5,
            general_review_count: 1400,
            likes: 1000,
            url: 'https://birzhabar.ru/',
            description: 'Бар с авторскими коктейлями и дегустациями.',
            address: 'ул. Казанская, 6, Санкт-Петербург, 191186',
          },
          travelTime: '',
        },
        {
          place: {
            id: '9',
            name: 'Петропавловская крепость',
            purpose_name: 'tourist_attraction',
            image:
              'https://www.spbmuzei.ru/wp-content/uploads/2020/08/petropavl-main-e1596915227647.jpg',
            general_rating: 4.8,
            general_review_count: 2800,
            likes: 2300,
            url: 'https://www.spbmuseum.ru/',
            description: 'Историческая крепость на Заячьем острове.',
            address: 'ул. Казанская, 6, Санкт-Петербург, 191186',
          },
          eatery: {
            id: '10',
            name: 'Ресторан «Ботаника»',
            purpose_name: 'restaurant',
            image: 'https://botanika.spb.ru/home-2/i_photo_08/',
            general_rating: 4.6,
            general_review_count: 1600,
            likes: 1200,
            url: 'https://botanikarestaurant.ru/',
            description: 'Ресторан с современной русской кухней.',
            address: 'ул. Казанская, 6, Санкт-Петербург, 191186',
          },
          travelTime: '30 минут',
        },
        {
          place: {
            id: '15',
            name: 'Петропавловский собор',
            purpose_name: 'church',
            image:
              'https://s.zagranitsa.com/images/guides/18633/original/27dd0ef3da5ffc09068d5bfd38883de2.jpg?1449666379',
            general_rating: 4.8,
            general_review_count: 2500,
            likes: 2100,
            url: 'https://www.spbmuseum.ru/',
            description: 'Исторический собор в центре крепости.',
            address: 'ул. Казанская, 6, Санкт-Петербург, 191186',
          },
          eatery: {
            id: '16',
            name: 'Кафе «Кукуруза»',
            purpose_name: 'cafe',
            image:
              'https://img.restoclub.ru/uploads/place/7/b/f/e/7bfe00d206c41054718dd3f691cc3cd4_w1230_h820--no-cut.webp?v=3',
            general_rating: 4.6,
            general_review_count: 1700,
            likes: 1300,
            url: 'https://kukuruza-cafe.ru/',
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
            id: '13',
            name: 'Петергоф',
            purpose_name: 'park',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/RUS-2016-Aerial-SPB-Peterhof_Palace.jpg/1200px-RUS-2016-Aerial-SPB-Peterhof_Palace.jpg',
            general_rating: 4.9,
            general_review_count: 3200,
            likes: 2700,
            url: 'https://www.peterhofmuseum.ru/',
            description: 'Царское село с прекрасными фонтанами и парками.',
            address: 'ул. Казанская, 6, Петергоф, 191186',
          },
          eatery: {
            id: '14',
            name: 'Ресторан «Гранд Петергоф»',
            purpose_name: 'restaurant',
            image:
              'https://tophotels.ru/icache/hotel_photos/1/3634/59936/561643_740x550.jpg',
            general_rating: 4.7,
            general_review_count: 1900,
            likes: 1500,
            url: 'https://grandpeterhof.ru/',
            description: 'Изысканная кухня с видом на фонтаны.',
            address: 'ул. Казанская, 6, Петергоф, 191186',
          },
          travelTime: '',
        },
        {
          place: {
            id: '17',
            name: 'Ораниенбаум',
            purpose_name: 'park',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Menshikov_palace_Oranienbaum.JPG/1024px-Menshikov_palace_Oranienbaum.JPG',
            general_rating: 4.7,
            general_review_count: 2200,
            likes: 1800,
            url: 'https://www.hermitagemuseum.org/',
            description:
              'Дворцово-парковый ансамбль на берегу Финского залива.',
            address: 'ул. Казанская, 6, Ломоносов, 191186',
          },
          eatery: {
            id: '18',
            name: 'Евразия',
            purpose_name: 'restaurant',
            image:
              'https://lh5.googleusercontent.com/p/AF1QipOOdP8KXVnvgKnCTUMuuacfnZKKBH5GhkInERof=w426-h240-k-no',
            general_rating: 4.5,
            general_review_count: 1400,
            likes: 1000,
            url: 'https://laprimavera.ru/',
            description:
              'https://lh5.googleusercontent.com/p/AF1QipOOdP8KXVnvgKnCTUMuuacfnZKKBH5GhkInERof=w426-h240-k-no',
            address: 'ул. Казанская, 6, Ломоносов, 191186',
          },
          travelTime: '30 минут',
        },
        {
          place: {
            id: '11',
            name: 'Овражный парк',
            purpose_name: 'tourist_attraction',
            image:
              'https://lh5.googleusercontent.com/p/AF1QipN7wlotwE-FHvtvlYi7GezCUURjqVMuUBc0WLYz=w408-h544-k-no',
            general_rating: 4.7,
            general_review_count: 2000,
            likes: 1700,
            url: 'https://www.admiralty.com/',
            description: 'Парк в центре Кронштадта.',
            address: 'ул. Казанская, 6, Кронштадт, 191186',
          },
          eatery: {
            id: '12',
            name: 'Голландская кухня',
            purpose_name: 'cafe',
            image:
              'https://lh5.googleusercontent.com/p/AF1QipO276nnKvb8ZgWW518ExnHIRWx2u2a2_q4FgAaj=w408-h271-k-no',
            general_rating: 4.4,
            general_review_count: 1200,
            likes: 900,
            url: 'https://staroyteatr.ru/',
            description: 'Кафе европейской кухни.',
            address: 'ул. Казанская, 6, Кронштадт, 191186',
          },
          travelTime: '45 минут',
        },
      ],
    },
  ],
};
