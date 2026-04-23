document.getElementById("form").addEventListener("submit", async (e) => {
e.preventDefault();

const data = {
    nome: document.getElementById("nome").Value,
cpf: document.getElementById("cpf").Value
};

const res = await fetch("/cadastro", {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(data)
});

const json = await res.json();
alert(JSON.stringify(json));
});