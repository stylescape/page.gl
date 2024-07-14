// webpack.dev.js


// ============================================================================
// Imports
// ============================================================================

import webpack from "webpack";
import paths from "./webpack.paths.js"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// fs = require('fs');
import fs from "fs"
// import glob from "glob"
import { glob, globSync, globStream, globStreamSync, Glob } from 'glob'

// const glob = require('glob');


// ============================================================================
// Helpers
// ============================================================================

let htmlPageNames = [];
let page_dir = './src/jinja'
let page_ext = '.html.jinja'

// const pages = fs.readdirSync(page_dir)
const pages = await glob('**/!(_*).html.jinja');

console.log(pages);

pages.forEach(
    page => {
        if (page.endsWith(page_ext)) {
            htmlPageNames.push(page.split(page_ext)[0])
        }
    }
)

// console.log(htmlPageNames);

let multipleHtmlPlugins = htmlPageNames.map(
    name => {
        return new HtmlWebpackPlugin(
            {
                template: `${page_dir}/${name}${page_ext}`, // relative path to the HTML files
                filename: `${name}${page_ext}`, // output HTML files
                chunks: [`${name}`] // respective JS files
            }
        )
    }
);



// ============================================================================
// Constants
// ============================================================================

// Config | Development
export const configDevelopment = {

    // Configuration | Mode
    // ========================================================================
    // Set the mode to development or production
    mode: "development",


    // Development Server Configuration
    // ========================================================================
    // Spin up a server for quick development

    // devServer: {
    //     historyApiFallback: true, // Fallback to index.html for Single Page Applications
    //     watchFiles: [ // Watch for changes in these directories
    //         paths.src + "/*",
    //         paths.public + "/*",
    //     ],
    //     port: 4040,
    //     open: true, // Open the browser after server has been started
    //     compress: true, // Enable gzip compression
    //     hot: true, // Enable Hot Module Replacement (HMR)
    //     static: {
    //         directory: paths.public // Serve files from this directory
    //         // directory: paths.public + "/"
    //     },
    // },


    // Configuration | Module Rules
    // ========================================================================
    // Module rules for handling different file types.
    // Determine how modules within the project are treated.
    // module: {
    //     rules: [
    //         {
    //             test: /\.(scss|css)$/,
    //             use: [
    //                 // Injects styles into the DOM for hot reloading
    //                 "style-loader",
    //             ]
    //         },
    //     ],
    // },


    // Plugins
    // ========================================================================
    plugins: [
        // Enable hot reloading
        // Only update what has changed on hot reload
        new webpack.HotModuleReplacementPlugin(),

        // Serve test page
        new HtmlWebpackPlugin({
            template: "./src/jinja/index.html.jinja",
            // template: paths.src + "/index.html", // Specify the HTML template to use
            // title: "Development Mode", // Optional: Specify a title for the HTML document
            // favicon: paths.public + "/favicon.ico" // Optional: Specify a favicon
            templateParameters: {
                username: 'Joe'
            }
        }),
    ].concat(multipleHtmlPlugins),

    // plugins: [
    //     // Enable hot reloading
    //     // Only update what has changed on hot reload
    //     new webpack.HotModuleReplacementPlugin(),

    //     // Serve test page
    //     new HtmlWebpackPlugin({
    //         // baseUrl: './',
    //         filename: "index.html",
    //         template: "./src/html/index.html",
    //         chunks: ["index"],
    //         // template: paths.src + "/index.html", // Specify the HTML template to use
    //         title: "Development Mode", // Optional: Specify a title for the HTML document
    //         // favicon: paths.public + "/favicon.ico" // Optional: Specify a favicon
    //     }),

    //     // new MiniCssExtractPlugin(),

    // ].concat(multipleHtmlPlugins),

    // Configuration | Performance
    // ========================================================================
    // Performance settings to control webpack"s hints

    // For development, you generally want to minimize build time and
    // maximize speed. Performance hints are usually not as critical in
    // development and can be turned off to reduce noise.

    performance: {
        hints: false
    },


    // Configuration | Devtool
    // ========================================================================
    // Control how source maps are generated.

    // For development, you want source maps that offer a good balance between
    // rebuild speed and quality. The eval-source-map is often recommended for
    // development:

    // Enable high-quality source maps for better debugging experience.
    // devtool: "eval-source-map",

    // devtool: "inline-source-map",

    devtool: "source-map",

};


// ============================================================================
// Exports
// ============================================================================

export default configDevelopment
