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

function activeRoute() {
    var pgurl = window.location.href;
    $("ul.nav > li > a").each(function() {
        if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
            $(this).parent('li').addClass("active");
    })
}

$(document).ready(function() {
    activeRoute();
    validation()
})