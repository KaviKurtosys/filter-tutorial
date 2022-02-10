import { motion } from 'framer-motion';

function Movie({movie}){
    return(
        <motion.div 
            layout
            animate={{ opacity: 1, scale: 1 }} 
            intial={{opacity: 0, scale: 0}} 
            exit={{opacity: 0, scale: 0 }} 
            transition={{ duration: 1 }}
        >
            <h2>{movie.title}</h2>
            <img src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt=""></img>
        </motion.div>
    )
}

export default Movie;