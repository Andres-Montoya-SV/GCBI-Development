export default {
    require: ['ts-node/register'],
    extension: ['ts'],
    spec: 'test/**/*.test.ts',
    loader: 'ts-node/esm',
};
