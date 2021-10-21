document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
});

function iniciarApp() {
    mostrarServicios();
}

async function mostrarServicios() {
    try {
        const resultado = await fetch('./servicios.json')
        const db = await resultado.json()

        const { servicios } = db;

        // Generar el HTML

        servicios.forEach(servicio => {
            const { id, nombre, precio } = servicio;

            // DOM Scripting

            //Generar Nombre de Servicio
            const nombreServicio = document.createElement('P');
            nombreServicio.textContent = nombre;
            nombreServicio.classList.add('nombre-servicio');

            //Generar Precio del servicio
            const precioServicio = document.createElement('P');
            precioServicio.textContent = `$ ${precio}`;
            precioServicio.classList.add('precio-servicio');

            // Generar div contenedor de sevricio
            const servicioDiv = document.createElement('DIV');
            servicioDiv.classList.add('servicio');

            // Inyectar precio y nombre al div de servicio
            servicioDiv.appendChild(nombreServicio);
            servicioDiv.appendChild(precioServicio);

            // Inyectarlo en el HTML

            document.querySelector('#servicios').appendChild(servicioDiv);

        });
    } catch (error) { 
        console.log(error)
    }
}