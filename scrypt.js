//Javascript
//Lesson 1

/* const person = new Object({
    name: 'Maxim',
    age: 25,
    greet: function() {
        console.log('Greet!')
    }
})

Object.prototype.sayHello = function() { 
    console.log('Hello!');
}

const lena = Object.create(person);
lena.name = 'Elena';

const str = new String('I am string'); 

const num = new Number(25) */

//Lesson 2

/* function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'Vladilen',
    age: 25,
    sayHello: hello,
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
} 

const lena = {
    name: 'Elena',
    age: 25
}

person.logInfo.bind(lena)('Front', 0503439277) */


let ways = [];
let res = [];

/* let step1 = 0;
let step2 = 0; */
function waysPlayer(players) {
    for (let i = 0; i < players; i++) {
        let way1 = [];
        for (let i = 0; i < 10; i++) {
        way1.push((Math.floor(Math.random() * 8)));
        }
    ways.push(way1);
    }
    
}


function trajectory(player) {
    waysPlayer(player);
    for (let  k = 0; k < ways.length; k++) {
        let count = 0;
        let mine = 0;
        
        for (let i = 0; i < ways[k].length; i++) {
        count++;

        if (ways[k][i]) console.log('It is good step!!!');
        else {
            console.log('It is bad step!!!');
            mine++;
            if (mine >=2) {
                console.log('Game is over!!!');
                break;
            }
        }
    }
    if (mine == 0) res.push(`Player ${k + 1} wins with 0 mines`);
    if (mine == 1) res.push(`Player ${k + 1} wins with 1 mines`);
    if (mine < 2)
    console.log(`You done ${count} steps and won!!!`);
    else console.log(`You done ${count} steps from ${ways[k].length} and lost!!!`);
    }
   /*  if (player == 1) step1 = count;
    if (player == 2) step2 = count; */

}

trajectory(100)
res.forEach((i) => console.log(i));

