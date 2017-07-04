module.exports = class Customer {
    constructor(name, age, balance) {
        // if it is, initialize
        this.name = name;
        this.age = age;
        this.balance = balance;
    }

    //ENCAPSULATION
    getName() {
        console.log(this.name);
    }
    getAge() {
        console.log(this.age);
    }
    setBalance(num) {
        if(typeof num === 'number')
        this.balance = num;
    }
    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }
    withdraw(amount) {
        if(this.balance <= amount)
        return 'Transaction cancelled due to insufficient fund';
        else
        this.balance -= amount;
        return this.balance;
    }
    getBalance() {
        return(this.balance);
    }
}



