'use server'

export async function fetchCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data;
}

export async function fetchCountry(countryname) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`);
    const data = await response.json();
    return data;
}

