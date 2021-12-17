import { State, Frame } from '@core';
import { game } from '@game';

export class DialogueState implements State {
  constructor(private text: string) {}

  render(ctx: CanvasRenderingContext2D): void {
    ctx.textAlign = 'center';
    ctx.font = '30px Arial';
    ctx.fillText(this.text, ctx.canvas.width / 2, ctx.canvas.height / 2);
  }

  update(): void {}

  exit(): void {}

  enter(): void {
    document.addEventListener('click', () => game.stack.pop(), { once: true });
  }

  toString(): string {
    return 'Dialogue';
  }
}
