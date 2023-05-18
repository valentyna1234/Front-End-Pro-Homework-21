//1. Створити сутність "Людина".
//   Властивості:
//   імʼя;
//   вік.
//   Методи:
//   конструктор, який приймає два параметри: імʼя та вік;
//   метод, який виводить у консоль інформацію про людину.
//2. Створити сутність "Автомобіль".
//   Властивості:
//   марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
//   власник.
//   Методи:
//   конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
//   присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, 
//   інакше виводити у консоль відповідне повідомлення
//   метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника

//В якості демонстраціїї створити:

//декілька екземплярів класу Людина;
//декілька екземплярів класу Автомобіль;
//присвоїти власників автомобілям.


class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    console.log(`Name: ${this.name}, age: ${this.age}`)
  }
}

class Car {
  constructor(brand, model, year, licensePlate) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
    this.owner = null;
  }

  setOwner(owner) {
    if (owner.age >= 18) {
      this.owner = owner;
    }else {
      console.log('The owner of the car must be older than 18 years')
    }
  }

  displayInfo() {
    console.log('Brand: ', this.brand);
    console.log('Model: ', this.model);
    console.log('Year: ', this.year);
    console.log('License Plate: ', this.licensePlate);
    if (this.owner) {
      console.log('Owner: ');
      this.owner.getInfo();
    } else {
      console.log('No owner assigned');
    }
  }
}

const human1 = new Human('Jhon', 35);
const human2 = new Human('Marry', 15);
const human3 = new Human('Alex', 20);

const car1 = new Car('MINI Cooper', '4 Door Hardtop', 2023, 'SA4532HU');
const car2 = new Car('Ford Mustang', 'Shelby GT500', 2020, 'GF5698JK');
const car3 = new Car('BMW', 'X4', 2022, 'TR6712MN');

car1.setOwner(human1);
car2.setOwner(human2);
car3.setOwner(human3);

car1.displayInfo();
console.log('==========');
car2.displayInfo();
console.log('==========');
car3.displayInfo();



//humanFirst.info;
//humanSecond.info;
//humanThird.info;

//carFirst.owner(humanFirst);
//carSecond.owner(humanSecond);
//carThird.owner(humanThird);

//carFirst.carInfo;
//carSecond.carInfo;
//carThird.carInfo;