let botones = document.querySelectorAll(".boton");
botones.forEach(boton => {
    console.log(boton.textContent);
    boton.onclick = pipo(boton)
});

function pipo(boton) {}