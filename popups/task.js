const down = document.getElementById("modal_main") 
function getModal() {
    down.classList.add("modal_active");
};
getModal();

const hide = document.getElementsByClassName("modal__close");

hide.item(0).onclick = function(){
    down.classList.remove("modal_active");
};

const a = document.getElementsByClassName("modal").item(1);

const button = document.getElementsByClassName("show-success");

button.item(0).onclick = function () {
    down.classList.remove("modal_active");
    a.classList.add("modal_active");
};


