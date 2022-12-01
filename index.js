'use strict';
let assert = require('assert');

let { describe } = require('node:test');


class BankAccount {
    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }


    balance() {
        return this.transactions.reduce((a, b) => a + b, 0)
    }
    deposit(amount) {
        if(amount <0){
            return;
        }
        let depositTransaction = new Transaction(amount, 'Deposit');
        this.transactions.push(depositTransaction);
    }
    charge(payee, amount) {
        let chargeTransaction = new Transaction(-amount, payee);
        this.transactions.push(chargeTransaction);
    }
}

class Transaction {
    constructor(payee, amount) {
        this.amount = amount;
        this.payee = payee;
        this.date = new Date();
    }
}



//TESTS*****

if (typeof describe === 'function'){
    const assert = require('assert');

    describe('#testing account creation', function(){
        it('should create a new account correctly', function() {
            let acct1 = new BankAccount('xx1234', 'John Doe');
            assert.equal(acct1.owner, 'John Doe');
            assert.equal(acct1.accountNumber, 'xx1234');
            assert.equal(acct1.transactions.length, 0);
            assert.equal(acct1.balance(), 0);
        });
    });

        describe('#testing account balance', function(){
            it('should create a new account correctly', function() {
                let acct1 = new BankAccount('xx1234', 'John Doe');
                assert.equal(acct1.balance(), 0);
                acct1.deposit(100);
                // assert.equal(acct1.balance(), 100);
                // acct1.charge(10, 'Target');
                // assert.equal(acct1.balance(), 90);
            });

            it('should not allow negative deposit', function() {
                let acct1 = new BankAccount('xx1234', 'John Doe');
                assert.equal(acct1.balance(), 0);
                acct1.deposit(100);
                assert.equal(acct1.balance(), 100);
                acct1.deposit(-30);
                assert.equal(acct1.balance(), 100);
            });
        });
        
        describe('#testing Transaction creation', function() {
            it('should create a transaction correctly for deposit', function() {
                let t1 = new Transaction('30', 'Deposit');
                assert.equal(t1.amount, 30);
                assert.equal(t1.payee, 'Deposit');
                assert.notEqual(t1.date, undefined);
                assert.notEqual(t1.date, null);
            });
        });

            it('should create a transaction correctly for a charge', function() {
                let t1 = new Transaction('-34.45', 'Target');
                assert.equal(t1.amount, -34.45);
                assert.equal(t1.payee, 'Target');
                assert.notEqual(t1.date, undefined);
                assert.notEqual(t1.date, null);
            });
        };