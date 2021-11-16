// standard math equation for calculating monthly mortgage payment
// P(r(1+r)^n/((1+r)^n)-1))
// Where:
// P is the principal loan amount
// r is the monthly interest rate
// n is the total number of payments on your mortgage
// Users will make 12 payments on their mortgage per year of their mortgage, and the monthly interest rate is the annual interest rate divided by 12.

function updateValue(id, newValue) {
    console.log(id, newValue)
    this.value = newValue
    console.log(this.value)
}

function calculate() {
    let principal = document.getElementById("principal").value
    console.log("principal", principal)
    let rate = document.getElementById('rate-year').value * .01 / 12
    console.log('rate', rate)

    let length = document.getElementById('length-year').value * 12
    console.log("length", length)
    function mortgagePayment(p, r, n) {
        let firstCalc = Math.pow(1 + r, n)
        let numerator = r * firstCalc
        let denominator = firstCalc - 1
        return p * (numerator / denominator)
    }
    let calculatedPayment = mortgagePayment(principal, rate, length)
    console.log("mortgagePayment", mortgagePayment)
    document.getElementById('calculatedResults').innerHTML =
        calculatedPayment.toFixed(2)
}

// validate fields are numbers only