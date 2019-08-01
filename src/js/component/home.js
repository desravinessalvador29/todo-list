import React from "react";
import { Todolist } from "./todolist";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Todolist />
			</React.Fragment>
		);
	}
}
