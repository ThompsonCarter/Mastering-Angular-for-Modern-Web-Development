function calculateSpeed(distance: number, time: number): number {
  return distance / time;
}

const speed = calculateSpeed("100", 20); // Type error at compile time!
