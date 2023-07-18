//big O
//insertion O(1)
//ddeletion O(1)
//Access O(1)

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let position = this._hash(key);
    if (this.keyMap[position] === undefined) {
      this.keyMap[position] = [];
    }
    let newArr = [key, value];
    this.keyMap[position].push(newArr);
  }

  get(key) {
    let position = this._hash(key);
    if (this.keyMap[position] === undefined) return undefined;
    let positionArr = this.keyMap[position];
    for (let i = 0; i < positionArr.length; i++) {
      if (positionArr[i][0] === key) return positionArr[i];
    }
    return undefined;
  }

  getkeys() {
    if (!this.keyMap) return undefined;
    let returnArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          returnArr.push(this.keyMap[i][j][0])
        }
      }
    }
    return returnArr;
  }

  getvalues() {
    if (!this.keyMap) return undefined;
    let returnArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          returnArr.push(this.keyMap[i][j][1])
        }
      }
    }
    return returnArr;
  }
}

const hash = new HashTable();
hash.set('orange', '#FFA500');
hash.set('red', '#FF0000');
hash.set('green', '#00FF00');
hash.set('yellow', '#FFFF00');
hash.set('purple', '#A020F0');
hash.set('purple', '#A020F0');
hash.set('blue', '#0000FF');
console.log(hash.getkeys());
console.log(hash.getvalues());