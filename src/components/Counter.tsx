import * as React from "react";
import { connect } from "react-redux";

import { counterActions } from "../actions/counter";
import { ICounterProps, ICounterState } from "../models/types.d.ts";

class Counter extends React.Component<ICounterProps, ICounterState> {

    constructor(props) {
        super(props);
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.increment()
        }
    }

    incrementAsync() {
        setTimeout(this.props.increment, 1000)
    }

    render() {
        const { value, increment, decrement } = this.props;
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
        )
    }
}

function mapStateToProps(state: ICounterState) {
    return {
        value: state.counter
    };
}

export default connect(mapStateToProps, counterActions)(Counter)
