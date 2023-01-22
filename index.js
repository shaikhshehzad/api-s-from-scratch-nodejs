require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 7000;
const path = require("path");
const publicPath = path.join(__dirname, "public");

app.get("/", (req, res) => {
  //   res.send('Wupphuuu server is live now !')

  res.sendFile(`${publicPath}/HomePage.html`);
});

app.get("/about", (req, res) => {
  res.send("From about");
});

app.get("/contactus", (req, res) => {
  res.send("From contactus");
});

app.get("/redirection", (req, res) => {
  console.log("redirecting");
  res.redirect("/redirected");
});

app.get("/redirected", (req, res) => {
  res.send("From redirected page");
});

app.get("/dummy-json", (req, res) => {
  res.sendFile(`${publicPath}/dummy.json`);
});

app.get("/dummy-image", (req, res) => {
  res.sendFile(`${publicPath}/dev-in-prog.png`);
});

app.get("/bootstrap.js", (req, res) => {
  res.sendFile(`${publicPath}/bootstrap.js`);
});


app.get("/redirection-loop1", (req, res) => {
  console.log("redirecting from 1 to 2");
  // res.redirect("/redirection-loop2");
});

app.get("/redirection-loop2", (req, res) => {
  console.log("redirecting  from 2 to 1");
  // res.redirect("/redirection-loop1");
});




app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/Error.html`);
});

app.listen(PORT, () => {
  console.log(`Server app listening on port ${PORT}`);
});
