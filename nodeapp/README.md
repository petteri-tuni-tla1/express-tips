# Express Node.js Application

## Install nvm and node

````
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
source .bashrc
nvm install --lts
node --version
````

## Create Express app

````
mkdir nodeapp
cd nodeapp
npm init
npm install express --save
````

## Run and test

````
node app.js &
curl http://localhost:3000
curl http://localhost:3000/foo
curl http://localhost:3000/asfga/asg
````

# Links

* https://expressjs.com/en/starter/installing.html
* https://www.npmjs.com/package/nodemon

