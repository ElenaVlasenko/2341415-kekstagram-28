import { getRandomArrayElement, getRandomInteger,createRandomUnicInteger } from './util.js';


const DESCRIPTIONS = [
  'Бывало и лучше!',
  'Эх, как давно это было...',
  'Замечательное фото!Сразу видно руку профи!',
  'Это я дома на любимом диване',
  'Мой кот Зимбабве!'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Сильвия',
  'Лесси',
  'Катерина',
  'Елисей',
  'Андреас',
  'Иван',
  'Семен',
  'Петрович'
];

const COUNTS = 25;

const createOrderIdGenerator = (start = 0) => {
  let count = start;
  return () => ++count;
};

const getUrl = createRandomUnicInteger(1, 25);
const getLikes = createRandomUnicInteger(15, 200);
const getIdPhoto = createOrderIdGenerator();

const createComment = () => ({
  id: getRandomInteger(1, 1000),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});


const createPhotoDescription = () => ({
  id: getIdPhoto(),
  url: `photos/${getUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getLikes(),
  comments:Array.from({length: getRandomInteger(1, 6)}, createComment),
});

const createPhotosDescription = () => Array.from({length: COUNTS}, createPhotoDescription);

export {MESSAGES, NAMES, createPhotosDescription};
