const createStore = require('./fake-store-async');
const store = createStore();

// console.log(store.get('customer', 3));
const customers = {
  [Symbol.iterator]: () => {
    let i = 0;
    return {
      next: async () => {
        i++;
        const customer = await store.get('customer', i);
        if (!customer) {
          return { done: true };
        }
        customer.foods = await store.get('food', i);
        return {
          value: customer,
          done: false
        };
      }
    };
  }
};

(async function (){
  const iterator = customers[Symbol.iterator]();
  const customer1 = await iterator.next();
  const customer2 = await iterator.next();
  const customer3 = await iterator.next();
  console.log(customer1, customer2, customer3)
  // for await (const customer of customers) {
  //   console.log(customer);
  // }
})()
