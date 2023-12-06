class ProductManager {
    static ultId = 0;


    constructor(){
        this.products = [];
    }



    addProduct(title, description, price, img, code, stock) {

    

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

    }

    getProducts(){
        console.log(this.products);
    }

    getProductsById(id) {
        const product = this.products.find(item => item.id === id);

        if(!product){
            console.log("Producto no encontrado, te vamos  tener que matar disculpa loco");
        } else{
            console.log("SEE, lo encontamos: ", product)
        }
        return product;
    }

}

