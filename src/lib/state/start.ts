import { State } from '@core';
import { DebugState } from '@state';
import game from '@game';
import sprites from '@sprites';

import { MenuState } from './menu';

export class StartState implements State {
  public keypress(event: KeyboardEvent) {
    switch (event.key) {
      case 'd':
        game.stack.push(new DebugState());
        break;
      case 'm':
        game.stack.push(
          new MenuState(
            // title
            'Menu',
            // items
            Array.from(new Array(10000), (_, i) => `Item ${i}`),
            // done
            (index) => {
              game.stack.pop();
              alert(`Chose index ${index}`);
            }
          )
        );
        break;
    }
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.imageSmoothingEnabled = false;

    const sprite = sprites.player.get('idle_right_1');
    const scale = 5;
    const size = 16;
    const cx = ctx.canvas.width / 2 - (size * scale) / 2;
    const cy = ctx.canvas.height / 2 - (size * scale) / 2;

    sprite?.render(ctx, {
      x: cx,
      y: cy,
      scaleY: 5,
      scaleX: 5,
    });

    ctx.font = '32px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('My Awesome Game', ctx.canvas.width / 2, 64);

    ctx.font = '16px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('[M] - Menu', 16, ctx.canvas.height - 32);
    ctx.fillText('[D] - Debug', 16, ctx.canvas.height - 16);
  }

  public toString(): string {
    return 'Start';
  }
}
