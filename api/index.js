const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "orion-voice-backend"
  });
});

app.post("/api/voice/inbound", (req, res) => {
  const twiml = `
    <Response>
      <Say voice="alice">
        Hello. Orion Voice AI is now connected successfully.
      </Say>
    </Response>
  `;

  res.type("text/xml");
  res.send(twiml);
});

module.exports = app;
