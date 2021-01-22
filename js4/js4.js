
/* let car = {
    company : "BMW", 
    model : 'X1',
    year : '2019', 
    as : 60,
    display: function () {
        console.log(car);
    },
    time: function (t) {
        distance = 100;
        t = distance / this.as;
        t = Math.round(t*100)/100;
        console.log(t);
    }
}

car.display();
car.time(22); */

let date = new Date();
let data = {
    hours : date.getHours(), 
    minutes : date.getMinutes(), 
    seconds : date.getSeconds(),

    ChangeSeconds: function(Add) {
        this.seconds += Add; 
        while (this.seconds>60) {
            let a = this.seconds-60;  
            this.minutes++;
            if (this.minutes > 60) {
                this.minutes = 0;
                if (this.hours == 24) {
                    this.hours = 0;
                }
                this.hours++;
            }
            this.seconds = a;
        } 
    },

    ChangeMinutes: function(Add) {
        this.minutes += Add; 
        while (this.minutes>60) {
            let a = this.minutes-60;  
            if (this.hours > 24) {
                this.hours = 0;
            }
            this.hours++;
            this.minutes = a;
        } 
    },
    ChangeHours: function(Add) {
        for (let i = 0; i<Add; i++) {
            this.hours++; 
            if (this.hours == 24) {
                this.hours = 0;
            }
        }
    },
    display: function () { 
        console.log(this.hours + 'Часов' + this.minutes + 'Минут' + this.seconds + 'Секунд');
    },
}

/* data.display();
data.ChangeMinutes(2);
data.display();
data.ChangeHours(4); */
data.display();
data.ChangeSeconds(111111111);
data.display();

