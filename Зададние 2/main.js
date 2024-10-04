$(document).ready(function () {
    $('#form').on('submit', function (e) {
        e.preventDefault();

            const formData = new FormData(this);

            const jsonObject = Object.fromEntries(Array.from(formData));

            const jsonString = JSON.stringify(jsonObject, null, 5);
            
            $('#output').text(jsonString);

            $.ajax({
                url: 'index.php',
                type: 'GET',
                data: $.param(jsonObject),
                success: function(response) {
                    alert('Ответ от сервера: ' + response);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert('Ошибка: ' + textStatus);
                }
            });

    });
}); 