function addScript(codeURL) {
    var scriptElement = document.createElement('script');
    scriptElement.setAttribute('src', codeURL);
    scriptElement.setAttribute('crossorigin', "anonymous");
    document.body.appendChild(scriptElement);
}
addScript('https://ulid000.github.io/bvv-bookmarklet/dist/bookmarklet.js');
