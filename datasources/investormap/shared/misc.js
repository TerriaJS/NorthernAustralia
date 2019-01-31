/* Miscellaneous individual items that we're cherry-picking, rather than taking whole groups. */
const getFromCatalogPath = require("../../getFromCatalogPath");
const nm = require("./externalCatalogs").nationalmap;

const miscItems = [
  {
    type: "group",
    name: "Environment",
    items: [
      getFromCatalogPath(nm, [
        "National Datasets",
        "Surface Water and Marine",
        "Tidal",
        "Mangrove Canopy Cover 25m"
      ])
    ]
  }
];

module.exports = miscItems;