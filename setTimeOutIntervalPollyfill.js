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

// setTimeOut PollyFill
function createInterval() {
  let intervalId = 1;
  // to check if the ID is cleared or not
  let intervalMap = {};
  //Sample DS:
  //   {
  //     setIntervalPolyID:setTimeoutPolyID
  //   }
  console.log("1");
  var { setTimeoutPoly, clearTimeoutPoly } = createSetTimeout();
  function setIntervalPoly(callback, delay) {
    let newId = intervalId++;
    function reiterate() {
      // execute the callback repeatedly till if not cleared the time interval
      //can use the setTimeOut as well, instead of the setTimeOutPollyFill
      //setTimeOutPolly returns a ID
      intervalMap[newId] = setTimeout(function () {
        callback();
        console.log(intervalMap[newId]);
        // if the id is still present after executing, repeat the execution
        if (intervalMap[newId]) {
          reiterate();
        }
      }, delay);
    }
    reiterate();
    return newId;
  }

  function clearIntervalPoly(id) {
    //because internally setTimeOutPolly will also have an object, where it stores all the IDs
    clearTimeoutPoly(intervalMap[id]);
    delete intervalMap[id];
  }

  return { setIntervalPoly, clearIntervalPoly };
}

var { setIntervalPoly, clearIntervalPoly } = createInterval();

var count = 0;
var myId = setIntervalPoly(function () {
  console.log("Welcome to jscafe");
  count++;
  if (count >= 2) clearIntervalPoly(myId);
}, 1000);
