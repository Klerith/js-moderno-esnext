const superHeroes = [
  {
    id: 1,
    name: 'Batman',
  },
  {
    id: 2,
    name: 'Superman'
  },
  {
    id: 3,
    name: 'Flash'
  },
  {
    id: 4,
    name: 'Aquaman'
  },
];


const superHeroesCopy = structuredClone(superHeroes);
superHeroesCopy[0].name = 'Green Lantern';


console.table( superHeroes );
console.table( superHeroesCopy );