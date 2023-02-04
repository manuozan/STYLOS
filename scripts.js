let products = [];
let total = 0;


$(document).ready(function(){
  $("#filter-input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".product-container").filter(function() {
      $(this).toggle($(this).find("h3").text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// document.addEventListener("DOMContentLoaded", function() {
//   var filterInput = document.getElementById("filter-input");
//   filterInput.addEventListener("keyup", function() {
//   var value = filterInput.value.toLowerCase();
//   var productContainers = document.querySelectorAll(".product-container");
//   productContainers.forEach(function(productContainer) {
//   var productTitle = productContainer.querySelector("h3").textContent.toLowerCase();
//   if (productTitle.indexOf(value) > -1) {
//   productContainer.style.display = "";
//   } else {
//   productContainer.style.display = "none";
//   }
//   });
//   });
//   });



function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Carrito $${total}`
}

function pay() {
    window.alert(products.join(", \n"));
}

// function myFunction() {
//     var x = document.getElementById("mySelect").value;
//     document.getElementById("resultado").innerHTML =  x;}

    function myFunction() {
        document.getElementById("price-1").innerHTML =  '$'+ document.getElementById("select-1").value;
        document.getElementById("price-2").innerHTML =  '$'+ document.getElementById("select-2").value;
        document.getElementById("price-3").innerHTML =  '$'+ document.getElementById("select-3").value;
        document.getElementById("price-4").innerHTML =  '$'+ document.getElementById("select-4").value;
        document.getElementById("price-5").innerHTML =  '$'+ document.getElementById("select-5").value;
        document.getElementById("price-6").innerHTML =  '$'+ document.getElementById("select-6").value;
        document.getElementById("price-7").innerHTML =  '$'+ document.getElementById("select-7").value;
        document.getElementById("price-8").innerHTML =  '$'+ document.getElementById("select-8").value;
        document.getElementById("price-9").innerHTML =  '$'+ document.getElementById("select-9").value;
        document.getElementById("price-10").innerHTML =  '$'+ document.getElementById("select-10").value;
        document.getElementById("price-11").innerHTML =  '$'+ document.getElementById("select-11").value;
        document.getElementById("price-12").innerHTML =  '$'+ document.getElementById("select-12").value;
        document.getElementById("price-13").innerHTML =  '$'+ document.getElementById("select-13").value;
        document.getElementById("price-14").innerHTML =  '$'+ document.getElementById("select-14").value;
        document.getElementById("price-15").innerHTML =  '$'+ document.getElementById("select-15").value;
        document.getElementById("price-16").innerHTML = '$'+ document.getElementById("select-16").value;
        document.getElementById("price-17").innerHTML =  '$'+ document.getElementById("select-17").value;
        document.getElementById("price-18").innerHTML =  '$'+ document.getElementById("select-18").value;
    }

    // function search() {
    //     let input = document.getElementById("filter-input").value;
    //     let products = document.getElementsByClassName("product-container");
    //     for (let i = 0; i < products.length; i++) {
    //       let productName = products[i].getElementsByTagName("h3")[0].innerText;
    //       if (productName.toLowerCase().includes(input.toLowerCase())) {
    //         products[i].style.display = "block";
    //       } else {
    //         products[i].style.display = "none";
    //       }
    //     }
    //   }