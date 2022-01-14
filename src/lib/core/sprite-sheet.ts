import { Sprite, SpriteConfig } from './sprite';

export class SpriteSheet {
  private image: HTMLImageElement;
  private sprites: { [key: string]: Sprite };

  constructor(src: string) {
    this.sprites = {};
    this.image = new Image();
    this.image.src = src;
  }

  /**
   * Define a new {Sprite} for this sheet with the
   * given name and config.
   *
   * @param {string} name Sprite name.
   * @param {SpriteConfig} config Sprite config.
   * @returns {SpriteSheet}
   */
  define(name: string, config: SpriteConfig): SpriteSheet {
    this.sprites[name] = new Sprite(this.image, config);
    return this;
  }

  /**
   * Attempt to retrieve a sprite from this sheet's sprites
   * Returns `undefined` if no sprite with the supplied name
   * exists.
   *
   * @param name Sprite name.
   * @returns {Sprite | undefined}
   */
  get(name: string): Sprite | undefined {
    return this.sprites[name];
  }
}
