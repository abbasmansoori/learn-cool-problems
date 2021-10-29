import assert from "assert";
import { even } from "./even.js";

describe("even", () => {
    it("2 or 4", () => {
        assert.deepEqual(even([1, 2, 3, 4, 5]), [2, 4]);
    });
});