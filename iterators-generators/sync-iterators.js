const createStore = require('./fake-store-sync');
const store = createStore();

// console.log(store.get('customer', 3));
const customers = {
  [Symbol.iterator]: () => {
    let i = 0;
    return {
      next: () => {
        i++;
        const customer = store.get('customer', i);
        if (!customer) {
          return { done: true };
        }
        customer.foods = store.get('food', i);
        return {
          value: customer,
          done: false
        };
      }
    };
  }
};

for (let customer of customers) {
  console.log(customer);
}
