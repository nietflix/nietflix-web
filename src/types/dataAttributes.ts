import type { CollectionType, UserItemDataDto } from '@jellyfin/sdk/lib/generated-client';
import type { NullableBoolean, NullableNumber, NullableString } from './itemDto';

export type AttributesOpts = {
    context?: CollectionType | undefined,
    parentId?: NullableString,
    collectionId?: NullableString,
    playlistId?: NullableString,
    prefix?: NullableString,
    action?: NullableString,
    itemServerId?: NullableString,
    itemId?: NullableString,
    itemTimerId?: NullableString,
    itemSeriesTimerId?: NullableString,
    itemChannelId?: NullableString,
    itemPlaylistItemId?: NullableString,
    itemType?: NullableString,
    itemMediaType?: NullableString,
    itemCollectionType?: NullableString,
    itemIsFolder?: NullableBoolean,
    itemPath?: NullableString,
    itemStartDate?: NullableString,
    itemEndDate?: NullableString,
    itemUserData?: UserItemDataDto
};

export type DataAttributes = {
    'data-playlistitemid'?: NullableString;
    'data-timerid'?: NullableString;
    'data-seriestimerid'?: NullableString;
    'data-serverid'?: NullableString;
    'data-id'?: NullableString;
    'data-type'?: NullableString;
    'data-collectionid'?: NullableString;
    'data-playlistid'?: NullableString;
    'data-mediatype'?: NullableString;
    'data-channelid'?: NullableString;
    'data-path'?: NullableString;
    'data-collectiontype'?: NullableString;
    'data-context'?: NullableString;
    'data-parentid'?: NullableString;
    'data-startdate'?: NullableString;
    'data-enddate'?: NullableString;
    'data-prefix'?: NullableString;
    'data-action'?: NullableString;
    'data-positionticks'?: NullableNumber;
    'data-isfolder'?: NullableBoolean;
};
