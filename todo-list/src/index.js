import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "connected-react-router";
import Todo from './containers/TodoApp';
import createHistory from 'history/createBrowserHistory'
import createStore from './store';

const history = createHistory();

const store = createStore(history);

console.log(store)

render(
	<Provider store={store}>
		<ConnectedRouter history={ history }>
			<Todo />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);

