let cityValueId = document.querySelectorAll('input[name="city-option"]');
let submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener("click", function () {
    for (i = 0; i < cityValueId.length; i++) {
        if (cityValueId[i].checked) {
            localStorage.setItem("checkedCityOption", cityValueId[i].id);
        }
    }
});
