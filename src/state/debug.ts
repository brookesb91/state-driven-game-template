import { State } from '@core';

export class DebugState implements State {
  public keyup = (e: KeyboardEvent) => console.log('Key Up', e);
  public keydown = (e: KeyboardEvent) => console.log('Key Down', e);
  public mousedown = (e: MouseEvent) => console.log('Mouse Down', e);
}
