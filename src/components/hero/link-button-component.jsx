import React from "react";

export const LinkButton = (props) =>{
    return (
        <a href={props.href} className={props.anchorClass} target="blank">
            <i className={props.iconClass}></i>
            <span>{props.value}</span>
        </a>
    );
}