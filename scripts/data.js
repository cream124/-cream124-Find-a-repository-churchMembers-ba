
const { MongoClient } = require('mongodb');
const MONGODB = 'mongodb://localhost/churchdb';
const generateUsers = async () => {
  const users = [];

  for (let id = 1; id <= 10; id++) {
    const firstName = `Abner${id}`;
    const lastName = 'Mamani';
    const userName = 'amamani';
    const email = 'anb@gmail.com';
    const jobTitle = 'none';

    users.push({
      id,
      firstName,
      lastName,
      userName,
      email,
      jobTitle
    });
  }

  try {
    const dbConn = await MongoClient.connect(MONGODB, {
      useUnifiedTopology: true
    });
    const col = dbConn.db('churchdb').collection('users');
    await col.insertMany(users);
    await dbConn.close();
  } catch (error) {
    throw new Error(error);
  }
};

generateUsers();