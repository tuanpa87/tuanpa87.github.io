const fs = require('fs');

//rename file
//fs.renameSync('./newFile.js', 'newDir/newFile2.js')


//rename or move Dir
fs.renameSync('./newDir/ChildDir', './ParentDir');
