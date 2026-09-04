<script
  async
  src="https://exchange-rates.abstractapi.com/v1/live/?api_key=58e107bbc89949a7a5c21161a4a0e616&base=USD&target=EUR"
></script>;

let base = document.getElementByClass()
let sourceAmount = document.getElementByClass("source_txt");
let sourceCurrency = document.getElementByClass("source_currency");
let convertionAmount = document.getElementByClass("convertion_txt");
let convertionCurrency = document.getElementByClass("convertion_currency");


function clear() {
  const reset = document.getElementById("Reset");

  if (sourceAmount.textContent !== "" || cinvertionAmount.textContent !== "") {
    sourceAmount.textContent = "";
    convertionAmount.textContent = "";
}

