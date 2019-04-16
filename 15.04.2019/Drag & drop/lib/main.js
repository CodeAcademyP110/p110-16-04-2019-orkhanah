"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

window.onload = function () {
  var items = document.querySelectorAll('.item');
  var droparea = document.querySelector('.droparea');
  var draggedId;

  _toConsumableArray(items).forEach(function (item) {
    item.ondragstart = function (e) {
      //e.dataTransfer.setData("text/plain", this.id);
      draggedId = this.id;
    };
  }); //   item.ondragend = function()
  //   {
  //       console.log("Drag ended");
  //   }
  //   item.ondrag = function()
  //   {
  //     console.log("Dragging");
  //   }
  //   droparea.ondragenter = function()
  //   {
  //       console.log("Drag entered me");
  //   }
  //   droparea.ondragleave = function()
  //   {
  //     console.log("Drag left me");
  //   }


  droparea.ondragover = function (e) {
    e.preventDefault();
  };

  droparea.ondrop = function (event) {
    // const id = event.dataTransfer.getData("text/plain");
    this.appendChild(document.getElementById(draggedId));
  };
};