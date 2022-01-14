export interface SpriteConfig {
  /**
   * Width of the sprite on the source image.
   */
  w: number;
  /**
   * Height of the sprite on the source image.
   */
  h: number;
  /**
   * Origin position x on the source image.
   */
  ox: number;
  /**
   * Origin position y on the source image.
   */
  oy: number;
}

export interface SpriteRenderConfig {
  /**
   * x co-ordinate to render the sprite at.
   */
  x: number;
  /**
   * y co-ordinate to render the sprite at.
   */
  y: number;
  /**
   * Optional x axis render scaling.
   */
  scaleX?: number;
  /**
   * Optional y axis render scaling.
   */
  scaleY?: number;
}

export class Sprite {
  constructor(private image: HTMLImageElement, private config: SpriteConfig) {}

  render(
    ctx: CanvasRenderingContext2D,
    { x, y, scaleX, scaleY }: SpriteRenderConfig
  ): void {
    const sx = this.config.ox;
    const sy = this.config.oy;

    const dw = scaleX ? scaleX * this.config.w : this.config.w;
    const dh = scaleY ? scaleY * this.config.h : this.config.h;

    ctx.drawImage(
      this.image,
      sx,
      sy,
      this.config.w,
      this.config.h,
      x,
      y,
      dw,
      dh
    );
  }
}
