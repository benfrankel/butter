{{ with .Site.Params.fonts.import }}
WebFontConfig = {
    google: {
        families: [
            {{ range . }}
            "{{ . }}",
            {{ end }}
        ]
    },
    timeout: 1500,
    events: false,
};

(function(d) {
    var wf = d.createElement('script'), s = d.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.async = true;
    s.parentNode.insertBefore(wf, s);
})(document);
{{ end }}
