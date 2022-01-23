const request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function() 
    {
       if(request.status==200)
       {
   let c=JSON.parse(request.responseText);
   c.map((a)=>{
console.log(a.flags.svg)
   })
}
else{
    request.onerror = function () {
        console.log("error")
    };
}}
