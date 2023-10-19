var topics= ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic =topics[Math.floor(Math.random() * topics.length)];


/*
var shapes = ["triangle", "square", "pentagon", "circle"];
console.log(shapes[0]);
}
*/
function listTopics() {
    for (let i = 0; i < topics.length; i++) {
        console.log(topics[i]);
    }
}
function selectTopic() {
    if (randomTopic === "HTML") {
        console.log("Let's study HTML!");
    } else if (randomTopic === "CSS") {
        console.log("Let's study CSS!");
    }
    else if (randomTopic === "Git") {
        console.log("Let's study Git!");
    } else if (randomTopic === "JavaScript") {
        console.log("Let's study JAvaScript!");
    } else {
        console.log("Please try again!");
    }
}
listTopics();
selectTopic();
console.log("Finished");