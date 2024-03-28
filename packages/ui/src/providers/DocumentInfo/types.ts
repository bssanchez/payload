import type { PaginatedDocs, TypeWithVersion } from 'payload/database'
import type {
  ClientCollectionConfig,
  ClientGlobalConfig,
  Data,
  DocumentPermissions,
  DocumentPreferences,
  FormState,
  InsideFieldsPreferences,
  SanitizedCollectionConfig,
  SanitizedGlobalConfig,
  TypeWithID,
  TypeWithTimestamps,
} from 'payload/types'
import type React from 'react'

export type DocumentInfoProps = {
  AfterDocument?: React.ReactNode
  AfterFields?: React.ReactNode
  BeforeDocument?: React.ReactNode
  BeforeFields?: React.ReactNode
  action?: string
  apiURL?: string
  collectionSlug?: SanitizedCollectionConfig['slug']
  disableActions?: boolean
  disableLeaveWithoutSaving?: boolean
  docPermissions?: DocumentPermissions
  globalSlug?: SanitizedGlobalConfig['slug']
  hasSavePermission?: boolean
  id: null | number | string
  isEditing?: boolean
  onLoadError?: (data?: any) => Promise<void> | void
  onSave?: (data: Data) => Promise<void> | void
}

export type DocumentInfoContext = DocumentInfoProps & {
  docConfig?: ClientCollectionConfig | ClientGlobalConfig
  getDocPermissions: () => Promise<void>
  getDocPreferences: () => Promise<DocumentPreferences>
  getVersions: () => Promise<void>
  initialData: Data
  initialState?: FormState
  preferencesKey?: string
  publishedDoc?: TypeWithID & TypeWithTimestamps & { _status?: string }
  setDocFieldPreferences: (
    field: string,
    fieldPreferences: Partial<InsideFieldsPreferences> & { [key: string]: unknown },
  ) => void
  setDocumentTitle: (title: string) => void
  slug?: string
  title: string
  unpublishedVersions?: PaginatedDocs<TypeWithVersion<any>>
  versions?: PaginatedDocs<TypeWithVersion<any>>
  versionsCount?: PaginatedDocs<TypeWithVersion<any>>
}
