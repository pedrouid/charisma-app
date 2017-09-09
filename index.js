const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const secrets = require('./config/secrets');
const mailchimpURL =
  'https://us16.api.mailchimp.com/3.0/lists/661d067918/members';

app.post('/api/subscribe', (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const email = req.body.email;

  request.post(
    mailchimpURL,
    {
      headers: {
        Authorization: secrets.MAILCHIMP_BASIC_AUTH
      },
      body: JSON.stringify({
        email_address: email,
        status: 'pending'
      })
    },
    (error, response, body) => {
      if (error) {
        console.log(error);
        res.sendStatus(500);
        res.write(error.message);
        res.end();
      }
      if (response.statusCode === 200) {
        const json = JSON.parse(body);
        res.json(json);
      } else {
        res.sendStatus(response.statusCode);
      }
    }
  );
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on ${port}`));
