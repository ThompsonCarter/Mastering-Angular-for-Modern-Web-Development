function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args: any[]) {
    console.log(`Calling ${propertyKey} with`, args);
    return original.apply(this, args);
  };
  return descriptor;
}

class Logistics {
  @Log
  shipOrder(orderId: string) {
    console.log(`Order ${orderId} shipped.`);
  }
}

new Logistics().shipOrder("A123");
