import { Position } from '@models';

export const oscillate = (min: number, max: number, value: number) => {
  const range = max - min;
  return min + Math.abs(((value + range) % (range * 2)) - range);
};

export const mousePosition = (ev: MouseEvent): Position => {
  const rect = (ev.target as HTMLElement).getBoundingClientRect();
  const x = ev.clientX - rect.left;
  const y = ev.clientY - rect.top;

  return { x, y };
};
