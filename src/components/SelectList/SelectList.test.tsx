import { fireEvent, render, screen } from "@testing-library/react-native"
import { SelectList } from "."
import { CityProps } from "@services/getCityByNameService"

describe('Componente: SelectList', () => {
    it("should be return city details selected", () => {
        const onPress = jest.fn()

        render( <SelectList data={cities} onChange={() => {}} onPress={onPress}/> )
        
        const selectedCity = screen.getByText(/Rio/i);

        fireEvent.press(selectedCity);
        
        //Verificar se foi chamada 1 vez
        // expect(onPress).toHaveBeenCalledTimes(1);

        
        expect(onPress).toHaveBeenCalledWith(cities[1]);
    })

    it("not should be show options when data props is empty", () => {

      render( <SelectList data={[]} onChange={() => {}} onPress={() => {}}/> )
      
      const options = screen.getByTestId("options");
      expect(options.props.children).toHaveLength(0);
  })
})


const cities: CityProps[] = [
    {
      id: "1",
      name: "São Paulo",
      longitude: -46.6333,
      latitude: -23.5505,
    },
    {
      id: "2",
      name: "Rio de Janeiro",
      longitude: -43.1729,
      latitude: -22.9068,
    },
    {
      id: "3",
      name: "Belo Horizonte",
      longitude: -43.9378,
      latitude: -19.9208,
    }
  ];
  