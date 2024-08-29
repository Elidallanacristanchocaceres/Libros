const libros = [
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        paginas: 432,
        prestado: false,
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        paginas: 328,
        prestado: false,
    },
    {
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        paginas: 863,
        prestado: true,
    }
];

function mostrarInformacion() {
    let titulos = document.querySelectorAll('.titulo');
    titulos.forEach(titulo => {
        console.log(titulo.textContent);
    });
}



function listarLibrosDisponibles(libros) { 
    return libros.filter(libro => !libro.prestado);
}

function buscarLibroPorTitulo(libros, titulo) {
    return libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
}

function buscarLibroPorAutor(libros, autor) {
    return libros.filter(libro => libro.autor.toLowerCase().includes(autor.toLowerCase()));
}

function calcularPromedioPaginas(libros) {
    const totalPaginas = libros.reduce((total, libro) => total + libro.paginas, 0);
    return totalPaginas / libros.length;
}

function agregarLibro(libros, nuevoLibro) {
    libros.push(nuevoLibro);
}

function modificarLibro(libros, titulo, datosModificados) {
    const libro = libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
    if (libro) {
        Object.assign(libro, datosModificados);
    }
}

mostrarInformacion(libros);

console.log("Libros disponibles:");
console.log(listarLibrosDisponibles(libros));

console.log("Buscar libro por título:");
console.log(buscarLibroPorTitulo(libros, "1984"));

console.log("Buscar libros por autor:");
console.log(buscarLibroPorAutor(libros, "Gabriel García Márquez"));

console.log("Promedio de páginas:");
console.log(calcularPromedioPaginas(libros));

const nuevoLibro = {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    paginas: 256,
    prestado: false
};

agregarLibro(libros, nuevoLibro);

console.log("Lista de libros después de agregar uno nuevo:");
console.log(libros);

modificarLibro(libros, "1984", { prestado: true });

console.log("Lista de libros después de modificar uno:");
console.log(libros);