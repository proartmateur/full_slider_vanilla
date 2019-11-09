'use strict'

const keys = {
    next_slide: 39, // space
    prev_slide: 37, // arrow <
    toggle_play: 32, // arrow >
    goto_first_slide: 49, // number 1
    toggle_log: 76, // L
    speed_up: 38, // Arrow Up
    speed_down: 40 // arrow Down
}

var metaChar = false;
var exampleKey = 18;

function keyEvent(event) {
  var key = event.keyCode || event.which;
  var keychar = String.fromCharCode(key);
  if (key == exampleKey) {
    metaChar = true;
  }
  if (key != exampleKey) {
    if (metaChar) {
      alert("Combination of metaKey + " + keychar);

      metaChar = false;
    } else {
      //alert("Key pressed " + key);
      singleKey(key)
    }
  }
}

function metaKeyUp (event) {
  var key = event.keyCode || event.which;

  if (key == exampleKey) {
    metaChar = false;
  }
}