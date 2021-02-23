const auth='https://accounts.spotify.com/authorize';
const redirect_uri="http://localhost:3000/";

const api_key="f62b5e3552aa4fcc8689340ded75e441";
const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played", 
    "user-read-playback-state", 
    "user-top-read", 
    "user-modify-playback-state",
    "playlist-read-private",
]

export const getaccesstoken = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item) => {
        let parts=item.split("=");
        initial[parts[0]]=decodeURIComponent(parts[1]);
        return initial;
    },{});
}

export const url=`${auth}?client_id=${api_key}&scope=${scopes.join("%20")}&redirect_uri=${redirect_uri}&response_type=token&show_dialog=true`;