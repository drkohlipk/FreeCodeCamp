var firstNum = "",
  secondNum = "",
  result = "";

function createProb(input) {
  if (input === "." && result.search(/[.]/) !== -1) {
    return;
  } else if (input.search(/[\+\/\-\*]/) !== -1 && result.search(/[\+\/\-\*]/) !==
    -1) {
    if (input.search(/[\+\/\-\*]/) !== -1 && result[0] === "-") {
      result += input;
      document.getElementById("window").innerHTML = result;
    } else {
      return;
    }
  } else {
    result += input;
    document.getElementById("window").innerHTML = result;
  }
}

window.addEventListener('keydown', function(k) {
  if (event.shiftKey) {
    switch (k.keyCode) {
      case 56:
        createProb("*");
        break;
      case 187:
        createProb("+");
        break;
    }
  } else {
    switch (k.keyCode) {
      case 8:
        result = result.slice(0, -1);
        document.getElementById("window").innerHTML = result;
        break;
      case 13:
        result = eval(result).toString();
        document.getElementById("window").innerHTML = result;
        break;
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
      case 106:
        createProb("*");
        break;
      case 107:
        createProb("+");
        break;
      case 109:
        createProb("-");
        break;
      case 110:
        createProb(".");
        break;
      case 111:
        createProb("/");
        break;
      case 187:
        result = eval(result).toString();
        document.getElementById("window").innerHTML = result;
        break;
      case 189:
        createProb("-");
        break;
      case 190:
        createProb(".");
        break;
      case 191:
        createProb("/");
        break;
    }
  }
});

document.getElementById("zero").addEventListener("click", function() {
  createProb("0");
});

document.getElementById("one").addEventListener("click", function() {
  createProb("1");
});

document.getElementById("two").addEventListener("click", function() {
  createProb("2");
});

document.getElementById("three").addEventListener("click", function() {
  createProb("3");
});

document.getElementById("four").addEventListener("click", function() {
  createProb("4");
});

document.getElementById("five").addEventListener("click", function() {
  createProb("5");
});

document.getElementById("six").addEventListener("click", function() {
  createProb("6");
});

document.getElementById("seven").addEventListener("click", function() {
  createProb("7");
});

document.getElementById("eight").addEventListener("click", function() {
  createProb("8");
});

document.getElementById("nine").addEventListener("click", function() {
  createProb("9");
});

document.getElementById("equal").addEventListener("click", function() {
  result = eval(result).toString();
  document.getElementById("window").innerHTML = result;
});

document.getElementById("decimal").addEventListener("click", function() {
  createProb(".");
});

document.getElementById("clear").addEventListener("click", function() {
  result = "";
  document.getElementById("window").innerHTML = result;
});

document.getElementById("plus").addEventListener("click", function() {
  createProb(" + ");
});

document.getElementById("minus").addEventListener("click", function() {
  createProb(" - ");
});

document.getElementById("mult").addEventListener("click", function() {
  createProb(" * ");
});

document.getElementById("divide").addEventListener("click", function() {
  createProb(" / ");
});
