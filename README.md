# Demode backend

<img src="https://user-images.githubusercontent.com/51771490/167482970-f9fbc5b8-2877-4c5e-bade-6f5fdafa4603.png" height="240px" />

Demodé is a Peruvian rock band that seeks to be a reference in terms of music at national and international level reaching the ears and hearts of their audience while at the same time performing the art of which they are most passionate.

The is the backend repository of the Demodé web application. 
Made with NodeJS, TypeScript, Express and uses a Mongo database hosted in a MongoDB Atlas cluster for storing data. It exposes a REST API that allows request to be made from a client. 

You can find the client application [here](https://github.com/LeuGimrt/demode-frontend).

## Prerequisites
- NodeJS >= 16.0.0 installed.
- A MongoDB instance running locally or in the cloud.

## Running the server

### Setting up the environment

Create a .env file:
```
PORT=<port (default=5000) | optional>
CLIENT_URL=<cors origin (default: http://localhost:3000) | optional>
MONGO_USER=<mongodb user>
MONGO_PASSWORD=<mongodb password>
MONGO_HOST=<mongodb host>
MONGO_DATABASE=<mongodb database name (default=demodedb) | optional>
ACCESS_TOKEN_SECRET=<secret key for jwt>
```

### Install all the packages
```
npm install
```
or (if you're using yarn):
```
yarn
```


### Start the server
```
npm install
```
or (if you're using yarn):
```
yarn
```

It should start running on localhost:5000 or on the specified port 🤓
