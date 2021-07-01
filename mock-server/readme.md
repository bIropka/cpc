### Start sever  ###
`docker-compose up -d`

### Stop server ###
`docker-compose down`

### Rebuild after changes ###
`docker-compose up --build -d'

### GraphQL playground (Web UI GraphQL client) ###
[http://localhost:8090/playground](http://localhost:8080/playground)

### Mongo Express (Web UI mongoDB client)
[http://localhost:8071/](http://localhost:8071/)


### Restore db dump
`docker-compose exec -T mongo sh -c 'mongorestore --archive -p root -u root' < dump/db.dump`

### Create db dump
`docker-compose exec -T mongo sh -c 'mongodump --archive -p root -u root' > dump/db.dump`

### Import from json file
`docker cp MOCK_DATA.json mongo_db:/MOCK_DATA.json`

`docker-compose exec -T mongo sh -c 'mongoimport --db demo --collection account --file MOCK_DATA.json --jsonArray --password root --username root --authenticationDatabase admin'`