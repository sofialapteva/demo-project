import { classNames } from "./classNames";

describe("classNames", () => {
    test("with only first param", () => {
        expect(classNames("first")).toBe("first");
    });
    test("with mod class with true", () => {
        expect(classNames("first", { second: true })).toBe("first second");
    });
    test("with mod class with false", () => {
        expect(classNames("first", { second: false })).toBe("first");
    });
    test("with additional classes", () => {
        expect(classNames("first", {}, ["second", "third"])).toBe("first second third");
    });
    test("with empty string", () => {
        expect(classNames("")).toBe("");
    });
});
