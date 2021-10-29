import assert from "assert";
import { even } from "./even.js";

describe("even", () => {
    it("It should return [2,4]", () => {
        assert.deepEqual(even([1, 2, 3, 4, 5]), [2, 4]);
    });
});