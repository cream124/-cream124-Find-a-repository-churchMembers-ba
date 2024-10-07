npm init --yes

docker-compose up -docker

npm install @apollo/server graphql mongoose nodemon

====deploy=========
Dowload
https://www.docker.com/products/docker-desktop/

https://learn.microsoft.com/es-mx/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package


#### 3. Install MongoDb 4.1 in docker container.

1. Download the image:
   `docker pull mongo:4.4`
2. Create a docker network:
   `docker network create -d bridge mongo-network`
3. Verify the network was created:
   `docker network ls`
4. Create and start mongo db docker container with:
   `docker run -d --name mongo -p 27017:27017 --net mongo-network mongo:4.4`
5. Enter docker bash:
   `docker exec -it mongo bash`
6. enter mongo shell.
   ` mongo`
   
      show dbs 
      
      use churchdb
      
      db.movies.insert({title: "Ada Lovelace", rating: 205, year: 205})
      WriteResult({ "nInserted" : 1 })

      -- show collections;

      db.[coleccion].find();
      db.Membership.find();
7. Proceed to create the replica set (Allows transactions to work):
   `rs.initiate( { _id: "rs0", version: 1, members: [ { _id: 0, host : "mongodb1:27017" }]} )`
8. Verify that replica was init correctly:
   `rs.status()`
9. use db admin
   `use admin`
10. create user and db from admin
    `db.createUser( { user: "root", pwd: "root", roles: [ { role: "readWrite", db: "bootcamp_development" }, { role: "readWrite", db: "setting" }],} );`
11. Exit:
    `exit`
12. Credentials:

==========
npm install
npm start
npm run addPerson

