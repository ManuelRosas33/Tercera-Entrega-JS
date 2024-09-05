// Inicializar los artistas en localStorage
if (!localStorage.getItem("artistas")) {
     const artistas = [
          { "nombre": "KESSLER", "genero": "Hard Techno", "descripcion": "Artista Argebtino dueño de Heiss" },
          { "nombre": "Ludmila Dipascale", "genero": "Techno", "descripcion": "Artista Argentina en constante crecimiento" },
          { "nombre": "RDMTN", "genero": "Hard Techno", "descripcion": "Artista Colombaino recidiendo en Buenos Aires" }
     ];
     localStorage.setItem("artistas", JSON.stringify(artistas));
}

 // Función para mostrar artistas
function mostrarArtistas() {
     const artistasGuardados = JSON.parse(localStorage.getItem("artistas"));
     const artistasContainer = document.getElementById("artistasContainer");

     artistasContainer.innerHTML = ""; 

     // Crear una card de Bootstrap para cada artista
     artistasGuardados.forEach(artista => {
          const artistaCard = document.createElement("div");
          artistaCard.className = "col-md-4"; 
          artistaCard.innerHTML = `
               <div class="card">
                    <div class="card-body">
                         <h5 class="card-title">${artista.nombre}</h5>
                         <h6 class="card-subtitle mb-2 text-muted">${artista.genero}</h6>
                         <p class="card-text">${artista.descripcion}</p>
                    </div>
               </div>
          `;
     
          artistasContainer.appendChild(artistaCard); 
     });
}

 // Función para añadir un nuevo artista
document.getElementById("form-artista").addEventListener("submit", function(event) {
     event.preventDefault(); 

     const nombre = document.getElementById("nombre").value;
     const genero = document.getElementById("genero").value;
     const contacto = document.getElementById("contacto").value;
     const descripcion = document.getElementById("descripcion").value;

     const nuevoArtista = { nombre, genero, contacto, descripcion };

     const artistasGuardados = JSON.parse(localStorage.getItem("artistas"));
     artistasGuardados.push(nuevoArtista);
     localStorage.setItem("artistas", JSON.stringify(artistasGuardados));

     mostrarArtistas(); 
     this.reset(); 
});