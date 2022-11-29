const http = require("http");
const fs = require("fs");
var requests = require("requests");
const homeFile = fs.readFileSync("home.html","utf-8");
const replaceVal = (tempVal, orgVal) =>{
    let temperature = tempVal.replace("{%tempval}", orgVal.main.temp); 
};
const server = http.createSever((req,res) => {
    if(req.url="/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=a622cd07576157783eda316495d8a896" )
        .on("data", (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            // console.log(arrData[0].main.temp);
            // const realTImeData = (arrData.map(val) => {
            //     replaceVal(homeFile,val);
            // });
        })
        .on("end", (err) => {
            if (err) return console.log("connection closed due to errors", err);
            console.log("end");
        });
    }   
});
server.listen(8000, "127.0.0.1");   