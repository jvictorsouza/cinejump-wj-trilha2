export interface StrObjectArrayBool {
  [index: string]: Array<boolean>;
}

export interface StrObjectNmb {
  [index: string]: number;
}

export interface StrObjectStr {
  [index: string]: string;
}

export interface StrObjectArrayStr {
  [index: string]: Array<string>;
}


export interface StrObjectObjectArrayStr {
  [index: string]: StrObjectArrayStr;
}

export interface ProductItems {
  "id": number,
  "sku": string,
  "path": string,
  "name": string,
  "image": string,
  "price": number,
  "specialPrice"?: number,
  "filter": Array<StrObjectStr>,
}

export interface Products {
  'filters': Array<StrObjectStr>;
  'items': Array<ProductItems>;
}