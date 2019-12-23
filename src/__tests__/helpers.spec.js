import {
    initLocalStorageCurry
} from "../helpers.js"

describe("initLocalStorage", () => {
    it("should insert data to localStorage, when it is empty", () => {
        const getItem = jest.fn();
        getItem.mockReturnValue(null);

        const setItem = jest.fn();

        const localStorage = {
            getItem,
            setItem
        };

        const initLocalStorage = initLocalStorageCurry(localStorage);
        initLocalStorage("testParameter");

        expect(setItem).toBeCalledWith("imageList", JSON.stringify("testParameter"));
    });
});