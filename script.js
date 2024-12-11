

document.addEventListener("DOMContentLoaded", function () {
  
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 50,  
                behavior: 'smooth'
            });
        });
    });
});
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sayyedbushra810@gmail.com",
      pass: "mehwishwow",
    },
  });

  const mailOptions = {
    from: email,
    to: "your-email@gmail.com",
    subject: `Contact Form Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Message Sent Successfully!");
  } catch (error) {
    res.status(500).send("Failed to Send Message!");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));


