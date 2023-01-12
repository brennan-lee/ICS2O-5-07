// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-5-07/sw.js", {
    scope: "/ICS2O-5-07/",
  })
}

/**
 * This function does multiplication.
 */
function myButtonClicked() {
  var numA = parseFloat(document.getElementById("firstInputedNumber").value)
  var product = 0
  var counter = 0

  while (counter <= numA) {
    product = product + counter
    counter++
  }

  document.getElementById("product").innerHTML = "The product is: " + product
}
