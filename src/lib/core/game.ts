import { Stack } from './stack';

export interface GameConfig {
  /**
   * Selector for the root element.
   * This element should be of type `HTMLCanvasElement`.
   */
  selector: string;
  /**
   * Height of the rendering canvas in pixels.
   */
  height: number;
  /**
   * Width of the rendering canvas in pixels.
   */
  width: number;
}

export class Game {
  /**
   * Game stack
   */
  public readonly stack: Stack = new Stack();

  /**
   * Rendering
   */
  public readonly canvas: HTMLCanvasElement;
  public readonly ctx: CanvasRenderingContext2D;

  /**
   * Frame data
   */
  private stopped: boolean = false;
  private time: number = 0;

  constructor({ selector, height, width }: GameConfig) {
    this.canvas = document.querySelector(selector);
    this.ctx = this.canvas.getContext('2d');
    this.canvas.height = height;
    this.canvas.width = width;
  }

  public start() {
    this.stopped = false;
    this.initListeners();
    this.update(this.time);
  }

  public update(time: number) {
    const delta = time - this.time;
    this.time = time;

    if (!this.stopped) {
      if (time !== 0) {
        this.initCanvas();
      }

      this.stack.update({ time, delta });
      this.stack.render(this.ctx);

      requestAnimationFrame((t) => this.update(t));
    }
  }

  public stop() {
    this.stopped = true;
    this.removeListeners();
  }

  private initCanvas() {
    this.canvas.height = this.canvas.height;
    this.canvas.width = this.canvas.width;
  }

  private initListeners() {
    document.addEventListener('keyup', this.keyup);
    document.addEventListener('keydown', this.keydown);
    document.addEventListener('keypress', this.keypress);
    this.canvas.addEventListener('mouseup', this.mouseup);
    this.canvas.addEventListener('mousedown', this.mousedown);
    this.canvas.addEventListener('mousemove', this.mousemove);
    this.canvas.addEventListener('mouseenter', this.mouseenter);
    this.canvas.addEventListener('mouseout', this.mouseout);
    this.canvas.addEventListener('mouseleave', this.mouseleave);
    this.canvas.addEventListener('mouseover', this.mouseover);
  }

  private removeListeners() {
    document.removeEventListener('keyup', this.keyup);
    document.removeEventListener('keydown', this.keydown);
    document.removeEventListener('keypress', this.keypress);
    this.canvas.removeEventListener('mouseup', this.mouseup);
    this.canvas.removeEventListener('mousedown', this.mousedown);
    this.canvas.removeEventListener('mousemove', this.mousemove);
    this.canvas.removeEventListener('mouseenter', this.mouseenter);
    this.canvas.removeEventListener('mouseout', this.mouseout);
    this.canvas.removeEventListener('mouseleave', this.mouseleave);
    this.canvas.removeEventListener('mouseover', this.mouseover);
  }

  private keyup = (event: KeyboardEvent) => this.stack.state?.keyup?.(event);

  private keydown = (event: KeyboardEvent) =>
    this.stack.state?.keydown?.(event);

  private keypress = (event: KeyboardEvent) =>
    this.stack.state?.keypress?.(event);

  private mouseup = (event: MouseEvent) => this.stack.state?.mouseup?.(event);

  private mousedown = (event: MouseEvent) =>
    this.stack.state?.mousedown?.(event);

  private mousemove = (event: MouseEvent) =>
    this.stack.state?.mousemove?.(event);

  private mouseenter = (event: MouseEvent) =>
    this.stack.state?.mouseenter?.(event);

  private mouseleave = (event: MouseEvent) =>
    this.stack.state?.mouseleave?.(event);

  private mouseover = (event: MouseEvent) =>
    this.stack.state?.mouseover?.(event);

  private mouseout = (event: MouseEvent) => this.stack?.state.mouseout?.(event);
}
