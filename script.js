const ramosPorSemestre = [
  {
    semestre: "1° semestre",
    ramos: [
      { id: 'biologiaCelular', nombre: 'Biología celular', requisitos: [] },
      { id: 'quimicaGeneral', nombre: 'Química general y org.', requisitos: [] },
      { id: 'fisicaMedica', nombre: 'Física Médica', requisitos: [] },
      { id: 'matematicas', nombre: 'Matemáticas', requisitos: [] },
      { id: 'orientacionProfesional', nombre: 'Orientación profesional', requisitos: [] },
      { id: 'estrategiasAprendizaje', nombre: 'Estrategias para el aprendizaje', requisitos: [] }
    ]
  },
  {
    semestre: "2° semestre",
    ramos: [
      { id: 'labBiologiaCelular', nombre: 'Lab. Biología celular', requisitos: ['biologiaCelular'] },
      { id: 'labQuimicaGeneral', nombre: 'Lab. Química general y org.', requisitos: ['quimicaGeneral'] },
      { id: 'bioquimicaGeneral', nombre: 'Bioquímica general', requisitos: ['quimicaGeneral'] },
      { id: 'anatomiaVeterinariaI', nombre: 'Anatomía veterinaria I', requisitos: [] },
      { id: 'histologiaVeterinaria', nombre: 'Histología veterinaria', requisitos: ['biologiaCelular'] },
      { id: 'inglesI', nombre: 'Inglés instrumental I', requisitos: [] }
    ]
  },
  {
    semestre: "3° semestre",
    ramos: [
      { id: 'labBioquimicaGeneral', nombre: 'Lab. Bioquímica general', requisitos: ['bioquimicaGeneral'] },
      { id: 'zoologiaVeterinaria', nombre: 'Zoología veterinaria', requisitos: [] },
      { id: 'bienestarAnimal', nombre: 'Bienestar animal', requisitos: [] },
      { id: 'inglesII', nombre: 'Inglés instrumental II', requisitos: ['inglesI'] },
      { id: 'antropologia', nombre: 'Antropología', requisitos: [] },
      { id: 'ecologia', nombre: 'Ecología', requisitos: [] }
    ]
  },
  {
    semestre: "4° semestre",
    ramos: [
      { id: 'microbiologiaGeneral', nombre: 'Microbiología general', requisitos: ['histologiaVeterinaria'] },
      { id: 'geneticaGanadera', nombre: 'Genética ganadera', requisitos: ['biologiaCelular'] },
      { id: 'fisiologiaAnimal', nombre: 'Fisiología animal', requisitos: ['anatomiaVeterinariaI'] },
      { id: 'anatomiaVeterinariaII', nombre: 'Anatomía veterinaria II', requisitos: ['anatomiaVeterinariaI'] },
      { id: 'zoologia', nombre: 'Zoología', requisitos: [] }
    ]
  },
  {
    semestre: "5° semestre",
    ramos: [
      { id: 'inmunologiaVeterinaria', nombre: 'Inmunología veterinaria', requisitos: ['microbiologiaGeneral'] },
      { id: 'patologiaGeneral', nombre: 'Patología general', requisitos: ['histologiaVeterinaria'] },
      { id: 'produccionForrajes', nombre: 'Producción de forrajes', requisitos: [] },
      { id: 'nutricionAnimal', nombre: 'Nutrición y alimentación animal', requisitos: [] },
      { id: 'etica', nombre: 'Ética', requisitos: [] }
    ]
  },
  {
    semestre: "6° semestre",
    ramos: [
      { id: 'fisiopatologiaAnimal', nombre: 'Fisiopatología animal', requisitos: ['fisiologiaAnimal'] },
      { id: 'reproduccionAnimal', nombre: 'Reproducción animal', requisitos: ['fisiologiaAnimal'] },
      { id: 'enfermedadesParasitarias', nombre: 'Enfermedades parasitarias', requisitos: ['microbiologiaGeneral'] },
      { id: 'enfermedadesInfecciosas', nombre: 'Enfermedades infecciosas', requisitos: ['microbiologiaGeneral'] },
      { id: 'farmacologiaVeterinaria', nombre: 'Farmacología veterinaria', requisitos: ['bioquimicaGeneral'] }
    ]
  },
  {
    semestre: "7° semestre",
    ramos: [
      { id: 'patologiaEspecial', nombre: 'Patología especial de animales', requisitos: ['patologiaGeneral'] },
      { id: 'andrologia', nombre: 'Andrología', requisitos: ['reproduccionAnimal'] },
      { id: 'cirugiaGeneral', nombre: 'Cirugía general', requisitos: ['farmacologiaVeterinaria'] },
      { id: 'farmacologiaII', nombre: 'Farmacología II', requisitos: ['farmacologiaVeterinaria'] },
      { id: 'sistemasProduccionCarne', nombre: 'Sistemas de producción de carne', requisitos: [] },
      { id: 'economia', nombre: 'Economía', requisitos: [] }
    ]
  },
  {
    semestre: "8° semestre",
    ramos: [
      { id: 'ginecologiaObstetricia', nombre: 'Ginecología y obstetricia', requisitos: ['reproduccionAnimal'] },
      { id: 'sistemasProduccion', nombre: 'Sistemas de producción', requisitos: [] },
      { id: 'tecnologiaCarne', nombre: 'Tecnología de la carne', requisitos: [] },
      { id: 'contabilidadAdministracion', nombre: 'Contabilidad y administración', requisitos: [] },
      { id: 'cirugiaEspecial', nombre: 'Cirugía especial', requisitos: ['cirugiaGeneral'] }
    ]
  },
  {
    semestre: "9° semestre",
    ramos: [
      { id: 'exploracionClinica', nombre: 'Exploración clínica de los animales', requisitos: [] },
      { id: 'analisisEstadistico', nombre: 'Análisis estadístico', requisitos: [] },
      { id: 'produccionPeces', nombre: 'Sistemas de producción de peces', requisitos: [] },
      { id: 'tecnologiaLeche', nombre: 'Tecnología de la leche', requisitos: [] },
      { id: 'conservacionVidaSilvestre', nombre: 'Conservación de la vida silvestre', requisitos: [] },
      { id: 'toxicologia', nombre: 'Toxicología veterinaria', requisitos: [] }
    ]
  },
  {
    semestre: "10° semestre",
    ramos: [
      { id: 'metodosDiagnostico', nombre: 'Métodos complementarios de diagnóstico', requisitos: [] },
      { id: 'medicinaInterna', nombre: 'Medicina interna', requisitos: [] },
      { id: 'metodologiaInvestigacion', nombre: 'Metodología de la investigación científica', requisitos: [] },
      { id: 'epidemiologia', nombre: 'Epidemiología y salud pública', requisitos: [] },
      { id: 'formulacionProyectos', nombre: 'Formulación y evaluación de proyectos', requisitos: [] }
    ]
  }
];

const malla = document.getElementById('malla');
const estadoRamos = {};

function crearRamo(ramo) {
  const div = document.createElement('div');
  div.classList.add('curso');
  div.textContent = ramo.nombre;
  div.id = ramo.id;

  if (ramo.requisitos.length > 0) {
    div.classList.add('bloqueado');
  }

  div.addEventListener('click', () => {
    if (div.classList.contains('bloqueado')) return;
    if (div.classList.contains('aprobado')) return;

    div.classList.add('aprobado');
    estadoRamos[ramo.id] = true;
    desbloquearRamos();
  });

  return div;
}

function desbloquearRamos() {
  ramosPorSemestre.forEach(sem => {
    sem.ramos.forEach(ramo => {
      const div = document.getElementById(ramo.id);
      if (estadoRamos[ramo.id]) return;
      const requisitosCompletos = ramo.requisitos.every(req => estadoRamos[req]);
      if (requisitosCompletos) {
        div.classList.remove('bloqueado');
      }
    });
  });
}

function renderMalla() {
  ramosPorSemestre.forEach(sem => {
    const columna = document.createElement('div');
    columna.classList.add('semestre');

    const titulo = document.createElement('h2');
    titulo.textContent = sem.semestre;
    columna.appendChild(titulo);

    sem.ramos.forEach(ramo => {
      const ramoDiv = crearRamo(ramo);
      columna.appendChild(ramoDiv);
    });

    malla.appendChild(columna);
  });
}

renderMalla();
