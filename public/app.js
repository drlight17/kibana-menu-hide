import $ from 'jquery';

function JS_wait() {
    if (!$('a[data-name*="Account"]').length)
    { 
        window.setTimeout(JS_wait, 50); 
    }
    else 
    { 
        JS_ready(); 
    }
}

function JS_ready() {
// fix of icons in dark mode
	if ($('link[href*=".dark.css"]').attr('href')) {
    	    $('.euiImage__img').css("filter","invert(1)");
	}
        $('.euiHeaderLogo').removeAttr("href");
    // if shere is no security-configuration menu item on the page - hide some menu elements
        if (!$('a[data-name*="Security"]').length) {
            $('#navDrawerMenu > ul:nth-child(4) > li:nth-child(4)').hide();
            $('#navDrawerMenu > ul:nth-child(4) > li:nth-child(5)').hide();
            $('#navDrawerMenu > ul:nth-child(4) > li:nth-child(6)').hide();
            $('#navDrawerMenu > ul:nth-child(4) > li:nth-child(7)').hide();
            $('#navDrawerMenu > ul:nth-child(4) > li:nth-child(8)').hide();
        };
};

$(document).ready(JS_wait); 
