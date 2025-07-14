const ramos = [
  { id: 'biologiaCelular', nombre: 'Biología celular', requisitos: [] },
  { id: 'labBiologiaCelular', nombre: 'Lab. Biología celular', requisitos: ['biologiaCelular'] },
  { id: 'quimicaGeneral', nombre: 'Química general y org.', requisitos: [] },
  { id: 'labQuimicaGeneral', nombre: 'Lab. Química general y org.', requisitos: ['quimicaGeneral'] },
  { id: 'fisicaMedica', nombre: 'Física Médica', requisitos: [] },
  { id: 'matematicas', nombre: 'Matemáticas', requisitos: [] },
  { id: 'orientacionProfesional', nombre: 'Orientación profesional', requisitos: [] },
  { id: 'estrategiasAprendizaje', nombre: 'Estrategias para el aprendizaje', requisitos: [] },
  { id: 'bioquimicaGeneral', nombre: 'Bioquímica general', requisitos: ['quimicaGeneral'] },
  { id: 'labBioquimicaGeneral', nombre: 'Lab. Bioquímica general', requisitos: ['bioquimicaGeneral'] },
  { id: 'anatomiaVeterinariaI', nombre: 'Anatomía veterinaria I', requisitos: [] },
  { id: 'histologiaVeterinaria', nombre: 'Histología veterinaria', requisitos: ['biologiaCelular'] },
  { id: 'zoologiaVeterinaria', nombre: 'Zoología veterinaria', requisitos: [] },
  { id: 'bienestarAnimal', nombre: 'Bienestar animal', requisitos: [] },
  { id: 'inglesI', nombre: 'Inglés instrumental I', requisitos: [] },
  { id: 'biologiaQuimica', nombre: 'Biología, Química.', requisitos: [] },
  { id: 'biologiaQuimicaHistologia', nombre: 'Biología, Química, Histología', requisitos: ['biologiaCelular', 'quimicaGeneral', 'histologiaVeterinaria'] },
  { id: 'biologia', nombre: 'Biología', requisitos: [] },
  { id: 'microbiologiaGeneral', nombre: 'Microbiología general', requisitos: ['histologiaVeterinaria'] },
  { id: 'inmunologiaVeterinaria', nombre: 'Inmunología veterinaria', requisitos: ['microbiologiaGeneral'] },
  { id: 'geneticaGanadera', nombre: 'Genética ganadera', requisitos: ['biologiaCelular'] },
  { id: 'inglesII', nombre: 'Inglés instrumental II', requisitos: ['inglesI'] },
  { id: 'antropologia', nombre: 'Antropología', requisitos: [] },
  { id: 'ecologia', nombre: 'Ecología', requisitos: [] },
  { id: 'fisiologiaAnimal', nombre: 'Fisiología animal', requisitos: ['anatomiaVeterinariaI'] },
  { id: 'anatomiaVeterinariaII', nombre: 'Anatomía veterinaria II', requisitos: ['anatomiaVeterinariaI'] },
  { id: 'zoologia', nombre: 'Zoología', requisitos: [] },
  { id: 'bioquimicaHistologiaBienestar', nombre: 'Bioquímica, Histología, Bienestar animal', requisitos: ['bioquimicaGeneral', 'histologiaVeterinaria', 'bienestarAnimal'] },
  { id: 'anatomiaVetI', nombre: 'Anatomía vet. I', requisitos: [] },
  { id: 'produccionForrajes', nombre: 'Producción de forrajes', requisitos: [] },
  { id: 'fisiopatologiaAnimal', nombre: 'Fisiopatología animal', requisitos: ['fisiologiaAnimal'] },
  { id: 'reproduccionAnimal', nombre: 'Reproducción animal', requisitos: ['fisiologiaAnimal'] },
  { id: 'enfermedadesParasitarias', nombre: 'Enfermedades parasitarias', requisitos: ['microbiologiaGeneral'] },
  { id: 'enfermedadesInfecciosas', nombre: 'Enfermedades infecciosas', requisitos: ['microbiologiaGeneral'] },
  { id: 'patologiaGeneral', nombre: 'Patología general', requisitos: ['histologiaVeterinaria'] },
  { id: 'etica', nombre: 'Ética', requisitos: [] },
  { id: 'nutricionAnimal', nombre: 'Nutrición y alimentación animal', requisitos: [] },
  { id: 'patologiaEspecial', nombre: 'Patología especial de animales', requisitos: ['patologiaGeneral'] },
  { id: 'farmacologiaVeterinaria', nombre: 'Farmacología veterinaria', requisitos: ['bioquimicaGeneral'] },
  { id: 'andrologia', nombre: 'Andrología', requisitos: ['reproduccionAnimal'] },
  { id: 'sistemasProduccionCarne', nombre: 'Sistemas de producción de carne', requisitos: [] },
  { id: 'economia', nombre: 'Economía', requisitos: [] },
  { id: 'cirugiaGeneral', nombre: 'Cirugía general', requisitos: ['farmacologiaVeterinaria'] },
  { id: 'farmacologiaII', nombre: 'Farmacología II', requisitos: ['farmacologiaVeterinaria'] },
  { id: 'sistemasProduccion', nombre: 'Sistemas de producción', requisitos: [] },
  { id: 'tecnologiaCarne', nombre: 'Tecnología de la carne', requisitos: [] },
  { id: 'ginecologiaObstetricia', nombre: 'Ginecología y obstetricia', requisitos: ['reproduccionAnimal'] },
  { id: 'contabilidadAdministracion', nombre: 'Contabilidad y administración', requisitos: [] },
  { id: 'cirugiaEspecial', nombre: 'Cirugía especial', requisitos: ['cirugiaGeneral'] },
  { id: 'exploracionClinica', nombre: 'Exploración clínica de los animales', requisitos: [] },
  { id: 'analisisEstadistico', nombre: 'Análisis estadístico', requisitos: [] },
  { id: 'produccionPeces', nombre: 'Sistemas de producción de peces', requisitos: [] },
  { id: 'tecnologiaLeche', nombre: 'Tecnología de la leche', requisitos: [] },
  { id: 'conservacionVidaSilvestre', nombre: 'Conservación de la vida silvestre', requisitos: [] },
  { id: 'toxicologia', nombre: 'Toxicología veterinaria', requisitos: [] },
  { id: 'metodosDiagnostico', nombre: 'Métodos complementarios de diagnóstico', requisitos: [] },
  { id: 'medicinaInterna', nombre: 'Medicina interna', requisitos: [] },
  { id: 'metodologiaInvestigacion', nombre: 'Metodología de la investigación científica', requisitos: [] },
  { id: 'epidemiologia', nombre: 'Epidemiología y salud pública', requisitos: [] },
  { id: 'formulacionProyectos', nombre: 'Formulación y evaluación de proyectos', requisitos: [] },
  { id: 'clinicaSilvestres', nombre: 'Clínica de animales silvestres y exóticos', requisitos: [] },
  { id: 'clinicaEquinos', nombre: 'Clínica de equinos y rumiantes', requisitos: [] },
  { id: 'clinicaCompania', nombre: 'Clínica de animales de compañía', requisitos: [] },
  { id: 'legislacion', nombre: 'Legislación y deontología', requisitos: [] },
  { id: 'memoriaTitulo', nombre: 'Memoria de título', requisitos: [] },
  { id: 'inocuidadAlimentos', nombre: 'Inocuidad de los alimentos', requisitos: [] },
  { id: 'electivo1', nombre: 'Electivo I', requisitos: [] },
  { id: 'electivo2', nombre: 'Electivo II', requisitos: [] },
  { id: 'electivo3', nombre: 'Electivo III', requisitos: [] },
  { id: 'internado', nombre: 'Internado', requisitos: ['clinicaCompania', 'clinicaEquinos', 'clinicaSilvestres'] }
];

const malla = document.getElementById('malla');
const estadoRamos = {};

function crearRamo(ramo) {
  const div = document.createElement('div');
  div.classList.add('ramo');
  div.textContent = ramo.nombre;
  div.id = ramo.id;

  if (ramo.requisitos.length > 0) {
    div.classList.add('locked');
  }

  div.addEventListener('click', () => {
    if (div.classList.contains('locked')) return;
    if (div.classList.contains('approved')) return;

    div.classList.add('approved');
    estadoRamos[ramo.id] = true;
    desbloquearRamos();
  });

  malla.appendChild(div);
}

function desbloquearRamos() {
  ramos.forEach(ramo => {
    const div = document.getElementById(ramo.id);
    if (estadoRamos[ramo.id]) return;
    const requisitosCompletos = ramo.requisitos.every(req => estadoRamos[req]);
    if (requisitosCompletos) {
      div.classList.remove('locked');
    }
  });
}

ramos.forEach(crearRamo);
