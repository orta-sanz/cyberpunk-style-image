const path = require('path');

module.exports = {
    output: {
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.styl|css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'stylus-loader',
                            options: {
                                use: [require('nib')()],
                                import: ['~nib/index.styl']
                            }
                        }
                    ]
            }
        ]
    }
};
