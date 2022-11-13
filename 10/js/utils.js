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

const isEscapePushed = (evt) => evt.key === 'Escape';

export {getRandomIntInclusively, isEscapePushed};
