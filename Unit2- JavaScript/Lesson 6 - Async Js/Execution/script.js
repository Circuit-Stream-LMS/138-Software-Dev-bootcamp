console.log("Start");

function synchronousTask() {
  console.log("This is a synchronous task.");
}

function asynchronousTask() {
  setTimeout(() => {
    console.log("This is an asynchronous task.");
  }, 1000);
}

synchronousTask();
asynchronousTask();
console.log("End");
