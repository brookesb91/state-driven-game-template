import { State } from '@core';
import { game } from '@game';
import { DebugState } from '@state';

import { DialogueState } from './dialogue';
import { MenuState } from './menu';

export class StartState implements State {
  public enter(): void {
    game.stack.push(new DialogueState('Hello World!'));
  }

  public keypress(event: KeyboardEvent) {
    switch (event.key) {
      case 'd':
        game.stack.push(new DebugState());
        break;
      case 'm':
        game.stack.push(
          new MenuState(
            // title
            'Menu',
            // items
            Array.from(new Array(10000), (_, i) => `Item ${i}`),
            // done
            (index) => {
              game.stack.pop();
              alert(`Chose index ${index}`);
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
