$(document).ready(function () {
    $('#form').on('submit', function (e) {
        e.preventDefault();

        let formData = new FormData(this);

        let jsonObject = Object.fromEntries(Array.from(formData));

        let jsonString = JSON.stringify(jsonObject, null, 5);

        let param = $.param(jsonObject)
        
        $('#output').text(jsonString);

        $.ajax({
            url: 'index.php',
            type: 'GET',
            datatype: 'text',
            data: param,
            success: function(response) {
                alert('Ответ от сервера: ' + response);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Ошибка: ' + textStatus);
            }
        });
    });
}); 