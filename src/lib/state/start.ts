import { Frame, State } from '@core';
import game from '@game';
import { Player } from '@models';

import { MenuState } from './menu';
import { DebugState } from './debug';

export class StartState implements State {
  readonly player: Player = new Player();

  public keypress(event: KeyboardEvent) {
    /**
     * Example code; can be safely removed.
     */
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
            // done callback
            (index) => {
              game.stack.pop();
              alert(`Chose item ${index}`);
            }
          )
        );
        break;
    }
  }

  public render(ctx: CanvasRenderingContext2D): void {
    /**
     * Example code; can be safely removed.
     */
    // Render background
    ctx.fillStyle = '#61C1F2';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Render foreground
    ctx.fillStyle = '#29A415';
    ctx.fillRect(
      0,
      ctx.canvas.height / 2,
      ctx.canvas.width,
      ctx.canvas.height / 2
    );

    // Render player
    this.player.render(ctx);

    // Render title
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 32px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('My Awesome Game', ctx.canvas.width / 2, 64);

    // Render key bindings
    ctx.font = 'bold 16px monospace';
    ctx.fillText('[M] - Menu', ctx.canvas.width / 2, ctx.canvas.height - 64);
    ctx.fillText('[D] - Debug', ctx.canvas.width / 2, ctx.canvas.height - 48);
  }

  public update(frame: Frame): void {
    /**
     * Example code; can be safely removed.
     */
    this.player.update(frame.delta);
  }

  public toString(): string {
    return 'Start';
  }
}
