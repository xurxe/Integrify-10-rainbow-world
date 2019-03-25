const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Côte d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
];

const numberTotal = document.querySelector('#number-total');

const searchBox = document.querySelector('#search-box');
searchBox.style.fontSize = '1rem';
searchBox.style.margin = '0.2rem 0 1.5rem';
searchBox.style.padding = '0.4rem 0.6rem';
searchBox.style.width = '100%';

const searchModeOptions = document.querySelectorAll('input[name=searchMode]');
console.log(searchModeOptions);

const resultsSection = document.querySelector('.results-section');
let count = 0;
let string = "";
let resultSentence = document.querySelector('#result-sentence');
let resultDivs;

let H = Math.floor(Math.random() * countries.length);
let S = 100;
let L = 80;

function init() {
    numberTotal.textContent = countries.length;

    for (let i = 0; i < countries.length; i++) {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result-div';
        resultsSection.appendChild(resultDiv);
        resultDiv.textContent = countries[i];

        let newH = H + i;
        let hsl = `hsl(${newH}, ${S}%, ${L}%)`;
        resultDiv.style.background = hsl;
    }

    resultDivs = document.querySelectorAll('.result-div');
}

function search() {
    searchMode = document.querySelector('input[name=searchMode]:checked');
    console.log(searchMode.value);

    if (searchMode.value === "startsWith") {
        findStartsWith();
        searchBox.addEventListener('keyup', findStartsWith);


    }

    else if (searchMode.value === "contains") {
        findContains();
        searchBox.addEventListener('keyup', findContains);
    }

};

function findStartsWith() {
    string = searchBox.value;
    let regex = new RegExp('^' + string, 'ig');
    count = 0;

    for (i = 0; i < countries.length; i++) {
        if (countries[i].match(regex)) {
            resultDivs[i].style.display = 'block';
            count++;
        }

        else {
            resultDivs[i].style.display = 'none';
        }
    }

    if (string === "") {
        resultSentence.innerHTML = 'Type above to filter results!';
        return;
    }

    else if (count === 0) {
        resultSentence.innerHTML = `There aren't any countries starting with <span id="search-string">&ldquo;${string}&rdquo;</span>`;
        return;

    }

    else {
        resultSentence.innerHTML = `There are <span id="result-count">${count}</span> countries starting with <span id="search-string">&ldquo;${string}&rdquo;</span>`;
        return;
    };
};

function findContains(string) {
    string = searchBox.value;
    let regex = new RegExp(string, 'ig');
    count = 0;

    for (i = 0; i < countries.length; i++) {
        if (countries[i].match(regex)) {
            resultDivs[i].style.display = 'block';
            count++;
        }

        else {
            resultDivs[i].style.display = 'none';
        }
    }

    if (string === "") {
        resultSentence.innerHTML = 'Type above to filter results!';
        return;

    }

    else if (count === 0) {
        resultSentence.innerHTML = `There aren't any countries starting with <span id="search-string">&ldquo;${string}&rdquo;</span>`;
        return;

    }

    else {
        resultSentence.innerHTML = `There are <span id="result-count">${count}</span> countries containing <span id="search-string">&ldquo;${string}&rdquo;</span>`;
        return;

    };
};

init();

searchBox.addEventListener('focus', search);

for (let i = 0; i < searchModeOptions.length; i++) {
    searchModeOptions[i].addEventListener('click', search);
}