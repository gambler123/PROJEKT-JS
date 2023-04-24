function convert() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("result").value = celsius.toFixed(2);
  }
  function checkResult() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    const result = parseFloat(document.getElementById("result").value);
}        
function control() {
  if (result = (fahrenheit - 32) * 5/9) {
    alert("Výpočet je správný.");
  } else {
    alert("Výpočet není správný. Zkontrolujte si vstupní hodnoty a zkuste to znovu.");
  }
}
