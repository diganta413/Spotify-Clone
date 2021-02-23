export const initialState={
    user: null,
    playlists: [],
    playing: false,
    item: null,
    bengali_favourites: null,
    current_playlist: null,
    current_song: null,
}

const reducer=(state,action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_MUSIC':
            return {
                ...state,
                bengali_favourites: action.music,
            }
        case 'SET_CURRENT_PLAYLIST':
            return {
                ...state,
                current_playlist: action.current_playlist,
            }
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing,
            }
        case 'SET_CURRENTSONG':
            return {
                ...state,
                current_song: action.current_song,
            }
        default:
            return state;
            
    }
}

export default reducer;