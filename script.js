var fblist = document.getElementById('fizzybuzzy')

for(var i = 1; i<= 100; i++){
    if(i % 15 === 0){
        console.log('fizzbuzz');
     //fizzbuzz to DOM   
        var fb = document.createElement('div');
        fb.innerHTML = '<span>fizzbuzz</span>';
        fb.innerText = 'fizzbuzz';
        fb.classList.add('fizzbuzz');
        fblist.appendChild(fb);
    } else if (i % 5 === 0){
        console.log('buzz');
        //buzz to DOM
        var fb = document.createElement('div');
        fb.innerHTML = '<span>buzz</span>';
        fb.innerText = 'buzz';
        fb.classList.add('buzz');
        fblist.appendChild(fb);

    } else if (i % 3 === 0){
        console.log('fizz');
        //fizz to DOM
        var fb = document.createElement('div');
        fb.innerHTML = '<span>fizz</span>';
        fb.innerText = 'fizz';
        fb.classList.add('fizz');
        fblist.appendChild(fb);
    } else {
     console.log(i);
     //numbers to DOM
     var fb = document.createElement('div');
     fb.innerHTML = i;
     fb.innerText = i;
     fb.classList.add('number');
     fblist.appendChild(fb);
    }
 }


 
