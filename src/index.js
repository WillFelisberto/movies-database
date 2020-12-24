import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';
import App from './App';
import DetailsMovie from './components/DetailsMovie/DetailsMovie';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
import Header from './components/Header';
import GlobalStyle from './theme/globalStyles';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<GlobalStyle />
				<Header />
				<Switch>
					<Route
						path='/movie/:id'
						exact={true}
						component={DetailsMovie}
					/>
					<Route path='/' exact={true} component={App} />
					<Route component={PageNotFound} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
