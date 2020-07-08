//Validar agregar, borrar, modificar, buscarPoId

describe("Testeando catalogo", () => {
beforeEach(() =>{
    catalogo.lista = []; //cada vez que hace una nueva iteracion en cada test vuelve a recetearse
    catalogo.siguienteId = 1; // vuelve a el id 1.
    catalogo.agregar("jabon", "cremoso", "50"); 
    catalogo.agregar("shampoo", "control caida", "125");
});

test("Probar si funciona agregar producto", () => {
    expect(catalogo.lista[0]).toEqual({
        id: 1,
        titulo: "jabon",
        descripcion: "cremoso",
        precio: "50"
    });
});

test("Probando si funciona borrar", () => {
    catalogo.borrar(1);
    expect(catalogo.lista.length).toBe(1);
});

test("Probando modificar por id", () => {
    catalogo.modificar(2, "precio", "25");
    expect(catalogo.lista[1]).toEqual({
        id: 2,
        titulo: "shampoo",
        descripcion: "control caida",
        precio: "25"
        });
    });
}); 

describe("Probando si borra del carrito", ()=> {
beforeEach (() => {
    carrito.lista = [];
    carrito.nextId = 1;
    carrito.agregar(1, 1);
    carrito.agregar(2, 1);
});

test("Probando si funciona borrar del carrito", () => {
    carrito.borrar(1);
    expect(carrito.lista.length).toBe(1);
});
});

describe("Testeamos funcion agregar", () => {
    beforeEach (() => {
        catalogo.lista = []; 
        catalogo.siguienteId = 1;
        catalogo.agregar("jabon", "cremoso", "50");
        catalogo.agregar("shampoo", "control caida", "125");
        carrito.lista = [];
        carrito.nextId = 1;
        carrito.agregar(1, 1);
        carrito.agregar(2, 1);
    });
    test("agrego productos 1 y 2 y lista tiene que dar dos, me devuelve dos elementos", () => {
        expect(carrito.lista.length).toBe(2);
    });
    test("prubo si funciona nextId", () => {
        catalogo.agregar("aceitunas", "negras", "80");
        carrito.agregar(3, 2);
        expect(carrito.nextId).toBe(4);
    })
    test("pruebo si me agrega bien el producto", () => {
        expect(carrito.lista[1]).toEqual({
            titulo: "shampoo", 
            descripcion: "control caida",
            precio: "125",
            id: 2, // es el nuevo Id del carrito
            catalogoId: 2,
            cantidad: 1
        })
    })
}); 




const catalogo = {
    lista: [],
    camposValidos: ["titulo", "descripcion", "precio"],
    siguienteId: 1,
    buscarPorId: function(id) {
     return this.lista.findIndex(producto => id === producto.id);   
    },
    agregar: function(titulo, descripcion, precio) {
        const producto = {
            id: this.siguienteId,
            titulo,
            descripcion,
            precio
        };
        this.lista.push(producto);
        this.siguienteId++;
    },
    borrar: function(id) {
        this.lista = this.lista.filter(producto => producto.id !== id);
    },
    validarModificacion: function(index, campo) {
        if(index === -1) throw new Error("El ID seleccionado no existe.");
        if(this.camposValidos.indexOf(campo) === -1) throw new Error("El campo seleccionado no es valido."); 
    },
    modificar: function(id, campo, valor) {
        const index = this.buscarPorId(id);
        this.validarModificacion(index, campo);
        this.lista[index][campo] = valor; 
    }
};

const carrito = {
    lista: [],
    nextId: 1,
    get total() {
        return this.lista.reduce((acumulador, producto) => acumulador + producto.precio, 0); // devuelve un solo valor. el precio total
    },
    buscarPorCatalogoId(catalogoId) {
        return this.lista.findIndex(producto => producto.catalogoId === catalogoId);
    },
    agregar: function (catalogoId, cantidad) {
        const catalogoIndex = catalogo.buscarPorId(catalogoId);
        if(catalogoIndex === -1) throw new Error("El elemento solicitado no existe.");
        const carritoIndex = this.buscarPorCatalogoId(catalogoId);

        if (carritoIndex === -1) {
            const obj = {
                ...catalogo.lista[catalogoIndex],
                id: this.nextId,
                catalogoId,
                cantidad
            }
            this.lista.push(obj);
            this.nextId++;
        } else {
            this.lista[carritoIndex].cantidad += cantidad;
        }
    },
    borrar: function(id) {
        const index = this.lista.findIndex(producto => id === producto.id);
        if(index === -1) throw new Error("El producto no existe en el carrito.");
        this.lista.splice(index, 1);
    }
};

