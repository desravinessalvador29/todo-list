import React from "react";
export class Todolist extends React.Component {
	constructor() {
		super();
		this.state = {
			list: []
		};
	}
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<h1>To-do List</h1>
					<div className="items">
						<div>
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
						<ul className="list-group">
							{this.state.list.map((value, index) => (
								<li key={index} className="list-group-item">
									{value}{" "}
									<button
										onClick={e =>
											this.setState({
												list: this.state.list.filter(
													(item, i) => i !== index
												)
											})
										}>
										delete
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
