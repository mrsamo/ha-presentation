$(function () {
    var $domSlide = $('#dom-slide'),
        $domSlideHtml = $domSlide.find('.b-html-code');

    $domSlide.attrchange({
        trackValues: true,
        callback: function (e) {
            if (e.attributeName == 'class' && e.newValue == 'slide active') {

            }
        }
    });
});