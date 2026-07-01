const manitobaCities = [
  "St. Laurent", "St. Lazare", "Starbuck", "Ste. Agathe", "Ste. Rose du Lac",
  "Steep Rock", "Steinbach", "Stonewall", "Strathclair", "Swan Lake",
  "Swan River", "Tadoule Lake", "Teulon", "The Pas", "Thicket Portage",
  "Thompson", "Treherne", "Virden", "Vita", "Waasagomach",
  "Wabowden", "Wanless", "Wasagaming", "Waterhen", "Wawanesa",
  "Whitemouth", "Winkler", "Winnipeg", "Winnipeg Beach", "Winnipegosis",
  "Woodridge",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < manitobaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(manitobaCities[i]);
}

module.exports = { batches };
