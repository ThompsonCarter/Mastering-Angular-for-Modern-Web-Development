export function LogEvent(eventName: string) {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function(...args: any[]) {
      console.log(`[${new Date().toISOString()}] Event: ${eventName}`, args);
      return original.apply(this, args);
    };
  };
}
