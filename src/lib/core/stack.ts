import { Frame } from './frame';
import { State } from './state';

export class Stack {
  public get state(): State | null {
    return this.states.length ? this.states[this.states.length - 1] : null;
  }

  private states: State[];

  constructor() {
    this.states = [];
  }

  public render(ctx: CanvasRenderingContext2D): void {
    let i = 0;
    const length = this.states.length;

    while (i < length) {
      ctx.save();
      this.states[i].render?.(ctx);
      ctx.restore();
      i++;
    }
  }

  public update(frame: Frame): void {
    this.state?.update?.(frame);
  }

  public push(state: State): Stack {
    this.states.push(state);
    state.enter?.();
    return this;
  }

  public pop(): Stack {
    const state = this.states.pop();
    state.exit?.();
    return this;
  }

  public clear(): Stack {
    this.states = [];
    return this;
  }
}
