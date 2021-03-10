import { 
    FETCH_MOVIE_REQUEST,
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR,
 } from "./movieTypes"
 import axios from 'axios'

export const fetchMovieRequest = (payload) => {
    return {
        type: FETCH_MOVIE_REQUEST,
        payload
    }
}

export const fetchMoviesRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST
    }
}


export const fetchMoviesSuccess = (movies) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}


export const fetchMoviesError = (error) => {
    return {
        type: FETCH_MOVIES_ERROR,
        payload: error
    }
}

export const fetchMovies = () => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest)
        axios.get('http://localhost:4000/movies')
            .then(res => {
                const movies = res.data.data
                console.log('React data: ', res.data)
                dispatch(fetchMoviesSuccess(movies))
            })
            .catch(e => {
                const error = e.message
                dispatch(fetchMoviesError(error))
            })
    }
}