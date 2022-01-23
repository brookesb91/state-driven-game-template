import { Game } from '@core';

// Create a game and export it
export default new Game({
  /**
   * Root canvas element selector
   */
  selector: 'canvas#game',
  /**
   * Overrides height and width settings.
   */
  // fullscreen: true,
  /**
   * Canvas height (px).
   */
  height: 360,
  /**
   * Canvas width (px).
   */
  width: 640,
});
