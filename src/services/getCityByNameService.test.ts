import { mockCityAPIResponse } from "@__tests__/mocks/mockCityAPIResponse";
import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";

describe('API: getCityByNameService', () => {
    it("shout return city details", async () => {
        
        jest.spyOn(api, "get").mockResolvedValue({mockCityAPIResponse});

        const response = await getCityByNameService("São paulo");
        
        expect(response.length).toBeGreaterThan(0);

    })
})