define(['jquery', 'modernizr'], function ($, mod) {

    var versions = $('link[rel~="alternate"][media][href]');

    function redirToVersion(v, f) {
        var uri = $(v).attr('href');
        if (f) uri += '?force=1';
        window.location.replace(uri);
    }

    var oGetVars = {};
 
    if (window.location.search.length > 1) {
        for (var aItKey, nKeyId = 0, aCouples = window.location.search.substr(1).split("&"); nKeyId < aCouples.length; nKeyId++) {
            aItKey = aCouples[nKeyId].split("=");
            oGetVars[unescape(aItKey[0])] = aItKey.length > 1 ? unescape(aItKey[1]) : "";
        }
    }

    var nodetect = (oGetVars.force) || (document.location == document.referrer)

    if (!nodetect) {
        if (oGetVars.view) {
            redirToVersion($('#' + oGetVars.view, versions), true);
        } else {
            versions.each(function () {
                if (mod.mq($(this).attr('media'))) redirToVersion(this);
            });
        }
    }

});
