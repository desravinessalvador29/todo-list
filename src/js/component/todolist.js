import React from "react";
export class Todolist extends React.Component {
	constructor() {
		super();
		this.state = {
			list: []
		};
		this.onAddItem = this.onAddItem.bind(this);
	}

	onAddItem = e => {
		let newItem = e.target.value;
		this.setState({
			list: this.state.list.concat(newItem)
		});
	};

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
									e.charCode === 13 ? this.onAddItem(e) : null
								}
							/>
						</div>
						<ul className="list-group">
							{this.state.list.map((value, index) => (
								<li key={index} className="list-group-item">
									{value}
								</li>
							))}
						</ul>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
