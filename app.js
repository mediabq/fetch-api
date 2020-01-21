document.querySelector('#button1').addEventListener('click', getText);

document.querySelector('#button2').addEventListener('click', getJson);

document.querySelector('#button3').addEventListener('click', getExternal);

function getText() {
    fetch('test.txt')
    .then( res => {
        return res.text();
    })
    .then( data => {
        document.querySelector('#output').innerHTML = data;
    })
    .catch( err => {
        console.log(err);
    });
}

function getJson() {
    fetch('posts.json')
    .then( res => {
        return res.json();
    })
    .then( data => {
        let output = '';
        data.forEach(function(post) {
            output += `<li>${post.title}</li>`
        })
        document.querySelector('#output').innerHTML = output;
    })
    .catch( err => {
        console.log(err);
    });
}
 
function getExternal() {
    fetch('https://api.github.com/users')
    .then( res => {
        return res.json();
    })
    .then( data => {
        let output = '';
        data.forEach(function(user) {
            output += `<li>${user.login}</li>`
        })
        document.querySelector('#output').innerHTML = output;
    })
    .catch( err => {
        console.log(err);
    });
}