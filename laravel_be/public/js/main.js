var validation = function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
}

function checkValidation() {
    var formValidate = $('form.needs-validation');

    var attributes = {
        'passwd': 'Mật khẩu',
        'password': 'Mật khẩu',
        'passwd_confirm': 'Mật khẩu xác nhận',
        'email': 'Email',
        'number_phone': 'Số điện thoại',
        'name': 'Tên',
        'username': 'Tên người dùng',
        'address': 'Địa chỉ',
        'name_product': 'Tên sản phẩm',
        'price_product': 'Giá sản phẩm',
    };

    formValidate.each(function(index, ele) {
        var input = $(ele).find('input.form-control');
        input.on('input', function(e) {
            var _this = $(e.target);
            var _thisVal = _this.val();
            var maxLength = _this.attr('maxlength') ? _this.attr('maxlength') : 191;
            if (_thisVal.length > maxLength) {
                _this.next('.invalid-feedback').text('Không được nhập nhiều hơn ' + maxLength + ' ký tự')
                _this.removeClass('is-valid').addClass('is-invalid');
                _this.val(_this.val().slice(0, maxLength))
            } else {
                _this.removeClass('is-invalid').addClass('is-valid')
            }
            if (_thisVal == '') {
                var name = _this.attr('name');
                var attribute = attributes[name] ? attributes[name] : 'Trường';
                _this.next('.invalid-feedback').text(attribute + ' không được bỏ trống')
                _this.removeClass('is-valid').addClass('is-invalid');
            } else {
                _this.removeClass('is-invalid').addClass('is-valid')
            }
        })

        $('.login-form').submit(function() {
            $(this).find('[type="submit"]').prop('disabled', false).html('Đăng nhập')
        })
    })
}

function activeRoute() {
    var pgurl = window.location.href;
    $("ul.nav > li > a").each(function() {
        if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
            $(this).parent('li').addClass("active");
    })
}

function setMaxlength(ele) {
    if (ele.val().length >= ele.attr('maxlength'))
        ele.val(ele.val().slice(0, ele.attr('maxlength')));
}

function handleCloseModal() {
    $('.modal').on('hide.bs.modal', function() {
        var input = $(this).find('form[data-type="add"] input.form-control');
        var notEmpty = false;
        input.each(function(i, ele) {
            if ($(ele).val() != '') {
                return notEmpty = true;
            }
        })
        if (notEmpty) {
            let text = "Sau khi đóng dữ liệu nhập sẽ bị mất.";
            if (!confirm(text)) { return false };
        }
    });
}

$(document).ready(function() {
    activeRoute();
    validation();
    checkValidation();
    handleCloseModal();

    $('[maxlength][type="number"]').on('input', function() {
        setMaxlength($(this))
    })


    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        beforeSend: function() {
            $('.loading-submit').removeClass('d-none');
        },
        success: function() {
            $('.loading-submit').addClass('d-none');
        },
    });
})
