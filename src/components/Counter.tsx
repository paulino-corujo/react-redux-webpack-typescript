import * as React from 'react';
import { connect } from 'react-redux';
import { counterActions } from '../actions/counter';
import { ICounterProps, ICounterState } from '../models/types.d.ts';

class Counter extends React.Component<ICounterProps, ICounterState> {

    constructor(props: ICounterProps) {
        super(props);
    }

    public incrementIfOdd(): void {
        if (this.props.value % 2 !== 0) {
            this.props.increment();
        }
    }

    public incrementAsync(): void {
        setTimeout(this.props.increment, 1000);
    }

    public render(): JSX.Element {
        const { value, increment, decrement }: {value: number, increment: () => void , decrement: () => void} = this.props;
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={increment}>
                    +
                </button>
                {' '}
                <button onClick={decrement}>
                    -
                </button>
                {' '}
                <button onClick={() => this.incrementIfOdd()}>
                    Increment if odd
                </button>
                {' '}
                <button onClick={() => this.incrementAsync()}>
                    Increment async
                </button>
            </p>
        );
    }
}

function mapStateToProps(state: ICounterState): any {
    return {
        value: state.counter
    };
}

export default connect(mapStateToProps, counterActions)(Counter)
