import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCase/createCategories/Index";
import { listCategoryController } from "../modules/cars/useCase/listCartegory/Index";

const categoriesRoutes = Router();

//acessando a rota e buscando informações do corpo da requisição
categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoryController.handle(request, response);
});

export { categoriesRoutes };
