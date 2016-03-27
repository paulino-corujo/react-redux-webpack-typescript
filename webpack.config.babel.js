import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

const isProduction = process.env.NODE_ENV === 'production';
const webpackConfig = {
    debug: true,
    devtool: 'source-map',
    entry: {
        main: './src/index.tsx',
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'redux'
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ template: './index.html' }),
        new webpack.optimize.CommonsChunkPlugin('vendor',
            isProduction ? 'assets/js/[name]-[chunkhash].js' : 'assets/js/[name].js', Infinity),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        preLoaders: [
            { test: /\.tsx?$/, loader: "tslint" }
        ],
        loaders: [
            { test: /\.tsx?$/, loader: 'babel!ts', include: path.join(__dirname, 'src') }
        ]
    },
    resolve: {
        root: [
            path.resolve('./src'),
            path.resolve(__dirname)
        ],
        extensions: ['', '.jsx', '.js', '.tsx', '.ts']
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: "/",
        filename: isProduction ? 'assets/js/[name]-[chunkhash].js' : 'assets/js/[name].js'
    },
    tslint: {
        emitErrors: false,
        failOnHint: true
    }

};

export default webpackConfig;
