/** shallowMount Esta función se utiliza para montar un componente Vue en una prueba unitaria de manera aislada, lo que significa que no se renderizarán sus componentes secundarios. */

import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter'; 

/** Los snapshots son instantáneas del estado de un componente en un momento dado, que se pueden utilizar para detectar cambios inesperados en su apariencia o comportamiento. */
describe('Counter Component', () => {
  // test ('Debe de hacer match con el snapshot', () => {
  //   const wrapper = shallowMount(Counter);
  //   expect (wrapper.html()).toMatchSnapshot(); 
  // })

  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  test ('h2 debe de tener el valor por defeto "Counter"', () => {
    const h2 = wrapper.find('h2').text(); /* Retorna el primero que encuentre */
    expect (h2).toBe('Counter');
  })

  test ('Debe de incrementar y decrementar el contador', async () => {
    const [increaseBtn, decreaseBtn] = wrapper.findAll('button');

    // Simula el evento de click en el botón increase
    for (let i = 0; i < 3; i++) {
      await increaseBtn.trigger('click'); 
    }
    
    // Simula el evento de click en el botón decrease
    for (let i = 0; i < 2; i++) {
      await decreaseBtn.trigger('click');
    }

    // Busca el valor con el identificador de test definido en el componente
    const value = wrapper.find('[data-testid="counter"]').text();
    expect(value).toBe('101');
  });

  test('debe de establecer el valor por defecto', () => {
    // console.log(wrapper.props()); Permite visualizar las propiedades de un componente

    // Extraer la propiedad de un objeto y comparar con el valor por defecto.
    const { start } = wrapper.props(); 
    const value = wrapper.find('[data-testid="counter"]').text();
    expect (Number(value)).toBe(start);
  })

  /** En la siguiente prueba, se modifica el valor de una propiedad
   * del componente. 
   */
  test ('debe de mostrar la propiedad title', () => {

    const tittle = 'Hola Mundo';

    // De la siguiente forma es como podemos enviar valores a las propiedades de un componente
    const wrapper = shallowMount(Counter, {
      props: {
        tittle: 'Hola Mundo',
      }
    });

    expect (wrapper.find('h2').text()).toBe(tittle);
  });

});