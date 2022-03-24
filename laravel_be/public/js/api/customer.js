var urlApi = 'http://127.0.0.1:8000/api/customer';

function getCustomers(url = urlApi, data = {}) {

    var render = $('#lstCustomers');

    $.ajax({
            url: url,
            method: "get",
            data: data,
            beforeSend: function() {
                render.html(`
                <div class="loading-table">
                  <div class="spinner-border text-dark" role="status"></div>
                </div>`)
            }
        })
        .done((data) => {
            if (data) {
                render.html(data.data);
                navigation(data.meta);
            }
        })
        .fail((error) => {
            console.log(error.responseJSON);
        })

}

function modalAddEditCustomer(type, id) {
    var modal = $('#customerEditAddModal');

    var title = '';
    var action = '';
    var url = '';
    var method = '';


    if (type == 'add') {
        resetForm(modal.find('form'))
        title = 'Thêm khách hàng';
        action = '<div class="spinner-border text-light d-none loading-submit" role="status" style="width: 1rem; height: 1rem"></div> Thêm';
        url = urlApi;
        method = 'POST';

        modal.find('form [name="email"]').prop('disabled', false);
    }

    if (type == 'edit') {
        title = 'Chỉnh sửa khách hàng';
        action = '<div class="spinner-border text-light d-none loading-submit" role="status" style="width: 1rem; height: 1rem"></div> Lưu';
        url = urlApi + '/' + id;
        method = 'PATCH'

        modal.find('form [name="email"]').prop('disabled', true);

        let customerData = getCustomer(id);
        customerData.then(function(data) {
            let customer = data.data;
            let name = customer.customer_name;
            let email = customer.email;
            let address = customer.address;
            let number_phone = customer.tel_num;
            let is_active = customer.is_active;

            modal.find('form [name="name"]').val(name);
            modal.find('form [name="email"]').val(email);
            modal.find('form [name="address"]').val(address);
            modal.find('form [name="number_phone"]').val(number_phone);
            modal.find('form [name="status"]').prop('checked', is_active);

        })
    }

    var form = modal.find('form');
    form.attr('action', url);
    form.attr('method', method);
    form.attr('data-type', type);
    modal.find('.modal-title').text(title);
    modal.find('.btn-submit').html(action);

}

function navigation(links) {
    var render = $('.pagination-container');
    var pageItem = '';
    var paginate = '';
    // let maxItem = 7;

    let pageState = links;

    $(pageState.links).each((i, v) => {
        if ((i > pageState.current_page - 3 && i < pageState.current_page + 3 || pageState.current_page === i) && v.url != null) {
            pageItem += ` <li class="page-item ">
                            <button class="page-link" data-link="${v.url}" > ${v.label}</button>
                        </li>`;
        }
    })

    // render nút về trang đầu trang cuối
    var renderPrev = "";
    var renderNext = "";
    if (pageState.last_page > 3) {
        if (pageState.current_page !== 1 && pageState.current_page > 3) {
            renderPrev =
                `<li class="page-item"><button class="page-link" data-link="${links.links[0].url}" > Trang đầu</button></li>`

        }
        if (pageState.current_page !== pageState.last_page && pageState.current_page + 2 < pageState.last_page) {
            renderNext =
                ` <li class="page-item"><button class="page-link"  data-link="${links.links[links.last_page].url}" > Trang cuối</button></li>`
        }
    }

    if (pageState.last_page > 1) {
        paginate += ` <div class="paginate-style">
                <nav aria-label="Page navigation example">
                    <span>Hiện thị ${pageState.from } đên ${pageState.to } trên ${pageState.total} người dùng</span>
                    <ul class="pagination justify-content-end">
                        ${renderPrev}
                        ${pageItem}
                        ${renderNext}
                    </ul>
                </nav>
            </div>`
    } else {
        paginate += `<div class="paginate-style1"></div>`
    }



    render.html(paginate);
}

function resetForm(form) {
    form.removeClass('was-validated')
    $(form).find("input").each(function() {
        $(this).val("");
    });
    $(form).find('select').prop("selectedIndex", 0);
}

function getCustomer(id) {

    var url = urlApi + '/' + id;

    var customer = $.ajax({
            url: url,
            method: "get",
        })
        .done((data) => {
            if (data) {
                return data.data;
            }
        })
        .fail((error) => {
            return error.responseJSON;
        })
    return customer;
}

function blockCustomer(id) {
    getCustomer(id).then(function(data) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger mr-2'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Bạn có muốn ' + (data.data.is_active ? 'khóa' : 'mở khóa') + ' tài khoản ' + data.data.name,
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Hủy',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                var url = urlApi + '/update-status';

                $.ajax({
                        url: url,
                        method: "post",
                        data: {
                            id: id
                        }
                    })
                    .done((data) => {
                        if (data) {
                            Swal.fire({
                                icon: 'success',
                                title: data.message,
                                showConfirmButton: false,
                                timer: 1500
                            });
                            getCustomers();
                        }
                    })
                    .fail((error) => {
                        return console.log(error.responseJSON);
                    })
            }
        })
    })
}

function deleteCustomer(id) {
    getCustomer(id).then(function(data) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger mr-2'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Bạn có muốn xoá tài khoản ' + data.data.name,
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Hủy',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                var url = urlApi + '/' + id;

                $.ajax({
                        url: url,
                        method: "delete",
                    })
                    .done((data) => {
                        if (data) {
                            Swal.fire({
                                icon: 'success',
                                title: data.message,
                                showConfirmButton: false,
                                timer: 1500
                            });
                            getCustomers();
                        }
                    })
                    .fail((error) => {
                        return console.log(error.responseJSON);
                    })
            }
        })
    })
}

function addEditCustomer(form) {
    form.submit(function(e) {
        e.preventDefault();

        var url = $(this).attr('action');
        var method = $(this).attr('method');

        var frmData = new FormData(this);
        var loading = $('.loading-submit');

        var data = {
            name: frmData.get('name'),
            email: frmData.get('email'),
            number_phone: frmData.get('number_phone'),
            address: frmData.get('address'),
            active: frmData.get('status'),
        }

        $.ajax({
                url: url,
                method: method,
                data: data,
                beforeSend: function() {
                    loading.toggleClass('d-none');
                }
            })
            .done(function(data) {
                loading.toggleClass('d-none');
                if (data) {
                    modal.modal('toggle');
                    resetForm(form);
                    Swal.fire({
                        icon: 'success',
                        title: data.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    getCustomers();
                }
                if (data.error) {
                    $('.invalid-feedback-email').toggleClass('d-block').text(data.error);
                }
            })
            .fail(function(error) {
                var err = error.responseJSON.errors;
                loading.toggleClass('d-none');
                console.log(error.responseJSON, error);
                if (err) {
                    if (err.name) {
                        $('.invalid-feedback-name').text(err.name);
                    }
                    if (err.email) {
                        $('[name="email"]')[0].setCustomValidity('Invalid field.');
                        $('.invalid-feedback-email').text(err.email);
                    }
                    if (err.number_phone) {
                        $('[name="number_phone"]')[0].setCustomValidity('Invalid field.');
                        $('.invalid-feedback-tel').text(err.number_phone);
                    }
                    if (err.address) {
                        $('.invalid-feedback-address').text(err.address);
                    }
                }
            })
    })

    return;
}

function toggleEditCustomer(e) {
    var row = $(e.target).closest('tr');

    var input = row.find('input');
    var text = row.find('span');

    input.each(function(i) {
        $(this).toggleClass('d-none');
        if ($(this).val() == '') { $(this).val($(text[i]).text()) };
    })

    row.find('.btn-edit').toggleClass('d-none');
    row.find('.edit-customer').toggleClass('d-none');

    text.each(function() {
        $(this).toggleClass('d-none');
    })

    $('.valid-field').each(function() {
        $(this).removeClass('show')
    })
}

function saveCustomer(e, id) {
    var row = $(e.target).closest('tr');

    var input = row.find('input');

    const data = {
        name: $(input[0]).val(),
        email: $(input[1]).val(),
        address: $(input[2]).val(),
        number_phone: $(input[3]).val(),
        _method: 'PATCH'
    }

    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $.ajax({
            url: urlApi + '/' + id,
            method: 'post',
            data: data
        })
        .done(function(data) {
            if (data) {
                Swal.fire({
                    icon: 'success',
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                getCustomers();
            }
        })
        .fail(function(error) {
            var err = error.responseJSON.errors;
            if (err) {
                if (err.name) {
                    row.find('.valid-field-name').addClass('show').text(err.name);
                } else {
                    row.find('.valid-field-name').removeClass('show')
                }

                if (err.email) {
                    row.find('.valid-field-email').addClass('show').text(err.email);
                } else {
                    row.find('.valid-field-email').removeClass('show')
                }

                if (err.address) {
                    row.find('.valid-field-address').addClass('show').text(err.address);
                } else {
                    row.find('.valid-field-address').removeClass('show')
                }

                if (err.number_phone) {
                    row.find('.valid-field-number_phone').addClass('show').text(err.number_phone);
                } else {
                    row.find('.valid-field-number_phone').removeClass('show')
                }
            }
        })
    return;
}

function findCustomer(form) {
    var frmData = new FormData(form[0]);

    var data = {
        name: frmData.get('name'),
        email: frmData.get('email'),
        address: frmData.get('address'),
        status: frmData.get('status'),
    }

    url = form.attr('action');

    getCustomers(url, data);

    exportCustomer(data);

}

function exportCustomer(data) {
    let newUrl = '';
    let url = new URL($('.export-customer').attr('href'));
    if (data.name != '') {
        url.searchParams.set('name', data.name);
    }
    if (data.email != '') {
        url.searchParams.set('email', data.email);
    }
    if (data.address != '') {
        url.searchParams.set('address', data.address);
    }
    if (data.status != '') {
        url.searchParams.set('status', data.status);
    }

    newUrl = url.href;

    $('.export-customer').attr('href', newUrl)
}

function importCustomer() {
    var btnImport = $('.import-customer');
    var inputFile = $('.file-import-input');
    var formImport = $('#formImport');

    btnImport.click(function() {
        inputFile.click();
    })

    inputFile.change(function(e) {
        let file = e.target.files[0];
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger mr-2'
            },
            buttonsStyling: false
        })
        file.extention = file.name.split('.').pop();

        if (file.extention != "xlsx") {
            swalWithBootstrapButtons.fire({
                title: 'File không đúng định dạng',
                icon: 'warning',
                confirmButtonText: 'Đóng',
            })
            return;
        } else {
            swalWithBootstrapButtons.fire({
                title: 'Đồng ý import file ' + file.name,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Đồng ý',
                cancelButtonText: 'Hủy',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    formImport.submit();
                }
            })
        }

    })
}

$(document).ready(function() {
    getCustomers();
    importCustomer();

    $('#lstCustomers').on('click', '.btn-block-Customer', function() {
        blockCustomer($(this).data('id'));
    })

    $('#lstCustomers').on('click', '.btn-delete-Customer', function() {
        deleteCustomer($(this).data('id'));
    })

    $('.btn-submit').one("click", function() {
        var form = $(this).closest('form');
        addEditCustomer(form);
    })

    $('.btn-search-customer').click(function(e) {
        e.preventDefault();

        let form = $('#searchCustomer');
        findCustomer(form);
    })

    $('.btn-reset-search-customer').click(function() {
        getCustomers();
    })

    $('.pagination-container').click('.page-link', function(e) {
        let url = $(e.target).data('link');
        getCustomers(url);
    })
})