class AssetToBookmarkletPlugin {

  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('AssetToBookmarkletPlugin', (compilation, callback) => {
      var asset;
      var options = this.options;

      compilation.chunks.forEach(function (chunk) {
        // console.log(chunk.name);
        if (options.chunks.indexOf(chunk.name) >= 0) {

          chunk.files.forEach(filename => {
            // Get the asset source for each file generated by the chunk:
            var asset = compilation.assets[filename];
            compilation.assets[filename] = {
              source: function () {
                // Encode and wrap the original source to make it bookmark-ready.
                return 'javascript:' + encodeURIComponent('(function(){' + asset.source() + '})()');
              },
              size: asset.size
            }
          });
        }
      });

      callback();
    });
  }
}

module.exports = AssetToBookmarkletPlugin;
