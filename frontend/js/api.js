const token = localStorage.getItem("token");

async function addEmployee() {
  const name = document.getElementById("name").value;
  const designation = document.getElementById("designation").value;

  await fetch("http://localhost:5000/api/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify({ name, designation })
  });

  alert("Employee Added");
}
