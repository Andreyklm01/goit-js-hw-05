// Напиши класс StringBuilder.На вход он получает один параметр - строку,
//     которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

class StringBuilder {
  constructor(value) {
    this._value = value;
    this.arr = [];
    this.arr.push(value);
  }

  get value() {
    return this._value;
  }

  append(str) {
    this.arr.push(str);

    this._value = this.arr.join('');
    return this._value;
  }

  prepend(str) {
    this.arr.unshift(str);

    this._value = this.arr.join('');
    return this._value;
  }
  pad(str) {
    this.arr.unshift(str) && this.arr.push(str);

    this._value = this.arr.join('');
    return this._value;
  }
}

const builder = new StringBuilder('.');
// console.log(builder.value);

builder.append('^');
builder.append(')');
console.log(builder.value); // '.^'

builder.prepend('^');
builder.prepend('(');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
