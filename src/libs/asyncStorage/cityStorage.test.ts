import { getStorageCity, removeStorageCity, saveStorageCity } from "./cityStorage"

describe('Storage: CityStorage', () => {
    const city = {
        id: "123",
        name: "São Paulo",
        longitude: -46.6871,
        latitude: -23.5320
    } 

    it("should be return null when don't have a city storaged", async () => {
        const response = await getStorageCity();

        expect(response).toBeNull()
    })

    it("should be save storage", async () => {

        await saveStorageCity(city);

        const res = await getStorageCity();

        expect(res).toEqual(city)
    })

    it("should be remove storage", async () => {
        await saveStorageCity(city);
        await removeStorageCity();

        const response = await getStorageCity();

        expect(response).toBeNull()
    })
})