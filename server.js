const prerender = require('prerender');
const server = prerender({
    port: 8024
});
server.start();