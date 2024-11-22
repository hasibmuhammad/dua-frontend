import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import categoryRoutes from "./routes/categories";
import duas from "./routes/duas";
import home from "./routes/home";
import subCategoriesRoutes from "./routes/subCategories";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));
app.use(express.json());

// Routes
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/subcategories', subCategoriesRoutes);
app.use('/api/v1/duas', duas);
app.use("/", home);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
