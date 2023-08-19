const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

/** @type {import('webpack').Configuration} */
module.exports = {
    ...defaultConfig,
    resolve: {
        ...defaultConfig.resolve,
        alias: {
            ...defaultConfig.resolve.alias,
            '~/components': path.resolve(__dirname, 'blocks', 'components'),
            '~/examples': path.resolve(__dirname, 'blocks', 'examples'),
            '~/hooks': path.resolve(__dirname, 'blocks', 'hooks'),
            '~/reusable-blocks': path.resolve(__dirname, 'blocks', 'blocks-blocks')
        },
        extensions: [...defaultConfig.resolve.extensions, '.png', '.jpg', '.jpeg', '.svg']
    }
};