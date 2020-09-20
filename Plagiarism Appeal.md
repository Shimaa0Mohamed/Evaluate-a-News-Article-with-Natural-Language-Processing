# here i will explain how i code my project step by step #

###    1- i follow the course step by step and at the end of course i get this edition 
    ```
        https://drive.google.com/file/d/14s_B3GiXZ3zr7eAI-_j3DKhjsY7oTUCi/view?usp=sharing
    ```

###    2-i make changes to html &scss "form design , where data will appear ,footer ,.."

###    3-start to code api in server side &client side 
        a- download meaning-cloud library"(
        
        ```npm install meaning-cloud --save
        ```
        )  and require it in server/index.js
        b-update formHandler function to accept url from user instead of name
           and check if the url format is valid or not if valid  convert it to json object
           then send it to server side
           ```fetch('/text', option)
           ```
           & accept data returned from server(data that reurned to server from thr api )
         ``` fetch('http://localhost:3013/url')
            .then(res => {
                return res.json()

            })
            ```
            then make data appear to user in browser 
            ```
            .then(function(data) {
                console.log(data)
                //make user see the  data 
                result.innerHTML = `<div id="ss"><span id ="s">Article Agreement : </span> ${data.agreement}<br>
            <span id ="s">Article Confidence : </span> ${data.confidence}</div`
            ```
            in this function i was following function in formHandler.js in that we built during course
            ```
                fetch('http://localhost:8080/test')
                 .then(res => res.json())
                 .then(function(res) {
                 document.getElementById('results').innerHTML = res.message
                  }) 
             ```
              if url was invalid then all the above code will not execute 
             and we will make "from results " div disappear 
               and show error message to user 
            ```
            console.log("no")
            invalid.style.cssText = "display:block ; color:#e60000 ; font-size: 20px  ; text-shadow: 0.5px 0.5px 1px black; "
            invalid.textContent = "*  write valid url"
            form_result.style.display = "none"
            ```
                  -----------------------------------------------
                  in server side server/index.js 
                  1- first i create .env file to put api key that i get
                      from meaning cloud website i follow steps in udacity project instruction page
                     (create .env file & add .env to .gitignore )
                     add this code to server/index.js
                     ```
                      const dotenv = require('dotenv');
                       dotenv.config();
                      ```
                 2-download library to deal with http &https "because of api response  error i search and find thiss library"
                    (
                    ```
                    npm i follow-redirects
                    ```
                    ) &
                    ```
                    var https = require('follow-redirects').https;
                    ```
                3-i accept url that user enter and client send it to server in
                ``` 
                    fetch('/text', option) 
                ``` 
                  that mentioned above
                ```
                          app.post('/text', (req, res) => {
                           urll = req.body.formText;
                    //put data in object to send to api 
                         var options = {
                          'method': 'POST',
                        'hostname': 'api.meaningcloud.com',
                   'path': `/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&url=${urll}&model=general`,
                      'headers': {},
                      'maxRedirects': 20
                          };
                     ```
             i used the same method that i used in project 3 "app.post " to accept data from client
             4-because of as mentioned in project instructions api should be server client 
                here i follow the example on meaning cloud website to deal with API 
                click this link 
                ```
                https://www.meaningcloud.com/developer/sentiment-analysis/doc/what-is-sentiment-analysis
                then choose examples
                ```
            5-finally i send data to client after server save data in
            ```
            var body = Buffer.concat(chunks);
            ```
                  i use app.get like i do in my third project 
             ```
                  app.get('/url', function(req, res) {
                  res.send(body) 
              ```
       ---------------------------------------------------------------------
###    3- because all js files  in client will not appear to project without i import it in 
                client/index.js 
                i export formHandler and import it in client /index.js & also to see design in html tat will not appear if we dont import it in client /index.js 
                i import all scss files 
###   4- final step is jest test to test js functions in client side 
                 i foloow udacity project instructions and examples to npm install  it 
                and also inatall
                ```
                @babel/polyfill  
                
                add in package.json  "bail": 1,
                                  "verbose": true,
                               ```
               to solve jest error tat i face
###  5- i deploy my project in heraku
-------------------------------------------------------------------------------------------------------------------------------------------------------------
# above i explain how i code my project 
## i get stuck many times in this project i work in it for 18 days...
##  because it was my first time to learn cmd and terminal coding and i face many errors 
##  take much time to learn how to solve terminal and node error
##   it was my first time to deal with github branchs and i get stuck many times 
##   This project took a lot of my effort.... so please review it  agian after reading this
##   and please Do not deprive me of this nanodegree course after all this effort and after it is over
##   finally i will put some links to my questions on mentor help to prove that its my own work 

i reupload my project in github after adding comment to evrey line in code to expain  this is project link
 ```
 https://github.com/Shimaa0Mohamed/Evaluate-a-news-article-with-Natural-Language-Processing
 ```
 ##  i hope you open my project old editions and see  how i improve my project step by step
 ```
   https://knowledge.udacity.com/questions/333211
   https://knowledge.udacity.com/questions/330470
   https://knowledge.udacity.com/questions/328355
   https://knowledge.udacity.com/questions/326033
   https://knowledge.udacity.com/questions/325946
 ```
 i have only 4 days to complete my nanodegree i wish you look to my issue as soon as possible
   






