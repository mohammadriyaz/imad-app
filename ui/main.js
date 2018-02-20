// counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
    
    // Create request object
    var request = new XMLHttpRequest();
    
    //Capture the response and share it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = documet.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        // Not done yet
    };
    request.open('GET','http://riyazstone23.imad.hasura-app.io/counter', true);
    request.send(null);
};