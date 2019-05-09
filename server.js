const express = require('express');
const bodyParser = require('body-parser');
const Shopper = require('./dbOrm');

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(express.static('public'));

app.post('/postData', (req, res) => {
  // sequelize stuff here
  let payload = req.body;
  Shopper.create({
    name: String(payload.name),
    email: String(payload.email),
    password: String(payload.password),
    cityState: String(payload.cityState),
    zipCode: Number(payload.zipCode),
    phoneNumber: String(payload.phoneNumber),
    creditCard: String(payload.creditCard),
    expirationDate: new Date(payload.expirationDate),
    cvv: Number(payload.cvv),
    billingZipCode: Number(payload.billingZipCode)
  })
    .then(() => {
      console.log('Success!');
      res.status(200);
      res.end();
    })
    .catch(error => {
      res.status(500).send(error);
    });

});

app.listen(port, () => {
  console.log(`Running on localhost:${port}`);
});