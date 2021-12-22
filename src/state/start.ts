import { State } from '@core';
import { game } from '@game';
import { DebugState } from '@state';

import { DialogueState } from './dialogue';

export class StartState implements State {
  public enter(): void {
    setTimeout(() => game.stack.push(new DialogueState('Hello World!')), 1000);
  }

  public keypress(event: KeyboardEvent) {
    if (event.key === 'd') {
      game.stack.push(new DebugState());
    }
  }

  public toString(): string {
    return 'Start';
  }
}
