class Unit {
  constructor (id) {
    this.id = id;
  };
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getType() {
    return this.type;
  }
  setType(type) {
    this.type = type;
  }
  addWeapon(weapon) {
    if (!this.weapons) {
      this.weapons = [];
    }
    this.weapons.push(weapon)
  }
  getWeapons() {
    return this.weapons;
  }
  setProperty(property, value) {
    if(!this.properties) {
      this.properties = new Map();
    }
    this.properties.set(property, value);
  }
  getProperty(property) {
    if(!this.properties) {
      return null;
    }
    return this.properties.get(property);
  }
}

class Weapon {
  constructor (weapon) {
    this.weapon = weapon;
  }
}

class UnitTester {
  testType(unit, type, expectedOutputType) {
    console.log("\nTesting setting/getting the type property");
    unit.setType(type);
    const outputType = unit.getType(type);
    if (expectedOutputType === outputType) {
      console.log("Test Passed");
    } else {
      console.log(`Test Failed: ${outputType} didn't match ${expectedOutputType}`);
    }
  }

  testUnitSpecificProperty(unit, propertyName, inputValue, expectedOutputValue) {
    console.log("\nTesting setting/getting a unit-specific property.");
    unit.setProperty(propertyName, inputValue);
    const outputValue = unit.getProperty(propertyName);
    if (expectedOutputValue === outputValue) {
      console.log("Test Passed");
    } else {
      console.log(`Test Failed: ${outputValue} didn't match ${expectedOutputValue}`);
    }
  }

  testChangeProperty(unit, propertyName, inputValue, expectedOutputValue) {
    console.log("\nTesting changing an existing property's value.");
    unit.setProperty(propertyName, inputValue);
    const outputValue = unit.getProperty(propertyName);
    if (expectedOutputValue === outputValue) {
      console.log("Test Passed");
    } else {
      console.log(`Test Failed: ${outputValue} didn't match ${expectedOutputValue}`);
    }
  }

  testNonExistentProperty(unit, propertyName) {
    console.log("\nTesting getting a non-existent property's value.");
    const outputValue = unit.getProperty(propertyName);
    if (!outputValue) {
      console.log("Test passed");
    } else {
      console.log(`Test failed with value of ${outputValue}`);
    }
  }

  testGetId(unit, expectedOutputId) {
    console.log("\nTesting getting id");
    const outputId = unit.getId();
    if (expectedOutputId === outputId) {
      console.log("Test passed");
    } else {
      console.log(`Test Failed: ${outputId} didn't match ${expectedOutputId}`);
    }
  }

  testAddWeapon(unit, weapon, expectedOutputWeapon) {
    console.log("\nTesting adding weapon");
    unit.addWeapon(weapon);
    const outputWeapon = unit.getWeapons();
    if (expectedOutputWeapon == outputWeapon) { // === 아니고 ==
        console.log("Test Passed");
      } else {
        console.log(`Test Failed: ${outputWeapon} didn't match ${expectedOutputWeapon}`);
      }
    }
}

const tester = new UnitTester();
const unit = new Unit(1000);
const axe = new Weapon("axe");
tester.testType(unit, "infantry", "infantry");
tester.testUnitSpecificProperty(unit, "hitPoints", 25, 25);
tester.testChangeProperty(unit, "hitPoints", 15, 15);
tester.testNonExistentProperty(unit, "strength");
tester.testGetId(unit, 1000);
tester.testAddWeapon(unit, axe.weapon, axe.weapon); // 객체로 받는 부분...TT
