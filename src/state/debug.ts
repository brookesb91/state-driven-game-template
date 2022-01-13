import { State } from '@core';
import { Position } from '@models';

// tslint:disable: no-console
export class DebugState implements State {
  private _mouseover: boolean = false;
  private _mousedown: boolean = false;
  private _mousePosition: Position = new Position(0, 0);

  public keyup = (e: KeyboardEvent) => console.log('Key Up', e);
  public keydown = (e: KeyboardEvent) => console.log('Key Down', e);
  public keypress = (e: KeyboardEvent) => console.log('Key Press', e);

  public mousedown = (e: MouseEvent) => {
    console.log('Mouse Down', e);
    this._mousedown = true;
  };

  public mouseup = (e: MouseEvent) => {
    console.log('Mouse Up', e);
    this._mousedown = false;
  };

  public mouseenter = (e: MouseEvent) => {
    console.log('Mouse Enter', e);
    this._mouseover = true;
    this._mousePosition = Position.fromEvent(e);
  };

  public mouseleave = (e: MouseEvent) => {
    console.log('Mouse Leave', e);
    this._mouseover = false;
    this._mousedown = false;
  };

  public mousemove = (e: MouseEvent) => {
    console.log('Mouse Move', e);
    this._mouseover = true;
    this._mousePosition = Position.fromEvent(e);
  };

  public mouseout = (e: MouseEvent) => {
    console.log('Mouse Out', e);
    this._mouseover = false;
    this._mousedown = false;
  };

  public mouseover = (e: MouseEvent) => {
    console.log('Mouse Over', e);
    this._mouseover = true;
    this._mousePosition = Position.fromEvent(e);
  };

  public render(ctx: CanvasRenderingContext2D) {
    ctx.font = '16px monospace';

    if (this._mouseover) {
      ctx.fillStyle = this._mousedown ? 'red' : 'green';
      ctx.fillRect(
        this._mousePosition.x - 10,
        this._mousePosition.y - 10,
        20,
        20
      );
    }

    ctx.fillStyle = 'black';

    ctx.fillText('Debug', 16, ctx.canvas.height - 16);
    ctx.fillText(`Mouse Over: ${this._mouseover}`, 16, ctx.canvas.height - 32);
    ctx.fillText(
      `Mouse Position: ${this._mousePosition.x},${this._mousePosition.y}`,
      16,
      ctx.canvas.height - 48
    );
    ctx.fillText(`Mouse Down: ${this._mousedown}`, 16, ctx.canvas.height - 64);
  }
}
