import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import LibraryMusicRoundedIcon from "@material-ui/icons/LibraryMusicRounded";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import { useStateValue } from "./StateProvider";

const Sidebar = () => {
	const [{ playlists }, dispatch] = useStateValue();
	return (
		<div className="sidebar">
			<img src="images/logo512.png" alt="" />
			<SidebarOption Icon={HomeRoundedIcon} option="Home" />
			<SidebarOption Icon={SearchRoundedIcon} option="Search" />
			<SidebarOption Icon={LibraryMusicRoundedIcon} option="Your Library" />
			<br />
			<SidebarOption Icon={AddCircleRoundedIcon} option="Create Playlist" />
			<SidebarOption Icon={FavoriteRoundedIcon} option="Liked Songs" />
			<hr />
			{playlists?.items?.map((playlist) => {
				return <SidebarOption option={playlist.name} />;
			})}
		</div>
	);
};

export default Sidebar;
