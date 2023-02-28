import React from "react";
import logo from "../img/react-logo.jpeg";
export default function Header() {
	return (
		<div className="header">
			<img className="react-logo" src={logo} alt="React-Logo" />
			<h3 className="logo-text">ReactFacts</h3>
			<h4 className="course-name">React Course - Project 1</h4>
		</div>
	);
}
