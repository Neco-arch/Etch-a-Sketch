const Drawing_Grid = document.querySelector(".Drawing-Grid")
const Clear_Button = document.querySelector(".Clear_Button")
const Change_Size_Button = document.querySelector(".Change_Size_Button")



function UserChoose() {
    let NumberGird = prompt("Number of squares per side:")
    if (typeof(NumberGird)!== Number) {
        return
    } else {
        return NumberGird
    }

};




Change_Size_Button.addEventListener("click", () => CreateGrid())
