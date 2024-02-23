
/** Se comienza con la función describe, donde se coloca el nombre del componente
 * al que queremos realizar las pruebas, dentro de la función flecha es donde se colocan. 
 */
describe('Example Component', () => {

  /** Como primer parámetro se coloca la descripción de lo que tiene que realizar la prueba */
  test('Debe de ser mayor a 10', () => {
    let value = 5;

    value += 6;

    expect( value ).toBeGreaterThan(10);
  })
})