import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ResourceType } from '../entities';
import { PaginationDTO } from './pagniation.dto';

export class CreateResourceDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsEnum(ResourceType, { message: 'type must be one of ResourceType enum' })
  type?: ResourceType;
}

export class UpdateResourceDTO {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEnum(ResourceType, { message: 'type must be one of ResourceType enum' })
  type?: ResourceType;
}

export class GetResourcesDTO extends PaginationDTO {
  @IsOptional()
  @IsEnum(ResourceType)
  type?: ResourceType;

  @IsOptional()
  @IsString()
  name?: string;
}