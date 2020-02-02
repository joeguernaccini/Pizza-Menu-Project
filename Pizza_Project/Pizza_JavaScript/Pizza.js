function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
        var selectedSize = sizeArray[i].value;
        text1 = text1+selectedSize+"<br>";
    }
}
if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
}   else if (selectedSize === "Medium Pizza") {
      sizeTotal = 8;
}   else if (selectedSize === "Large Pizza") {
      sizeTotal = 10;
}   else if (selectedSize === "Extra Large Pizza") {
          sizeTotal = 12;
}   else if (selectedSize === "Double-X Large Pizza") {
      sizeTotal = 12;
}

  runningTotal = sizeTotal;
  console.log(selectedSize+" = $"+sizeTotal+".00");
  console.log("Size text1: "+text1);
  console.log("subtotal: $"+runningTotal+".00");
  getVegetable(runningTotal,text1);
};

function getVegetable(runningTotal,text1){
    var vegTotal = 0;
    var selectedVeg = [];
    var vegArray = document.getElementsByClassName("vegetables");
    for (var v = 0; v < vegArray.length; v++){
        if (vegArray[v].checked) {
            selectedVeg.push(vegArray[v].value);
            console.log("selected vegetable item: ("+vegArray[v].value+")");
            text1 = text1+vegArray[v].value+"<br>";
        }
    }
    var vegCount = selectedVeg.length;
  
    runningTotal = (runningTotal + vegCount);
    console.log("total selected vegetable items: " +vegCount);
    console.log(selectedVeg + " = $" + vegCount + ".00");
    console.log("Vegetable text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getMeat(runningTotal, text1);
};


function getMeat(runningTotal,text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: ("+meatArray[j].value+")");
            text1 = text1+meatArray[j].value+"<br>";
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);       
    }  else {
        meatTotal = 0;
    }   
    runningTotal = (runningTotal + meatTotal);
    console.log("total selected meat items: "+meatCount);
    console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
    console.log("meat text1: " +text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML = text1
    document.getElementById("totalPrice").innerHTML= "</h3>Total: <strong>$"
        +runningTotal+".00"+"</strong></h3";
};

$(function () {
    $('body').removeClass('fade-out');
});