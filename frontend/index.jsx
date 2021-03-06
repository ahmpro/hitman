import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import Layout from './components/Layout/Layout';
import IndexPage from './containers/Pages/IndexPage';
import ErrorPage404 from './components/Pages/ErrorPage404/ErrorPage404';

import 'semantic-ui-css/semantic.min.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={IndexPage} />
                <Route path="*" component={ErrorPage404} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
