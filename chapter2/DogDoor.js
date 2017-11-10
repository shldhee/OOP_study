class DogDoor {
  static open() {
    return DogDoor._open = false;
  }

  constructor() {
    this._open = DogDoor.open();
  };

  open() {
    console.log("The dog door opens.");
    this._open = true;
  }

  close() {
    console.log("The dog door closes.");
    this._open = false;
  }

  isOpen() {
    return this._open;
  }
}

class Remote {
  constructor(door) {
    this.door = door;
  }

  pressButton() {
    console.log("Pressing the remote control button....");
    if(this.door.isOpen()) {
      this.door.close();
    } else {
      this.door.open();
    }
  }
}
