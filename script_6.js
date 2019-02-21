const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
/*
  entrepreneurs.sort((a, b) => (a.last > b.last) ? 1 : -1)
  console.log(entrepreneurs)

//console.log(entrepreneurs[0].year)
 
for (var hash = 0; hash < entrepreneurs.length; hash ++) {
   age = 2019 - (entrepreneurs[hash].year);
   console.log(age);

} 

for (var hash = 0; hash < entrepreneurs.length; hash ++) {
    full_name = (entrepreneurs[hash].first + " " + (entrepreneurs[hash].last))
    console.log(full_name);
}
*/
    let seventies = []
for (var hash = 0; hash < entrepreneurs.length; hash ++) {
    
    let birthYear = entrepreneurs[hash].year;
    if (String(birthYear).indexOf("7") == 2) {
        seventies.push(entrepreneurs[hash]) ;
    }
    
}
    console.log(seventies);

