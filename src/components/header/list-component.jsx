import React from "react";

export const List = (props) => {
	return(
		<ul className={props.listClass}>
			{props.listItems}
		</ul>
	)
}