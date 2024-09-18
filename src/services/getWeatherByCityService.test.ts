import { mockCityAPIResponse as data } from "@__tests__/mocks/mockCityAPIResponse";
import { api } from "./api";
import { getCityByNameService  } from "./getCityByNameService";
import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWeatherAPIResponse";
import { getWeatherByCityService } from "./getWeatherByCityService";

describe("Service: getWeatherByCityService", () => {
    it("should be return weather api data formatted", async () => {
        jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

        const response = await getWeatherByCityService({latitude: 123, longitude: 456})
        
        expect(response).toHaveProperty("today");
    })
})