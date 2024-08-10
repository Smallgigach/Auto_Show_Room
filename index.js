const confirmModal = document.getElementById('confirmModal');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
let confirmCallback; 

const confirmModal2 = document.getElementById('confirmModal2');
const yesBtn2 = document.getElementById('yesBtn2');
const noBtn2 = document.getElementById('noBtn2');
let confirmCallback2;  

function showModal(callback) {
    confirmCallback = callback; 
    confirmModal.style.display = 'block';  
}

function hideModal() {
    confirmModal.style.display = 'none'; 
}

yesBtn.addEventListener('click', () => {
    hideModal(); 
    if (confirmCallback) confirmCallback(); 
});

noBtn.addEventListener('click', () => {
    hideModal();  
    console.log("Ты нищий"); 
});


function showModal2(callback) {
    confirmCallback2 = callback; 
    confirmModal2.style.display = 'block';  
}

function hideModal2() {
    confirmModal2.style.display = 'none'; 
}

yesBtn2.addEventListener('click', () => {
    hideModal2(); 
    if (confirmCallback2) confirmCallback2(); 
});

noBtn2.addEventListener('click', () => {
    hideModal2();  
    console.log("вы не тестируете автомобиль"); 
});
class Auto_Show {
constructor() {
  this.hasCar = false;
}
  testCar() {
    if (!this.hasCar) {
      console.log('Сначала вам нужно купить машину!');
      return;
  }
    showModal2(() => {
      
      console.log(`Вы тестируете  автомобиль ${this.car}`);
      this.start()
    
      
  });
  

  }
  buyCar() { 
    if (this.hasCar) {
      console.log('У вас уже есть машина!');
      return;
  }
    console.log(`В элитном автосалоне можно купить ${this.car}`);
    console.log(`Ее цена составляет ${this.selled}`)
    showModal(() => {
      console.log('Поздравляю с покупкой автомбиля');
      this.hasCar = true;
      
  });
  }

sellCar() { 
  console.log(`В элитном автосалоне  вы можете продать свою  машину ${this.car}`); 
}

startCar() {
  if (!this.hasCar) {
    console.log('Сначала вам нужно купить машину!');
    return;
}
  
  if(showModal2(() => {
      console.log('Для начал купите машину!');
    
    this.start()
  
    
}));
    

}
stopCar() {
  if (!this.hasCar) {
    console.log('Вы не можете остановить машину, у вас ее нет!');
    return;
}
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

  startCar(initialSpeed) {
    if (!this.hasCar) {
      console.log('Сначала вам нужно купить машину!');
      return;
    }
    if(!this.rights) {
      console.log('приобретите права');
      return;
      
    }
    this.rights = true;
      let speed = initialSpeed || 0;
  
      const setIntervalId = setInterval(() => {
          if (speed < 300) {
              console.log(`текущая скорость: ${speed}`);
              speed += 55; // Увеличиваем скорость на 55 км/ч до 300 км/ч
              if (speed > 300) {
                  speed = 300; // Ограничиваем скорость 300 км/ч
              }
          } else if (speed < this.Maxspeedkm_h) {
              console.log(`текущая скорость: ${speed}`);
              speed+= 2; // Увеличиваем скорость на 1 км/ч после 300 км/ч
              if (speed > this.Maxspeedkm_h) {
                  speed = this.Maxspeedkm_h; // Ограничиваем максимальную скорость
              }
          } 
          if (speed === this.Maxspeedkm_h) {
              clearInterval(setIntervalId);
              console.log(`${this.car} достигла максимальной скорости: ${this.Maxspeedkm_h} km/h`);
          }
      }, 1000);
    
}
  sellCar() {
    super.sell();
   
    
  }

stopCar(amount, speed) { // ввести скорость снижения автомобиля и саму скорость  с которой будет начинать снижаться
  if(!this.hasCar) {
    console.log('Чтобы остановить машину,вам нужно ее купить!');
    return;
  }
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

class User extends Auto_Show {

constructor(options) {
  super(options);
  this.name = options.name;
  this.age = options.age;
  this.wallet = options.wallet;
  this.rights = false;
  this.car = null;
}
setCar(carInstance) {
  this.car = carInstance;
  this.hasCar = true; // Устанавливаем автомобиль для пользователя
}
setAgeAndRigths(value) {
  this.age = value;
  if(!this.rights && this.age < 18) {
    console.log('вам нужно сдать на  права, на категорию B');
    
  }
  else {
    console.log(`Вы можете купить ${this.car} в автосалоне`);
    this.rights = true;
  }
  
}
  getAgeAndRigths() {
    return setAgeAndRigths();
  }


}

let car = new Car({
    car: 'BMW M5 F10',
     color: 'red',
    selled: '100.000$',
    Maxspeedkm_h: 340
    })

let user = new User({name:'Qwerty', age: 19, wallet: `105_100$`, rights: false})
user.setCar('');
