var currentDateTimeSpan = $("#currentDay");
var btn1 = $("#btn1")
var btn2 = $("#btn2")
var btn3 = $("#btn3")
var btn4 = $("#btn4")
var btn5 = $("#btn5")
var btn6 = $("#btn6")
var btn7 = $("#btn7")
var btn8 = $("#btn8")
var timeElement = document.querySelectorAll(".timeElement")
var currentTime = moment().format("H")


function timeComparison() {
  for (let i = 0; i < 8; i++) {
    if (currentTime == $(timeElement[i]).attr("id")) {
      timeElement[i].children[1].setAttribute("class", "present col-8")
    } else if (currentTime > $(timeElement[i]).attr("id")) {
      timeElement[i].children[1].setAttribute("class", "past col-8")
    } else {
      timeElement[i].children[1].setAttribute("class", "future col-8")
    }
  }
}

function renderLastRegistered() {
  var lastinput1 = localStorage.getItem("input1");
  timeElement[0].children[1].textContent = lastinput1;
  var lastinput2 = localStorage.getItem("input2");
  timeElement[1].children[1].textContent = lastinput2;
  var lastinput3 = localStorage.getItem("input3");
  timeElement[2].children[1].textContent = lastinput3;
  var lastinput4 = localStorage.getItem("input4");
  timeElement[3].children[1].textContent = lastinput4;
  var lastinput5 = localStorage.getItem("input5");
  timeElement[4].children[1].textContent = lastinput5;
  var lastinput6 = localStorage.getItem("input6");
  timeElement[5].children[1].textContent = lastinput6;
  var lastinput7 = localStorage.getItem("input7");
  timeElement[6].children[1].textContent = lastinput7;
  var lastinput8 = localStorage.getItem("input8");
  timeElement[7].children[1].textContent = lastinput8;
}

$("#btn1").on("click", function () {
  var value = $(this).siblings(".col-8").val()
  localStorage.setItem("input1", value)
})
$("#btn2").on("click", function () {
  var value2 = $(this).siblings(".col-8").val()
  localStorage.setItem("input2", value2)
})
$("#btn3").on("click", function () {
  var value = $(this).siblings(".col-8").val()
  localStorage.setItem("input3", value)
})
$("#btn4").on("click", function () {
  var value = $(this).siblings(".col-8").val()
  localStorage.setItem("input4", value)
})
$("#btn5").on("click", function () {
  var value = $(this).siblings(".col-8").val()
  localStorage.setItem("input5", value)
})
$("#btn6").on("click", function () {
  var value = $(this).siblings(".col-8").val()
  localStorage.setItem("input6", value)
})
$("#btn7").on("click", function () {
  var value = $(this).siblings(".col-8").val()
  localStorage.setItem("input7", value)
})
$("#btn8").on("click", function () {
  var value = $(this).siblings(".col-8").val()
  localStorage.setItem("input8", value)
})

currentDateTimeSpan.text(moment().format("dddd, MMMM Do, YYYY"));
timeComparison()
renderLastRegistered()
