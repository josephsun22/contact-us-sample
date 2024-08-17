const fs = require('fs');
const path = require('path');
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      pageHeader: "Contact us, we love to hear from you",
      pageBody: "Welcome to OpenAgent. We've been around since 2013, and our vision is to make it easy for people to buy, sell and own property.",
      contacts: {
        phone: "13 24 34",
        email: "support@openagent.com.au",
        postalAddress: "PO Box 419, Alexandria NSW 1435",
        businessHours: {
          mondayToFriday: "9:00 AM - 5:00 PM",
          saturday: "",
          sunday: "",
        },
      },
    },
  ]);
});

app.post('/submit-form', (req, res) => {
  const { formData } = req.body;

  if (!formData || !formData.email) {
    return res.status(400).send('Invalid form data');
  }

  // Assuming email is unique and only save the latest form data from the same email
  const filePath = path.join(__dirname + "/form_data/", `form-data-${formData.email}.json`);
  const fileContent = JSON.stringify(formData, null, 2);

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Error writing file');
    }
    res.status(200).send('Form data saved successfully');
  });
});




app.listen(4000, () => {
  console.log("connected on port 4000");
});
