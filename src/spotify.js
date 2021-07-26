export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "8f5267a140754b25a5d5b64b97823b45";
const redirectUri = "https://prashant-dayanand.github.io/spotify-clone/";
const scopes = [
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
];

export const getTokenFromResponse = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			var parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};

console.log(window.location.hash);

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;
