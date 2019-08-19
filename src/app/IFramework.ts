import * as _ISharepoint from './sharepoint.service';

export interface IFramework extends _ISharepoint.ISharepointListItem {
    Title: string;
    Choice: string;
    Multiline: string;
    People?: string;
    PeopleId?: number;
}

export type ISharepoint<T> = _ISharepoint.ISharepoint<T>;
export type ISharepointContextInfo = _ISharepoint.ISharepointContextInfo;
export type ISharepointFieldChoices = _ISharepoint.ISharepointFieldChoices;
export type ISharepointItem<T> = _ISharepoint.ISharepointItem<T>;
export type ISharepointListItem = _ISharepoint.ISharepointListItem;
export type ISharepointProfileProps = _ISharepoint.ISharepointProfileProps;
export type ISharepointSearch = _ISharepoint.ISharepointSearch;
export type ISharepointUser = _ISharepoint.ISharepointUser;
export type ISharepointUserId = _ISharepoint.ISharepointUserId;
