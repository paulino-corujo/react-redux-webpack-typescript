import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, IStore } from 'redux';
import { ICounterState } from './../models/types.d';

import Counter from './Counter';
import counter from './../reducers/counter';

export default class App extends React.Component<{}, {}> {

    private store: IStore<ICounterState>;

    constructor() {
        super();
        this.store = createStore(counter);
    }

    public render(): JSX.Element {
        return (
            <Provider store={ this.store }>
                <Counter
                    value={this.store.getState()}
                />
            </Provider>
        );
    }
}
