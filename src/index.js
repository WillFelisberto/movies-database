import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import DetailsMovie from './components/DetailsMovie/DetailsMovie';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
import GlobalStyle from './theme/globalStyles';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
	},
});

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<Header />
					<Switch>
						<Route path="/movie/:id" exact={true} component={DetailsMovie} />
						<Route path="/" exact={true} component={App} />
						<Route path="/busca/:id" exact={true} component={Search} />
						<Route component={PageNotFound} />
					</Switch>
					<Footer />
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
