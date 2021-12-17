import { State } from '@core';
import { Position } from '@models';
export declare class OverworldState implements State {
    private position;
    constructor(position: Position);
    enter(): void;
    toString(): string;
}
