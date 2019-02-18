var http=require('http')
var fs=require('fs');
var url=require('url');
http.createServer(function(request,response){
 var pathname = url.parse(request.url).pathname;
   if(pathname.substr(1)==''){
fs.readFile('beforelogin.html',function(err,data){
if(err){
console.log(err);
response.writeHead(404,{'Content-Type':'text/html'});
}else
{
response.writeHead(200,{'Content-Type':'text/html'});
response.write(data.toString());
}
response.end();
});
}
else
{
fs.readFile(pathname.substr(1),function(err,data){
if(err){
console.log(err);
response.writeHead(404,{'Content-Type':'text/html'});
}else
{
response.writeHead(200,{'Content-Type':'text/html'});
response.write(data.toString());
}
response.end();
});
}
}).listen(8081);
console.log('server running at 127.0.0.1:8081/');