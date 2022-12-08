"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.prismaMock = void 0;
var jest_mock_extended_1 = require("jest-mock-extended");
var lib_1 = __importDefault(require("./lib/lib"));
jest.mock("./client", function () { return ({
    __esModule: true,
    "default": (0, jest_mock_extended_1.mockDeep)()
}); });
beforeEach(function () {
    (0, jest_mock_extended_1.mockReset)(exports.prismaMock);
});
exports.prismaMock = lib_1["default"];
//# sourceMappingURL=singleton.js.map