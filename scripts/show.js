   let cityArrays = [
            ["budapest", "bp-flower-shop-1", "bp-flower-shop-2", "bp-flower-shop-3", "bp-flower-shop-4"],
            ["vienna", "vienna-flower-shop-1", "vienna-flower-shop-2", "vienna-flower-shop-3", "vienna-flower-shop-4"],
            ["paris", "paris-flower-shop-1", "paris-flower-shop-2", "paris-flower-shop-3", "paris-flower-shop-4"],
            ["london", "london-flower-shop-1", "london-flower-shop-2", "london-flower-shop-3", "london-flower-shop-4"]
        ];

   function init() {
       var paramvalue1 = localStorage.getItem("checkedCityOption");
       let showArray = document.querySelector("#show-array");

       cityArrays.forEach(function (el) {
           console.log(el);
           if (el[0] === paramvalue1) {
               el.shift();
               showArray.innerHTML = el;
           }
       });
   }
   window.addEventListener("load", init);
