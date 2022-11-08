const input = document.querySelectorAll(".input");
const form = document.querySelector(".data");

let users = [];

const objectForm = {
  firstName: {
    value: "",
    name: "Nombre",
  },
  lastName: {
    value: "",
    name: "Apellido",
  },
  email: {
    value: "",
    name: "Correo",
  },
  password: {
    value: "",
    name: "Contraseña",
  },
};

input.forEach((Input) => {
  Input.addEventListener("keyup", (e) => {
    objectForm[e.target.name].value = e.target.value.trim();
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let hasErrors = false;

  for (const input in objectForm) {
    const errorEl = document.getElementById(`error-${input}`);
    errorEl.innerText = "";

    if (objectForm[input].value === "") {
      errorEl.innerText = `${objectForm[input].name} no puede estar vacío`;
      hasErrors = true;
    }
    if (input === "email") {
      const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
      if (regex.test(objectForm[input].value) === false) {
        errorEl.innerText = "Parece que esto no es un correo electronico valido";
        hasErrors = true;
      }
    }
  }

  if (hasErrors === false) {
    users.push(objectForm);
    localStorage.setItem("data", JSON.stringify(users));
    console.log(users);
  }
});
