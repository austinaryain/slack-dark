document.addEventListener('DOMContentLoaded', function() {
    $.ajax({
      url: 'slack-dark.css',
      success: function(css) {
        $("<style></style>").appendTo('head').html(css);
      }
    });
});