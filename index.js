//objects of ram and krishna

let ram = {
  name: "Ram",
  power: 2500,
  yuga: "Treta",
};

let krishna = {
  name: "krishna",
  power: 2325,
  yuga: "Dwapar",
};

function getAdditionalPower(person) {
  let ramAdditionalPower = person.name.split("").length;
  additionalPower = ramAdditionalPower * 35;
  return additionalPower;
}

function ramAndKrishna(ram, krishna) {
  let additionalPowerOfRam = getAdditionalPower(ram);
  let additionalPowerOfKrishna = getAdditionalPower(krishna);
  ram.power = ram.power + additionalPowerOfRam;
  krishna.power = krishna.power + additionalPowerOfKrishna;

  if (ram.power === krishna.power) {
    return "both are powerful";
  } else if (ram.power > krishna.power) {
    return ram;
  } else {
    return krishna;
  }
}

const result = ramAndKrishna(ram, krishna);

console.log(result);
