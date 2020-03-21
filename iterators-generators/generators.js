const makeDragon = require('./random-item');

const dragonArmy = {
  // [Symbol.iterator]: () => {
  //   return {
  //     next: () => {
  //       const enoughDragonsSpawned = Math.random() > 0.75;
  //       if (!enoughDragonsSpawned) {
  //         return {
  //           value: makeDragon(),
  //           done: false
  //         };
  //       }
  //       return { done: true };
  //     }
  //   };
  // }
  [Symbol.iterator]: function*() {
    // scopul este sa generez yielduri in functia generator
    while (true) {
      // enoughDragonsSpawned se schimba la fiecare call al next() asupra generatorului
      const enoughDragonsSpawned = Math.random() > 0.75;
      if (enoughDragonsSpawned) return;
      yield makeDragon();
    }
  }
};

for (const dragon of dragonArmy) {
  console.log(dragon);
}
