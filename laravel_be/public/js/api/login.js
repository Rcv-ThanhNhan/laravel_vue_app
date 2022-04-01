function login() {
    $('.login-form').submit(function(e) {
        e.preventDefault();

        var url = $(this).attr('action');

        var formData = new FormData(this);
        var username = formData.get('username');
        var passwd = formData.get('password');
        var loading = $('.loading-submit');

        // if (username != '' && passwd != '') {
        $.ajax({
                url: url,
                method: "POST",
                data: {
                    email: username,
                    password: passwd
                }
            })
            .done((data) => {
                if (data) {
                    if (data.error) {
                        $('.invalid-feedback-email').toggle().text(data.error);
                    } else {
                        if (data.data.token != '') {
                            window.location = '/user-management';
                        }
                        // localStorage.setItem('user', JSON.stringify(data))
                    }
                }
            })
            .fail((error) => {
                return error.responseJSON;
            })
            // }

    })
}

$(document).ready(function() {
    // login()

    $('.login-form').submit(function() {
        $(this).find('[type="submit"]').prop('disabled', true)
    })
})