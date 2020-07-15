import $ from 'jquery';

$(document).ready(function($) {
    // fix of icons in dark mode
    if ($('link[href*=".dark.css"]').attr('href')) {
        $('.euiImage__img').css("filter","invert(1)");
    }
    // add timeout hack to hide unnecessaary elements
    function hideMenuElements () {
        $('.euiHeaderLogo').removeAttr("href");
    // if shere is no security-configuration menu item on the page - hide some menu elements
        if (!$('a[data-name*="Security"]').length) {
            $('#navDrawerMenu > ul:nth-child(4) > li:nth-child(4)').hide();
            $('#navDrawerMenu > ul:nth-child(4) > li:nth-child(5)').hide();
            $('#navDrawerMenu > ul:nth-child(4) > li:nth-child(6)').hide();
            $('#navDrawerMenu > ul:nth-child(4) > li:nth-child(7)').hide();
            $('#navDrawerMenu > ul:nth-child(4) > li:nth-child(8)').hide();
        };
    }
    setTimeout (hideMenuElements, 100);
});
