/*global jQuery*/
(function ($) {
    'use strict';
    $(document).ready(function () {
        $('#modal-form').modal('show');
        $('[data-toggle="tooltip"]').tooltip({
            'trigger' : 'click',
            'offset' : '5px 0'
        });
        setTimeout(function () {
            $('#form__progressbar').tooltip('show');
        }, 1500);
    });


}(jQuery));

