import React, { Component } from 'react';
import { Input, Button, Jumbotron, Container } from 'reactstrap';
import DrawArea from './DrawArea';

class App extends Component {

	constructor() {
		super();
		this.state = {
			name: ''
		}
	}

	render() {
		const name = this.state.name;
		return (
			<div className="App">
				{name ?
					<DrawArea name={name}></DrawArea> :
					<div>
						<div>
							<Jumbotron fluid>
								<Container fluid>
									<div id="logo-area">
										<div>
											<h1 className="display-3">Draw with Me</h1>
											<p className="lead">Draw with your friends live, on the internet!</p>
										</div>
										<div>
											<img id="logo" alt="Logo" src="./logo.png"></img>
										</div>
									</div>
								</Container>
							</Jumbotron>
						</div>
						<Container id="name-entry">
							<form onSubmit={e => e.preventDefault()}>
								<h3>Enter your name!</h3>
								<Input onChange={(e) => this.setState({ input: e.target.value })}></Input>
								<Button color="dark" style={{ margin: '1rem' }} type="submit" onClick={(e) => {
									e.preventDefault();
									this.setState({ name: this.state.input });
								}}>Confirm</Button>
							</form>
						</Container>
						<footer>
							<p id="author">By Jonathan Cady</p>
						</footer>
					</div>
				}
			</div>
		);
	}
}

export default App;
