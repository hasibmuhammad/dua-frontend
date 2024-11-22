"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const categories_1 = __importDefault(require("./routes/categories"));
const duas_1 = __importDefault(require("./routes/duas"));
const home_1 = __importDefault(require("./routes/home"));
const subCategories_1 = __importDefault(require("./routes/subCategories"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN
}));
app.use(express_1.default.json());
// Routes
app.use('/api/v1/categories', categories_1.default);
app.use('/api/v1/subcategories', subCategories_1.default);
app.use('/api/v1/duas', duas_1.default);
app.use("/", home_1.default);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
