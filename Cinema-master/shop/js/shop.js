var elements = document.querySelectorAll(".card");

for (let i =0; i< elements.length; i++ ){
elements[i].addEventListener('click',
    function() {
        document.querySelector('.bg-modal').style.display = 'flex';
    }
);
}

document.querySelector('.close').addEventListener('click',
    function() {
        document.querySelector('.bg-modal').style.display= 'none';
    }
)

document.querySelector('#cancel').addEventListener('click',
    function() {
        document.querySelector('.bg-modal').style.display= 'none';
    }
)
