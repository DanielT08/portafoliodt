
function temaPagina() {
    let temapagina = document.getElementById("theme").value;

    if (temapagina == "light") {
        document.getElementById("body").classList.add("theme-light");
        document.getElementById("body").classList.remove("theme-dark");
        document.getElementById("body").classList.remove("theme-pink");

    } else if (temapagina == "dark") {
        document.getElementById("body").classList.add("theme-dark");
        document.getElementById("body").classList.remove("theme-light");
        document.getElementById("body").classList.remove("theme-pink");

    } else if (temapagina == "pink") {
    document.getElementById("body").classList.add("theme-pink");
    document.getElementById("body").classList.remove("theme-light");
    document.getElementById("body").classList.remove("theme-dark");
    }
}
