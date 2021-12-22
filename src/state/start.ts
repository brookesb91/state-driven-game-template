import { State } from '@core';
import { game } from '@game';

import { DialogueState } from './dialogue';

export class StartState implements State {
  public enter(): void {
    setTimeout(() => game.stack.push(new DialogueState('Hello World!')), 1000);
  }

  public stoString(): string {
    return 'Start';
  }
}
