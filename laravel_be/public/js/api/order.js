var urlApi = '/api/order';

function getOrders(url = urlApi) {
    var formSearch = $('#searchOrder');
    const frmData = new FormData(formSearch[0]);
    var dataSearch = {};
    var render = $('#lstOrders');
    var data = {
        order_code: frmData.get('order_code'),
        from_date: frmData.get('from_date'),
        status: frmData.get('status'),
    }

    if (
        data.order_code != '' ||
        data.from_date != '' ||
        data.status != ''
    ) {
        url = formSearch.attr('action');
        dataSearch = data;
        console.log(123)
    }

    $.ajax({
            url: url,
            method: "get",
            data: dataSearch,
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
            return error.responseJSON;
        })

}

function navigation(links) {
    var render = $('.pagination-container');
    var pageItem = '';
    var paginate = '';

    let pageState = links;

    $(pageState.links).each((i, v) => {
        if ((i > pageState.current_page - 3 && i < pageState.current_page + 3 || pageState.current_page === i) && v.url != null) {
            pageItem += ` <li class="page-item${v.active ? ' active' : ''}">
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
                `<li class="page-item"><button class="page-link" data-link="${links.links[1].url}" > Trang đầu</button></li>`

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

    form.find('[name="status"]').prop('checked', false);

    $(form.find('input.form-control')).each(function(e) {
        $(this).removeClass('is-valid').removeClass('is-invalid')
    })
}

function getOrder(id) {

    var url = urlApi + '/' + id;

    var user = $.ajax({
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
    return user;
}

function deleteOrder(id) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger mr-2'
        },
        buttonsStyling: false
    })
    getUser(id).then(function(data) {
        if (data.data) {
            if (data.data.is_delete == 1) {
                return swalWithBootstrapButtons.fire({
                    title: 'Không tìm thấy người dùng',
                    icon: 'error',
                    showCancelButton: false,
                    confirmButtonText: 'Đóng',
                    timer: 3000
                })
            }
            swalWithBootstrapButtons.fire({
                title: 'Bạn có muốn xoá tài khoản ' + data.data.name,
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
                                getUsers();
                            }
                        })
                        .fail((error) => {
                            return error.responseJSON;
                        })
                }
            })
        } else {
            swalWithBootstrapButtons.fire({
                title: 'Không tìm thấy người dùng',
                icon: 'error',
                showCancelButton: false,
                confirmButtonText: 'Đóng',
                timer: 3000
            })
        }
    })
}

function editUser() {
    var form = $('#UserEditAddModal').find('form');
    form.submit(function(e) {
        e.preventDefault();

        let url = $(this).attr('action');
        let method = $(this).attr('method');
        let type = $(this).attr('data-type');

        var frmData = new FormData(this);
        var loading = $('.loading-submit');

        var data = {
            username: frmData.get('username'),
            email: frmData.get('email'),
            passwd: frmData.get('passwd'),
            passwd_confirm: frmData.get('passwd_confirm'),
            group: frmData.get('group'),
            is_active: $(this).find('[name="status"]').prop('checked') ? 1 : 0,
        }

        if (type == 'edit') {
            data._method = 'PATCH';
            if (
                data.username == '' ||
                data.email == '' ||
                (data.group == '' || data.group == null)
            ) {
                return;
            }
        }

        if (type == 'add') {
            if (
                data.username == '' ||
                data.email == '' ||
                data.passwd == '' ||
                data.passwd_confirm == '' ||
                (data.group == '' || data.group == null)
            ) {
                return;
            }
        }

        $.ajax({
                url: url,
                method: method,
                data: data,
                cache: false
            })
            .done(function(data) {
                if (data && data.status == 422) {
                    if (data.errors.username) {
                        $('#UserEditAddModal').find('[name="username"]').addClass('is-invalid');
                        $('.invalid-feedback-username').text(data.errors.username);
                    }
                    if (data.errors.email) {
                        $('#UserEditAddModal').find('[name="email"]').addClass('is-invalid');
                        $('.invalid-feedback-email').text(data.errors.email);
                    }
                    if (data.errors.group) {
                        $('#UserEditAddModal').find('[name="group"]').addClass('is-invalid');
                        $('.invalid-feedback-group').text(data.errors.group);
                    }
                    if (data.errors.passwd) {
                        $('#UserEditAddModal').find('[name="passwd"]').addClass('is-invalid');
                        $('.invalid-feedback-passwd').text(data.errors.passwd);
                    }
                    if (data.errors.passwd_confirm) {
                        $('#UserEditAddModal').find('[name="passwd_confirm"]').addClass('is-invalid');
                        $('.invalid-feedback-passwd_confirm').text(data.errors.passwd_confirm);
                    }
                } else {
                    resetForm(form);
                    Swal.fire({
                        icon: 'success',
                        title: data.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    getUsers();
                    $('#UserEditAddModal').modal('toggle');
                }
            })
            .fail(function(jqXHR) {
                if (jqXHR.status != 200 || jqXHR.status == 0) {
                    loading.addClass('d-none');
                    Swal.fire({
                        icon: 'error',
                        title: 'Thêm người dùng thất bại',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });

    })
}

function getOrdersInPage(url = urlApi) {
    var render = $('#lstOrders');

    $.ajax({
            url: url,
            method: "get",
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
            return error.responseJSON;
        })

}

function changeStatus(e) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger mr-2'
        },
        buttonsStyling: false
    })
    var id = $(e.currentTarget).attr('data-id');
    getOrder(id).then(function(data) {
        swalWithBootstrapButtons.fire({
            title: (data.data.order_status == 1 ? 'Hủy' : 'Xác nhận') + ' đơn hàng',
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
                        method: 'patch',
                        data: {
                            status: data.data.order_status == 1 ? 0 : 1
                        }
                    })
                    .done((datas) => {
                        console.log(datas)
                        if (datas) {
                            Swal.fire({
                                icon: 'success',
                                title: datas.message,
                                showConfirmButton: false,
                                timer: 1500
                            });
                            getOrders();
                        }
                    })
                    .fail((error) => {
                        return error.responseJSON;
                    })
            }
        })
    })
}

$(document).ready(function() {
    getOrders();
    editUser();

    $('.btn-search-order').click(function(e) {
        e.preventDefault();
        var formSearch = $('#searchOrder');
        const frmData = new FormData(formSearch[0]);

        var data = {
            order_code: frmData.get('order_code'),
            from_date: frmData.get('from_date'),
            status: frmData.get('status'),
        }


        console.log(data);
        if (
            data.order_code == '' &&
            data.from_date == '' &&
            data.status == ''
        ) {
            return;
        }
        getOrders();
    })

    $('.btn-reset-search-order').click(function() {
        var formSearch = $('#searchOrder');
        resetForm(formSearch);
        getOrders();
    })

    $('.pagination-container').click('.page-link', function(e) {
        if ($(e.target).data('link')) {
            let url = $(e.target).data('link');
            getOrdersInPage(url);
        }
    })
})
