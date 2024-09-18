import { useCity } from "@hooks/useCity"
import { renderHook, waitFor, act } from "@testing-library/react-native"
import { CityProvider } from "./CityContext";
import { getStorageCity } from "@libs/asyncStorage/cityStorage";

describe('Context: CityContext', () => {
    it("should be change sleected city", async () => {
        const { result } = renderHook(() => useCity(), { wrapper: CityProvider   });
''
        await waitFor(() => act(() => result.current.handleChanceCity({
            id: '1',
            name: 'São paulo',
            latitude: 123,
            longitude: 456
        })))

        expect(result.current.city?.name).toBe('São paulo');
    })
})