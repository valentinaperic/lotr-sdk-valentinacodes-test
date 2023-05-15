"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lotr_sdk_valentinacodes_1 = __importDefault(require("@valentinacodes/lotr-sdk-valentinacodes"));
const client = new lotr_sdk_valentinacodes_1.default({
    apiKey: 'INSERT_API_KEY',
});
client.getQuoteById('5cd96e05de30eff6ebcce84b').then((p => {
    console.log(p);
}));
