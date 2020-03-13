//Interface
interface CamisetaBase{
    setColor(color: string):void;
    getColor():string;
    setModelo(modelo: string):void;
    getModelo():string;
    setMarca(marca: string):void;
    getMarca():string;
    setTalla(talla: string):void;
    getTalla():string;
    setPrecio(precio: number):void;
    getPrecio():number;
}

//Decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function(): void{
            console.log('Camiseta estampada con el logo de: '+ logo);
        }
    }
}

//Clase (Molde del objeto)
//@estampar('Logo')
/*export*/ class Camiseta implements CamisetaBase{
    //propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //Métodos (funciones o acciones del objeto)

    constructor(color: string = "rojo", modelo: string = "Manga Larga", marca: string = "Nike", talla: string = "L", precio: number = 8.5) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getColor():string{
        return this.color;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getModelo():string{
        return this.modelo;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getMarca():string{
        return this.marca;
    }

    public setTalla(talla: string): void {
        this.talla = talla;
    }

    public getTalla():string{
        return this.talla;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public getPrecio():number{
        return this.precio;
    }

}

var camiseta = new Camiseta();

camiseta.setColor("Rojo");
camiseta.setModelo("Manga Larga");
camiseta.setMarca("Nike");
camiseta.setTalla("L");
camiseta.setPrecio(10);

//camiseta.estampacion();

var playera = new Camiseta();

playera.setColor("Azul");
playera.setModelo("Manga Corta");
playera.setMarca("Nike");
playera.setTalla("L");
playera.setPrecio(8.5);

console.log(camiseta, playera);

//Clase Hija
class Sudadera extends Camiseta{
    public capucha: boolean;

    constructor(capucha: boolean = true){
        super();
        this.capucha = capucha;
    }

    setCapucha(capucha: boolean): void{
        this.capucha = capucha
    }

    getCapucha(): boolean{
        return this.capucha;
    }
    
}
var sudadera_nike = new Sudadera();
    console.log(sudadera_nike);