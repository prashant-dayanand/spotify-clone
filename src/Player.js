import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Body from "./Body";
import "./Player.css"

const Player = ({spotify}) => {
	return (
		<div className="player">
			<div className="player-body">
				<Sidebar />
				<Body spotify={spotify}/>
			</div>
			<Footer />
		</div>
	);
};

export default Player;
