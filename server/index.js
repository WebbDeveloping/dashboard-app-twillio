require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const twilio = require('twilio');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const lead_controller = require('./controller/lead_controller');

let SID = process.env.TWILIO_SID;
let TOKEN = process.env.TWILIO_TOKEN;
// let SENDER = process.env.SENDER;
// let PORT = process.env.PORT || 7777;
const { SENDER, PORT } = process.env;

// let client = new twilio(SID, TOKEN);
const client = require('twilio')(SID, TOKEN);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.get('/text', (req, res) => {
  console.log('send-text hit');
  console.log(666, req.body.body);
  const { recipient, message } = req.query;
  console.log(recipient, message);
  client.messages
    .create({
      body: message,
      from: SENDER,
      to: '+1' + recipient
    })
    .then(message => console.log(message.sid));
});
app.post('/sms', (req, res) => {
  // THIS LOG BELOW WILL LOG THE INCOMING MESSAGE
  console.log(777, req.body.Body);
  // console.log(req.body);˚
  // Start our TwiML response.
  const twiml = new MessagingResponse();

  // Add a text message.
  const msg = twiml.message(
    'Sign Up, Start Earning Now!, `https://www.lyft.com/drive-with-lyft?utm_medium=d2di_iasms&ref=JOE432426`'
  );

  // Add a picture message.
  //   msg.media(
  //     'https://www.lyft.com/drive-with-lyft?utm_medium=d2di_iasms&ref=JOE432426'
  //   );

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(twiml.toString());
});
app.post('/api/lead', lead_controller.lead);
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
