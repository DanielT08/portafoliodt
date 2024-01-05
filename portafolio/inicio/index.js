const persons = [
  {
    nombre: "Daniel",
    correo: "danieltoro88@gmail.com",
    password: "dt0808",
  },
  {
    nombre: "Luisa",
    correo: "luisam1003@gmail.com",
    password: "mm1003",
  },
];
function iniciarSesion() {
  let correo = document.getElementById("correo");
  let password = document.getElementById("password");

  if (correo.value != "") {
    correo.classList.add("is-valid");
    correo.classList.remove("is-invalid");
  } else {
    correo.classList.add("is-invalid");
    correo.classList.remove("is-valid");
  }
  if (password.value != "") {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
  } else {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
  }

  persons.forEach(function (persons) {
    if (correo.value == persons.correo && password.value == persons.password) {
      console.log("El coreo es correcto");
      sessionStorage.setItem("nombre", persons.nombre);
      location.href = "home.html";
    }
  });
}
