import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}
  handle(request: Request, response: Response): Response {
    //recebendo a requisição
    const { name, description } = request.body;

    //executando o serviço
    this.createCategoryUseCase.execute({ name, description });

    //dando o retorno pra quem esta fazendo a Requisição
    return response.status(201).json({ name, description });
  }
}

export { CreateCategoryController };
