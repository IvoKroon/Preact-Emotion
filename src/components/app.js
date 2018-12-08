import { h, Component } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Footer from './footer';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
		// if (typeof window !== 'undefined') {
		// 	window.scrollTo(0, 0);
		// }
	};

	//  handleRoute = e => {

	render() {
		return (
			<div id="app">
				<div>
					<Router onChange={this.handleRoute}>
						<Home path="/" />
					</Router>
				</div>
				<Footer />
			</div>
		);
	}
}
