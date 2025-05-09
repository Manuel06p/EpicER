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
