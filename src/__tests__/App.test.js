import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('Testa a pagina inicial da aplicação', () => {
  it('Mostra ola no container', () => {
    const name = 'Ola';
    const checkbox = shallow(<App labelOn="On" name={name} />);
    expect(checkbox.text()).toEqual(name);
    expect(checkbox).toMatchSnapshot();
    checkbox.setProps({
      name: 'HUE',
    });
    expect(checkbox.text()).toEqual('HUe');
    expect(checkbox).toMatchSnapshot();
  });
});
