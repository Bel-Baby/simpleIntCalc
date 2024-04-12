const calcSimpInt = document.querySelector(".CalcSimpInt");

const convertPercentageToDecimal = (rate) => {
    return rate / 100;
}

const calculateSimpleInterest = (price, rate, time) => {
    const newRate = convertPercentageToDecimal(rate);
    const simpleInterest = price.value * newRate * time.value / 100;
    return simpleInterest;
}

const showSimpInt = () => {
    const rate = document.getElementById("rate");
    const result = document.querySelector(".result");
    const price = document.getElementById("price");
    const time = document.getElementById("time");

    const intRate = rate.value;
    const simpleInterest = calculateSimpleInterest(price, intRate, time);

    result.textContent = simpleInterest;
}

calcSimpInt.addEventListener("click", showSimpInt);