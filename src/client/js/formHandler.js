function handleSubmit(event) {
    event.preventDefault()
 
    // article url 
    let formText = document.getElementById('url').value
    //error message appear if formText value is invalid
    let invalid = document.getElementById('invalid')
    // show data that returned from api to user
    let form_result = document.getElementById('form_result')
    let result = document.getElementById('results')
     //regular expression to check for  url construction 
    let url_pattern = new RegExp("(www.|http://|https://|ftp://)\w*");
    if (url_pattern.test(formText)) {
        console.log("ok")
        //if url is valid then disappear previous error message if exist 
        invalid.style.display = "none"
        //appear form results 
        form_result.style.display = "block"
        //create json object  to be  sent url  to server side 
        const option = {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                formText: formText
            })
        }
        // console.log(JSON.parse(option.body))
        //send json object to server side "localhost/text"
        fetch('/text', option)
        console.log(typeof(formText), typeof(option.body), option.body)


        console.log("::: Form Submitted :::")
         //get data from server after server get it from api "localhost/url" 
        fetch('http://localhost:3013/url')
            .then(res => {
                return res.json()

            })
            .then(function(data) {
                console.log(data)
                //make user see the  data 
                result.innerHTML = `<div id="ss"><span id ="s">Article Agreement : </span> ${data.agreement}<br>
            <span id ="s">Article Confidence : </span> ${data.confidence}</div`
            //empty data array  after send to user to ready for new data
                data = []

            })

    } else {
        //if url construction wasnt valid
        console.log("no")
        invalid.style.cssText = "display:block ; color:#e60000 ; font-size: 20px  ; text-shadow: 0.5px 0.5px 1px black; "
        invalid.textContent = "*  write valid url"
        form_result.style.display = "none"


    }

}
//export function to import it in src/client/index.js to make webpack deal with it 
export {
    handleSubmit
}