function convert() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("result").value = celsius.toFixed(2);
  }
  function checkResult() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    const result = parseFloat(document.getElementById("result").value);
}        