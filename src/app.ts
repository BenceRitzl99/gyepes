class Gyepes {
    atmeroInput: HTMLInputElement | null;
    teruletInput: HTMLInputElement | null;
    arInput: HTMLInputElement | null;
    calcButton: HTMLElement | null;
    terulet: number;
    ar: number

constructor() {
    this.startBind();
    this.startEventHander();
}

startBind() {
    this.atmeroInput = document.querySelector("#atmero");
    this.teruletInput = document.querySelector("#terulet");
    this.arInput = document.querySelector("#ar");
    this.calcButton = document.querySelector("#calcButton");
    
}
startEventHander() {
    this.calcButton?.addEventListener('click', () => {
        this.startCalculation();
        
    })
    
}
startCalculation() {
    if(this.atmeroInput) {
        const atmero = Number(this.atmeroInput.value);
        const sugar = atmero / 2;
        this.terulet = this.calcTerulet(sugar) / 2;
        this.ar = this.calcFelar(this.terulet)
        this.renderResult()
    }
}
calcTerulet(sugar: number):number {
    return Math.pow(sugar, 2) * Math.PI;

}
calcFelar(fullTerulet:number):number {
    return 2500 * (fullTerulet / 2)
}
renderResult() {
    if(this.teruletInput) {
        this.teruletInput.value = String(this.terulet);
    }
    if(this.arInput) {
        this.arInput.value = String(this.ar)
}
}
}
new Gyepes();












// var atmero: number
// function Terulet(atmero) {
//     var eredmeny:number;
//     eredmeny = (atmero/2)*(atmero/2) * Math.PI
//     return (eredmeny/2)*2500
    
// }
// Terulet(120);
