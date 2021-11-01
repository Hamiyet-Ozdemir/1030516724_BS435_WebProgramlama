
const array = document.querySelectorAll('.card');
var number = Math.floor(Math.random() * 3);
var counter=0;
var flag=1;
var countDown = 2;


for (let index = 0; index < array.length; index++) {
    if(number == index){
        array[index].classList.add('dog');

    }
    else{
        array[index].classList.add('cat');

    }

}

function again(){
    let array = document.querySelectorAll('.card');
    number = Math.floor(Math.random() * 3);
    counter=0;
    for (let index = 0; index < array.length; index++) {
        if(number == index){
            array[index].classList.add('dog');

        }
        else{
            array[index].classList.add('cat');

        }

    }
}

function againGame(event){
    flag = 1;
    countDown = 2;
    const message = document.getElementById('message');
    message.style.backgroundColor = "green";
    const count = document.getElementById('count');
    count.textContent = countDown.toString();

    for (let index = 0; index < array.length; index++) {
        if(number == index){

            array[index].classList.remove('dog');
            array[index].removeAttribute('src');
        }
        else{
            array[index].removeAttribute('src');
            array[index].classList.remove('cat');

        }

    }
    const lose = document.getElementById('loseId');
    const win = document.getElementById('winId');
    const area = document.getElementById('areaId');

    lose.style.display ="none";
    win.style.display="none";
    area.textContent="Click to find the dog";
    again();
}




function clickCard(event){

    if(flag==1) {
        counter++;
        countDown--;
        const count = document.getElementById('count');
        count.textContent = countDown.toString();


        const message = document.getElementById('message');


        const area = document.getElementById('areaId');
        const lose = document.getElementById('loseId');
        const win = document.getElementById('winId');
        var object = event.target.classList[2];
        if (object == 'dog') {
            area.textContent = 'You win !!! Congratulations ';
            placeImage();
            win.style.display = "block";
            //count.textContent = countDown;
            flag = 0;

        } else {
            if (counter == 1) {
                event.target.src = 'cat.jpg';
            }
            if (counter >= 2) {
                area.textContent = 'You lost :( ';
                message.style.backgroundColor = "red";
                win.style.display = "block";
                flag = 0;
                //count.textContent = countDown;
                placeImage();

            }
        }
    }
}

function placeImage(){
    for (let index = 0; index < array.length; index++) {
        if(number == index){

            array[index].src='dog.jpg';
        }
        else{

            array[index].src='cat.jpg';
        }
    }
}
