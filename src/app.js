var Gyepes = /** @class */ (function () {
    function Gyepes() {
        this.startBind();
        this.startEventHander();
    }
    Gyepes.prototype.startBind = function () {
        this.atmeroInput = document.querySelector("#atmero");
        this.teruletInput = document.querySelector("#terulet");
        this.arInput = document.querySelector("#ar");
        this.calcButton = document.querySelector("#calcButton");
    };
    Gyepes.prototype.startEventHander = function () {
        var _this = this;
        var _a;
        (_a = this.calcButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            _this.startCalculation();
        });
    };
    Gyepes.prototype.startCalculation = function () {
        if (this.atmeroInput) {
            var atmero = Number(this.atmeroInput.value);
            var sugar = atmero / 2;
            this.terulet = this.calcTerulet(sugar) / 2;
            this.ar = this.calcFelar(this.terulet);
            this.renderResult();
        }
    };
    Gyepes.prototype.calcTerulet = function (sugar) {
        return Math.pow(sugar, 2) * Math.PI;
    };
    Gyepes.prototype.calcFelar = function (fullTerulet) {
        return 2500 * (fullTerulet / 2);
    };
    Gyepes.prototype.renderResult = function () {
        if (this.teruletInput) {
            this.teruletInput.value = String(this.terulet);
        }
        if (this.arInput) {
            this.arInput.value = String(this.ar);
        }
    };
    return Gyepes;
}());
new Gyepes();
// var atmero: number
// function Terulet(atmero) {
//     var eredmeny:number;
//     eredmeny = (atmero/2)*(atmero/2) * Math.PI
//     return (eredmeny/2)*2500
// }
// Terulet(120);
