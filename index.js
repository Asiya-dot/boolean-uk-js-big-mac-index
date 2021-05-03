//write your code here
const bigmacUsa= 5.66;
const bigmacSwizland=6.50
const bigmacSweden=6.37
const bigmacCanada= 5.29

 const bigmac= bigmacUsa < bigmacSwizland
 const bigmacprice= bigmacCanada > bigmacSwizland
 

 const bigmacNorway=6.09
 const Norwegianimpliedpurchasepower=bigmacUsa/bigmacNorway
 const NOKtoUSD=0.12;
 const bigmacNorwegianindex =(
     NOKtoUSD-Norwegianimpliedpurchasepower) /
     Norwegianimpliedpurchasepower

console.log("bigmac Usa price:",bigmacUsa)
console.log("bigmac Swizland price:",bigmacSwizland)
console.log("bigmac Sweden price:",bigmacSweden)
console.log("bigmac Norway price:",bigmacNorway)
console.log("bigmac Cananada price:",bigmacCanada)
console.log("is bigmacUsa less than bigmacSwizland",bigmac )
console.log("is bigmacCanda greater than bigmacSwizland",bigmacprice)

console.log(
"The Norwegian big mac index is:",
(bigmacNorwegianindex * 100).toFixed() + "%" );
















