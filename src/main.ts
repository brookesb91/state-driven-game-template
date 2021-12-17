import { game } from '@game';
import { StartState } from '@state';

const run = () => {
  // Push initial state
  game.stack.push(new StartState());

  // Start the game
  game.start();
};

try {
  run();
} catch (e) {
  console.error(e);
}
