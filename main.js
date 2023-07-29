let alldivs = document.querySelectorAll(".parent .card .text-side .qs");
let img = document.querySelector(".parent .card  .box");

function resize() {
    if (window.innerWidth >= 767) {
        alldivs.forEach((val) => {
            val.addEventListener("mouseenter", () => {
                img.style.left = "-60px";
            });
            val.addEventListener("mouseleave", () => {
                img.style.left = "-50px";
            });
        });
    }
}
resize();
window.onresize = () => {
    resize();
}



alldivs.forEach((val) => {
    val.addEventListener("click", (ev) => {
        const computedStyle = window.getComputedStyle(ev.currentTarget.lastElementChild);
        const display = computedStyle.getPropertyValue("display");

        if(display === "none") {
            ev.currentTarget.lastElementChild.style.display = "block";
            ev.currentTarget.firstElementChild.lastElementChild.style.transform = "rotateX(180deg)";
            ev.currentTarget.firstElementChild.firstElementChild.style.fontWeight = 700;
        }
        else  {
            ev.currentTarget.lastElementChild.style.display = "none";
            ev.currentTarget.firstElementChild.lastElementChild.style.transform = "rotateX(0deg)";
            ev.currentTarget.firstElementChild.firstElementChild.style.fontWeight = 400;
        }

        
    });
});