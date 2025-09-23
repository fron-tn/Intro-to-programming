// assignment page 98

var name = "SmokeWeed";

if (name === "Smokeweed") {
    console.log("Hello me!");
} else {
    console.log("Hello stranger!");
}

var name = "John";

if (name === "John") {
    console.log("Hello me!");
} else {
    console.log("Hello stranger!");
}

var name = "Johnny"; 

if (name === "Johnny") {
    console.log("Hello me!");
} else if (name === "Father") { 
    console.log("Hi dad!");
} else if (name === "Hope") { 
    console.log("Hi mom!");
} else {
    console.log("Hello stranger!");
}


// assignment page 102

for (var i = 1; i < 10000; i *= 3) {
    console.log(i);
}

var i = 3;

while (i < 10000) {
    console.log(i);
    i *= 3;
}