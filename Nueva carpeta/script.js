document.addEventListener('DOMContentLoaded', function() {
    const consolasContainer = document.getElementById('consolas-container');
    const formContainer = document.getElementById('form-container');
    const pedidoForm = document.getElementById('pedido-form');

    // Simula la obtención de consolas disponibles desde una API
    const consolasDisponibles = [
        { id: 1, nombre: 'PlayStation 5' },
        { id: 2, nombre: 'Xbox Series X' },
        { id: 3, nombre: 'Nintendo Switch' }
    ];

    function mostrarConsolas(consolas) {
        consolasContainer.innerHTML = '';
        consolas.forEach(consola => {
            const consolaDiv = document.createElement('div');
            consolaDiv.className = 'consola';
            consolaDiv.textContent = consola.nombre;
            consolaDiv.addEventListener('click', () => seleccionarConsola(consola));
            consolasContainer.appendChild(consolaDiv);
        });
    }

    function seleccionarConsola(consola) {
        formContainer.style.display = 'block';
        pedidoForm.dataset.consolaId = consola.id;
    }

    pedidoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const direccion = document.getElementById('direccion').value;
        const cedula = document.getElementById('cedula').files[0];
        const consolaId = pedidoForm.dataset.consolaId;

        if (!cedula) {
            alert('Por favor, sube una foto de tu cédula.');
            return;
        }

        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('direccion', direccion);
        formData.append('cedula', cedula);
        formData.append('consolaId', consolaId);

        // Aquí enviarías formData a tu servidor usando fetch o XMLHttpRequest
        // Ejemplo:
        // fetch('/api/pedido', {
        //     method: 'POST',
        //     body: formData
        // }).then(response => response.json())
        //   .then(data => {
        //       alert('Pedido enviado con éxito');
        //       formContainer.style.display = 'none';
        //       pedidoForm.reset();
        //   }).catch(error => {
        //       console.error('Error:', error);
        //       alert('Hubo un problema con tu pedido');
        //   });

        // Simulación de envío de datos
        console.log('Datos del pedido:', {
            nombre,
            direccion,
            cedula,
            consolaId
        });
        alert('Pedido simulado enviado con éxito');
        formContainer.style.display = 'none';
        pedidoForm.reset();
    });

    mostrarConsolas(consolasDisponibles);
});
