import $ from 'jquery';

$(document).ready(function($) {
    $('.homWelcome').hide();
    // 2 methods below to remove href from kibana logo is not working now so commented out
//    $('a[href*="/app/kibana#/home"]').removeAttr("href");
//    $('.euiHeaderLogo').removeAttr("href");
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
