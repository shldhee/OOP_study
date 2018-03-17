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
      // return null;
      throw "No properties for this Unit."
    }
    // return this.properties.get(property);
    const value = this.properties.get(property);
    if (!value) {
      throw "Request for non-existent property.";
    } else {
      return value;
    }
  }
}

class UnitGroup {
  constructor(unitList) {
    this.units = new Map();
    let i = unitList[Symbol.iterator]();
    let j = i.next();

    while(!j.done) {
      // console.log(j.value);
      // console.log(j.done);
      this.units.set(j.value.id, j);
      j = i.next();
    }

    // for(i; !j.done) {
    //   console.log()
    // }
    // for (let j = i.next(); !j.done;) {
    //   console.log(!j.done);
    //   console.log(j.value);
    //   i.next();
    // }
    // let iteratorUnitList = unitList[Symbol.iterator]().next();
    // while (!iteratorUnitList.done) {
    //   let unit = iteratorUnitList.value;
    //   this.units.set(unit.id, unit);
    //   console.log(unit);
    //   iteratorUnitList = unitList[Symbol.iterator]().next();
    // }
  }

  addUnit(unit) {
    console.log(unit);
    this.units.set(unit.id, unit);
  }

  // removeUnit(id) {
  //   this.units.delete(id);
  // }
  //
  // removeUnit(unit) {
  //   this.units.delete(unit.getId());
  // }

  removeUnit(id) {
    if(typeof id === "number") {
        this.units.delete(id);
    } else {
        this.units.delete(id.getId());
    }
  }

  getUnit(id) {
    return this.units.get(id);
  }

  getUnits() {
    let unitList = [];
    let i = this.units[Symbol.iterator]();
    let j = i.next();

    while(!j.done) {
      unitList.push(j);
      j = i.next();
    }

    // for ( i = this.units.entries(); !i.next().done; ) {
    //   let unit = i.next();
    //   unitList.push(unit);
    // }

    // var i = this.units.entries();
    // i.next();
    // console.log(i);

    return unitList;
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
    try {
      const outputValue = unit.getProperty(propertyName);
    } catch (e) {
      console.log("Test passed");
      return;
    }
    console.log("Test failed");
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
const unit1 = new Unit(1001);
const unit2 = new Unit(1002);
const unit3 = new Unit(1003);
const unit4 = new Unit(1004);
const unit5 = new Unit(1005);
const unitList = [unit, unit1, unit2, unit3];
const axe = new Weapon("axe");
tester.testType(unit, "infantry", "infantry");
tester.testUnitSpecificProperty(unit, "hitPoints", 25, 25);
tester.testChangeProperty(unit, "hitPoints", 15, 15);
tester.testNonExistentProperty(unit, "strength");
tester.testGetId(unit, 1000);
tester.testAddWeapon(unit, axe.weapon, axe.weapon); // 객체로 받는 부분...TT

const group = new UnitGroup(unitList);
group.getUnit(1000);

// group.addUnit(unit)
// group.removeUnit(unit or id)
// group.getUnit(id)
// group.getUnits()
