## [ Pre registration - including landing page /home]


## Prerequisites

1. Latest version of Node to be installed.
2. Install MongoDB and make sure it is configured on constants.ts).
3. if you are getting some warnings about ts dependencies, do this:  npm install typescript-register ts-node

## Steps to Run
```sh
    npm install          <= install all the npm Dependencies
    npm run build        <= build client and server application.
    npm run start        <= start the Nodemon and watch for changes.
```

## Global packages
```
    npm install ts-node -g
    npm install typescript-node -g
    npm install typescript-register -g

```

## Directory Structure
```
preregistration-example
    ├── node_modules
    ├── client
    │    ├── app
    │    │    ├── Components
    │    │    │    ├── dashboard
    │    │    │    │    ├── dashboard.component.css
    │    │    │    │    ├── dashboard.component.html
    │    │    │    │    ├── dashboard.component.ts
    │    │    │    ├── userDetail
    │    │    │    │    ├── user-detail.component.css
    │    │    │    │    ├── user-detail.component.html
    │    │    │    │    ├── user-detail.component.ts    
    │    │    │    ├── users
    │    │    │    │    ├── users.component.css
    │    │    │    │    ├── users.component.html
    │    │    │    │    ├── users.component.ts    
    │    │    ├── models
    │    │    │    ├── user.ts
    │    │    ├── services
    │    │    │    ├── user.service.ts            <= User Service for fetching api
    │    │    ├── app.component.css
    │    │    ├── app.component.ts
    │    │    ├── app.html
    │    │    ├── app.module.ts
    │    │    ├── app.routing.ts
    │    │    ├── main.ts
    │    ├── typings
    │    ├── index.html
    │    │    ├── systemjs.config.js
    │    ├── tsconfig.json
    │    ├── typings.json
    ├── server
    │    ├── src
    │    │    ├── app
    │    │    │    ├── business                    <= business logic for application
    │    │    │    │    ├── common
    │    │    │    │    │    ├── Read.ts           <= common Read method
    │    │    │    │    │    ├── Write.ts          <= common Write method
    │    │    │    │    ├── interfaces
    │    │    │    │    │    ├── UserBusiness.ts
    │    │    │    │    ├── BaseBusiness.ts
    │    │    │    │    ├── UserBusiness.ts
    │    │    │    ├── dataAccess
    │    │    │    │    ├── schemas
    │    │    │    │    │    ├── UserSchema.ts    <= User Schema for MongoDB
    │    │    │    │    ├── DataAccess.ts         <= Connection with MongoDB
    │    │    │    ├── model
    │    │    │    │    ├── interfaces
    │    │    │    │    │    ├── UserModel.ts
    │    │    │    │    ├── UserModel.ts
    │    │    │    ├── repository
    │    │    │    │    ├── interfaces
    │    │    │    │    │    ├── Read.ts
    │    │    │    │    │    ├── Write.ts
    │    │    │    │    ├── BaseRepository.ts
    │    │    │    │    ├── UserRepository.ts
    │    │    ├── config
    │    │    │    ├── constants
    │    │    │    │    ├── constants.ts         <= Constants - mongodb connection string.
    │    │    │    ├── routes
    │    │    │    │    ├── UserRoutes.ts        <= User API Routes like get,post,put,delete
    │    │    │    │    ├── Routes.ts            <= fetching all appliction routes here
    │    │    ├── controller
    │    │    │    ├── interfaces
    │    │    │    │    ├── ReadController.ts
    │    │    │    │    ├── WriteController.ts
    │    │    │    ├── BaseController.ts         <= Base Repository controller
    │    │    │    ├── UserController.ts
    │    │    ├── server.ts
    │    ├── typings
    │    ├── tsconfig.json
    │    ├── tsconfig.json
    ├── gulpfile.ts                              <= gulp tasks : clean, build, compile, run.
    ├── LICENSE
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    ├── tslint.json
```

## Api Document (from MongoDB)
```
1. getAll    http://localhost:3000/api/users             <= get all users
1. getById   http://localhost:3000/api/users/:id         <= get user by Id
2. post      http://localhost:3000/api/users             <= create user
2. put       http://localhost:3000/api/users/:id         <= update user
2. delete    http://localhost:3000/api/users/:id         <= delete user

```



