const dancing = document.getElementById("js--dancing");
const lato = document.getElementById("js--lato");
const merriweather = document.getElementById("js--merriweather");
const input = document.getElementById("js--input");

input.oninput = function(event){
    dancing.innerText = event.target.value;
    lato.innerText = event.target.value;
    merriweather.innerText = event.target.value;

}

/*javascript for heart*/
const hearts = document.getElementsByClassName("showcase__heart");

for(let i = 0; i < hearts.length; i++){
    hearts[i].onclick = function(event){
        for(let i = 0; i < hearts.length; i++){
            hearts[i].classList = "fa-regular fa-heart showcase__heart";
        }
        hearts[i].classList = "fa-solid fa-heart showcase__heart";


    }
}
/* javascript for darkmode */
const modeswitch = document.getElementById("toggle");
const showcaseelement = document.querySelector(".showcase");
const headerelement = document.querySelector(".header");
const showcaseinput = document.querySelector(".showcase__input");


modeswitch.checked = false;

modeswitch.onchange = function(){
    if(modeswitch.checked === true){
        showcaseelement.style.setProperty("background", "#183D3D");
        showcaseelement.style.setProperty("color", "white");
        headerelement.style.setProperty("background", "#183D3D");
        showcaseinput.style.setProperty("color", "white");

        return;
    }
    showcaseelement.style.setProperty("background", "#F1F0E8");
    showcaseelement.style.setProperty("color", "black");
    headerelement.style.setProperty("background", "#F1F0E8");
    showcaseinput.style.setProperty("color", "black");
    


}
