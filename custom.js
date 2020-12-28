function filterSelection(c) {
    let k, i, x;
    let button = document.querySelectorAll('.filter_btn')
    for (k = 0; k < button.length; k++) {
        if (button[k].className.indexOf(c) > -1) {
            button[k].style.background = "rgb(243, 47, 80)";
            button[k].style.color = "white";
        } else {
            button[k].style.background = "none";
            button[k].style.color = "grey";
        }
    }
    x = document.querySelectorAll(".project");
    if (c == "all") {
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "block"
        }
    } else {
        for (i = 0; i < x.length; i++) {
            if (x[i].className.indexOf(c) > -1) {
                x[i].style.display = "block";
            } else {
                x[i].style.display = "none";
            }
        }
    }

}