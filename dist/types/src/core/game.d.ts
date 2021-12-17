import { Stack } from '@core';
export interface GameConfig {
    /**
     * Selector for the root element.
     * This element should be of type `HTMLCanvasElement`.
     */
    selector: string;
    /**
     * Height of the rendering canvas in pixels.
     */
    height: number;
    /**
     * Width of the rendering canvas in pixels.
     */
    width: number;
}
export declare class Game {
    private canvas;
    private ctx;
    private stopped;
    private time;
    readonly stack: Stack;
    constructor({ selector, height, width }: GameConfig);
    start(): void;
    stop(): void;
    private initCanvas;
}
