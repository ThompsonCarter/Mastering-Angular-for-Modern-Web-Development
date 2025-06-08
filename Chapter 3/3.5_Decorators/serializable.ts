function Serializable(constructor: Function) {
  constructor.prototype.serialize = function() {
    return JSON.stringify(this);
  };
}

@Serializable
class Order {
  constructor(public id: number, public amount: number) {}
}

const order = new Order(1, 99.99);
console.log((order as any).serialize());
