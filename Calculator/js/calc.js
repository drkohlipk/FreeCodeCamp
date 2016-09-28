/**************variables***************/
var holder = "",
  result = "",
  operator = "",
  screen = document.getElementById("window"),
  zero = document.getElementById("zero"),
  one = document.getElementById("one"),
  two = document.getElementById("two"),
  three = document.getElementById("three"),
  four = document.getElementById("four"),
  five = document.getElementById("five"),
  six = document.getElementById("six"),
  seven = document.getElementById("seven"),
  eight = document.getElementById("eight"),
  nine = document.getElementById("nine"),
  equal = document.getElementById("equal"),
  decimal = document.getElementById("decimal"),
  clear = document.getElementById("clear"),
  plus = document.getElementById("plus"),
  minus = document.getElementById("minus"),
  mult = document.getElementById("mult"),
  divide = document.getElementById("divide"),
  posneg = document.getElementById("neg");
/**************variables***************/


/*******makes pos/neg button work******/
function makePosNeg() {

  if (result.search(/[-]/) === -1) { //if number is not already negative...

    result = "-" + result //make it negative

    screen.innerHTML = result; //print to the calc screen

  } else { //if number is negative

    result = result.slice(1); //make it positive

    screen.innerHTML = result; //print to the calc screen

  } //else

} //fx makePosNeg
/*******makes pos/neg button work******/


/*****evaluates the created problem****/
function equals() {

  result = eval(holder + " " + operator + " " + result).toString(); //construct and evaluate the problem

  screen.innerHTML = result; //print to the calc screen

  holder = ""; //reset the value of holder

  operator = ""; //resets the operator

  plus.classList.remove("active"); //deselect operator buttons

  minus.classList.remove("active");

  mult.classList.remove("active");

  divide.classList.remove("active");

} //fx equals
/*****evaluates the created problem****/


/*******allows for the operator********/
function createOp(op) {

  if (result == "" && op == "-") { //if result doesn't have a value and the operator is a minus sign

    result += op; //add the minus sign to result (as negative sign)

    minus.classList.remove("active"); //don't keep minus active

    screen.innerHTML = result; //print result to calc screen

  } else { //if result isn't empty and/or isn't a minus sign

    if (holder == "") { //if holder doesn't already have a value

      operator = op; //set operator to the value of op

      holder = result; //set holder to equal the value of result

      result = ""; //reset the value of result

      screen.innerHTML = holder; //print holder to the calc screen

    } else { //if holder does already have a value

      operator = op; //simply reset the value of operator

      screen.innerHTML = holder; //print holder to the calc screen

    } //inner else

  } //outer else

} //fx createOp
/*******allows for the operator********/


/*******creates number inputs**********/
function createProb(input) {

  if (input === "." && result.search(/[.]/) !== -1) { //if input is a decimal and result already contains a decimal...

    return;

  } else { //otherwise...

    result += input; //insert the decimal

    screen.innerHTML = result; //print result to the calc screen

  } //else

} //fx createProb
/*******creates number inputs**********/


/**adds event listeners for keydowns***/
window.addEventListener('keydown', function(k) {

  if (event.shiftKey) { //if the shift is held down while pressing...

    switch (k.keyCode) {

      case 56: //#8 keyboard key mult operator
        if (mult.classList.contains("active")) {
          mult.classList.remove("active");
          operator = "";
        } else {
          plus.classList.remove("active");
          minus.classList.remove("active");
          divide.classList.remove("active");
          mult.classList.add("active");
          createOp("*");
        }
        break;

      case 187: //plus sign keyboard
        if (plus.classList.contains("active")) {
          plus.classList.remove("active");
          operator = "";
        } else {
          minus.classList.remove("active");
          mult.classList.remove("active");
          divide.classList.remove("active");
          plus.classList.add("active");
          createOp("+");
        }
        break;

    } //shiftkey switch

  } else {

    switch (k.keyCode) {

      case 8: //backspace
        result = result.slice(0, -1);
        screen.innerHTML = result;
        break;

      case 13: //enter key
        equals();
        break;

        /****keyboard numbers****/
      case 48:
        createProb("0");
        break;

      case 49:
        createProb("1");
        break;

      case 50:
        createProb("2");
        break;

      case 51:
        createProb("3");
        break;

      case 52:
        createProb("4");
        break;

      case 53:
        createProb("5");
        break;

      case 54:
        createProb("6");
        break;

      case 55:
        createProb("7");
        break;

      case 56:
        createProb("8");
        break;

      case 57:
        createProb("9");
        break;
        /****keyboard numbers****/

        /****keypad numbers****/
      case 96:
        createProb("0");
        break;

      case 97:
        createProb("1");
        break;

      case 98:
        createProb("2");
        break;

      case 99:
        createProb("3");
        break;

      case 100:
        createProb("4");
        break;

      case 101:
        createProb("5");
        break;

      case 102:
        createProb("6");
        break;

      case 103:
        createProb("7");
        break;

      case 104:
        createProb("8");
        break;

      case 105:
        createProb("9");
        break;
        /****keypad numbers****/

        /****keypad operators****/
      case 106:
        if (mult.classList.contains("active")) {
          mult.classList.remove("active");
          operator = "";
        } else {
          plus.classList.remove("active");
          minus.classList.remove("active");
          divide.classList.remove("active");
          mult.classList.add("active");
          createOp("*");
        }
        break;

      case 107:
        if (plus.classList.contains("active")) {
          plus.classList.remove("active");
          operator = "";
        } else {
          minus.classList.remove("active");
          mult.classList.remove("active");
          divide.classList.remove("active");
          plus.classList.add("active");
          createOp("+");
        }
        break;

      case 109:
        if (minus.classList.contains("active")) {
          minus.classList.remove("active");
          operator = "";
        } else {
          plus.classList.remove("active");
          mult.classList.remove("active");
          divide.classList.remove("active");
          minus.classList.add("active");
          createOp("-");
        }
        break;

      case 110:
        createProb(".");
        break;

      case 111:
        if (divide.classList.contains("active")) {
          divide.classList.remove("active");
          operator = "";
        } else {
          plus.classList.remove("active");
          minus.classList.remove("active");
          mult.classList.remove("active");
          divide.classList.add("active");
          createOp("/");
        }
        break;
        /****keypad operators****/

      case 187: //mac return key
        equals();
        break;

        /****keyboard operators****/
      case 189:
        if (minus.classList.contains("active")) {
          minus.classList.remove("active");
          operator = "";
        } else {
          plus.classList.remove("active");
          mult.classList.remove("active");
          divide.classList.remove("active");
          minus.classList.add("active");
          createOp("-");
        }
        break;

      case 190:
        createProb(".");
        break;

      case 191:
        if (divide.classList.contains("active")) {
          divide.classList.remove("active");
          operator = "";
        } else {
          plus.classList.remove("active");
          minus.classList.remove("active");
          mult.classList.remove("active");
          divide.classList.add("active");
          createOp("/");
        }
        break;
        /****keyboard operators****/

    } //no shiftkey switch

  } //else

}); //keydown event listener fx
/**adds event listeners for keydowns***/


/**if resp button is clicked, call fx**/
posneg.addEventListener("click", function() { //if posneg button is clicked...
  makePosNeg(); //call the makePosNeg fx
  posneg.blur(); //deselect the posneg button
});

zero.addEventListener("click", function() {
  createProb("0");
  zero.blur();
});

one.addEventListener("click", function() {
  createProb("1");
  one.blur();
});

two.addEventListener("click", function() {
  createProb("2");
  two.blur();
});

three.addEventListener("click", function() {
  createProb("3");
  three.blur();
});

four.addEventListener("click", function() {
  createProb("4");
  four.blur();
});

five.addEventListener("click", function() {
  createProb("5");
  five.blur();
});

six.addEventListener("click", function() {
  createProb("6");
  six.blur();
});

seven.addEventListener("click", function() {
  createProb("7");
  seven.blur();
});

eight.addEventListener("click", function() {
  createProb("8");
  eight.blur();
});

nine.addEventListener("click", function() {
  createProb("9");
  nine.blur();
});

equal.addEventListener("click", function() {
  equals();
  equal.blur();
});

decimal.addEventListener("click", function() {
  createProb(".");
  decimal.blur();
});

clear.addEventListener("click", function() {
  result = "";
  holder = "";
  operator = "";
  plus.classList.remove("active");
  minus.classList.remove("active");
  mult.classList.remove("active");
  divide.classList.remove("active");
  screen.innerHTML = result;
  clear.blur();
});

plus.addEventListener("click", function() {
  if (plus.classList.contains("active")) {
    plus.classList.remove("active");
    operator = "";
  } else {
    minus.classList.remove("active");
    mult.classList.remove("active");
    divide.classList.remove("active");
    plus.classList.add("active");
    createOp("+");
  }
  plus.blur();
});

minus.addEventListener("click", function() {
  if (minus.classList.contains("active")) {
    minus.classList.remove("active");
    operator = "";
  } else {
    plus.classList.remove("active");
    mult.classList.remove("active");
    divide.classList.remove("active");
    minus.classList.add("active");
    createOp("-");
  }
  minus.blur();
});

mult.addEventListener("click", function() {
  if (mult.classList.contains("active")) {
    mult.classList.remove("active");
    operator = "";
  } else {
    plus.classList.remove("active");
    minus.classList.remove("active");
    divide.classList.remove("active");
    mult.classList.add("active");
    createOp("-");
  }
  mult.blur();
});

divide.addEventListener("click", function() {
  if (divide.classList.contains("active")) {
    divide.classList.remove("active");
    operator = "";
  } else {
    plus.classList.remove("active");
    minus.classList.remove("active");
    mult.classList.remove("active");
    divide.classList.add("active");
    createOp("-");
  }
  divide.blur();
});
/**if resp button is clicked, call fx**/
