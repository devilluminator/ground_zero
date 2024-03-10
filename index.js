const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send({
    version: "0.2.0",
    pub_date: "2024-03-10T08:53:03+00:00",
    url: "http://localhost:3009/update",
    signature:
      "dW50cnVzdGVkIGNvbW1lbnQ6IHNpZ25hdHVyZSBmcm9tIHRhdXJpIHNlY3JldCBrZXkKUlVRRllXWUk1Z29ic2V6Qkl4eDdmRzhjaGhyV0dodzloRmRCcFdLVFJyVWR6dTY2ZnV3YW1BM0I1cUVKNU15dGMrZGtqRzlkM2NLNDVKSUhxTXM2T3NTVTdNcHRiUnVSbVFjPQp0cnVzdGVkIGNvbW1lbnQ6IHRpbWVzdGFtcDoxNzA5OTI4MjgyCWZpbGU6eG9jaWFsXzAuMS4wX3g2NC1zZXR1cC5uc2lzLnppcApZMDA3akVuNXJGS1kyMUxWeGlUY2lnRmpleW5jZlU2OEJ2aEEyY2loMUUvRlE5NHB6aHl0RnVqS1E4YnExQytWbGN0bDFEYWVDNzJyaHg5amFBdmJEZz09Cg==",
    notes: "These are some release notes",
  });
});

app.listen(3009, function () {
  console.log("Example app listening on port 3009!");
});
// download link from local host 3009 /public/xosial.zip
app.get("/update", function (req, res) {
  res.sendFile(__dirname + "/public/xocial_0.1.0_x64-setup.nsis.zip");
});
