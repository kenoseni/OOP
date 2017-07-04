const chai = require("chai");
const expect = chai.expect;

// Require local Module
const Customer = require("../app/customer.js");
describe("Basic account transactions of customers", () => {
    describe("Customer Class: Create a Customer", () => {
        it("should be a type of 'object', and an instance of the 'Customer' class", () => {
			const person1 = new Customer('person', 26, 5000);
			expect(typeof person1).to.be.eql(typeof {});
            expect(person1 instanceof Customer).to.be.true;
        });
		it("should get the balance", () => {
            const person1 = new Customer('person', 26, 5000);
			expect(person1.getBalance()).to.be.eql(5000);
		});

        it("should set the amount deposited and return its value", () => {
            const person1 = new Customer('person', 26, 5000);
			expect(person1.deposit(20000)).to.be.eql(25000);
		});

        it("should withdraw and return the balance in the account", () => {
            const person1 = new Customer('person', 26, 50000);
			expect(person1.withdraw(20000)).to.be.eql(30000);
		});
        it("should throw an error if the amount withdrawn is greater than the balance", () => {
            const person1 = new Customer('person', 26, 10000);
			expect(person1.withdraw(20000)).to.be.eql('Transaction cancelled due to insufficient fund');
		});


    });

});

