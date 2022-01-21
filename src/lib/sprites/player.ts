import { SpriteSheet } from '@core';

const w = 16;
const h = 16;

export default new SpriteSheet('assets/images/player.png')
  // Idle
  .define('idle_left_0', { w, h, ox: 0, oy: 0 })
  .define('idle_left_1', { w, h, ox: 32, oy: 0 })
  .define('idle_right_0', { w, h, ox: 16, oy: 0 })
  .define('idle_right_1', { w, h, ox: 0, oy: 16 })

  // Walk
  .define('walk_right_0', { w, h, ox: 32, oy: 16 })
  .define('walk_right_1', { w, h, ox: 16, oy: 32 })
  .define('walk_left_0', { w, h, ox: 16, oy: 16 })
  .define('walk_left_1', { w, h, ox: 0, oy: 32 });
