import { render, screen } from "@testing-library/react-native";

import { NextDays } from "@components/NextDays";

import clearDay from '@assets/clear_day.svg';

describe("Components: NextDays", () => {
  it("should be render day.", () => {
    render(
      <NextDays
        data={[
          { day: "18/07", min: "30c", max: "35c", icon: clearDay, weather: "Clear Sky 00"},
          { day: "17/07", min: "25c", max: "25c", icon: clearDay, weather: "Clear 423 01"},
          { day: "16/07", min: "20c", max: "20c", icon: clearDay, weather: "Clear 1231 02"},
          { day: "15/07", min: "15c", max: "15c", icon: clearDay, weather: "213 Sky 03"}
        ]}
      />
    );

    expect(screen.getByText('18/07')).toBeTruthy();
  });
});
