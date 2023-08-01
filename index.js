const fs = {writeFile,readFile,appendFile} = require('fs')

let file = './data.txt';

let content = 'Node is fun!';

let newContent = 'Node is awesome!!'

fs.readFile(file,'utf-8',(err,data)=>{
    if (err) {
        console.error(err);
        return;
    }
    console.log(data)
});

fs.writeFile(file,'utf-8', err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(content)
});
fs.writeFile(file, content, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(content)
});
//The second content did not override the previous content

fs.appendFile(file, newContent, err =>{
    if (err) {
        console.error(err);
        return;
    }
    console.log(newContent);
});


