class Remote {
  const door = new DogDoor();

  constructor(door) {
    super();
    this.door = door;
  }

  pressButton() {
    console.log("Pressing the remote control button....");
    if(door.isOpen()) {
      door.close();
    } else {
      door.open();
    }
  }
}
