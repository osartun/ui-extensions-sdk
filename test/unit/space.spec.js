const spaceMethods = [
  'getContentType',
  'getEntry',
  'getAsset',

  'getPublishedEntries',
  'getPublishedAssets',
  'getContentTypes',
  'getEntries',
  'getAssets',

  'createContentType',
  'createEntry',
  'createAsset',

  'updateContentType',
  'updateEntry',
  'updateAsset',

  'deleteContentType',
  'deleteEntry',
  'deleteAsset',

  'publishEntry',
  'publishAsset',
  'unpublishEntry',
  'unpublishAsset',

  'archiveEntry',
  'archiveAsset',
  'unarchiveEntry',
  'unarchiveAsset',

  'processAsset'
]

import createSpace from '../../lib/api/space'
import { describeChannelCallingMethod } from '../helpers'

describe('createSpace()', () => {
  describe('returned "space" object', () => {
    spaceMethods.forEach((spaceMethod) => {
      const args = ['foo', 42, {}]
      describeChannelCallingMethod({
        creator: createSpace,
        methodName: spaceMethod,
        channelMethod: 'callSpaceMethod',
        args: args,
        expectedCallArgs: [spaceMethod, args]
      })
    })
  })
})
