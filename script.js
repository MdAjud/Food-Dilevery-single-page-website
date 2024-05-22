let slides = document.querySelectorAll(".slide");

console.log(slides);
let count = 0;

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
})

function slider() {
    slides.forEach(function (curvel) {
        curvel.style.transform = `translateX(-${count * 100}%)`;
        console.log(curvel);
    })
}

setInterval(function () {
    count++;
    if (count == slides.length) {
        count = 0;
    }
    slider();
}, 2000)

//navbar

let baricon = document.getElementById("baar");
let ul = document.querySelector("ul");

baricon.addEventListener("click", function () {
    ul.classList.toggle("showitem");
    if (ul.className == "showitem") {
        baricon.className = "fa-solid fa-xmark";
    }

    else {
        baricon.className = "fa-solid fa-bars";
    }
})


// ............darkmode............

let sevetheme = localStorage.getItem('theme') || 'light';
document.body.className = sevetheme;


const toggleLight = document.getElementById('toggleLight');
const toggleDark = document.getElementById('toggleDark');

toggleLight.addEventListener('click', function(){
    document.body.className = 'light';
    localStorage.setItem('theme', 'light');
    toggleLight.classList.add('active');
    toggleDark.classList.remove('active');
});


toggleDark.addEventListener('click', function(){
    document.body.className = 'dark';
    localStorage.setItem('theme', 'light');
    toggleDark.classList.add('active');
    toggleLight.classList.remove('active');
});


if(sevetheme === 'light'){
    toggleLight.classList.add('active');
}

else{
    toggleDark.classList.add('active');
}
