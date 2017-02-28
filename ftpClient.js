var JSFtp = require("jsftp");
 
var ftp = new JSFtp({
  host: "127.0.0.1",
  port: 7002, // defaults to 21 
  // user: "user", // defaults to "anonymous" 
  // pass: "1234" // defaults to "@anonymous" 
});

ftp.ls(".", function(err, res) {
  res.forEach(function(file) {
    console.log(file.name);
  });
  
  ftp.raw.quit(function(err, data) {
    if (err) return console.error(err);
    console.log("Bye!");
  });
});