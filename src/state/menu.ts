import { State } from '@core';
import { oscillate } from '@utils';
import { game } from '@game';

export class MenuState implements State {
  private index: number = 0;

  public get hasNext() {
    return this.index < this.items.length - 1;
  }

  public get hasPrevious() {
    return this.index > 0;
  }

  constructor(
    private title: string,
    private items: string[],
    private done: (index: number) => void
  ) {}

  public render(ctx: CanvasRenderingContext2D) {
    // background
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 32, ctx.canvas.width, ctx.canvas.height - 64);

    // text styles
    ctx.font = '30px Arial';
    ctx.fillStyle = '#000';

    // title
    ctx.fillText(this.title, 32, ctx.canvas.height / 2);

    if (this.items.length > 0) {
      ctx.textAlign = 'center';
      const posX = ctx.canvas.width / 2;
      const posY = ctx.canvas.height / 2;

      // current item
      ctx.fillText(this.items[this.index], posX, posY);

      if (this.hasPrevious || this.hasNext) {
        // sub-text styles
        ctx.font = '26px Arial';
        ctx.fillStyle = `rgba(0,0,0,${
          oscillate(100, 1000, Date.now()) / 1000
        })`;

        // previous item
        if (this.hasPrevious) {
          // previous indicator
          ctx.fillText('▲', posX, posY - 60);
          // previous text
          ctx.fillText(this.items[this.index - 1], posX, posY - 30);
        }

        // next item
        if (this.hasNext) {
          // next text
          ctx.fillText(this.items[this.index + 1], posX, posY + 30);
          // next indicator
          ctx.fillText('▼', posX, posY + 60);
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
      case 'm':
        game.stack.pop();
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
