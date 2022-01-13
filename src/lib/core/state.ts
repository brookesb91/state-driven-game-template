import { Frame } from './frame';
import { InputHandler } from './input';

export interface OnEnter {
  /**
   * Called when this state was pushed to the `stack`.
   */
  enter(): void;
}

export interface OnRender {
  /**
   * Called each frame. Responsible for rendering the state.
   * @param ctx Canvas rendering context.
   */
  render(ctx: CanvasRenderingContext2D): void;
}

export interface OnUpdate {
  /**
   * Called each frame. Responsible for logic performed each frame.
   * @param frame
   */
  update(frame: Frame): void;
}

export interface OnExit {
  /**
   * Called when this state is popped from from the `stack`.
   */
  exit(): void;
}

export type State = Partial<OnEnter> &
  Partial<OnRender> &
  Partial<OnUpdate> &
  Partial<OnExit> &
  Partial<InputHandler>;
