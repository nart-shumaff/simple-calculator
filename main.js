// const bt9 = document.getElementsByClassName("num-bt").item(0)
addEventListener("click", function() {
    const bt = document.getElementsByClassName("num-bt").item(0)
    document.getElementById("screen-contnt").innerHTML = bt.getAttribute("data-num");
  });