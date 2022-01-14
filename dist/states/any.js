"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.any = void 0;
const random_int_1 = __importDefault(require("random-int"));
const alabama_1 = require("./alabama");
const alaska_1 = require("./alaska");
const arizona_1 = require("./arizona");
const arkansas_1 = require("./arkansas");
const california_1 = require("./california");
const colorado_1 = require("./colorado");
const connecticut_1 = require("./connecticut");
const delaware_1 = require("./delaware");
const florida_1 = require("./florida");
const georgia_1 = require("./georgia");
const hawaii_1 = require("./hawaii");
const idaho_1 = require("./idaho");
const illinois_1 = require("./illinois");
const indiana_1 = require("./indiana");
const iowa_1 = require("./iowa");
const kansas_1 = require("./kansas");
const kentucky_1 = require("./kentucky");
const louisiana_1 = require("./louisiana");
const maine_1 = require("./maine");
const maryland_1 = require("./maryland");
const massachusetts_1 = require("./massachusetts");
const michigan_1 = require("./michigan");
const minnesota_1 = require("./minnesota");
const mississippi_1 = require("./mississippi");
const missouri_1 = require("./missouri");
const montana_1 = require("./montana");
const nebraska_1 = require("./nebraska");
const nevada_1 = require("./nevada");
const new_hampshire_1 = require("./new-hampshire");
const new_jersey_1 = require("./new-jersey");
const new_mexico_1 = require("./new-mexico");
const new_york_1 = require("./new-york");
const north_carolina_1 = require("./north-carolina");
const north_dakota_1 = require("./north-dakota");
const ohio_1 = require("./ohio");
const oklahoma_1 = require("./oklahoma");
const oregon_1 = require("./oregon");
const pennsylvania_1 = require("./pennsylvania");
const rhode_island_1 = require("./rhode-island");
const south_carolina_1 = require("./south-carolina");
const south_dakota_1 = require("./south-dakota");
const tennessee_1 = require("./tennessee");
const texas_1 = require("./texas");
const utah_1 = require("./utah");
const vermont_1 = require("./vermont");
const virginia_1 = require("./virginia");
const washington_1 = require("./washington");
const washington_dc_1 = require("./washington-dc");
const west_virginia_1 = require("./west-virginia");
const wisconsin_1 = require("./wisconsin");
const wyoming_1 = require("./wyoming");
const allStates = {
    alabama: alabama_1.alabama, alaska: alaska_1.alaska, arizona: arizona_1.arizona, arkansas: arkansas_1.arkansas, california: california_1.california, colorado: colorado_1.colorado, connecticut: connecticut_1.connecticut, delaware: delaware_1.delaware, florida: florida_1.florida, georgia: georgia_1.georgia, hawaii: hawaii_1.hawaii, idaho: idaho_1.idaho,
    illinois: illinois_1.illinois, indiana: indiana_1.indiana, iowa: iowa_1.iowa, kansas: kansas_1.kansas, kentucky: kentucky_1.kentucky, louisiana: louisiana_1.louisiana, maine: maine_1.maine, maryland: maryland_1.maryland, massachusetts: massachusetts_1.massachusetts, michigan: michigan_1.michigan, minnesota: minnesota_1.minnesota,
    mississippi: mississippi_1.mississippi, missouri: missouri_1.missouri, montana: montana_1.montana, nebraska: nebraska_1.nebraska, nevada: nevada_1.nevada, newHampshire: new_hampshire_1.newHampshire, newJersey: new_jersey_1.newJersey, newMexico: new_mexico_1.newMexico, newYork: new_york_1.newYork, northCarolina: north_carolina_1.northCarolina,
    northDakota: north_dakota_1.northDakota, ohio: ohio_1.ohio, oklahoma: oklahoma_1.oklahoma, oregon: oregon_1.oregon, pennsylvania: pennsylvania_1.pennsylvania, rhodeIsland: rhode_island_1.rhodeIsland, southCarolina: south_carolina_1.southCarolina, southDakota: south_dakota_1.southDakota, tennessee: tennessee_1.tennessee, texas: texas_1.texas,
    utah: utah_1.utah, vermont: vermont_1.vermont, virginia: virginia_1.virginia, washington: washington_1.washington, washingtonDc: washington_dc_1.washingtonDc, westVirginia: west_virginia_1.westVirginia, wisconsin: wisconsin_1.wisconsin, wyoming: wyoming_1.wyoming,
};
const stateKeys = Object.keys(allStates);
const numStates = stateKeys.length;
const randomStateKey = () => (stateKeys[(0, random_int_1.default)(numStates)]);
const any = () => allStates[randomStateKey()]();
exports.any = any;
for (let i = 0; i < 20; i++) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', (0, random_int_1.default)(1));
}
