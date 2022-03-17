function getCustomers(url = 'http://localhost:8000/api/customer', data = {}) {

    var render = $('#lstCustomers');

    $.ajax({
            url: url,
            method: "get",
            data: data
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

    if (type == 'add') {
        resetForm(modal.find('form'))
        title = 'Thêm khách hàng';
        action = '<div class="spinner-border text-light d-none loading-submit" role="status" style="width: 1rem; height: 1rem"></div> Thêm';
        url = 'http://localhost:8000/api/customer';

        modal.find('form [name="email"]').prop('disabled', false);
        addCustomer();
    }

    if (type == 'edit') {
        title = 'Chỉnh sửa khách hàng';
        action = '<div class="spinner-border text-light d-none loading-submit" role="status" style="width: 1rem; height: 1rem"></div> Lưu';
        url = 'http://localhost:8000/api/customer/' + id;

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

            updateCustomer();
        })
    }

    modal.find('form').attr('action', url);
    modal.find('form').attr('data-type', type);
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
        if (i > pageState.current_page - 3 && i < pageState.current_page + 3 || pageState.current_page === i) {
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
        paginate += `<div class="paginate-style"></div>`
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

    var url = 'http://localhost:8000/api/customer/' + id;

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
                var url = 'http://localhost:8000/api/customer/update-status';

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
                var url = 'http://localhost:8000/api/customer/' + id;

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

function addCustomer() {
    var modal = $('#customerEditAddModal');

    var form = modal.find('form[data-type="add"]');

    form.submit(function(e) {
        e.preventDefault();

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
                url: form.attr('action'),
                method: 'post',
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
                        $('.invalid-feedback-email').addClass('d-block').text(err.email);
                    }
                    if (err.number_phone) {
                        $('.invalid-feedback-tel').addClass('d-block').text(err.number_phone);
                    }
                    if (err.address) {
                        $('.invalid-feedback-address').text(err.address);
                    }
                }
            })
    })

}

function updateCustomer() {
    var modal = $('#customerEditAddModal');

    var form = modal.find('form[data-type="edit"]');

    form.submit(function(e) {
        e.preventDefault();
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
                url: form.attr('action'),
                method: 'PATCH',
                data: data,
                beforeSend: function() {
                    loading.toggleClass('d-none');
                }
            })
            .done(function(data) {
                loading.toggleClass('d-none');
                if (data && data.status == 200) {
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

                if (err) {
                    if (err.Customername) {
                        $('.invalid-feedback-Customername').text(err.Customername);
                    }
                    if (err.email) {
                        $('.invalid-feedback-email').text(err.email);
                    }
                    if (err.group) {
                        $('.invalid-feedback-group').text(err.group);
                    }
                }
            })
    })
}

function findCustomer(form) {
    var frmData = new FormData(form[0]);

    var data = {
        name: frmData.get('name'),
        email: frmData.get('email'),
        group: frmData.get('address'),
        status: frmData.get('status'),
    }

    url = form.attr('action');

    getCustomers(url, data);


}

$(document).ready(function() {
    getCustomers();

    $('#lstCustomers').on('click', '.btn-block-Customer', function() {
        blockCustomer($(this).data('id'));
    })

    $('#lstCustomers').on('click', '.btn-delete-Customer', function() {
        deleteCustomer($(this).data('id'));
    })

    // $('.btn-submit').click(function() {

    // })

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