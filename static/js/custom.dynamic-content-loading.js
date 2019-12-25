/**
 * THIS IS A CUSTOM FUNCTION
 * Naively replaces given content with the content of the loaded html template.
 * E.g.
 * - value of search parameter `page-content` is `build-001`
 * - will result in the loading of `./build-001.html`
 */
$(function () {
  var searchParams = new URLSearchParams(window.location.search);
  var parameter = 'page-content';
  var htmlTagId = '#include-content-here';
  var fallbackTemplate = './master.html';
  if (searchParams.has(parameter) && searchParams.get(parameter)) {
    var parameterValue = searchParams.get(parameter);
    var templatePath = './' + parameterValue + '.html';
    $(htmlTagId).load(templatePath, (res, status, xhr) => {
      if (status === 'success') {
        console.log(status + ": page-content '" + parameterValue + "' loaded!");
      }
      else if (status === 'error') {
        console.log("Loading 404 page");
        $(htmlTagId).load('./404.html');
      };
    });
  } else {
    // Load Fallback
    console.log("Loading fallback page (" + fallbackTemplate + ")");
    $(htmlTagId).load(fallbackTemplate);
  }
});