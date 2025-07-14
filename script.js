document.addEventListener('DOMContentLoaded', () => {
    const ramos = document.querySelectorAll('.ramo');

    // Load saved state from localStorage
    const savedState = JSON.parse(localStorage.getItem('mallaState')) || {};

    // Initialize ramos based on saved state
    ramos.forEach(ramo => {
        const ramoId = ramo.id;
        if (savedState[ramoId] && savedState[ramoId].aprobado) {
            ramo.classList.add('aprobado');
        } else {
            ramo.classList.add('bloqueado'); // All start as blocked until prerequisites are met or clicked
        }
    });

    // Function to update the state of ramos (blocked/unblocked)
    const updateRamoStates = () => {
        ramos.forEach(ramo => {
            if (ramo.classList.contains('aprobado')) {
                return; // Already approved, no need to check prerequisites
            }

            const requisitosAttr = ramo.dataset.requisito;
            if (!requisitosAttr) {
                ramo.classList.remove('bloqueado');
                ramo.classList.add('desbloqueado');
                return; // No prerequisites, always unlocked (unless it's the 'Memoria de Titulo' which has specific logic)
            }

            const requisitos = requisitosAttr.split(',').map(req => req.trim());
            const allRequisitosMet = requisitos.every(reqId => {
                const reqRamo = document.getElementById(reqId);
                return reqRamo && reqRamo.classList.contains('aprobado');
            });

            if (allRequisitosMet) {
                ramo.classList.remove('bloqueado');
                ramo.classList.add('desbloqueado');
            } else {
                ramo.classList.add('bloqueado');
                ramo.classList.remove('desbloqueado');
            }
        });
        updateMemoriaDeTituloState();
    };

    // Special handling for 'Memoria de Título'
    const updateMemoriaDeTituloState = () => {
        const memoriaDeTitulo = document.getElementById('memoria-de-titulo');
        if (!memoriaDeTitulo) return;

        // Collect all ramos up to 8th semester (excluding Memoria de Titulo itself and electives/internado)
        const ramosHastaOctavoSemestre = Array.from(document.querySelectorAll('.semestre')).slice(0, 8)
            .flatMap(semestreDiv => Array.from(semestreDiv.querySelectorAll('.ramo')))
            .filter(ramo => ramo.id !== 'memoria-de-titulo' && !ramo.id.startsWith('electivo') && ramo.id !== 'internado');

        const allRamosApproved = ramosHastaOctavoSemestre.every(ramo => ramo.classList.contains('aprobado'));

        if (allRamosApproved) {
            memoriaDeTitulo.classList.remove('bloqueado');
            memoriaDeTitulo.classList.add('desbloqueado');
        } else if (!memoriaDeTitulo.classList.contains('aprobado')) {
            memoriaDeTitulo.classList.add('bloqueado');
            memoriaDeTitulo.classList.remove('desbloqueado');
        }
    };


    ramos.forEach(ramo => {
        ramo.addEventListener('click', () => {
            // Only allow clicking if not already approved and not blocked
            if (!ramo.classList.contains('aprobado') && !ramo.classList.contains('bloqueado')) {
                ramo.classList.add('aprobado');
                ramo.classList.remove('desbloqueado');

                // Save state to localStorage
                savedState[ramo.id] = { aprobado: true };
                localStorage.setItem('mallaState', JSON.stringify(savedState));

                updateRamoStates(); // Re-evaluate all ramo states after one is approved
            }
        });
    });

    // Initial update of all ramo states
    updateRamoStates();
});
