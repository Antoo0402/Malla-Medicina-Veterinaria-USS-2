document.addEventListener('DOMContentLoaded', function() {
    // Datos de la malla curricular
    const curriculumData = [
        {
            semester: "1er Semestre",
            courses: [
                { name: "Biología celular", opens: ["Bioquímica General", "Anatomía Veterinaria 1", "Histología veterinaria", "Genética Ganadera"] },
                { name: "Química General y Orgánico", opens: ["Bioquímica General"] },
                { name: "Fica Médica", opens: ["Métodos de complementarios de diagnóstico"] },
                { name: "Matemáticas", opens: ["Genética Ganadera", "Economía"] },
                { name: "Orientación profesional", opens: ["Bienestar animal"] },
                { name: "Estrategia para el aprendizaje", opens: [] }
            ]
        },
        {
            semester: "2do Semestre",
            courses: [
                { name: "Bioquímica General", opens: ["Fisiología Animal", "Microbiología General"] },
                { name: "Anatomía Veterinaria 1", opens: ["Anatomía Veterinaria 2"] },
                { name: "Histología Veterinaria", opens: ["Fisiología Animal", "Inmunología Veterinaria"] },
                { name: "Zoología Veterinaria", opens: ["Ecología", "Enfermedades parasitarias"] },
                { name: "Bienestar animal", opens: ["Fisiología Animal", "Inmunología", "Sistema de producción de carne"] },
                { name: "Inglés Instrumental 1", opens: ["Inglés Instrumental 2"] }
            ]
        },
        {
            semester: "3er Semestre",
            courses: [
                { name: "Antropología", opens: ["Ética"] },
                { name: "Ecología", opens: ["Producción de forraje", "Conservación de la vida silvestre"] },
                { name: "Fisiología Animal", opens: ["Fisiopatología Animal", "Reproducción animal", "Enfermedades infecciosas", "Patología general"] },
                { name: "Anatomía Veterinaria 2", opens: [] },
                { name: "Microbiología General", opens: ["Enfermedades infecciosas"] },
                { name: "Immunología", opens: ["Fisiopatología Animal", "Enfermedades infecciosas"] },
                { name: "Genética Ganadera", opens: ["Sistema de producción de carne", "Sistema de producción de leche"] },
                { name: "Inglés Instrumental 2", opens: [] }
            ]
        },
        {
            semester: "4to Semestre",
            courses: [
                { name: "Ética", opens: ["Electivo FILS"] },
                { name: "Producción de forraje", opens: ["Nutrición y alimentación animal", "Economía"] },
                { name: "Fisiopatología animal", opens: ["Farmacología Veterinaria", "Andrología"] },
                { name: "Reproducción animal", opens: ["Andrología", "Sistema de producción de carne", "Sistema de producción de leche", "Sistema de producción de peces"] },
                { name: "Enfermedades parasitarias", opens: ["Farmacología Veterinaria 2"] },
                { name: "Enfermedades infecciosas", opens: ["Farmacología Veterinaria 1", "Epidemiología y salud publica"] },
                { name: "Patología general", opens: ["Patología especial de sistemas"] }
            ]
        },
        {
            semester: "5to Semestre",
            courses: [
                { name: "Electivo FILS", opens: [] },
                { name: "Nutrición y alimentación animal", opens: ["Sistema de producción de leche", "Sistema de producción de peces"] },
                { name: "Patología especial de sistemas", opens: ["Cirugía General", "Exploración clínica de los animal"] },
                { name: "Farmacología Veterinaria 1", opens: ["Farmacología Veterinaria 2"] },
                { name: "Andrología", opens: ["Ginecología y obstetricia"] },
                { name: "Sistema de producción de carne", opens: ["Tecnología de la carne"] },
                { name: "Economía", opens: ["Contabilidad y administración"] }
            ]
        },
        {
            semester: "6to Semestre",
            courses: [
                { name: "Cirugía general", opens: ["Cirugía especial"] },
                { name: "Farmacología Veterinaria 2", opens: ["Cirugía especial", "Toxicología Veterinaria"] },
                { name: "Sistema de producción de leche", opens: ["Tecnología de la leche"] },
                { name: "Tecnología de la carne", opens: ["Tecnología de la leche"] },
                { name: "Ginecología y obstetricia", opens: ["Exploración clínica de los animales"] },
                { name: "Contabilidad y administración", opens: ["Análisis estadísticos", "Formulación y evaluación de proyectos"] }
            ]
        },
        {
            semester: "7mo Semestre",
            courses: [
                { name: "Cirugía especial", opens: ["Medicina interna"] },
                { name: "Exploración clínica", opens: ["Métodos complementarios de diagnóstico", "Medicina interna"] },
                { name: "Análisis estadístico", opens: ["Metodología de la investigación científica", "Epidemiología y salud publica"] },
                { name: "Sistema de peces", opens: [] },
                { name: "Tecnología de la leche", opens: ["Inocuidad de los alimentos"] },
                { name: "Conservación de la vida silvestre", opens: ["Clínica de animales silvestres y exóticos"] }
            ]
        },
        {
            semester: "8vo Semestre",
            courses: [
                { name: "Toxicología Veterinaria", opens: ["Clínica de animales silvestres y exóticos", "Clínica de equinos y rumiantes", "Clínica de animales de compañía", "Inocuidad de los alimentos"] },
                { name: "Métodos complementarios de diagnóstico", opens: ["Clínica de animales silvestres y exóticos", "Clínica de equinos y rumiantes", "Clínica de animales de compañía"] },
                { name: "Medicina Interna", opens: ["Clínica de animales silvestres y exóticos", "Clínica de equinos y rumiantes", "Clínica de animales de compañía"] },
                { name: "Metodología de la investigación", opens: ["Memoria de título"] },
                { name: "Epidemiología y salud publica", opens: ["Legislación y deontología", "Inocuidad de los alimentos"] },
                { name: "Formulación y evaluación de proyectos", opens: ["Memoria de título"] }
            ]
        },
        {
            semester: "9no Semestre",
            courses: [
                { name: "Clínica de animales silvestres y exóticos", opens: ["Electivo 1", "Electivo 2", "Electivo 3", "Internado"] },
                { name: "Clínica de equinos y rumiantes", opens: ["Electivo 1", "Electivo 2", "Electivo 3", "Internado"] },
                { name: "Clínica de animales de compañía", opens: ["Electivo 1", "Electivo 2", "Electivo 3", "Internado"] },
                { name: "Legislación y deontología", opens: ["Electivo 1", "Electivo 2", "Electivo 3", "Internado"] },
                { name: "Memoria de título", opens: [], requiresAll: true },
                { name: "Inocuidad de los alimentos", opens: ["Electivo 1", "Electivo 2", "Electivo 3", "Internado"] }
            ]
        },
        {
            semester: "10mo Semestre",
            courses: [
                { name: "Electivo 1", opens: [] },
                { name: "Electivo 2", opens: [] },
                { name: "Electivo 3", opens: [] },
                { name: "Internado", opens: [] }
            ]
        }
    ];

    // Estado de los cursos
    let completedCourses = JSON.parse(localStorage.getItem('completedCourses')) || {};
    let totalCourses = 0;
    
    // Contar el total de cursos
    curriculumData.forEach(semester => {
        totalCourses += semester.courses.length;
    });

    // Renderizar la malla curricular
    const curriculumGrid = document.querySelector('.curriculum-grid');
    
    curriculumData.forEach(semester => {
        const semesterElement = document.createElement('div');
        semesterElement.className = 'semester';
        
        const semesterTitle = document.createElement('h2');
        semesterTitle.textContent = semester.semester;
        semesterElement.appendChild(semesterTitle);
        
        semester.courses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.className = 'course';
            courseElement.dataset.courseName = course.name;
            
            // Verificar si el curso está completado
            if (completedCourses[course.name]) {
                courseElement.classList.add('completed');
            }
            
            // Verificar requisitos para el curso
            const prerequisites = getPrerequisites(course.name);
            if (prerequisites.length > 0 && !completedCourses[course.name]) {
                const allPrerequisitesMet = prerequisites.every(prereq => completedCourses[prereq]);
                
                if (!allPrerequisitesMet) {
                    courseElement.classList.add('locked');
                    const prereqIcon = document.createElement('span');
                    prereqIcon.className = 'prerequisite-icon';
                    prereqIcon.textContent = `${prerequisites.filter(prereq => !completedCourses[prereq]).length}/${prerequisites.length}`;
                    courseElement.appendChild(prereqIcon);
                }
            }
            
            // Para "Memoria de título" que requiere aprobar todo hasta 8vo semestre
            if (course.name === "Memoria de título" && course.requiresAll) {
                const allPreviousCompleted = checkAllPreviousSemestersCompleted(8);
                if (!allPreviousCompleted && !completedCourses[course.name]) {
                    courseElement.classList.add('locked');
                    const prereqIcon = document.createElement('span');
                    prereqIcon.className = 'prerequisite-icon';
                    prereqIcon.textContent = "Todos";
                    courseElement.appendChild(prereqIcon);
                }
            }
            
            const courseNameElement = document.createElement('div');
            courseNameElement.className = 'course-name';
            courseNameElement.textContent = course.name;
            courseElement.appendChild(courseNameElement);
            
            if (course.opens && course.opens.length > 0) {
                const courseRequirementsElement = document.createElement('div');
                courseRequirementsElement.className = 'course-requirements';
                courseRequirementsElement.textContent = `Abre: ${course.opens.join(', ')}`;
                courseElement.appendChild(courseRequirementsElement);
            }
            
            // Evento de clic
            courseElement.addEventListener('click', function() {
                if (this.classList.contains('locked')) return;
                
                this.classList.toggle('completed');
                const courseName = this.dataset.courseName;
                
                if (this.classList.contains('completed')) {
                    completedCourses[courseName] = true;
                } else {
                    delete completedCourses[courseName];
                }
                
                // Guardar en localStorage
                localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
                
                // Actualizar progreso
                updateProgress();
                
                // Volver a renderizar para actualizar los cursos bloqueados/desbloqueados
                renderCurriculum();
            });
            
            semesterElement.appendChild(courseElement);
        });
        
        curriculumGrid.appendChild(semesterElement);
    });

    // Botón de reinicio
    document.getElementById('reset-btn').addEventListener('click', function() {
        completedCourses = {};
        localStorage.removeItem('completedCourses');
        renderCurriculum();
        updateProgress();
    });

    // Actualizar barra de progreso
    function updateProgress() {
        const completedCount = Object.keys(completedCourses).length;
        const progressPercentage = Math.round((completedCount / totalCourses) * 100);
        
        document.querySelector('.progress-bar').style.setProperty('--progress', `${progressPercentage}%`);
        document.getElementById('progress-text').textContent = `${progressPercentage}% completado (${completedCount}/${totalCourses} ramos)`;
    }

    // Obtener requisitos para un curso
    function getPrerequisites(courseName) {
        const prerequisites = [];
        
        curriculumData.forEach(semester => {
            semester.courses.forEach(course => {
                if (course.opens && course.opens.includes(courseName)) {
                    prerequisites.push(course.name);
                }
            });
        });
        
        return prerequisites;
    }

    // Verificar si todos los cursos hasta cierto semestre están completados
    function checkAllPreviousSemestersCompleted(upToSemester) {
        let allCompleted = true;
        
        for (let i = 0; i < upToSemester; i++) {
            const semester = curriculumData[i];
            
            for (const course of semester.courses) {
                if (!completedCourses[course.name]) {
                    allCompleted = false;
                    break;
                }
            }
            
            if (!allCompleted) break;
        }
        
        return allCompleted;
    }

    // Volver a renderizar toda la malla
    function renderCurriculum() {
        while (curriculumGrid.firstChild) {
            curriculumGrid.removeChild(curriculumGrid.firstChild);
        }
        
        curriculumData.forEach(semester => {
            const semesterElement = document.createElement('div');
            semesterElement.className = 'semester';
            
            const semesterTitle = document.createElement('h2');
            semesterTitle.textContent = semester.semester;
            semesterElement.appendChild(semesterTitle);
            
            semester.courses.forEach(course => {
                const courseElement = document.createElement('div');
                courseElement.className = 'course';
                courseElement.dataset.courseName = course.name;
                
                if (completedCourses[course.name]) {
                    courseElement.classList.add('completed');
                }
                
                const prerequisites = getPrerequisites(course.name);
                if (prerequisites.length > 0 && !completedCourses[course.name]) {
                    const allPrerequisitesMet = prerequisites.every(prereq => completedCourses[prereq]);
                    
                    if (!allPrerequisitesMet) {
                        courseElement.classList.add('locked');
                        const prereqIcon = document.createElement('span');
                        prereqIcon.className = 'prerequisite-icon';
                        prereqIcon.textContent = `${prerequisites.filter(prereq => !completedCourses[prereq]).length}/${prerequisites.length}`;
                        courseElement.appendChild(prereqIcon);
                    }
                }
                
                // Para "Memoria de título"
                if (course.name === "Memoria de título" && course.requiresAll) {
                    const allPreviousCompleted = checkAllPreviousSemestersCompleted(8);
                    if (!allPreviousCompleted && !completedCourses[course.name]) {
                        courseElement.classList.add('locked');
                        const prereqIcon = document.createElement('span');
                        prereqIcon.className = 'prerequisite-icon';
                        prereqIcon.textContent = "Todos";
                        courseElement.appendChild(prereqIcon);
                    }
                }
                
                const courseNameElement = document.createElement('div');
                courseNameElement.className = 'course-name';
                courseNameElement.textContent = course.name;
                courseElement.appendChild(courseNameElement);
                
                if (course.opens && course.opens.length > 0) {
                    const courseRequirementsElement = document.createElement('div');
                    courseRequirementsElement.className = 'course-requirements';
                    courseRequirementsElement.textContent = `Abre: ${course.opens.join(', ')}`;
                    courseElement.appendChild(courseRequirementsElement);
                }
                
                courseElement.addEventListener('click', function() {
                    if (this.classList.contains('locked')) return;
                    
                    this.classList.toggle('completed');
                    const courseName = this.dataset.courseName;
                    
                    if (this.classList.contains('completed')) {
                        completedCourses[courseName] = true;
                    } else {
                        delete completedCourses[courseName];
                    }
                    
                    localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
                    updateProgress();
                    renderCurriculum();
                });
                
                semesterElement.appendChild(courseElement);
            });
            
            curriculumGrid.appendChild(semesterElement);
        });
    }

    // Inicializar progreso
    updateProgress();
});

// Función para agregar estilos dinámicos a la barra de progreso
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .progress-bar::after {
            width: var(--progress, 0%);
        }
    `;
    document.head.appendChild(style);
});
