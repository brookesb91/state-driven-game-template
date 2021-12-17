import { State, Frame } from '@core';
import { game } from '@game';

export class DialogueState implements State {
  private timeout: number = 100;
  private time: number = 0;

  constructor(private text: string) {}

  render(ctx: CanvasRenderingContext2D): void {
    ctx.textAlign = 'center';
    ctx.font = '30px Arial';
    ctx.fillText(this.text, ctx.canvas.width / 2, ctx.canvas.height / 2);
  }

  update({ delta }: Frame): void {
    this.time += delta;

    if (this.time >= this.timeout) {
      game.stack.pop();
    }
  }

  exit(): void {}

  enter(): void {}

  toString(): string {
    return 'Dialogue';
  }
}
