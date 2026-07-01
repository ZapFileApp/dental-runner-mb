const manitobaCities = [
  "Lac du Bonnet", "Langruth", "Leaf Rapids", "Libau", "Little Grand Rapids",
  "Lockport", "Lundar", "Lynn Lake", "MacGregor", "Mafeking",
  "Manigotagan", "Manitou", "McAuley", "McCreary", "Melita",
  "Miami", "Miniota", "Minnedosa", "Minto", "Moose Lake",
  "Morden", "Morris", "Neepawa", "Nelson House", "Newdale",
  "Niverville", "Norway House", "Notre Dame de Lourdes", "Oak Lake", "Oak River",
  "Oakville", "Ochre River", "Oxford House", "Peguis", "Pelican Rapids",
  "Pikwitonei", "Pilot Mound", "Pinawa", "Pine Dock", "Pine Falls",
  "Pine River", "Piney", "Plum Coulee", "Plumas", "Pointe du Bois",
  "Poplar River", "Poplarfield", "Portage la Prairie", "Rapid City", "Rathwell",
  "Red Sucker Lake", "Rennie", "Reston", "Rivers", "Riverton",
  "Roblin", "Roland", "Rorketon", "Rossburn", "Russell",
  "Sandy Lake", "Sanford", "Selkirk", "Shamattawa", "Shilo",
  "Shoal Lake", "Sidney", "Sifton", "Snow Lake", "Snowflake",
  "Somerset", "Souris", "South Indian Lake", "Sperling", "Split Lake",
  "Sprague", "St-Pierre-Jolys", "St. Claude", "St. Francois Xavier", "St. Jean Baptiste",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < manitobaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(manitobaCities[i]);
}

module.exports = { batches };
