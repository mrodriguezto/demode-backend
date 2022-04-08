# Demode - Backend

API on Heroku: https://demode-backend.herokuapp.com/

## Running on local

#### Install dependencies:
```
npm install
```
or
```
yarn
```

#### Create an .env file and set the following variables:

```
PORT=<port | optional>   
MONGO_USER=<your_mongodb_user>
MONGO_PASSWORD=<your_mongodb_password>
MONGO_DATABASE=<your_mongodb_database | optional>
MONGO_HOST=<your_mongodb_host>
ACCESS_TOKEN_SECRET=<a_secret_key_for_jwt>
```

#### Running the server
```
npm run dev
```
or 
```
yarn dev
```
