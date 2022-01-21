import { Animator } from '@core';
import sprites from '@sprites';

export class Player {
  sprites = sprites.player;

  readonly animator: Animator;

  constructor() {
    this.animator = new Animator()
      .define({
        name: 'idle_right',
        loop: true,
        frames: [
          sprites.player.get('idle_right_0'),
          sprites.player.get('idle_right_1'),
        ],
        duration: 600,
      })
      .define({
        name: 'idle_left',
        loop: false,
        frames: [
          sprites.player.get('idle_left_0'),
          sprites.player.get('idle_left_1'),
        ],
        duration: 600,
      });

    this.animator.play('idle_right');
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.imageSmoothingEnabled = false;

    const scale = 5;
    const size = 16;
    const cx = ctx.canvas.width / 2 - (size * scale) / 2;
    const cy = ctx.canvas.height / 2 - (size * scale) / 2;

    this.animator.render(ctx, {
      x: cx,
      y: cy,
      scaleY: 5,
      scaleX: 5,
    });
  }

  update(delta: number) {
    this.animator.update(delta);
  }

  face(facing: 'left' | 'right') {
    this.animator.play(`idle_${facing}`, true);
  }
}
