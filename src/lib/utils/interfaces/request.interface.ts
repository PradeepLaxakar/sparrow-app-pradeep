import type { AuthSection } from "../enums/authorization.enum";
import type { ItemType } from "../enums/item-type.enum";
import type { ContentTypeEnum } from "../enums/request.enum";
import type {
  RequestAuthTypes,
  RequestDatasetType,
  RequestMethodType,
  RequestRawType,
  RequestSectionType,
  ResponseFormatterType,
  ResponseSectionType,
} from "../types/request.type";

export interface Path {
  workspaceId: string;
  collectionId: string;
  folderId?: string;
  folderName?: string;
}

/**
 * Change of any key will affect their corresponding enum.
 * reference: request.enum.ts
 * @interface
 */

export interface Response {
  headers: KeyValuePair[];
  status: string;
  body: string;
  time: number;
  size: number;
}

export interface RequestBody {
  method: string;
  url?: string;
  body?: unknown;
  headers?: KeyValuePair[];
  queryParams?: KeyValuePair[];
  auth?: Auth;
  selectedRequestBodyType?: ContentTypeEnum;
  selectedRequestAuthType?: RequestAuthTypes;
}
export interface KeyValuePair {
  key: string;
  value: string;
  checked: boolean;
}

export interface EnvValuePair {
  key: string;
  value: string;
  checked: boolean;
}

export interface KeyValuePairWithBase {
  key: string;
  value: string;
  checked: boolean;
  base: string | ArrayBuffer;
}

export interface FormData {
  key: string;
  value: string;
  checked: boolean;
}

export interface Body {
  raw?: string;
  urlencoded?: KeyValuePair[];
  formdata?: {
    text: KeyValuePair[];
    file: KeyValuePairWithBase[];
  };
}

export interface State {
  raw?: RequestRawType;
  dataset?: RequestDatasetType;
  auth?: RequestAuthTypes;
  section?: RequestSectionType;
  responseSection?: ResponseSectionType;
  responseRaw?: RequestRawType;
  responseFormatter?: ResponseFormatterType;
  additions: string;
  isSaveDescription: boolean;
}

export interface BasicAuth {
  username?: string;
  password?: string;
}

export interface ApiKey {
  authKey: string;
  authValue: string;
  addTo: AuthSection.HEADER | AuthSection.QUERY_PARAMETER;
}

export interface Auth {
  bearerToken?: string;
  basicAuth?: BasicAuth;
  apiKey?: ApiKey;
}

export interface Save {
  api?: boolean;
  description?: boolean;
}

export interface Request {
  method: RequestMethodType;
  body?: Body;
  url?: string;
  headers?: KeyValuePair[];
  queryParams?: KeyValuePair[];
  autoGeneratedHeaders?: KeyValuePair[];
  response?: Response;
  state?: State;
  auth?: Auth;
  requestInProgress?: boolean;
  save?: Save;
}

export interface Collection {
  requestCount?: number;
  folderCount?: number;
}

export interface WorkSpace {
  requestCount?: number;
  collectionCount?: number;
}

export interface Folder {
  requestCount?: number;
  folderCount?: number;
}

export interface NewTab {
  id: string;
  name: string;
  type:
    | ItemType.COLLECTION
    | ItemType.FOLDER
    | ItemType.REQUEST
    | ItemType.WORKSPACE;
  description: string;
  isDeleted: boolean;
  activeSync: boolean;
  source: string;
  property: {
    request?: Request;
    collection?: Collection;
    workspace?: WorkSpace;
    folder?: Folder;
  };
  isActive: boolean;
  save: boolean;
  createdAt: string;
  path?: Path;
  saveInProgress?: boolean;
  index?: number;
}

export interface CurrentTab {
  id: string | null;
}
