const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

// const typeDefs = require('../typeDefs');
// const resolvers = require('../resolvers');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const authentication = require('./middleware/is-auth');

// const MONGODB = 'mongodb://127.0.0.1:27017/churchdb?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.1';
const MONGODB = 'mongodb://127.0.0.1/churchdb';

const main = async () => {
  await mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.set('strictQuery', true);
};

main()
  .then(console.log('🎉 connected to database successfully'))
  .catch(error => console.error(error));


const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  context: ({ req }) => {
    const token = req.headers.authorization || null;
    const {isAuth, level, _id} = authentication.validateUser(token);
    // const isAuth = resp.state;
    return { token, isAuth, level, _id };
  }
})

server.listen({ port: 4000 }).then(({ MONGODB }) => {
  console.log(`🚀 Server ready at ${MONGODB}`);
});
