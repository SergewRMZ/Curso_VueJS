import { shallowMount } from '@vue/test-utils';
import Indecision from '@/components/Indecision'; 

describe('Indecision Component', () => {
  let wrapper, clgSpy;

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
      answer:'yes',
      forced:false,
      image:'https://yesno.wtf/assets/yes/15-3d723ea13af91839a671d4791fc53dcc.gif'
    })
  }));

  beforeEach(() => {
    wrapper = shallowMount(Indecision);
    clgSpy = jest.spyOn(console, 'log');

    jest.clearAllMocks();
  });

  test('Debe de hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  /** Para esta prueba tenemos que usar una téxnica que consiste en estar "espiando" */
  test('Escribir en el input no debe de disparar ningún evento', async () => {

    // Espiar algún método o propiedad del componente con el método spyOn
    const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer'); 
    const input = wrapper.find('input');
    await input.setValue('Hola Mundo');

    /**  
     * Verificar que el método no se ha llamado
     * expect(getAnswerSpy).not.toHaveBeenCalled();
    */

    // Verificar que el método haya sido llamado
    expect(clgSpy).toHaveBeenCalledTimes(1);

    // Verificar que no haya sido llamada
    expect(getAnswerSpy).toHaveReturnedTimes(0); 
  });

  test('Al escribir el símbolo "?" debe de disparar el método getAnswer', async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');
    const input = wrapper.find('input');
    await input.setValue('Hola Mundo?');

    // Verificar que el método haya sido llamado
    expect(clgSpy).toHaveBeenCalledTimes(1);

    expect(getAnswerSpy).toHaveBeenCalled();   
  });

  /** .vm: no permite acceder al ViewModel de un componente */
  test ('Pruebas en getAnswer', async () => {
    await wrapper.vm.getAnswer();
    const img = wrapper.find('img');
    expect(img.exists()).toBeTruthy();
    expect(wrapper.vm.answer).toBe('Si!');
  });

  test ('Pruebas en los fallos de getAnswer - Fallo de la API', async () => {
    // TODO: Fallo en la API

    fetch.mockImplementationOnce(() => Promise.reject('API is down'));
    await wrapper.vm.getAnswer();
    const img = wrapper.find('img');
    expect(img.exists()).toBeFalsy();
    expect(wrapper.vm.answer).toBe('No se pudo cargar del API');
  });

});