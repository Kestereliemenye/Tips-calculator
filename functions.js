let billAmount = document.getElementById("bills")
let display = document.getElementById("tip")

// function to calculate the tip 
function calTip(amount){
    let bill = parseFloat(billAmount.value)
    // to check wether the number is === NAN
    if (isNaN(bill)){
        alert("INVALID BILL AMOUNT")
        display.value = '';
    }else{
        let result = (bill * amount) / 100
    display.value = result.toFixed(2)

    }
}
// event listeners
document.querySelector('#ten').addEventListener("click", function(){
    calTip(10)
})
document.querySelector('#fifteen').addEventListener("click", function(){
    calTip(15)
})
document.querySelector('#twenty').addEventListener("click", function(){
    calTip(20)
})

//popup
let popup = document.getElementById("popup")
// open popup
function openPopup() {
    popup.classList.add("open-popup")
}
// closes popup
function closePopup() {
    popup.classList.remove("open-popup")
}
//event listeners for the popup
document.getElementById('open-popups').addEventListener("click", openPopup)
document.getElementById("close-popup").addEventListener("click", closePopup)