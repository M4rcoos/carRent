import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCase/createCategories/Index";
import { listCategoryController } from "../modules/cars/useCase/listCategory/Index";
import { importCategoryController } from "../modules/cars/useCase/importCategory";

const categoriesRoutes = Router();

const upload = multer({ dest: "./uploads" });

//acessando a rota e buscando informações do corpo da requisição
categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoryController.handle(request, response);
});
categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
