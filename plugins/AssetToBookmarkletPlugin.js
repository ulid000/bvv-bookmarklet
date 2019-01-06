class AssetToBookmarkletPlugin {

apply(compiler) {
//  compiler.plugin('emit', function (compilation, callback) {
  compiler.hooks.emit.tapAsync('AssetToBookmarkletPlugin', (compilation, callback) => {
    var asset;

// Rework each asset.
    for (var assetName in compilation.assets) {
      asset = compilation.assets[assetName];
      compilation.assets[assetName] = {
        source: function () {
          // Encode and wrap the original source to make it bookmark-ready.
          return 'javascript:' + encodeURIComponent('(function(){' + asset.source() + '})()');
        },
        size: asset.size
      }
    }

    callback();
  });
}
}

module.exports = AssetToBookmarkletPlugin;
