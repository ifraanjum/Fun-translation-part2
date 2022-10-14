var button1=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var divOutput=document.querySelector("#output");



var chefURL="https://api.funtranslations.com/translate/chef.json"
function  getTranslationURL(text)
{
    return chefURL + "?"  + "text= " +text
}

function errorHandler(error)
{
    console.log("error occured!",error)
}


button1.addEventListener("click" , function clickEventHandler()
{
  
    var textInput=txtInput.value;
    fetch(getTranslationURL(textInput))
    .then(response=>response.json())
    .then(json=>{
        var translatedtext=json.contents.translated
        divOutput.innerText=translatedtext
    })
    .catch(errorHandler)
})











