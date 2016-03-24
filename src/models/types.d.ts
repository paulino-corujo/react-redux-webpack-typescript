export interface ICounterProps {
    value: number;
    increment(): void;
    decrement(): void;
}

export interface ICounterState {
    counter: number;
}
