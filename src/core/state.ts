import { Frame } from './frame';

export interface State {
  // lifecycle events

  /**
   * Called when this state was pushed to the `stack`.
   */
  enter?(): void;

  /**
   * Called each frame. Responsible for rendering the state.
   * @param ctx Canvas rendering context.
   */
  render?(ctx: CanvasRenderingContext2D): void;
  /**
   * Called each frame. Responsible for logic performed each frame.
   * @param frame
   */
  update?(frame: Frame): void;
  /**
   * Called when this state is popped from from the `stack`.
   */
  exit?(): void;

  // input events

  /**
   * `document 'keyup'` event handler.
   * @param event Event
   */
  keyup?(event: KeyboardEvent): void;
  /**
   * `document 'keydown'` event handler.
   * @param event Event
   */
  keydown?(event: KeyboardEvent): void;
  /**
   * `document 'keypress' event handler.
   * @param event Event
   */
  keypress?(event: KeyboardEvent): void;
  /**
   * `HTMLCanvasElement 'mouseup'` event handler.
   * @param event Event
   */
  mouseup?(event: MouseEvent): void;
  /**
   * `HTMLCanvasElement 'mousedown'` event handler.
   * @param event Event
   */
  mousedown?(event: MouseEvent): void;
  /**
   * `HTMLCanvasElement 'mouseenter'` event handler.
   * @param event Event
   */
  mouseenter?(event: MouseEvent): void;
  /**
   * `HTMLCanvasElement 'mouseleave'` event handler.
   * @param event Event
   */
  mouseleave?(event: MouseEvent): void;
  /**
   * `HTMLCanvasElement 'mouseout'` event handler.
   * @param event Event
   */
  mouseout?(event: MouseEvent): void;
  /**
   * `HTMLCanvasElement 'mouseover'` event handler.
   * @param event Event
   */
  mouseover?(event: MouseEvent): void;
  /**
   * `HTMLCanvasElement 'mousemove'` event handler.
   * @param event Event
   */
  mousemove?(event: MouseEvent): void;
}
