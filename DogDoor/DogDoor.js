class DogDoor {
  constructor() {
    this._open = false;
  }

  open() {
    console.log('문이 열렸습니다.');
    this._open = true;
  }

  close() {
    console.log('문이 닫혔습니다.');
    this._open = false;
  }

  isOpen() {
    return this._open;
  }
}

class Remote {
  constructor(door) {
    this._door = door;
  }

  pressButton() {
    console.log(this._door);
    console.log('리모콘을 눌렀습니당');
    if (this._door.isOpen()) {
      this._door.close();
    } else {
      this._door.open();
    }
  }
}

var a = new DogDoor();
a.isOpen();
a.open();
a.close();
a.isOpen();

var b = new Remote(a);
b.pressButton();
