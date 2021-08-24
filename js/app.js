`use strict;`
let all = [];
//constractor function:
function Movies(name, image, release) {
    this.name = name;
    this.image = image;
    this.release = release;
    all.push(this);
}

//eventlistener:

let form = document.getElementById(`form`);
form.addEventListener(`submit`, submitHandler);
function submitHandler(event) {
    event.preventDefault();
    let name = event.target.movieName.value;
    let movieImage = event.target.movieImage.value;
    let Release = event.target.Release.value;
    new Movies(name, movieImage, Release);
    render();
    settingItem();
}

//render :
function render() {

    let table = document.getElementById(`table`);
    table.innerHTML = " ";

    for (let i = 0; i < all.length; i++) {
        let tr1 = document.createElement(`tr`);
        table.appendChild(tr1);

        let td = document.createElement(`td`);
        tr1.appendChild(td);
        td.textContent = `X`;

        let td2 = document.createElement(`td`);
        tr1.appendChild(td2);
        // let img =document.createElement(`img`)
        td2.innerHTML = `<img src="img/${all[i].image.toUpperCase()}.png" alt="/${all[i].image}">`
        //     img.src ="<`${./img/Movies.all[i].image.toLowerCase().png}` alt=${all[i].name}>";
        //     td2.appendChild(img);
        // //    td2.innerHTML="<img src=`img/${all[i].image.toUpperCase()}.png` alt=${all[i].name}`>"

        let td3 = document.createElement(`td`);
        tr1.appendChild(td3);
        td3.textContent = all[i].name;

        let td4 = document.createElement(`td`);
        tr1.appendChild(td4);
        td4.textContent = all[i].release;


        //    let img =document.createElement(`img`);
        //    td2.appendChild(img);
        //    img.src=`img/${Movies.all[i].img}.png`



    }
}

function settingItem() {
    let data = JSON.stringify(all);
    localStorage.setItem(`Movies`, data)
}

function gettingItem(){
    let string =localStorage.getItem(`Movies`);
    let normal =JSON.parse(string);
    if (normal!== null){
        for (let i = 0; i < normal.length; i++) {
           let getdata =new Movies(normal[i].name ,normal[i].image,normal[i].release)
           getdata.render();

        }
    }
}
gettingItem();