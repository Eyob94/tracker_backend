"use strict";
exports.__esModule = true;
var client_1 = require("@prisma/client");
if (!globalThis.prisma) {
    globalThis.prisma = new client_1.PrismaClient();
}
if (process.env.NODE_ENV === "production")
    globalThis.prisma = new client_1.PrismaClient();
var client = globalThis.prisma;
exports["default"] = client;
//# sourceMappingURL=lib.js.map