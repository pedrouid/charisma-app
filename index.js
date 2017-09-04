const express = require('express');
const path = require('path');

const app = express();

const bodyParser = require('body-parser');
const request = require('request');
const secrets = require('./secrets');

var jsonParser = bodyParser.json();
app.use(express.static(path.join(__dirname, 'build')));

const mailchimpURL =
  'https://us16.api.mailchimp.com/3.0/lists/661d067918/members';

app.post('/api/subscribe', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const email = req.body.email;

  const requestOptions = {
    url: mailchimpURL,
    method: 'POST',
    headers: {
      Authorization: secrets.MAILCHIMP_BASIC_AUTH
    },
    body: {
      email_address: email,
      status: 'pending'
    }
  };
  request(requestOptions, (error, response, body) => {
    if (error) {
      console.log(error);
      res.json(error);
    }
    console.log(response);
    res.json(body);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on ${port}`));
