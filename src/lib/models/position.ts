export class Position {
  public static fromEvent(ev: MouseEvent): Position {
    const rect = (ev.target as HTMLElement).getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;

    return new Position(x, y);
  }

  constructor(public x: number, public y: number) {}
}
