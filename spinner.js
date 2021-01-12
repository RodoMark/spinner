"use strict";

const spinnerFrames = ["|", "/", "-", "\\"];
const waltzFrames = ["+", ":", "-", "/", ":", "\\", ":"];

const spinner = function (frames, interval, reps) {
  let i = 0;
  let rep = 0;
  const spinnerIntervalID = setInterval(function spin() {
    process.stdout.write("\r" + frames[i++] + " ");
    rep += 1 / frames.length;
    if (i >= frames.length - 1) i = 0;

    if (rep >= reps) {
      clearInterval(spinnerIntervalID);
      process.stdout.write("\n");
    }
  }, interval);
};

// spinner(spinnerFrames, 100, 8);
spinner(waltzFrames, 190, 8);
