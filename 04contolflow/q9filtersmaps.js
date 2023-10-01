let movie = [
     { movie: "A", genre: "Horror", released: 2001 },
     { movie: "B", genre: "Adventure", released: 2001 },
     { movie: "C", genre: "Emotional", released: 2001 },
     { movie: "D", genre: "Science-fiction", released: 2001 },
     { movie: "E", genre: "Action", released: 2001 },
     { movie: "F", genre: "Action", released: 2001 },
     { movie: "G", genre: "Science-fiction", released: 2001 },
     { movie: "H", genre: " Drama. ", released: 2001 },
     { movie: "I", genre: "Mystery", released: 2001 },
     { movie: "J", genre: "Action", released: 2001 },
     { movie: "K", genre: "Drama", released: 2001 },
     { movie: "L", genre: "Horror", released: 2001 },
     { movie: "M", genre: "Mystery", released: 2001 },
];

let userIntrest = movie.filter((mL) => {
     return mL.genre === 'Horror'
});
// console.log(userIntrest);

const arrnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
newnums = arrnums.filter((num) => {
     return num + 2
})

console.log(newnums);
console.log("--------------------------------");

newnums = arrnums.map((num) => {
     return num + 2
})
console.log(newnums);