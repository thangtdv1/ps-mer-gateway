import { IsString } from 'class-validator';

export class CreateArtworkExampleDto {
  @IsString()
  name: string;
}
