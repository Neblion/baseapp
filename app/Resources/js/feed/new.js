$('#form-search-feed').on('submit', function() {
    $('#search-feed-submit').trigger('click');

    return false;
});

$('#search-feed-submit').on('click', function() {
    var form = $('#form-search-feed');
    
    $.ajax({
        url: form.attr('action'),
        data: form.serialize(),
        success: function (data) {
            $('#search-feed-results').html(data)
                    .removeClass('hidden');
        }
    });
});

$('#search-feed-results').on('click', 'a.feed-check', function() {
    var link = $(this).attr('data-id');
    
    $.ajax({
        url: $(this).attr('href'),
        success: function (data) {
            $('#feeds-list-' + link).html(data)
                    .removeClass('hidden');
        }
    });
    
    return false;
});


