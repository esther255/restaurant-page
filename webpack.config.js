const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Exporting a function lets one file serve both modes:
//   npm start      -> webpack serve --mode development
//   npm run build  -> webpack --mode production
module.exports = (env, argv) => {
    const isProduction = argv.mode === "production";

    return {
        mode: isProduction ? "production" : "development",

        entry: "./src/index.js",

        // Readable errors in the browser while developing.
        // No source map in production (smaller, nothing extra to publish).
        devtool: isProduction ? false : "eval-source-map",

        output: {
            filename: "main.js",
            path: path.resolve(__dirname, "dist"),
            clean: true
        },

        module: {
            rules: [
                {
                    // style-loader puts the CSS into the page, css-loader reads it.
                    // Loaders run from right to left: css-loader first.
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"]
                },
                {
                    // package.json says "type": "commonjs", which makes webpack read
                    // .js files as CommonJS. This lets src/ use import/export (ES modules).
                    test: /\.js$/,
                    exclude: /node_modules/,
                    type: "javascript/auto"
                },
                {
                    // Local images: `import logo from "./logo.png"` gives back the
                    // final file URL and webpack copies the file into dist/images.
                    test: /\.(png|jpe?g|gif|svg|webp)$/i,
                    type: "asset/resource",
                    generator: {
                        filename: "images/[hash][ext]"
                    }
                }
                // No rule is needed for .json files: webpack 5 imports them
                // natively (`import menu from "./data/menu.json"`).
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/template.html"
            })
        ],

        devServer: {
            static: "./dist",
            port: 8081,
            open: true
        }
    };
};
