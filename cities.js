const manitobaCities = [
  "Agassiz Provincial Forest", "Alexander", "Alonsa", "Altona", "Arborg",
  "Ashern", "Austin", "Baldur", "Basswood", "Beausejour",
  "Belmont", "Benito", "Berens River", "Beulah", "Binscarth",
  "Birtle", "Bissett", "Boissevain", "Brandon", "Brochet",
  "Brookdale", "Camperville", "Carberry", "Carman", "Cartwright",
  "Churchill", "Cormorant", "Cowan", "Cranberry Portage", "Crandall",
  "Cross Lake", "Crystal City", "Cypress River", "Darlingford", "Dauphin",
  "Deloraine", "Dominion City", "Dugald", "Easterville", "Eddystone",
  "Edwin", "Elgin", "Elie", "Elkhorn", "Elm Creek",
  "Emerson", "Erickson", "Eriksdale", "Ethelbert", "Falcon Lake",
  "Fisher Branch", "Fisher River", "Flin Flon", "Fork River", "Foxwarren",
  "Gilbert Plains", "Gillam", "Gimli", "Gladstone", "Glenboro",
  "Glenella", "Gods Lake Narrows", "Grand Beach", "Grand Rapids", "Grandview",
  "Gretna", "Gypsumville", "Hadashville", "Hamiota", "Hartney",
  "Hecla", "Holland", "Ilford", "Inwood", "Island Lake",
  "Kelwood", "Kenton", "Killarney", "La Broquerie", "Lac Brochet",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < manitobaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(manitobaCities[i]);
}

module.exports = { batches };
