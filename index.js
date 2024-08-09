class Auto_Show {

sell(showroomName) { // введите названия вашего автосалона
  console.log(`В ${showroomName} автосалоне  продается машина ${this.car}`); 
}

start() {
  console.log(`Машина ${this.car} начала движение`);
  
  
}
stop() {
  console.log(`Процесс остановки автомобиля ${this.car} начался.`);
 
}

}
class Car extends Auto_Show {
  static type = 'BMW';
  constructor(options) {
    super(options);
    this.color = options.color;
    this.selled = options.selled;
    this.car = options.car;
    this.Maxspeedkm_h = options.Maxspeedkm_h;
  }
  start(initialSpeed) { // ввести начальную скорость с которой она начнет движение
    let speed = initialSpeed || 0;

  console.log(`${this.car} поехала хасанить`);
  const setIntervalId = setInterval(() => {
    if( speed < this.Maxspeedkm_h) {
      console.log(`текущая скорость: ${speed}`);
      speed += 55;
    
    if(speed > this.Maxspeedkm_h) {
      speed = this.Maxspeedkm_h;
    
   }
  }
      else {
        clearInterval(setIntervalId)
        console.log(`${this.car} достигла максимальной скорости: ${this.Maxspeedkm_h} km/h`);
      }
    }
  , 1000)
  }
  sell(showroomName) {
    super.sell(showroomName);
   
    
  }
//   static compare(CarA, CarB) {
//     return CarA.Maxspeedkm_h - CarB.Maxspeedkm_h;
// }
stop(amount, speed) { // ввести скорость снижения автомобиля и саму скорость  с которой будет начинать снижаться
  super.stop()
  this.speed = speed
  const intervalId = setInterval(() => {
    if (speed > 0) {
      console.log(`Текущая скорость: ${speed} km/h`);
      speed -= amount;
      if (speed < 0) speed = 0; 
    } else {
      clearInterval(intervalId); 
      console.log(`${this.car} остановилась, скорость составляет ${speed} km/h.`);
    }
  }, 1000); 
}

}

let car = new Car({
    car: 'BMW M5 F10',
     color: 'red',
    selled: '100.000$',
    Maxspeedkm_h: 340
    })

// let cars = [
//   new Car({
//     name: 'крутой',
//   car: 'BMW M5 F10',
//   color: 'red',
//   selled: '100.000$',
//   Maxspeedkm_h: 340
//   }),
//   new Car({
//     name: 'крутой',
//   car: 'BMW M5 F90 CS',
//   color: 'black',
//   selled: '130.500$',
//   Maxspeedkm_h: 320
//   }),
// ]
// cars.sort(Car.compare)
