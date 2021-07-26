import Login from "./Login";
import React, { useState, useEffect } from "react";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import { useStateValue } from "./StateProvider";
import Player from "./Player";

const spotify = new SpotifyWebApi();

function App() {
	const [{ user, token }, dispatch] = useStateValue();

	useEffect(() => {
		const hash = getTokenFromResponse();
		window.location.hash = "";
		let _token = hash.access_token;
		console.log(_token);
		if (_token) {
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});
			spotify.setAccessToken(_token);
			spotify.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					user: user,
				});
			});
			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: "SET_PLAYLIST",
					playlists: playlists,
				})
			})
			spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
		}
		console.log(hash);
	});

	return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
