import axios from "axios";

const api = axios.create( {
    baseURL : "https://api.themoviedb.org/3/",
    params : {
        api_key : "c4894c55fd942ec65bdfe21c9304cd4b",
        language : "en-US"
    }
})

export const moviesApi = {
    nowPlaying : () => axios.get("movie/now_playing"),
    ucoming : () => axios.get("movie/upcoming"),
    popular : () => axios.get("movie/popular"),
    movieDetail : (id) => axios.get(`movie/${id}`)
}

export const tvApi = {
    topRated: () => axios.get("tv/top_rated"),
    popular : () => axios.get("tv/popular"),
    airingToday: () => axios.get("tv/airing_today"),
    showDetail : (id) => axios.get(`tv/${id}`)
}