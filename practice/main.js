console.log("hello");

const server = http.createServer((request,response)=>{
    console.log(request.url);
    console.log(request.method);
})

server.listen(3000);