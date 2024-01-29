// import ResolutionsSchema from './resolutions/Resolutions.graphql';

const { ApolloServer } = require('apollo-server');
// import { startStandaloneServer } from '@apollo/server/standalone';
const mongoose = require('mongoose');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');


// import { Movie as MovieModel } from './models/movie.js';
// const MovieModel = require('./models/movie.js');
// const Movies = require('./dataSources/movies.js');

// import {typeDefs} from './graphql/typeDefs.js';
// import {resolvers} from './graphql/resolvers.js';

// MONGODB_URI="mongodb+srv://<username>:<password>@apollogql-demo.kk9qw.mongodb.net/apollogql-db?retryWrites=true&w=majority";
// const MONGODB = 'mongodb://root:root@localhost/bootcamp_development';
const MONGODB = 'mongodb://localhost/churchdb';

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];
// const typeDefs = `#graphql
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     books: [Book]
//   }
// `;

// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };




const main = async () => {
  await mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.set('strictQuery', true);
};

main()
  .then(console.log('🎉 connected to database successfully'))
  .catch(error => console.error(error));

  // const dataSources = () => ({
  //   movies: new Movies(MovieModel),
  // });

const server = new ApolloServer({ typeDefs, resolvers })
// const server = new ApolloServer({ typeDefs, resolvers  })

server.listen({ port: 4000 }).then(({ MONGODB }) => {
  console.log(`🚀 Server ready at ${MONGODB}`);
});



// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// });

// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });

// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });

// console.log(`🚀  Server ready at: ${url}`);


// mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true, strictQuery: true})
//   .then(() => {
//     console.log('Momgo runing')
//     return server.listen({port:27019});
//   })
//   .then((res) => {
//     console.log(`Server in runing at ${res.url}`)
//   })