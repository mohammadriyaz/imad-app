// counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
    
    // Make a request to the counter endpoint
    //Capture the response and share it in a variable
    //Render the varaible in the correct span
    counter +=1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};