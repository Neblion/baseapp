console.log('layout toto');

$.ajaxSetup({
    statusCode: {
        400: function () {
            toastr.error('Erreur 400 : Requête incorrecte ou mal formulée !');
        },
        401: function () {
            $(location).attr('href', $('#NblFeed-urls').attr('data-url-login'));
        },
        403: function () {
            toastr.error('Erreur 403 : Vous ne disposez pas des droits suffisants !');
        },
        500: function () {
            toastr.error('Erreur 500 !');
        },
    }
});

toastr.options = {
  "debug": false,
  "positionClass": "toast-top-right",
  "onclick": null,
  "fadeIn": 300,
  "fadeOut": 1000,
  "timeOut": 5000,
  "extendedTimeOut": 1000
};

$('body').on('click', 'a.modal-link', function() {
   var url = $(this).attr('href');
    
   $.ajax({
        url: url,
        success: function(data) {
            $("#NblFeedModal-content").html(data);
            $('#NblFeedModal').modal('toggle');
        }
    });

    return false; 
});

$('#channels-list').on('click', 'a.feed-new', function() {
   var url = $('#NblFeed-urls').attr('data-url-feednew');
   var channel = $(this).attr('data-channel');
   url = url.replace('default-channel', channel);
   
    $.ajax({
        url: url,
        success: function (data) {
            $('#feedContent').html(data);
        }
    });
});


