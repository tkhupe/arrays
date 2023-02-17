// WRITE YOUR CODE HERE
var studentNames = ['bo','jo','ho','mo','ro']

console.log(studentNames.length)

for (i = 0; i < studentNames.length; i++) {

    console.log('Welcome to the class ' + studentNames[i])
}

studentNames.unshift('lee');

console.log(studentNames[0]);
if (studentNames[0] == 'lee') {
    console.log(studentNames[0] + ' is in class' )
    console.log('REPLACED_NAME is in class' )
}