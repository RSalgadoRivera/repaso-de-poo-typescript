"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log('Camiseta estampada con el logo de: ' + logo);
        };
    };
}
//Clase (Molde del objeto)
//@estampar('Logo')
/*export*/ var Camiseta = /** @class */ (function () {
    //Métodos (funciones o acciones del objeto)
    function Camiseta(color, modelo, marca, talla, precio) {
        if (color === void 0) { color = "rojo"; }
        if (modelo === void 0) { modelo = "Manga Larga"; }
        if (marca === void 0) { marca = "Nike"; }
        if (talla === void 0) { talla = "L"; }
        if (precio === void 0) { precio = 8.5; }
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Camiseta.prototype.getModelo = function () {
        return this.modelo;
    };
    Camiseta.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Camiseta.prototype.getMarca = function () {
        return this.marca;
    };
    Camiseta.prototype.setTalla = function (talla) {
        this.talla = talla;
    };
    Camiseta.prototype.getTalla = function () {
        return this.talla;
    };
    Camiseta.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Camiseta.prototype.getPrecio = function () {
        return this.precio;
    };
    return Camiseta;
}());
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
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera(capucha) {
        if (capucha === void 0) { capucha = true; }
        var _this = _super.call(this) || this;
        _this.capucha = capucha;
        return _this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var sudadera_nike = new Sudadera();
console.log(sudadera_nike);
