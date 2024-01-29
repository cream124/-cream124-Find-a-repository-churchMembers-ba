//import { Users } from '../models/users.js';
const Movie = require('./models/movie');

const getMovies = async () => {
  return await Movie.find({});
}

const getMovie = () => {
  return Movie.findOneById(id);
}

module.exports = {
  Query: {
    getMovies: async (_, _args) => {
      return getMovies();
    },
    getMovie: async (_, { id }) => {
      return getMovie(id);
    }
  },
  Mutation: {
    createMovie: async (_, args, { dataSources: { movies } }) => {
      return movies.createMovie(args)
    }
  }
}

// module.exports = {
//   Query: {
//     getMovies: async (_, _args, { dataSources: { movies } }) => {
//       return movies.getMovies();
//     },
//     getMovie: async (_, { id }, { dataSources: { movies } }) => {
//       return movies.getMovie(id);
//     }
//   },
//   Mutation: {
//     createMovie: async (_, args, { dataSources: { movies } }) => {
//       return movies.createMovie(args)
//     }
//   }
// }