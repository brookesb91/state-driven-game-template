import { State } from '@core';
import { Frame } from '@core/frame';
export declare class StartState implements State {
    render(ctx: CanvasRenderingContext2D): void;
    update(frame: Frame): void;
    exit(): void;
    enter(): void;
    toString(): string;
}
