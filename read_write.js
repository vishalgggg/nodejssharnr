
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const messagesFile = path.join(__dirname, 'messages.txt');

const server = (req, res) => {
  if (req.method === 'GET') {
    fs.readFile(messagesFile, (err, data) => {
      if (err) throw err;
      data = data.toString();
      const messages = data.split('\n').reverse().filter(Boolean);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      
      res.write(`
        <form action="/" method="POST">
          <textarea name="message"></textarea>
          <button type="submit">Submit</button>
        </form>
        <h1>Messages</h1>
        <ul>
          ${messages.map(msg => `<li>${msg}</li>`).join('')}
        </ul>
      `);
      res.end();
    });
  } else if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      console.log("cu"+chunk);
    });
    console.log(body);
    req.on('end', () => {
      console.log("b"+body);
      const post = querystring.parse(body);
      const newMessage = post.message;
      
      fs.appendFile(messagesFile, newMessage + '\n', err => {
        if (err) throw err;
        res.writeHead(302, { 'Location': '/' });
        
        res.end();
      });
    });
  }
};
module.exports = {"handler":server,name:"my name is vishal"}
