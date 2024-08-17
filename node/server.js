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