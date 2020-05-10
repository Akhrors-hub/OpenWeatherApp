console.log("borini Ober !!!");



// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState);
//     if (request.readyState === 4) {
//         console.log(request.responseText);

//     }
// })

// request.open("GET", "https://jsonplaceholder.typicode.com/todos/")
// request.send();




// const request = new XMLHttpRequest();
// request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
// request.send();

// request.addEventListener('readystatechange', () => {
//     console.log(request, request.readyState);
//     if (request.readyState === 4) {
//         console.log(request.responseText);

//     }
// })




const axror = new XMLHttpRequest();

axror.open("GET", "https://jsonplaceholder.typicode.com/todods/");
axror.send();


axror.addEventListener('readystatechange', () => {

    // console.log(axror, axror.readyState);

    if (axror.readyState === 4 && axror.status === 200) {
        console.log(axror, axror.responseText);

    } else if (axror.readyState === 4) {
        console.log("axror's result");

    }
});




// const request = new XMLHttpRequest();
// request.open('GET', "https://jsonplaceholder.typicode.com/todos/");
// request.send();

// const request = new XMLHttpRequest();
// request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
// request.send();



// request.addEventListener('readystatechange', () => {
//     console.log(request, request.readyState);
//     if (request.readyState === 4) {
//         console.log(request.responseText);

//     }
// })