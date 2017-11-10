const door = new DogDoor();
const remote = new Remote(door);

console.log("피도 나가려고 짖는다.");
remote.pressButton();
console.log("피도 나갔다");
remote.pressButton();
console.log("피도 용변 마쳤다.");
remote.pressButton();
console.log("피도 복귀 했다.")
remote.pressButton();
