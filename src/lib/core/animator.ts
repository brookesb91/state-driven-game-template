import { Sprite, SpriteRenderConfig } from './sprite';

export class Animator {
  private animations: { [key: string]: AnimationConfig } = {};
  private time: number = 0;
  private current: string | null;
  private stopped: boolean = false;

  constructor() {}

  define(config: AnimationConfig) {
    this.animations[config.name] = config;
    return this;
  }

  update(delta: number) {
    if (!this.stopped) {
      this.time += delta;
    }
  }

  render(ctx: CanvasRenderingContext2D, config: SpriteRenderConfig) {
    if (this.current) {
      const animation = this.animations[this.current];

      const frame = Math.floor(
        (this.time / animation.duration) % animation.frames.length
      );

      const sprite = animation.frames[frame];

      sprite?.render(ctx, config);

      if (!animation.loop) {
        if (frame + 1 === animation.frames.length) {
          this.stop();
        }
      }
    }
  }

  start() {
    this.stopped = false;
  }

  stop() {
    this.stopped = true;
  }

  play(name: string, fade: boolean = false) {
    if (name in this.animations && this.current !== name) {
      this.time = fade ? this.time : 0;
      this.start();
      this.current = name;
    }
  }
}

interface AnimationConfig {
  name: string;
  frames: Sprite[];
  duration: number;
  loop: boolean;
}
