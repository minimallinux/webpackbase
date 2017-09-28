var messages = require('./messages');
var app = document.querySelector('#app');
app.innerHTML = "<p>" + messages.hi + messages.event + '</p>';
