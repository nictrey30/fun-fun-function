const makeDragon = require('./random-item');

const dragonArmy = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        const enoughDragonsSpawned = Math.random() > 0.75;
        if (!enoughDragonsSpawned) {
          return {
            value: makeDragon(),
            done: false
          };
        }
        return { done: true };
      }
    };
  }
};

for (const dragon of dragonArmy) {
  console.log(dragon);
}
