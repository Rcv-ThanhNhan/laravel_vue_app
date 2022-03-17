function login() {
    $('.login-form').submit(function(e) {
        e.preventDefault();

        var url = $(this).attr('action');

        var formData = new FormData(this);
        var username = formData.get('username');
        var passwd = formData.get('password');
        var loading = $('.loading-submit');
        // console.log(username, passwd);
        // if (username != '' && passwd != '') {
        $.ajax({
                url: url,
                method: "POST",
                data: {
                    email: username,
                    password: passwd
                },
                beforeSend: function() {
                    loading.toggleClass('d-none');
                }
            })
            .done((data) => {
                if (data) {
                    loading.toggleClass('d-none');
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
                loading.toggleClass('d-none');
                var err = error.responseJSON.errors;
                if (err) {
                    if (err.email) {
                        $('.invalid-feedback-email').text(err.email);
                    }
                    if (err.password) {
                        $('.invalid-feedback-password').text(err.password);
                    }
                }
            })
            // }

    })
}
$(document).ready(function() {
    login()


})