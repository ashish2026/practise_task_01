function greeting(greetingHandler, name) {
  greetingHandler(name);
}

function greetingMorning(name) {
  console.log("Good Morning", name);
}
function greetingEvening(name) {
  console.log("Good Evening", name);
}
function greetingNight(name) {
  console.log("Good Night", name);
}

greeting(greetingMorning, "Tom cruise");
greeting(greetingEvening, "Tom Brady");
greeting(greetingNight, "Tom Hanks");
