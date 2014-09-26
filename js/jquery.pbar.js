(function ($) {

    $.fn.pBar = function (params) {

        var params = $.extend({
            min: 0,
            max: 60,
            val: 50,
            tooltip: "Restan % días"
        }, params);

        var objs = $(this);
        var o = null;
        var wdt = 0;

        $.each(objs, function () {
            o = $(this);
            min = (typeof (o.data("min")) != "undefined") ? o.data("min") : min;
            max = (typeof (o.data("max")) != "undefined") ? o.data("max") : max;
            val = (typeof (o.data("val")) != "undefined") ? o.data("val") : val;
            var gray = $("<span />");
            var label = $("<label />");
            wdt = (((val * 100) / max));
            gray.css({ width: wdt + "%" });
            gray.addClass((wdt == 100) ? "empty" : (wdt >= 90 && wdt < 100) ? "full" : (wdt >= 70 && wdt < 90) ? "warning" : "ok");
            label.text(max - val);
            if (params.tooltip != null) label.attr("title", params.tooltip.replace("%", max - val));
            gray.appendTo(o);
            label.appendTo(o);
        });

        return objs;
    }

}(jQuery));