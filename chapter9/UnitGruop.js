class UnitGroup {
  constructor(unitList) {
    let units = new Map();
    let iteratorUnitList = unitList[Symbol.iterator]();
    for (iteratorUnitList; iteratorUnitList.hasNext()) {
      let unit = iteratorUnitList.next();
      units.put(unit.getId(), unit);
    }
  }
}
