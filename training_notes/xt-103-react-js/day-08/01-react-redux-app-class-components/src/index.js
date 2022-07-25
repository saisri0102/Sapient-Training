import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './containers/Counter';
import UserForm from './containers/UserForm';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Counter />
            <UserForm />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);