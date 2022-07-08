const webpack = require('webpack')
const { parsed: localEnv } = require('dotenv').config()

/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === true,
})

const moduleExports = {
  reactStrictMode: true,
  webpack: (config) => {
    const conf = config
    conf.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    conf.module.rules.push(
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          limit: 1024,
          name: '[name].[ext]',
          publicPath: 'dist/assets/',
          outputPath: 'dist/assets/'
        }
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // 3. Inject styles into DOM
            "css-loader", // 2. Turns css into commonjs
            "sass-loader", // 1. Turns sass into css
        ],
    },
    )
    return conf
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = withBundleAnalyzer(moduleExports)
