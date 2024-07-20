const tip = document.getElementById("tipInput");
const total = document.getElementById("billTotalInput");
const showtotal = document.getElementById("BillTotal");
const showtipamount = document.getElementById("perPersonTotal");
const payableamount = document.getElementById("payabletotal");

document.addEventListener("DOMContentLoaded", () => {
  calculatebill();
});

function calculatebill() {
  tip.addEventListener("keyup", (event) => {
    tipamount = event.target.value;

    if(!tipamount || isNaN(tipamount)) {
      showtipamount.innerHTML = `Rs 0.00`;
    } else{
      totalamount = Number(total.value);
      if(isNaN(totalamount)) {
        total.value = 0;
      } else {
        const perPersonTotal = (totalamount * Number(tipamount))/100;
        showtotal.innerHTML = ` Rs : ${Number(total.value).toFixed(2)}`;
        showtipamount.innerHTML = ` Rs : ${perPersonTotal.toFixed(2)}`;

        const payamount = Number(total.value) + perPersonTotal

        payableamount.innerHTML = ` Rs : ${payamount.toFixed(2)} `
      }
    }
  });
}
