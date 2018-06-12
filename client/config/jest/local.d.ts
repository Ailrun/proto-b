declare module 'jest-emotion' {
  import * as emotion from 'emotion';

  export function createSerializer(emotion: typeof emotion): jest.SnapshotSerializerPlugin;
}
