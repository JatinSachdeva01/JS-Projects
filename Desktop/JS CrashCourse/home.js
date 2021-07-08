//console.log('Hello');


// function fun(){
//     let fruits = ['banana','apple','mango','pastry'];
//     console.log (fruits[1]);
//     fruits.push('cake§');
//     console.log(fruits.join('--'),fruits.toString(),fruits.pop(),fruits);
// }

// fun();

// JS Objects

let student ={
    first : 'Jatin', 
    last: 'Sachdeva',
    height: 180,

    studentInfo: function(){
        return this.height+' is My height';
    }
};


student.first='JJ';
//Note: let does not work with promt hence use var
console.log(student.first,student.height,student.studentInfo());