import { Frame } from './frame';
import { State } from './state';
export declare class Stack {
    get state(): State;
    private states;
    constructor();
    render(ctx: CanvasRenderingContext2D): void;
    update(frame: Frame): void;
    push(state: State): this;
    pop(): this;
    clear(): this;
    reset(): this;
}
