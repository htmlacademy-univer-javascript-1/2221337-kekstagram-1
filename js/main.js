const MAX_AVATARS_NUMBER = 6;
const MAX_ITEMS_NUMBER = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENTS_NUMBER = 3;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Хейли',
  'Келли',
  'Элли',
  'Григорий',
  'Никлоай',
  'Александр'
];

const DESCRIPTIONS = [
  'Типичный серый панельный дом',
  'Кабинет ИРИТ-РтФ с обшарпанной штукатуркой',
  'Старый чехословацкий трамвай',
  'Поваленные из-за сильного снегопада деревья',
  'Огромная очередь в почте',
  'Расстроенный из-за потерянного пропуска студент'
];

const imagesItems = [];

const getRandomIntInclusively = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if(min < 0 || max < 0){
    return -1;
  }
  if(min > max){
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getComments = (count) => {
  const comments = [];
  for(let i = 1; i <= count; i++){
    comments.push({
      id: i,
      avatar: `img/avatar-${getRandomIntInclusively(1, MAX_AVATARS_NUMBER)}.svg`,
      message: MESSAGES[getRandomIntInclusively(0, MESSAGES.length - 1)],
      name: NAMES[getRandomIntInclusively(0, NAMES.length - 1)]
    });
  }
  return comments;
};

const getImagesInfo = () => {
  for(let i = 1; i <= MAX_ITEMS_NUMBER; i++){
    imagesItems.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: DESCRIPTIONS[getRandomIntInclusively(1, DESCRIPTIONS.length - 1)],
      likes: getRandomIntInclusively(MIN_LIKES, MAX_LIKES),
      comments: getComments(getRandomIntInclusively(1, MAX_COMMENTS_NUMBER))
    });
  }
};

getImagesInfo();
