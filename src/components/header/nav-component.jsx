import React from "react";
import { List } from "./list-component";

export const Nav = (props) => {
	return (
		<nav className={props.navClass}>
			<List listClass={props.listClass} listItems={props.navItems} />
		</nav>
	);
}