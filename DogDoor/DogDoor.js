class DogDoor {
  constructor() {
    this._open = false;
    this._allowedBarks = [];
  }

  addAllowedBark(bark) {
    this._allowedBarks.push(bark);
  }

  getAllowedBarks() {
    return this._allowedBarks;
  }

  open() {
    console.log('문이 열렸습니다.');
    this._open = true;

    setTimeout(() => {
      this.close();
    }, 5000);
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
    console.log('리모콘을 눌렀습니당');
    if (this._door.isOpen()) {
      this._door.close();
    } else {
      this._door.open();
    }
  }
}

class Bark {
  constructor(sound) {
    this._sound = sound;
  }

  getSound() {
    return this._sound;
  }

  equals(bark) {
    if (bark instanceof Bark) {
      if (this._sound === bark) {
        return true;
      }
    }
    return false;
  }
}

class BarkRecognizer {
  constructor(door) {
    this._door = door;
  }

  recognize(bark) {
    console.log(`강아지 소리"${bark.getSound()}"을(를) 들었다.`);
    let allowedBarks = door.getAllowedBarks();
    for( let i = 0; i < allowedBarks.length; i++) {
      if( allowedBarks[i]._sound == bark._sound) {
        door.open();
        return;
      }
    }
    console.log("This dog is not allowed.");
  }
}

function sleep(time){
  const t1 = new Date().getTime() + time;
  do{
		var t2 = new Date().getTime();
	}while(t2 < t1)
}

let door = new DogDoor();
door.addAllowedBark(new Bark("mung"));
door.addAllowedBark(new Bark("pung"));
door.addAllowedBark(new Bark("ang"));
door.addAllowedBark(new Bark("wang"));

let recognizer = new BarkRecognizer(door);
let remote = new Remote(door);

console.log("브루스 짖기 시작한다");
recognizer.recognize(new Bark("Mung"));
//recognizer.recognize(new Bark("mung")); 문이 닫혔습니다. door.open setTimeout();
console.log("브루스 밖으로 나갔다.");

// 10초뒤
sleep(10000);

console.log("브루스 일을 다 봤다.")
console.log("근데 아직도 밖에 있다.")

const smallDogBark = new Bark("grrr");
console.log("피도가 짖는다");
recognizer.recognize(smallDogBark);

sleep(5000);
// 5초뒤

console.log("브루스 짖는다");
recognizer.recognize(new Bark("mung"));
console.log("브루스 집에 들어온다.");
