import { ISpecificationRepository } from "../../repositories/ISpecificatiosRepository";

class IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const specidicatinAlreadyExixt =
      this.specificationRepository.findByName(name);

    if (specidicatinAlreadyExixt) {
      throw new Error("Specification Already exists!");
    }

    this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
