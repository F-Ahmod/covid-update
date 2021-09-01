
document.getElementById('search-btn').addEventListener('click', function(){
    const searchInput = document.getElementById('search-input');
    const city=searchInput.value;
    fetch(`https://api.covid19api.com/total/country/${city}`)
    .then(res => res.json())
    .then(data =>display(data));
    searchInput.value='';
});



const display = data => {
    console.log(data);
    
    const CountryName = document.getElementById('CountryName');
    const Confirmed = document.getElementById('Confirmed');
    const Deaths = document.getElementById('Deaths');
    const Active=document.getElementById('Active');
    const Recovered=document.getElementById('Recovered')

   const update =data.reverse()[0];
    CountryName.innerText = `Country  ${update.Country}`;
    Confirmed.innerText = `Total Confirmed Case : ${update.Confirmed}`;
    Active.innerText = `Total Active Case : ${update.Active}`;
    Recovered.innerText = `TotalRecovered Case : ${update.Active}`;
    Deaths.innerText = `Total Deaths : ${update.Deaths}`;
}