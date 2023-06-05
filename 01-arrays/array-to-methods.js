const heroes = ['Batman','Superman','Flash','Aquaman',];
// heroes.sort();

// const deletedHeroes = heroes.splice(0,2, 'Green');
const deletedHeroes = heroes.toSpliced(0, 2, 'Green Lantern')


// const heroesCopy = heroes;

// const sortedHeroes = heroes.toSorted();
// heroes.reverse();

// const reversedHeroes = heroes.toReversed();


console.table(heroes);
console.table(deletedHeroes);
// console.table(reversedHeroes);