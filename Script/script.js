const Drawing_Grid = document.querySelector(".Drawing-Grid")
const Eraser_Button = document.querySelector(".Eraser_Button")
const Change_Size_Button = document.querySelector(".Change_Size_Button")
const Drawable_Grid = document.querySelectorAll(".Div_Drawing")
const Drawing_Button = document.querySelector(".Drawing_Button")
const ColorPicker = document.querySelector(".Color_Picker")
let mode = "Drawing"


function StarterGrid() {
    let Grid = String((700 / 16));
    let height = String((700 / 16));
    Drawing_Grid.innerHTML = "";

    for (let i = 1; i <= 16 ; i++ ) {
        let div = document.createElement("div");
        div.className = "Drawing_Row";
        div.style.width = Grid + "px";
        Drawing_Grid.appendChild(div);
        for (let b = 1; b <= 16 ; b++) {
            let Div_Drawing  = document.createElement("div");
            Div_Drawing.className = "Div_Drawing"
            Div_Drawing.style.width = Grid + "px";
            Div_Drawing.style.height = height + "px"
            div.appendChild(Div_Drawing);
        };
    };
};

function CreateGrid() {
    let User_Squares = prompt("How many square you want on each sides");
    let Grid = String((700 / User_Squares));
    let height = String((700 / User_Squares));
    Drawing_Grid.innerHTML = "";

    for (let i = 1; i <= User_Squares ; i++ ) {
        let div = document.createElement("div");
        div.className = "Drawing_Row";
        div.style.width = Grid + "px";
        Drawing_Grid.appendChild(div);
        for (let b = 1; b <= User_Squares ; b++) {
            let Div_Drawing  = document.createElement("div");
            Div_Drawing.className = "Div_Drawing"
            Div_Drawing.style.width = Grid + "px";
            Div_Drawing.style.height = height + "px"
            div.appendChild(Div_Drawing);
        };
    };
};

Drawing_Grid.addEventListener('mouseover', (event) =>{
    let targetSquare =  event.target;
    switch (mode) {
        case "Drawing":
            targetSquare.style.backgroundColor = ColorPicker.value;
            break;
    
        case "Erase":
            targetSquare.style.backgroundColor = "white";
            break;
    }
})

function ToggleEraser (){
    mode = "Erase"
};

function ToggleDrawing_mode () {
    mode = "Drawing"
}


Change_Size_Button.addEventListener("click", () => CreateGrid());
document.addEventListener("DOMContentLoaded", () => StarterGrid());
Eraser_Button.addEventListener("click", () => ToggleEraser())
Drawing_Button.addEventListener("click", () => ToggleDrawing_mode())
