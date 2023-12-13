const fs = require("fs").promises;


class ProductManager {
    static ultId = 0;


    constructor(path){
        this.products = [];
        this.path = path;
    }



    async addProduct(nuevoObjeto) {
        let{title, description, price, img, code, stock} =
        nuevoObjeto;
    

        if(!title || !description || !price || !img ||!code ||!stock)

    {
        console.log("Todos los campos son obligatorios completalos o te vamos a encontar");
        return;
    }

    if(this.products.some(item => item.code === code)){
        console.log("El codigo debe ser unico, sabemos donde vivis");
        return;
    }

    const newProduct = {
        id: ++ProductManager.ultId,
        title,
        desscription,
        price,
        img,
        code,
        stock,
    }

    this.products.push(newProduct);

    await this.guardarArchivo(this.products);

    }

    getProducts(){
        console.log(this.products);
    }

    async getProductsById(id) {
        try {
            const arrayProductos = await this.leerArchivo();
            const buscado = arrayProductos.find(item => item.id ===
                id);

                if(!buscado) {
                    console.log("Producto no encontrado");
                }else{
                    console.log("Siiii, lo encontramos papucho! ")
                    return buscado;
                }

        } catch (error) {
            console.log("Error al leer el archivo", error);
        }


    //     const product = this.products.find(item => item.id === id);

    //     if(!product){
    //         console.log("Producto no encontrado, te vamos  tener que matar disculpa loco");
    //     } else{
    //         console.log("SEE, lo encontamos: ", product)
    //     }
        
    }

    async leerArchivo(){
        try {
            const respuesta = await fs.readFile(this.path, "utf-8");
            const arrayProductos = JSON.parse(respuesta);
            return arrayProductos;

        } catch (error) {
            console.log("Error al leer un archivo", error);
        }
    }

    async guardarArchivo(arrayProductos){
        try {
            await fs.writeFile(this.path, JSON.stringify
                (arrayProductos, null, 2));
        } catch (error) {
            console.log("Error al guardar el archivo", error);
        }
    }
    

    async updateProduct(id,) {
        try {
            const arrayProductos = await this.leerArchivo();
            
            const index = arrayProductos.findIndex(item => item.id ===
                id);

                if(index !== -1){
                    arrayProductos.splice(index, 1, );
                    await this.guardarArchivo(arrayProductos);
                }else{
                    console.log("no se encontro el producto");
                }
        } catch (error) {
            console.log("Error al actualizar el producto", error);
        }
    }
}

