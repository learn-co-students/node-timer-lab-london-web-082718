const argv = process.argv;

if (!argv[2]) {
  console.log("Please provide an argument");
  process.exit(1);
}

const time = parseInt(argv[2]);
const timeUnit = argv[2].slice(1);

let seconds;

if (timeUnit == "min") {
  seconds = time * 60;
} else {
  seconds = time;
}

interval = setInterval(() => {
  seconds--;
  console.log(`Left: ${seconds}s`);
  if (seconds == 0) {
    clearInterval(interval);
  }
}, 1000);
