//PRODUCTOS
const productos = [
    //CELULARES
    {
        id: "celular-01",
        titulo: "Celular 01",
        imagen: "./images/celulares/cel1.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 1000
    },
    {
        id: "celular-02",
        titulo: "Celular 02",
        imagen: "./images/celulares/cel2.png",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 1000
    },
    {
        id: "celular-03",
        titulo: "Celular 03",
        imagen: "./images/celulares/cel3.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 1000
    },
    {
        id: "celular-04",
        titulo: "Celular 04",
        imagen: "./images/celulares/cel4.png",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 1000
    },
    {
        id: "celular-05",
        titulo: "Celular 05",
        imagen: "./images/celulares/cel5.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 1000
    },
    // Consolas
    {
        id: "consolas-01",
        titulo: "Consolas 01",
        imagen: "./images/consolas/con1.jpg",
        categoria: {
            nombre: "Consolas",
            id: "consolas"
        },
        precio: 1000
    },
    {
        id: "consolas-02",
        titulo: "Consolas 02",
        imagen: "./images/consolas/con2.png",
        categoria: {
            nombre: "Consolas",
            id: "consolas"
        },
        precio: 1000
    },
    {
        id: "consolas-03",
        titulo: "Consolas 03",
        imagen: "./images/consolas/con3.jpg",
        categoria: {
            nombre: "Consolas",
            id: "consolas"
        },
        precio: 1000
    },
    {
        id: "consolas-04",
        titulo: "Consolas 04",
        imagen: "./images/consolas/con4.jpg",
        categoria: {
            nombre: "Consolas",
            id: "consolas"
        },
        precio: 1000
    },
    {
        id: "consolas-05",
        titulo: "Consolas 05",
        imagen: "./images/consolas/con5.jpg",
        categoria: {
            nombre: "Consolas",
            id: "consolas"
        },
        precio: 1000
    },
    // Notebooks
    {
        id: "notebooks-01",
        titulo: "Notebooks 01",
        imagen: "./images/notebooks/not1.jpg",
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 1000
    },
    {
        id: "notebooks-02",
        titulo: "Notebooks 02",
        imagen: "./images/notebooks/not2.jpg",
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 1000
    },
    {
        id: "notebooks-03",
        titulo: "Notebooks 03",
        imagen: "./images/notebooks/not3.jpg",
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 1000
    },
    {
        id: "notebooks-04",
        titulo: "Notebooks 04",
        imagen: "./images/notebooks/not4.jpg",
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 1000
    },                            
    {
        id: "notebooks-05",
        titulo: "Notebooks 05",
        imagen: "./images/notebooks/not5.jpg",
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 1000    
    }
];
    
        const contenedorProductos = document.querySelector("#contenedor-productos");
        const botonesCategorias = document.querySelectorAll(".boton-categorias");
        const tituloPrincipal = document.querySelector("#titulo-principal");
        let botonesAgregar = document.querySelectorAll(".producto-agregar");
   
    function cargarProductos(productosElegidos) {      
        
        contenedorProductos.innerHTML = "";

        productosElegidos.forEach(producto => {

            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
               <h3 class="producto-titulo">${producto.titulo}</h3>
               <p class="producto-precio">${producto.precio}</p>
               <button class="producto-agregar"id="4${producto.id}">Agregar</button>
            </div>            
            `;

            contenedorProductos.append(div);
        })
    }    

    cargarProductos(productos);

    botonesCategorias.forEach(boton=> {
        boton.addEventListener("click", (e) => {

            botonesCategorias.forEach(boton.classList.remove("active"));

            e.currentTarget.classList.add("active");

            if (e.currentTarget.id != "todos") {
                const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
                tituloPrincipal.innerText = productoCategoria.categoria.nombre;
                const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productos);
            }   else {
                tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
            }

        })

    })    

                     
 

    


       







































































