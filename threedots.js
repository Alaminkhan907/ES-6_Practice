const ages = [14,16,13,17];
const ages2 = [15,16,13];
const ages3 = [25,26,33];
const allAges = ages.concat(ages2);
const allAges2 = [...ages,...ages2,5,...ages3];
console.log(allAges2);
const money = [550,650,445];
const result  = Math.max(...money);
console.log(result);