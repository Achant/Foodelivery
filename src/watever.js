const fs = require('fs')
let file = fs.readFileSync('public/index.html','utf8')
let insideFile = file.split('.css')
for ( let i = 0; i <insideFile.length; i++ ){
  if (insideFile[i].startsWith('http') && !insideFile[i].endsWith('.css')){

  } 
}
console.log(insideFile)
