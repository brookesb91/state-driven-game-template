import { game } from '@game';
import { DebugState } from '@state';

const main = () => {
  // Push initial state
  game.stack.push(new DebugState());

  // Start the game
  game.start();
};

try {
  main();
} catch (e) {
  console.error(e);
}
