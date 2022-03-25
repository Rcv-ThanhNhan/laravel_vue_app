var urlApi = 'http://127.0.0.1:8000/api/user';

function getUsers(url = urlApi) {
    const form = $('#searchUser');
    const frmData = new FormData(form[0]);
    var dataSearch = {};
    var render = $('#lstUsers');

    var data = {
        name: frmData.get('name'),
        email: frmData.get('email'),
        group: frmData.get('group'),
        status: frmData.get('status'),
    }

    if (
        data.name != '' ||
        data.email != '' ||
        data.group != '' ||
        data.status != ''
    ) {
        url = form.attr('action');
        dataSearch = data;
    }


    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        }
    });
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

function modalAddEditUser(type, id) {
    var modal = $('#UserEditAddModal');

    var title = '';
    var action = '';
    var url = '';
    var method = '';

    if (type == 'add') {
        resetForm(modal.find('form'))
        title = 'Thêm user';
        action = '<div class="spinner-border text-light d-none loading-submit" role="status" style="width: 1rem; height: 1rem"></div> Thêm';
        url = urlApi;
        method = 'POST';

        modal.find('form [name="passwd_confirm"]').closest('.mb-3').removeClass('d-none');
        modal.find('form [name="passwd"]').closest('.mb-3').removeClass('d-none');
        modal.find('form [name="email"]').prop('disabled', false);
    }

    if (type == 'edit') {
        resetForm(modal.find('form'))
        title = 'Chỉnh sửa user';
        action = '<div class="spinner-border text-light d-none loading-submit" role="status" style="width: 1rem; height: 1rem"></div> Lưu';
        url = urlApi + '/' + id;
        method = 'POST';

        modal.find('form [name="passwd_confirm"]').closest('.mb-3').addClass('d-none');
        modal.find('form [name="passwd"]').closest('.mb-3').addClass('d-none');
        modal.find('form [name="email"]').prop('disabled', true);

        let user = getUser(id);
        user.then(function(data) {
            let user = data.data;
            let name = user.name;
            let email = user.email;
            let group_role = user.group_role;
            let is_active = user.is_active;

            modal.find('form [name="username"]').val(name);
            modal.find('form [name="email"]').val(email);
            modal.find('form [name="group"]').val(group_role);
            modal.find('form [name="status"]').prop('checked', is_active);
        })
    }

    var form = modal.find('form');
    form.attr('action', url);
    form.attr('data-type', type);
    form.attr('method', method);
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

function getUser(id) {

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

function blockUser(id) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger mr-2'
        },
        buttonsStyling: false
    })
    getUser(id).then(function(data) {
        if (data.data) {
            swalWithBootstrapButtons.fire({
                title: 'Bạn có muốn ' + (data.data.is_active ? 'khóa' : 'mở khóa') + ' tài khoản ' + data.data.name,
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

function deleteUser(id) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger mr-2'
        },
        buttonsStyling: false
    })
    getUser(id).then(function(data) {
        if (data.data) {
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

function addEditUser() {
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

        $.ajaxSetup({
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
                url: url,
                method: method,
                data: data,
                cache: false,
                beforeSend: function() {
                    loading.removeClass('d-none');
                },
                success: function(data) {
                    loading.removeClass('d-none');
                }
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
            .fail(function(error) {
                return error.responseJSON;
            })

    })
}

function getUsersInPage(url = urlApi) {
    var render = $('#lstUsers');

    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        }
    });
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

$(document).ready(function() {
    getUsers();
    addEditUser();

    $('#lstUsers').on('click', '.btn-block-user', function() {
        blockUser($(this).data('id'));
    })

    $('#lstUsers').on('click', '.btn-delete-user', function() {
        deleteUser($(this).attr('data-id'));
    })


    $('.btn-search-user').click(function(e) {
        e.preventDefault();
        getUsers()
    })

    $('.btn-reset-search-user').click(function() {
        resetForm($('#searchUser'));
        getUsers();
    })

    $('.pagination-container').click('.page-link', function(e) {
        if ($(e.target).data('link')) {
            let url = $(e.target).data('link');
            getUsersInPage(url);
        }
    })
})