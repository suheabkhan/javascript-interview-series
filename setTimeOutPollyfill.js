function createSetTimeout() {
  var timerId = 1;
  var timerMap = {};

  function setTimeoutPolyfill(callback, delay) {
    var id = timerId++;
    timerMap[id] = true;
    var start = Date.now();
    function triggerCallback() {
      if (!timerMap[id]) return;
      if (Date.now() > start + delay) {
        callback();
      } else {
        // a window API, which executes the callback if there are resources to execute,
        //while execution, if any higher priority request comes, that get served..
        //as we don't need to block the main thread
        requestIdleCallback(triggerCallback);
      }
    }
    requestIdleCallback(triggerCallback);
    return id;
  }

  function clearTimeoutPoly(id) {
    delete timerMap[id];
  }
  return { setTimeoutPolyfill, clearTimeoutPoly };
}
var { setTimeoutPolyfill, clearTimeoutPoly } = createSetTimeout();

console.log("start");
var myId = setTimeoutPolyfill(function () {
  console.log("Welcome to jscafe");
}, 1000);
clearTimeoutPoly(myId);

console.log("end");
