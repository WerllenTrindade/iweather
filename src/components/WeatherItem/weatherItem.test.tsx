import { render, screen } from "@testing-library/react-native"
import { WeatherItem } from "."

import dropIcon from '@assets/drop.svg'

describe("Compoenent: WeatherItem", () => {
    it("should be show title and value.", () => {
        render(
            <WeatherItem icon={dropIcon} title="Unidade do ar" value="81%"  />
        )

        const title = screen.getByText("Unidade do ar");
        const value = screen.getByText("81%");

        expect(title).toBeTruthy();
        expect(value).toBeTruthy();
    })
})