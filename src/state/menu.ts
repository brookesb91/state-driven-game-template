import { State } from '@core';
import { oscillate } from '@utils';

export class MenuState implements State {
  private index: number = 0;

  private get hasNext() {
    return this.index < this.items.length - 1;
  }

  private get hasPrevious() {
    return this.index > 0;
  }

  constructor(private items: string[], private done: (index: number) => void) {}

  public render(ctx: CanvasRenderingContext2D) {
    if (this.items.length > 0) {
      ctx.textAlign = 'center';
      ctx.font = '30px Arial';
      ctx.fillText(
        this.items[this.index],
        ctx.canvas.width / 2,
        ctx.canvas.height / 2
      );

      if (this.hasPrevious || this.hasNext) {
        ctx.font = '26px Arial';
        ctx.fillStyle = `rgba(0,0,0,${oscillate(20, 1000, Date.now()) / 1000})`;

        if (this.hasPrevious) {
          ctx.fillText('▲', ctx.canvas.width / 2, ctx.canvas.height / 2 - 60);
          ctx.fillText(
            this.items[this.index - 1],
            ctx.canvas.width / 2,
            ctx.canvas.height / 2 - 30
          );
        }

        if (this.hasNext) {
          ctx.fillText(
            this.items[this.index + 1],
            ctx.canvas.width / 2,
            ctx.canvas.height / 2 + 30
          );
          ctx.fillText('▼', ctx.canvas.width / 2, ctx.canvas.height / 2 + 60);
        }
      }
    }
  }

  public keypress(event: KeyboardEvent) {
    switch (event.key) {
      case 'w':
        this.previous();
        break;
      case 's':
        this.next();
        break;
      case 'Enter':
        this.done(this.index);
        break;
    }
  }

  public next() {
    this.index = Math.min(this.items.length - 1, this.index + 1);
  }

  public previous() {
    this.index = Math.max(0, this.index - 1);
  }
}
