import {
  ISpecificationRepository,
  ICreateSpecificationDto,
} from "../ISpecificatiosRepository";
import { Specification } from "../../model/Specification";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ description, name }: ICreateSpecificationDto): void {
    const specification = new Specification();

    Object.assign(specification, { name, description, createdAt: new Date() });

    this.specifications.push();
  }
  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
}

export { SpecificationRepository };
