import { State } from '@core';

export class DebugState implements State {
  // tslint:disable: no-console
  public keyup = (e: KeyboardEvent) => console.log('Key Up', e);
  public keydown = (e: KeyboardEvent) => console.log('Key Down', e);
  public keypress = (e: KeyboardEvent) => console.log('Key Press', e);
  public mousedown = (e: MouseEvent) => console.log('Mouse Down', e);
  public mouseup = (e: MouseEvent) => console.log('Mouse Up', e);
  public mouseenter = (e: MouseEvent) => console.log('Mouse Enter', e);
  public mouseleave = (e: MouseEvent) => console.log('Mouse Leave', e);
  public mousemove = (e: MouseEvent) => console.log('Mouse Move', e);
  public mouseout = (e: MouseEvent) => console.log('Mouse Out', e);
  public mouseover = (e: MouseEvent) => console.log('Mouse Over', e);

  public render(ctx: CanvasRenderingContext2D) {
    ctx.font = '16px monospace';
    ctx.fillText('Debug', 16, ctx.canvas.height - 16);
  }
}
