describe('clientes', () => {
  let manuel
  let manuelSafeShop
  let manuelPromo

  beforeEach(function () {
    manuel = new ClientePromocion(new ClienteSafeShop(new Cliente(), 120))
    manuelPromo = new ClientePromocion(new Cliente())
    manuelSafeShop = new ClienteSafeShop(new Cliente(), 100)
  })

  it('manuel con promocion compra por mas de 50 y tiene 15 puntos', () => {
    manuelPromo.comprar(70)
  	expect(15).toBe(manuelPromo.getPuntos())
  }) 
  it('manuel con promocion compra por menos de 50 y no suma puntos', () => { 
    manuelPromo.comprar(30)
    expect(0).toBe(manuelPromo.getPuntos())
  }) 
  it('manuel con safe shop compra por mas de 100 y tira error', () => {
    expect( () => manuelSafeShop.comprar(120)).toThrow(new Error("No debe comprar por mas de 100"))
  }) 
  it('manuel con promocion compra por menos de 100 y deja pasar', () => {
    manuelSafeShop.comprar(30)
    expect(30).toBe(manuelSafeShop.getDeuda())
  })   
  it('manuel con promocion y safe shop compra por mas de 120 y tira error, por lo que no suma puntos', () => {
    expect( () => manuel.comprar(150)).toThrow(new Error("No debe comprar por mas de 120"))
    expect(0).toBe(manuel.getPuntos())
  }) 
  it('manuel con promocion y safe shop compra por menos de 120 y pasa ok, por lo que suma puntos', () => {
    manuel.comprar(90)
    expect(15).toBe(manuel.getPuntos())
  }) 
})
