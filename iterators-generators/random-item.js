const randomNumber = require('random-number');
function randomItem(array) {
  const randomIndex = randomNumber({
    min: 0,
    max: array.length - 1,
    integer: true
  });
  return array[randomIndex];
}
const makeDragon = () => {
  const dragonSizes = ['tiny', 'medium', 'big'];
  const dragonAbilities = ['fire', 'ice', 'lightning'];
  return `${randomItem(dragonSizes)} ${randomItem(dragonAbilities)} dragon`;
};
module.exports = makeDragon;
