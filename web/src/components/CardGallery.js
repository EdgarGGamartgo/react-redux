import React, { useEffect } from 'react'
import { CardsContainer } from './../styles'
import MovieCard  from './MovieCard'
import { MovieGallery } from './../__mocks__'
import { connect } from 'react-redux'
import { fetchMovies } from './../redux'

const CardGallery = ({ movies,  fetchMoviesRequest}) => {


    useEffect(() => {
        fetchMoviesRequest()
    }, [fetchMoviesRequest])

    return (
            <CardsContainer>
                {/* {
                    movies.map( movie => (
                        <li>{movie.title}</li>
                    ))
                } */}
                {
                    MovieGallery.map(movie => {
                        return (
                            <MovieCard
                            url={movie.url}
                            overview={movie.overview}
                            movieId={movie.id}
                            key={movie.id}
                            id={movie.id}
                            img={movie.img}
                            title={movie.title}
                            genre={movie.genre}
                            releaseDate={movie.releaseDate}
                            imgAlt={movie.imgAlt}
                            runtime={movie.runtime}
                            />
                        )
                    })
                }
            </CardsContainer>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMoviesRequest: () => dispatch(fetchMovies())
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movie.movies
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardGallery)