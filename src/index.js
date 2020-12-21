import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import DetailsMovie from './components/DetailsMovie/DetailsMovie';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
import Header from './components/Header';
import GlobalStyle from './theme/globalStyles';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalStyle />
			<Header></Header>
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
	</React.StrictMode>,
	document.getElementById('root')
);
