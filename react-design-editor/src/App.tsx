import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Title from './components/layout/Title';
import FlowContainer from './containers/FlowContainer';
import { FiberEditor, FlowEditor, HexGridEditor, ImageMapEditor, WorkflowEditor } from './editors';

class App extends Component<any> {
	render() {
		return (
			<div className="rde-main">
				<Helmet>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<meta name="description" content="CGLiter is a tool for creating and editing streaming graphics." />
					<link rel="manifest" href="./manifest.json" />
					<link rel="shortcut icon" href="./favicon.ico" />
				</Helmet>
				<div className="rde-title">
					<Title />
				</div>
				<FlowContainer>
					<div className="rde-content">
						<ImageMapEditor />
					</div>
				</FlowContainer>
			</div>
		);
	}
}

export default App;
