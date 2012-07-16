(function ($) {

    // This global function will take a name and a data: uri, and create an alias
    $.iconise = function (name, data) {
        $.iconise.data[name] = data;
    }

    // In-memory storage of the alias-data mapping
    $.iconise.data = {};

    // Calling this on an element will find all images within the element, and resolve
    // iconise:<alias> URIs to data: URIs
    $.fn.iconise = function () {
        $('img', this).each(function () {
            var src = $(this).attr(src);
            if (src.indexOf('iconise:') == 0) {
                var icon = src.substring(8);
                if ($.iconise.data[icon] !== undefined) {
                    $(this).attr('src', $.iconise.data[icon]);
                }
            }
        })
    };

})(jQuery);