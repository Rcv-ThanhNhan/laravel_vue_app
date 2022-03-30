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
                _this.next('.invalid-feedback').text('Vui lòng nhập vào trường này')
                _this.removeClass('is-valid').addClass('is-invalid');
            } else {
                _this.removeClass('is-invalid').addClass('is-valid')
            }
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
$(document).ready(function() {
    activeRoute();
    validation();
    checkValidation()

    $('[maxlength][type="number"]').on('input', function() {
        setMaxlength($(this))
    })
})