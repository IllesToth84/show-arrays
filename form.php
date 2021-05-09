<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Form</title>
</head>

<body>
    <form action="show.php" method="get" class="form">
        <input type="radio" id='budapest' name="city-option" value="Budapest">
        <label for='budapest'>
            Budapest
        </label>
        <br>
        <input type="radio" id='vienna' name="city-option" value="Vienna" checked="checked">
        <label for='vienna'>
            Vienna
        </label>
        <br>
        <input type="radio" id='paris' name="city-option" value="Paris">
        <label for='paris'>
            Paris
        </label>
        <br>
        <input type="radio" id='london' name="city-option" value="London">
        <label for='london'>
            London
        </label>
        <br>

        <input type="submit">
    </form>

    <script src="scripts/form.js"></script>
</body>
</html>
