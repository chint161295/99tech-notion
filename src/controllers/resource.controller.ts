import { Request, Response } from 'express';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateResourceDTO, GetResourcesDTO, UpdateResourceDTO } from '../dto';
import * as resourceService from '../services'

export const create = async (req: Request, res: Response) => {
  const dto = plainToInstance(CreateResourceDTO, req.body);
  const errors = await validate(dto);
  if (errors.length > 0) return res.status(400).json(errors);

  const resource = await resourceService.createResource(dto);
  res.status(201).json(resource);
};

export const findAll = async (req: Request, res: Response) => {
  const dto = plainToInstance(GetResourcesDTO, req.query);
  const errors = await validate(dto);
  if (errors.length > 0) return res.status(400).json(errors);

  const result = await resourceService.getAllResources(dto);
  res.json(result);
};

export const findById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const resource = await resourceService.getResourceById(id);
  if (!resource) return res.status(404).json({ error: 'Not found' });
  res.json(resource);
};

export const update = async (req: Request, res: Response) => {
  const dto = plainToInstance(UpdateResourceDTO, req.body);
  const errors = await validate(dto);
  if (errors.length > 0) return res.status(400).json(errors);

  const updated = await resourceService.updateResource(req.params.id, dto);
  if (!updated) return res.status(404).json({ error: 'Not found' });
  res.json(updated);
};

export const remove = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await resourceService.deleteResource(id);
  if (!result.affected) return res.status(404).json({ error: 'Not found' });
  res.status(204).send();
};
