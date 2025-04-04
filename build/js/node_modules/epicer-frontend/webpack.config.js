let config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: [require('path').resolve(__dirname, "kotlin\\epicer-frontend.js")]
};
config.output = {
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "main.bundle.js"
            : "main.bundle-[name].js";
    },
    library: "frontend",
    libraryTarget: "umd",
    globalObject: "globalThis"
};
// dev server
config.devServer = {
  "open": true,
  "static": [
    "kotlin",
    "..\\..\\..\\..\\frontend\\build\\processedResources\\js\\main"
  ],
  "client": {
    "overlay": {
      "errors": true,
      "warnings": false
    }
  }
};

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-web-helpers/dist/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);

// bootstrap.js
config.module.rules.push({test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, type: 'asset'});
config.module.rules.push({test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, type: 'asset'});
config.module.rules.push({test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, type: 'asset/resource'});


// css.js
config.module.rules.push({ test: /\.css$/, use: ["style-loader", { loader: "css-loader", options: {sourceMap: false} } ] });



// file.js
config.module.rules.push(
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource'
    }
);


// handlebars.js
config.module.rules.push(
    {
        test: /\.hbs$/i,
        loader: 'handlebars-loader'
    }
);


// proxy.js
if (config.devServer) {
    config.devServer.proxy = [
        {
            context: ["/kv/*", "/kvsse/*"],
            target: 'http://localhost:8080'
        },
        {
            context: ["/kvws/*"],
            target: 'http://localhost:8080',
            ws: true
        }
    ]
}


// webpack.js
config.resolve.modules.push("../../processedResources/js/main");
config.resolve.conditionNames = ['import', 'require', 'default'];
config.resolve.preferRelative = true;

if (config.devServer) {
    config.devServer.hot = true;
    config.devServer.open = false;
    config.devServer.port = 3000;
    config.devServer.historyApiFallback = true;
    config.devServer.compress = false; // workaround for SSE
    config.devtool = 'eval-cheap-source-map';
} else {
    config.devtool = undefined;
}

// disable bundle size warning
config.performance = {
    assetFilter: function (assetFilename) {
      return !assetFilename.endsWith('.js');
    },
};



module.exports = config
