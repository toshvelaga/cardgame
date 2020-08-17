import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PlayGame from "./containers/PlayGame/PlayGame";
import WinOrLose from "./containers/WinOrLose/WinOrLose";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/win-or-lose">
						<WinOrLose />
					</Route>

					<Route path="/">
						<PlayGame />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
