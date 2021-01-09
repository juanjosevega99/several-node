const { config } = require('./config')

const accountSid = config.sid;
const authToken = config.token;
const client = require('twilio') (accountSid, authToken);

client.messages.create({
    from: 'whatsapp:+14155238886',
    body: 'Hello world this is JuanJo!!!',
    to: 'whatsapp:+573214223170'
}).then(message => console.log(message.sid));