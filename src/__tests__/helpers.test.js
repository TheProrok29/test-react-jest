import {
    initLocalStorageCurry,
    addCommentCurry,
    addLikeCurry
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

    it("should not insert data to localStorage, when it was setted", () => {
        const setItem = jest.fn();
        const getItem = jest.fn();
        getItem.mockReturnValue(true);

        const initLocalStorage = initLocalStorageCurry({
            setItem,
            getItem
        });
        initLocalStorage('testValue');

        expect(setItem).toHaveBeenCalledTimes(0);
    });
});

describe("addComment", () => {
    it("should add new comment", () => {
        const setItem = jest.fn();
        const getItem = jest.fn();
        getItem.mockReturnValue(JSON.stringify([{ comments: [] }]));
        const localStorage = { getItem, setItem };
        const addComment = addCommentCurry(localStorage);
        addComment(0, "Bob", "Great!");

        expect(setItem).toBeCalledWith("imageList", JSON.stringify([{
            comments: [
                { author: "Bob", text: "Great!" },
            ]
        }]))
    })
});

describe("addLike", () => {
    it("should add a like", () => {
        const setItem = jest.fn();
        const getItem = jest.fn();
        getItem.mockReturnValue(JSON.stringify([{ likes: 0 }]));
        const localStorage = { getItem, setItem };
        const addLike = addLikeCurry(localStorage);
        addLike(0);
        expect(setItem).toBeCalledWith("imageList", JSON.stringify([{ likes: 1 }]))
    });
});