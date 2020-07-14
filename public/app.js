import $ from 'jquery';

$(document).ready(function($) {
    $('.homWelcome').hide();
    // if shere is no security-configuration menu item on the page - hide some menu elements
//    if (!$('a[href*="/security-configuration#/"]').attr('href')) {
    if (!$('a[data-name*="Security"]').length) {
        $('#navDrawerMenu > ul:nth-child(4) > li:nth-child(4)').hide();
        $('#navDrawerMenu > ul:nth-child(4) > li:nth-child(5)').hide();
        $('#navDrawerMenu > ul:nth-child(4) > li:nth-child(6)').hide();
        $('#navDrawerMenu > ul:nth-child(4) > li:nth-child(7)').hide();
        $('#navDrawerMenu > ul:nth-child(4) > li:nth-child(8)').hide();
        $('#navDrawerMenu > ul:nth-child(4) > li:nth-child(9)').hide();
    };
});
