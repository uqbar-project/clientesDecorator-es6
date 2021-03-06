class Cliente {
    constructor() {
        this.deuda = 0
        this.puntos = 0
    }

    pagarVencimiento(monto) {
        this.deuda = this.deuda - monto
    }

    agregarPuntos(unosPuntos) {
        this.puntos = this.puntos + unosPuntos
    }

    getDeuda() {
        return this.deuda
    }

    getPuntos() {
        return this.puntos
    }

    comprar(monto) {
        this.deuda = this.deuda + monto
    }

}

class ClienteDecorator {
    constructor(_cliente) {
        this.cliente = _cliente
    }
    comprar(monto) {
        this.cliente.comprar(monto)
    }
    getDeuda() {
        return this.cliente.getDeuda()
    }
    getPuntos() {
        return this.cliente.getPuntos()
    }
    agregarPuntos(puntos) {
        this.cliente.agregarPuntos(puntos)
    }
}

class ClienteSafeShop extends ClienteDecorator {
    constructor(_cliente, _montoMaximo) {
        super(_cliente)
        this.montoMaximo = _montoMaximo
    }
    comprar(monto) {
        if (monto > this.montoMaximo) {
            throw new Error("No debe comprar por mas de " + this.montoMaximo)
        }
        this.cliente.comprar(monto)
    }
}

class ClientePromocion extends ClienteDecorator {
    comprar(monto) {
        this.cliente.comprar(monto)
        if (monto > 50) {
            this.cliente.agregarPuntos(15)
        }
    }
}
