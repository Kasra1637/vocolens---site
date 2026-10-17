const fs = require("fs");
const path = require("path");
const { MsEdgeTTS, OUTPUT_FORMAT } = require("msedge-tts");

(async () => {
  const outDir = path.join(__dirname, "..", ".audio-tmp");
  fs.mkdirSync(outDir, { recursive: true });

  const words =
    "Time simply did not register the way it registers for other people, and now you are left explaining why something that felt instant took two and a half hours.";

  const cases = [
    { label: "with-amp", text: "Welcome to Neuroscience & Emotional Intelligence. " + words },
    { label: "with-newlines", text: words + "\n\n" + words },
    {
      label: "with-emdash",
      text: "Time blindness isn't a focus problem — it is a missing internal clock. " + words,
    },
    { label: "ascii-only", text: words + " " + words },
    {
      label: "amp-escaped",
      text: "Welcome to Neuroscience &amp; Emotional Intelligence. " + words,
    },
  ];

  for (const c of cases) {
    try {
      const tts = new MsEdgeTTS();
      await tts.setMetadata("en-US-AriaNeural", OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
      const { audioFilePath } = await tts.toFile(outDir, c.text);
      console.log("OK    " + c.label + " -> " + fs.statSync(audioFilePath).size + " bytes");
      fs.unlinkSync(audioFilePath);
    } catch (e) {
      console.log("FAIL  " + c.label + " -> " + e.message);
    }
  }
  process.exit(0);
})();
