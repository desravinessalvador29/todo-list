import React from "react";
export class Todolist extends React.Component {
	constructor() {
		super();
		this.state = {
			list: []
		};
	}

	componentDidMount() {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/saldesravines29"
		)
			.then(resp => resp.json())
			.then(data => {
				//console.log(data);
				this.setState({ list: data });
			})
			.catch(error => {
				//console.log(error);
			});
	}
	render() {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/saldesravines29",
			{
				method: "PUT",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
			.then(res => res.json())
			.then(response => JSON.stringify(response))
			.catch(error => error);

		return (
			<React.Fragment>
				<div className="container">
					<h1>To-do List</h1>
					<div className="items">
						<div>
							<span>Username</span>
							<input
								placeholder="Add Username"
								type="text"
								onKeyPress={e =>
									e.charCode === 13 &&
									this.setState({
										list: this.state.list.concat(
											e.target.value
										)
									})
								}
							/>
							<div className="task">
								<span>Task</span>
								<input
									placeholder="Add Items"
									type="text"
									onKeyPress={e =>
										e.charCode === 13 &&
										this.setState({
											list: this.state.list.concat(
												e.target.value
											)
										})
									}
								/>
							</div>
						</div>
						<ul className="list-group">
							{this.state &&
								this.state.list.map((value, index) => (
									<li key={index} className="list-group-item">
										{value.label}{" "}
										<button
											onClick={e =>
												this.setState({
													list: this.state.list.filter(
														(item, i) => i !== index
													)
												})
											}>
											delete this item
										</button>
									</li>
								))}
						</ul>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
