import { render, screen } from '@testing-library/react-native';
import { Day } from '@components/Day';

import clearDat from '@assets/clear_day.svg'


describe("Component: Day",() => {
    it("should be render day", () => {
       const { debug } =  render(<Day
        data={{
                day: '18/07',
                min: '30c',
                max: '35c',
                icon: clearDat,
                weather: 'Clear Sky'
            }}/>);

       expect(screen.getByText('18/07')).toBeTruthy();
    })
})