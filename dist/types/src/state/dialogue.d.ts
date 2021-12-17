import { State } from '@core';
import { Frame } from '@core/frame';
export declare class DialogueState implements State {
    private text;
    private timeout;
    private time;
    constructor(text: string);
    render(ctx: CanvasRenderingContext2D): void;
    update({ delta }: Frame): void;
    exit(): void;
    enter(): void;
    toString(): string;
}
