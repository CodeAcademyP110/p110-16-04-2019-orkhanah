"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

window.onload = function () {
  var itemHolders = document.querySelectorAll('.drop-zone .item-holder');
  var items = document.querySelectorAll('.drag-zone .item img');
  var draggedElementId;

  _toConsumableArray(items).forEach(function (item) {
    item.ondragstart = function (e) {
      e.dataTransfer.setData("text", e.target.id);
      draggedElementId = e.target.id;
    }; // item.ondragend = function()
    // {
    //     document.querySelector('.item-holder.not-allowed').classList.remove("not-allowed");
    // }

  });

  _toConsumableArray(itemHolders).forEach(function (itemHolder) {
    itemHolder.ondragover = function (e) {
      e.preventDefault();
      var item = document.getElementById(draggedElementId);

      if (item.getAttribute("data-type") !== e.target.getAttribute("data-type")) {
        e.target.classList.add("not-allowed");
      }
    };

    itemHolder.ondragleave = function (e) {
      e.target.classList.remove("not-allowed");
    };

    itemHolder.ondrop = function (e) {
      var id = e.dataTransfer.getData("text");
      var item = document.getElementById(id);

      if (item.getAttribute("data-type") === e.target.getAttribute("data-type")) {
        e.target.appendChild(item);
      }

      e.target.classList.remove("not-allowed");
    };
  });
};