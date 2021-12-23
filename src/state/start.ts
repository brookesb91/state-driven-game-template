import { State } from '@core';
import { game } from '@game';
import { DebugState } from '@state';

import { DialogueState } from './dialogue';
import { MenuState } from './menu';

export class StartState implements State {
  public enter(): void {
    setTimeout(() => game.stack.push(new DialogueState('Hello World!')), 1000);
  }

  public keypress(event: KeyboardEvent) {
    switch (event.key) {
      case 'd':
        game.stack.push(new DebugState());
        break;
      case 'm':
        game.stack.push(
          new MenuState(
            Array.from(new Array(100), (_, i) => `Item ${i}`),
            (index) => {
              game.stack.pop();
            }
          )
        );
        break;
    }
  }

  public toString(): string {
    return 'Start';
  }
}
