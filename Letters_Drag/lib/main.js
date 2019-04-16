"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

window.onload = function () {
  var letters = document.querySelectorAll('.letter');
  var letterHolders = document.querySelectorAll('.letter-holder');

  _toConsumableArray(letters).forEach(function (letter) {
    letter.ondragstart = function (e) {
      e.dataTransfer.setData("text/plain", e.target.id);
    };
  });

  _toConsumableArray(letterHolders).forEach(function (holder) {
    holder.ondragover = function (e) {
      return e.preventDefault();
    };

    holder.ondrop = function (e) {
      var id = e.dataTransfer.getData("text/plain");
      var letter = document.getElementById(id);
      var dataLetter = letter.getAttribute("data-letter"); //o

      var minLetter = e.target.getAttribute("data-min"); //a

      var maxLetter = e.target.getAttribute("data-max"); //f

      if (dataLetter >= minLetter && dataLetter <= maxLetter) {
        e.target.appendChild(letter);
      }
    };
  });
};