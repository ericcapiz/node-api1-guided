//create package.json = npm init -y
//npm install express
//npm install gitignore -g
//gitignore node = add gitignore file

//npm install nodemon -D = server to listen
//start server = node index.js

// add to package.json on scripts
// "start": "node index.js",
//     "server": "nodemon index.js"

//npm run server

const server = require('./api/server');

server.listen(3000,()=>{
    console.log(`\n *** listening on port 3000 *** \n`)
})
