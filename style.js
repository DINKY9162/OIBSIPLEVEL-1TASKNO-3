const calculateTemp = () => {
    const intem = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fh= ((cel * 9 / 5) + 32).toFixed(1);
        return fh;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let cels = ((fah - 32) * 5 / 9).toFixed(1);
        return cels;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(intem) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(intem) + "&#176; Celsius";
    }
}
