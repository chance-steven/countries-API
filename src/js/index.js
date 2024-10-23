const containerElt = document.querySelector("#container");
const inputElt = document.querySelector("#search-field")

let countriesarr = [];

try{
  
   async function fetchingElt() {
    const response =await fetch(" https://restcountries.com/v3.1/all");
    const data =await response.json();
    console.log(data)
    countriesarr=data
    spreadElt(countriesarr)
  
    }
    fetchingElt()
}catch{
console.log(err)
}
 function spreadElt(countries){
    containerElt.innerHTML="";
 countries.forEach(country => {
    console.log(country);
    const createdElt =document.createElement("div");
    createdElt.innerHTML=`
    <p>${country.name.common}</p>
    <img src='${country.flags.png}' alt='${country.flags.alt}'>
    `;
    containerElt.appendChild(createdElt)

 });
 }
 
 inputElt.addEventListener('keyup',(e)=>{
    const term = e.target.value.toLowerCase();
   const filtedCountries =countriesarr.filter(country  => country.name.common.toLowerCase().includes(term))
   spreadElt(filtedCountries)
 })