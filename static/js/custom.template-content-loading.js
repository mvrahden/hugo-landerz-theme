/**
 * THIS IS A CUSTOM FUNCTION
 * Naively loads given `data-include` value as html template.
 * E.g.
 * - value of `data-include` is `footer`
 * - will result in the loading of `./views/footer.html`
 */
$(function () {
  var includes = $('[data-include]');
  jQuery.each(includes, function () {
    var file = './views/' + $(this).data('include') + '.html';
    $(this).load(file);
  });
});