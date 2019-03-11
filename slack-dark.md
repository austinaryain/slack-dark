# Append the following to app.asar.unpacked/src/static/ssb-interop.js:

```js
document.addEventListener('DOMContentLoaded', function() {
 $.ajax({
   url: 'https://raw.githubusercontent.com/laCour/slack-night-mode/master/css/raw/black.css',
   success: function(css) {
     $("<style></style>").appendTo('head').html(css);
   }
 });
});
On Arch, this is in /usr/lib/slack/resources.
```

# 🛑 READ FIRST: This will request the compiled CSS file from this repository. You are strongly discouraged from using a remote CSS file that is not under your control. It's recommended that you create your own copy. An XSS attack could put your Slack client at risk.