import { AppDataSource } from "../data-source";
import { CreateResourceDTO, GetResourcesDTO, UpdateResourceDTO } from "../dto";
import { Resource } from "../entities";

const resourceRepo = AppDataSource.getRepository(Resource);

export const createResource = async (dto: CreateResourceDTO) => {
  const resource = resourceRepo.create(dto);
  return resourceRepo.save(resource);
};

export const getAllResources = async ({
    type, name, page =1, limit = 10, sortBy = "createdAt", order = "DESC"
}: GetResourcesDTO) => {
  const queryBuilder = resourceRepo.createQueryBuilder("resource");

  if (type) {
    queryBuilder.andWhere("resource.type = :type", { type });
  }

  if (name) {
    queryBuilder.andWhere("resource.name LIKE :name", { name: `%${name}%` });
  }

  queryBuilder.skip((page - 1) * limit)
       .take(limit)
       .orderBy(`resource.${sortBy}`, order);

  const [items, total] = await queryBuilder.getManyAndCount();

  return {
    items,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit)
  };
}

export const getResourceById = async (id: string) => {
  return resourceRepo.findOneBy({ id });
};

export const updateResource = async (id: string, dto: UpdateResourceDTO) => {
  const resource = await resourceRepo.findOneBy({ id });
  if (!resource) return null;
  resourceRepo.merge(resource, dto);
  return resourceRepo.save(resource);
};

export const deleteResource = async (id: string) => {
  return resourceRepo.delete(id);
};