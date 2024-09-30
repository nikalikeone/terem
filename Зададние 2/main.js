        $(document).ready(function () {
            $('#form').on('submit', function (e) {
                e.preventDefault();
                const name = $('#name').val();
                const surname = $('#surname').val();

                if (name && surname) {
                    const formData = new FormData(this);

                    const jsonObject = {};
                    formData.forEach((value, key) => {
                        jsonObject[key] = value;
                    });

                    const jsonString = JSON.stringify(jsonObject, null, 5);
                    
                    $('#output').text(jsonString);

                    $.ajax({
                        url: 'index.php',
                        type: 'GET',
                        data: jsonObject,
                        success: function(response) {
                            alert('Ответ от сервера: ' + response);
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            alert('Ошибка: ' + textStatus);
                        }
                    });
                } else {
                    alert('Имя и фамилия не заполнены')
                }
            });
        });