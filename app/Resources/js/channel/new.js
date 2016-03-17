$('#modal-form').on('submit', function() {
    $("#modal-form-submit").trigger('click');

    return false;
});

$('#modal-form-submit').on('click', function() {
    var form = $("#modal-form");

    $.ajax({
        url: form.attr('action'),
        type: form.attr('method'),
        data: form.serialize(),
        success: function(response) {
            toastr.success('Channel was created with success.');

            $('#channels-list').prepend(response);
            /*
            // Reload treatment list
            $.ajax({
                url: $('#treatments-list').attr('data-url'),
                success: function(data){
                    $("#treatments-list").html(data);
                }
            });
            */
           
            $('#NblFeedModal').modal('hide');
        },
        error: function(response) {
            if (response.status == 412) {
                $("#NblFeedModal-content").html(response.responseText);
            }
        }
    });

    return false;
});