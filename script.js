const cursosData = [
  /* Asegúrate de copiar todo el bloque que te envié antes con los 10 semestres */
];
const estadoCursos = {}, cursosPorSemestre = {};
const malla = document.getElementById("malla");

cursosData.forEach(c => {
  estadoCursos[c.nombre] = false;
  cursosPorSemestre[c.semestre] = cursosPorSemestre[c.semestre] || [];
  cursosPorSemestre[c.semestre].push(c);
});

for (let s in cursosPorSemestre) {
  const col = document.createElement("div");
  col.className = "semestre";
  col.innerHTML = `<h2>Semestre ${s}</h2>`;
  cursosPorSemestre[s].forEach(c => {
    const d = document.createElement("div");
    d.className = "curso" + (c.requisitos.length ? " bloqueado" : "");
    d.textContent = c.nombre;
    d.dataset.nombre = c.nombre;
    d.dataset.requirements = JSON.stringify(c.requisitos);
    col.appendChild(d);
  });
  malla.appendChild(col);
}

function actualizar() {
  document.querySelectorAll(".curso").forEach(d => {
    const nombre = d.dataset.nombre;
    const req = JSON.parse(d.dataset.requirements);
    if (estadoCursos[nombre]) {
      d.classList.add("aprobado");
      d.classList.remove("bloqueado");
      d.onclick = null;
    } else {
      const ok = req.every(r => estadoCursos[r]);
      d.classList.toggle("bloqueado", !ok);
      if (ok) {
        d.onclick = () => { estadoCursos[nombre] = true; actualizar(); };
      } else {
        d.onclick = null;
      }
    }
  });
}

actualizar();
