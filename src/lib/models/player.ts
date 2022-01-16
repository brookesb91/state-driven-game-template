import sprites from '@sprites';

export class Player {
  sprites = sprites.player;

  private time: number;

  render(ctx: CanvasRenderingContext2D) {
    const sprite = this.sprites.get(
      `idle_right_${Math.floor((this.time / 360) % 2)}`
    );

    ctx.imageSmoothingEnabled = false;

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
  }

  update(delta: number) {
    this.time += delta;
  }
}
