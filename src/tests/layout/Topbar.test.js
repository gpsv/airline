import { shallow } from "enzyme";
import { TopBar } from "../../components/layout/TopBar";

describe('Pruebas en <TopBar/>', () => {
  test('Debe de mostrar el componente correctamente', () => {
    const wrapper = shallow( <TopBar />);
    expect( wrapper ).toMatchSnapshot();
  })
  
});