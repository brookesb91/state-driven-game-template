export const oscillate = (min: number, max: number, value: number) => {
  const range = max - min;
  return min + Math.abs(((value + range) % (range * 2)) - range);
};
