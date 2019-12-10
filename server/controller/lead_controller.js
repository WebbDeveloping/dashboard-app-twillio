const Twilio = require('twilio');
const config = require('../config');
// Some hard-coded information about a house

module.exports = {
  lead: (request, response, next) => {
    var client = new Twilio(config.accountSid, config.authToken);
    const { name, phone, short, company } = request.body;
    console.log(name, phone, short, company);
    // console.log(request.body);
    var message =
      'New lead received -- ' +
      name +
      ' from ' +
      company +
      ' #' +
      phone +
      '. Message: "' +
      short +
      '"';

    // Send lead notification to agent
    client.messages
      .create({
        to: config.agentNumber,
        from: config.twilioNumber,
        body: message
      })
      .then(() => {
        // Otherwise, respond with 200 OK
        response.status(200).send('Lead notification was successfully sent.');
      })
      .catch(err => {
        console.log('back end');
        console.error(err);
        response.status(500).send();
      });
  }
};
