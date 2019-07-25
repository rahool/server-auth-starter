# server-auth-starter

Node API authentication with JWT starter app

This starter app will create two endpoints for **register** and **signin**. It uses mongodb to store user information.
When user signin a jwt token is generated and returned in response. This token can be used to access protected resources on the server.

Registration of user: POST user data to 
```
POST http://localhost:3000/accounts/register


{
	"username": "USERNAME",
	"password": "PASSWORD"
}
```

Signin: POST username/pasword to
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
To access this protected resource set **Authorization** header with the token returned in signin request
```
Authorization : Bearer <ACCESS_TOKEN_RECIEVED_AFTER_SIGNIN>
```


# setup
```
git clone https://github.com/rahool/server-auth-starter.git
npm install
```

To start the api server
```
npm start
```

# 
