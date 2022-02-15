const twilio = require('twilio');
const accountSid = 'AC6fe75a16df75a1c391e23dbabb46a489'; // Your Account SID from www.twilio.com/console
const authToken = 'b79b94153f919ea72f7c5769c92e2d93';   // Your Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken);

export function getCode() {
    client.messages.list({
        // dateSent: new Date(Date.UTC(2021, 1, 14, 0, 0, 0)),
        from: "+12054559854",
        to: "+18477806568",
        limit: 1
    })
        // .then(messages => messages.forEach(m => cy.log(m.sid,m.body)));
        .then(result => console.log(result));
}


