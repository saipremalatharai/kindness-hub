const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

try {
const res = await fetch("http://localhost:8244/api/users/signup", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({ name, email, password })
});

const data = await res.json();
document.getElementById("message").innerText = data.message;

} catch (error) {
console.error(error);
}
});