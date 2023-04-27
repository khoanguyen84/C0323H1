class Battery {
    constructor(manufactory, energy) {
        this.manufactory = manufactory;
        this.energy = energy;
    }

    increamentEnergy(value) {
        if (this.energy < 100) {
            this.energy += value
        }
    }
    decrementEnergy(value) {
        if (this.energy > 0) {
            this.energy -= value;
        }
    }
}


class Mobile {
    constructor(name) {
        this.name = name;
        this.inbox = [];
        this.sent = [];
        this.status = true;
    }
    useBattery(battery) {
        this.battery = battery
    }
    charge(value) {
        this.battery.increamentEnergy(value);
    }
    sendMessage(message, receivePhone) {
        this.sent.push(message);
        this.battery.decrementEnergy(1);
        receivePhone.inbox.push(message);
        receivePhone.battery.decrementEnergy(1);
    }
    turnOn() {
        var intervale = 0;
        function isUse() {
            ip14.battery.decrementEnergy(1);
            if (ip14.battery.energy == 0) {
                ip14.status = false;
            }
            console.log(ip14.battery.energy);
        }
        if (ip14.status == true) {
            
            intervale = setInterval(isUse, 1000)
        }
        else {
            clearInterval(intervale)
            intervale = 0
        }
    }
}


let ip14 = new Mobile("iPhone 14");
let pin1 = new Battery("USE", 5);
let ip13 = new Mobile("iPhone 13");
let pin2 = new Battery("USE", 10);

ip14.useBattery(pin1);
ip13.useBattery(pin2);

ip14.turnOn();
// ip14.sendMessage("Nhậu không?", ip13);
// ip13.sendMessage("cho mượn 5 xị", ip14);

// console.log(ip14);
// console.log(ip13);
