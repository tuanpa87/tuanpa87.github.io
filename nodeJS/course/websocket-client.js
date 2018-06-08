const WS = new WebSocket('ws://localhost:3233');

function displayTitle(title) {
    document.querySelector('h1').innerHTML = title;
}


function displayMessages (message) {
    let h2 = document.createElement('h2');
    h2.innerText = message;
    document.querySelector('div.messages').appendChild(h2);
}


WS.onopen = () => {
    console.log('connection open');
    displayTitle('connected');
}


WS.onclose = () => {
    console.log('connection close')
    displayTitle('disconnected');
}


WS.onmessage = (payload) => {
    console.log(payload.data);
    displayMessages(payload.data);
};


document.forms[0].onsubmit = () => {
    let input = document.getElementById('message');
    WS.send(input.value);
};
