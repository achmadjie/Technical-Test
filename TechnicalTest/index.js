const fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

// Number #1

console.log();
console.log(`Number #1\n`);

for (const i of fruits) {
  console.log(`Andi's Fruit Name : ${i.fruitName}`);
}

// Number #2

console.log();
console.log(`Number #2\n`);

const fruitContainers = {};

fruits.forEach((i) => {
  if (!fruitContainers[i.fruitType]) {
    fruitContainers[i.fruitType] = [];
  }
  fruitContainers[i.fruitType].push(i.fruitName);
});

const totOfContainers = Object.keys(fruitContainers).length;

console.log(`Total of Containers : ${totOfContainers}\n`);
console.log(`Container Contains`);
for (const theType in fruitContainers) {
  console.log(`- ${theType} : ${fruitContainers[theType].join(", ")}`);
}

// Number #3

console.log();
console.log(`Number #3\n`);

for (const theType in fruitContainers) {
  let totOfStock = 0;
  fruitContainers[theType].forEach((j) => {
    const findFruit = fruits.find((findFruit) => findFruit.fruitName === j);
    totOfStock += findFruit.stock;
  });
  console.log(`Total of Stock ${theType}: ${totOfStock}`);
}

// Number #4

console.log();
console.log(`Number #4\n`);

console.log("tidak ada pertanyaan")

// Number #5

console.log();
console.log(`Number #5\n`);

const comments = [
	{
		commentId: 1,
		commentContent: "Hai",
		replies : [
			{
				commentId: 11,
				commentContent: "Hai juga",
				replies: [
					{
						commentId: 111,
						commentContent: "Haai juga hai jugaa"
					},
					{
						commentId: 112,
						commentContent: "Haai juga hai jugaa"
					}
				]
			},
			{
				commentId: 12,
				commentContent: "Hai juga",
				replies: [
					{
						commentId: 121,
						commentContent: "Haai juga hai jugaa"
					}
				]
			}
		]
	},
	{
		commentId: 2,
		commentContent: "Halooo"
	}
]

function countTotComments(comment) {
	let tot = 0;

	for(const i of comment){
		tot++;
		if(i.replies && i.replies.length > 0){
			tot += countTotComments(i.replies);
		}
	}

	return tot;
}

const totComments = countTotComments(comments);
console.log(`Total Komentar : ${totComments}`);
