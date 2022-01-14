import { State } from '@core';
import game from '@game';

export class DialogueState implements State {
  constructor(private text: string) {}

  public render(ctx: CanvasRenderingContext2D): void {
    // Render this text to the canvas.
    ctx.textAlign = 'center';
    ctx.font = '30px Arial';
    ctx.fillText(this.text, ctx.canvas.width / 2, ctx.canvas.height / 2);
  }

  public mousedown(): void {
    game.stack.pop();
  }

  /**
   * Override the `toString` method to produce readable output.
   * Otherwise, will log `[object Object]`.
   *
   * @returns {string}
   */
  public toString(): string {
    return 'Dialogue';
  }
}
