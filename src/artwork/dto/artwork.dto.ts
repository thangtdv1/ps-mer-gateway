import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ArtworkSettingBaseLayer {
  @IsInt()
  layerId: number;

  @IsString()
  name: string;

  @IsNumber()
  left: number;

  @IsNumber()
  top: number;

  @IsNumber()
  width: number;

  @IsNumber()
  height: number;

  @IsOptional()
  @IsNumber()
  scaleX?: number = 1;

  @IsOptional()
  @IsNumber()
  scaleY?: number = 1;

  @IsOptional()
  @IsBoolean()
  flipX?: boolean = false;

  @IsOptional()
  @IsBoolean()
  flipY?: boolean = true;

  @IsOptional()
  @IsNumber()
  skewX?: number = 0;

  @IsOptional()
  @IsNumber()
  skewY?: number = 0;

  @IsOptional()
  @IsNumber()
  angle?: number = 0;

  @IsInt()
  zIndex: number;

  @IsOptional()
  @IsInt()
  groupId?: number;

  @IsOptional()
  @IsBoolean()
  locked?: boolean = false;

  @IsOptional()
  @IsBoolean()
  visible?: boolean = true;
}

export class ArtworkSettingTextLayer extends ArtworkSettingBaseLayer {
  @IsString()
  type: 'text' = 'text';

  @IsString()
  psType: 'text' = 'text';

  @IsOptional()
  @IsString()
  text?: string = 'A';

  @IsOptional()
  @IsString()
  fontFamily?: string;

  @IsOptional()
  @IsNumber()
  fontSize?: number;

  @IsOptional()
  @IsString()
  fontWeight?: string;

  @IsOptional()
  @IsString()
  fontStyle?: string;

  @IsOptional()
  @IsNumber()
  lineHeight?: number;

  @IsOptional()
  @IsNumber()
  charSpacing?: number;

  @IsOptional()
  @IsString()
  fill?: string;

  @IsOptional()
  @IsString()
  textBgColor?: string;
}

export class ArtworkSettingImagePlaceholderLayer extends ArtworkSettingBaseLayer {
  @IsString()
  type: 'image' = 'image';

  @IsString()
  psType: 'image_placeholder' = 'image_placeholder';

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsNumber()
  cropX?: number;

  @IsOptional()
  @IsNumber()
  cropY?: number;

  @IsOptional()
  @IsString()
  clipPath?: string;

  @IsOptional()
  @IsBoolean()
  removeBg?: boolean;

  @IsOptional()
  @IsBoolean()
  cutOutFace?: boolean;
}

export class ArtworkBaseSetting {
  @IsNumber()
  width: number;

  @IsNumber()
  height: number;

  @IsOptional()
  @IsInt()
  dpi?: number = 300;

  @IsOptional()
  @IsString()
  bgImage?: string;

  @IsOptional()
  @IsString()
  bgColor?: string;

  @ValidateNested({ each: true })
  @Type(() => ArtworkSettingTextLayer)
  textLayers: ArtworkSettingTextLayer[];

  @ValidateNested({ each: true })
  @Type(() => ArtworkSettingImagePlaceholderLayer)
  imagePlaceholderLayers: ArtworkSettingImagePlaceholderLayer[];
}

export class CreateArtworkPreviewSettingDto extends ArtworkBaseSetting {}

export class CreateArtworkProdSettingDto extends ArtworkBaseSetting {}

export class CreateArtworkDto {
  @IsString()
  name: string;

  @IsString()
  format: string = 'png';

  @IsString()
  colorMode: string = 'rgb';

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateArtworkProdSettingDto)
  prodSetting?: CreateArtworkProdSettingDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateArtworkPreviewSettingDto)
  previewSetting?: CreateArtworkPreviewSettingDto;
}
