export interface OnKeyUp {
  /**
   * `document 'keyup'` event handler.
   * @param event Event
   */
  keyup(event: KeyboardEvent): void;
}

export interface OnKeyDown {
  /**
   * `document 'keydown'` event handler.
   * @param event Event
   */
  keydown(event: KeyboardEvent): void;
}

export interface OnKeyPress {
  /**
   * `document 'keypress' event handler.
   * @param event Event
   */
  keypress(event: KeyboardEvent): void;
}

export interface OnMouseUp {
  /**
   * `HTMLCanvasElement 'mouseup'` event handler.
   * @param event Event
   */
  mouseup(event: MouseEvent): void;
}

export interface OnMouseDown {
  /**
   * `HTMLCanvasElement 'mousedown'` event handler.
   * @param event Event
   */
  mousedown(event: MouseEvent): void;
}

export interface OnMouseEnter {
  /**
   * `HTMLCanvasElement 'mouseenter'` event handler.
   * @param event Event
   */
  mouseenter(event: MouseEvent): void;
}

export interface OnMouseLeave {
  /**
   * `HTMLCanvasElement 'mouseleave'` event handler.
   * @param event Event
   */
  mouseleave(event: MouseEvent): void;
}

export interface OnMouseOut {
  /**
   * `HTMLCanvasElement 'mouseout'` event handler.
   * @param event Event
   */
  mouseout(event: MouseEvent): void;
}

export interface OnMouseOver {
  /**
   * `HTMLCanvasElement 'mouseover'` event handler.
   * @param event Event
   */
  mouseover(event: MouseEvent): void;
}

export interface OnMouseMove {
  /**
   * `HTMLCanvasElement 'mousemove'` event handler.
   * @param event Event
   */
  mousemove(event: MouseEvent): void;
}

export type InputHandler = OnKeyUp &
  OnKeyDown &
  OnKeyPress &
  OnMouseUp &
  OnMouseDown &
  OnMouseEnter &
  OnMouseLeave &
  OnMouseOut &
  OnMouseOver &
  OnMouseMove;
