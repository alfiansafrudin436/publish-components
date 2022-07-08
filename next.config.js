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
        test: /\.(ts)x?$/, // Just `tsx?` file only
        use: [
          // options.defaultLoaders.babel, I don't think it's necessary to have this loader too
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
              onlyCompileBundledFiles: true,
            },
          },
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
