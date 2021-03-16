const yargs = require('yargs');
var fs = require('fs');

if(yargs.argv.filename){
    fs.writeFile(yargs.argv.filename, 'You are awesome',
        {flag: 'wx'}, function(err,fd){
        if(err)
        {
            console.log('File exists. Enter new <filename> using yargs');
        } else{
            fs.appendFile('list_of_files.txt', yargs.argv.filename + '\n', function(err,fd){
                if(err){
                    console.log(err);
                }else{

                }
            })
        }
    })
}else{
    console.log('No input. Enter <filename> using yargs');
}