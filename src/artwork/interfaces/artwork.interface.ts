export interface ArtworkSettingBaseLayer {
  layerId: number;
  name: string;
  left: number;
  top: number;
  width: number;
  height: number;
  scaleX?: number;
  scaleY?: number;
  flipX?: boolean;
  flipY?: boolean;
  skewX?: number;
  skewY?: number;
  angle?: number;
  zIndex: number;
  groupId?: number;
  locked?: boolean;
  visible?: boolean;
}

export interface ArtworkSettingTextLayer extends ArtworkSettingBaseLayer {
  type: 'text';
  psType: 'text';
  text?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: string;
  fontStyle?: string;
  lineHeight?: number;
  charSpacing?: number;
  fill?: string;
  textBgColor?: string;
}

export interface ArtworkSettingImagePlaceholderLayer
  extends ArtworkSettingBaseLayer {
  type: 'image';
  psType: 'image_placeholder';
  imageUrl?: string;
  cropX?: number;
  cropY?: number;
  clipPath?: string;
  removeBg?: boolean;
  cutOutFace?: boolean;
}

export interface ArtworkBaseSetting {
  width: number;
  height: number;
  dpi?: number;
  bgImage?: string;
  bgColor?: string;
  textLayers: ArtworkSettingTextLayer[];
  imagePlaceholderLayers: ArtworkSettingImagePlaceholderLayer[];
}

export interface CreateArtworkPreviewSettingInput extends ArtworkBaseSetting {}

export interface CreateArtworkProdSettingInput extends ArtworkBaseSetting {}

export interface CreateArtworkInput {
  name: string;
  format: string;
  colorMode: string;
  prodSetting?: CreateArtworkProdSettingInput;
  previewSetting?: CreateArtworkPreviewSettingInput;
}
