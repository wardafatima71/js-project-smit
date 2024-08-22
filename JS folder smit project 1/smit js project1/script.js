// Task 1: Greet the website visitor using a JS alert box
 alert("Hello, welcome to Warda's portfolio!");

// Task 2: Display the following message on your web page
 document.getElementById('message').innerText = "Welcome to JavaScript programming!";

// Task 3: Display the following message on your web page with a line break
 document.getElementById('lineBreakMessage').innerHTML = "Hello there! <br>Welcome to the JavaScript world.";

// Task 4: Display the following messages in sequence
let messages = ["Hello!", "How are you?", "Hope you're having a great day!"];
let sequenceMessage = document.getElementById('sequenceMessage');
messages.forEach((msg, index) => {
    setTimeout(() => {
        sequenceMessage.innerHTML += msg + "<br>";
    }, index * 1000);
});

// Task 5: Generate the following message through the browser’s developer console
 console.log("This is a console message from the external JavaScript file.");

// Task 6: Practice placing <script> element in different sections
//  The script file is already linked in the body of the HTML file in Task 7
