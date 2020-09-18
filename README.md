# Evaluate-a-News-Article-with-Natural-Language-Processing
## Introduction 
in this project i used **_webpack_** build tool in building website that use **_meaning-cloud_** api to  evaluate article and return Sentiment Analysis , we test  projecct fuctionality by **_jest_** test , **_environmental variables_**  finally we use  **_service worker_** so if you close the server after use.. server will still work offline 

 i used in this project **_vanilla js , nodejs  , webpack  ,html  ,scss_**
 
 **_ note :_** there are some files dosent appear here in repo. but when you download the project then   write in terminal  npm i  & npm init node_modules will download  , when use production mode dist folder will download that have all style of the project in file main.css and all js of the project in main.js
 
 
 
 
 ## How To Run Locally
 project run on port 3013 put you can change it  in src/server/index.js
 
 ## Steps to handle api key
 go to https://www.meaningcloud.com/developer/sentiment-analysis and create account to get api key 
 then ----->
 Use npm to install the dotenv package - npm install dotenv This will allow us to use environment variables we set in a new file
Create a new .env file in the root of your project.
Fill the .env file with your API keys like this:
```
API_KEY=**************************
```
If you want to refer the environment variables, try putting a prefix process.env. in front of the variable name in the server/index.js file, an example might look like this:
console.log(`Your API key is ${process.env.API_KEY}`);

Go to your .gitignore file, in the project root, and add .env. It will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys would become pointless.

--------------------------------------------------------------------------------
 
 in the terminal or cmd you can run the project on production mode or development mode 
 ```
 npm i 
 npm init
 ```
 
### *to run in prduction mode* 
```
npm run build-prod
npm start
```

### *to run in development mode* 
```
npm run build-dev
```

then go to your browser and type this url->  localhost/3013 

in the input text type url of your article then press submit and wait for Sentiment Analysis *_note_* : type valid url or error message will appear

--------------------------------------------------------------------------------
 

 

 

