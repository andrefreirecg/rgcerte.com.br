import $ from 'jquery';

$('.ms-accordion').on('click', function () {
    $(this).find('.ms-accordion-body').toggleClass('actual');
    let parenteAccordion = $(this).parent('.ContainerBlocks');
    let allAccordionsInParent = parenteAccordion.find('.ms-accordion');
    allAccordionsInParent.map(function () {
        $(this).find('.ms-accordion-body:not(.actual)').removeClass('active');
    });
    $(this).find('.ms-accordion-body').toggleClass('active');
    $(this).find('.ms-accordion-body').toggleClass('actual');

});
