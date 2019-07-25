# server-auth-starter

Node API authentication with JWT starter app

This starter app will create two endpoints for **register** and **signin**. It uses mongodb to store user information.
When user signin a jwt token is generated and returned in response. This token can be used to access protected resources on the server.

Registration of user
```
POST http://localhost:3000/accounts/register


{
	"username": "USERNAME",
	"password": "PASSWORD"
}
```

Signin
```
POST http://localhost:3000/accounts/signin


{
	"username": "USERNAME",
	"password": "PASSWORD"
}
```


Access protected resource
```
GET http://localhost:3000/dummy/protected
```

This will fail with 'Access denied!' message.
To access this protected resource set **Authorization** header with the token returned in signin request before making the request
```
Authorization : Bearer <ACCESS_TOKEN_RECIEVED_AFTER_SIGNIN>
```

Database connect url and token secret are stored in `.env` file.
**dotenv** node module is used to loads environment variables from a .env file into process.env




# setup
```
git clone https://github.com/rahool/server-auth-starter.git
npm install
```

To start the api server
```
npm start
```
It's configured to start the app in **nodemon**. This can be changed in package.json scripts
**nodemon** helps in automatically restarting the node application when file changes in the directory are detected. 
Helpful while developing app.


### other modules used
**mongoose** is for MongoDB object modeling.

**@hapi/joi** is used as Object schema description language and validator for JavaScript objects.

**bcryptjs** is used creating hashed passwords.

**jsonwebtoken** for jwt.

# 
