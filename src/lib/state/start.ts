import { Frame, State } from '@core';
import { DebugState } from '@state';
import game from '@game';
import sprites from '@sprites';

import { MenuState } from './menu';

export class StartState implements State {
  private _time: number = 0;

  public keypress(event: KeyboardEvent) {
    /**
     * Example key press handling.
     *
     * All logic in this method can be safely removed.
     *
     * Demonstrates responding to keyboard events.
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
            // done
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
     * Renders an example scene
     *
     * All logic in this method can be safely removed.
     *
     * It demonstrates rendering primitive shapes,
     * sprites and text to the canvas.
     */

    // Background - sky
    ctx.fillStyle = '#61C1F2';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    //Foreground - ground
    ctx.fillStyle = '#29A415';
    ctx.fillRect(
      0,
      ctx.canvas.height / 2,
      ctx.canvas.width,
      ctx.canvas.height / 2
    );

    /**
     * Disabled image smoothing for player sprites
     * as the original image will be scaled up.
     */
    ctx.imageSmoothingEnabled = false;

    /**
     * Render the player sprite
     *
     * Pick sprite based on elapsed time
     * to simulate animation.
     */
    const sprite = sprites.player.get(
      `idle_right_${Math.floor((this._time / 360) % 2)}`
    );

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
     * Example update method
     *
     * Can be safely removed
     *
     * Increases the state's time each frame by
     * the elapsed time this frame.
     */
    this._time += frame.delta;
  }

  public toString(): string {
    return 'Start';
  }
}
