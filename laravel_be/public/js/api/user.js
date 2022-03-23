var urlApi = 'http://127.0.0.1:8000/api/user';

function getUsers(url = urlApi, data = {}) {

    var render = $('#lstUsers');

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
        title = 'Chỉnh sửa user';
        action = '<div class="spinner-border text-light d-none loading-submit" role="status" style="width: 1rem; height: 1rem"></div> Lưu';
        url = urlApi + '/' + id;
        method = 'PATCH';

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
    getUser(id).then(function(data) {
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
                            getUsers();
                        }
                    })
                    .fail((error) => {
                        return console.log(error.responseJSON);
                    })
            }
        })
    })
}

function deleteUser(id) {
    getUser(id).then(function(data) {
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
                            getUsers();
                        }
                    })
                    .fail((error) => {
                        return console.log(error.responseJSON);
                    })
            }
        })
    })
}

function addUser(form) {
    form.submit(function(e) {
        e.preventDefault();

        var url = $(this).attr('action');
        var method = $(this).attr('method');

        var frmData = new FormData(this);
        var loading = $('.loading-submit');

        var data = {
            username: frmData.get('username'),
            email: frmData.get('email'),
            passwd: frmData.get('passwd'),
            passwd_confirm: frmData.get('passwd_confirm'),
            group: frmData.get('group'),
            is_active: frmData.get('status'),
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
                if (data && data.status == 200) {
                    modal.modal('toggle');
                    resetForm(form);
                    Swal.fire({
                        icon: 'success',
                        title: data.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    getUsers();
                }
                if (data.error) {
                    $('[name="email"]')[0].setCustomValidity('Invalid field.');
                    $('.invalid-feedback-email').text(data.error);
                }
            })
            .fail(function(error) {
                var err = error.responseJSON.errors;
                loading.toggleClass('d-none');

                if (err) {
                    if (err.username) {
                        $('.invalid-feedback-username').text(err.username);
                    }
                    if (err.email) {
                        $('.invalid-feedback-email').text(err.email);
                    }
                    if (err.group) {
                        $('.invalid-feedback-group').text(err.group);
                    }
                    if (err.passwd) {
                        $('[name="passwd"]')[0].setCustomValidity('Invalid field.');
                        $('.invalid-feedback-passwd').text(err.passwd);
                    }
                    if (err.passwd_confirm) {
                        $('[name="passwd_confirm"]')[0].setCustomValidity('Invalid field.');
                        $('.invalid-feedback-passwd_confirm').text(err.passwd_confirm);
                    }
                }
            })
    })

}


function findUser(form) {


    var frmData = new FormData(form[0]);

    var data = {
        name: frmData.get('name'),
        email: frmData.get('email'),
        group: frmData.get('group'),
        status: frmData.get('status'),
    }

    url = form.attr('action');

    getUsers(url, data);


}

$(document).ready(function() {
    getUsers();

    $('#lstUsers').on('click', '.btn-block-user', function() {
        blockUser($(this).data('id'));
    })

    $('#lstUsers').on('click', '.btn-delete-user', function() {
        deleteUser($(this).data('id'));
    })

    $('.btn-submit').click(function() {
        var form = $(this).closest('form');
        addEditUser(form);
    })

    $('.btn-search-user').click(function(e) {
        e.preventDefault();

        let form = $('#searchUser');
        findUser(form);
    })

    $('.btn-reset-search-user').click(function() {
        getUsers();
    })

    $('.pagination-container').click('.page-link', function(e) {
        let url = $(e.target).data('link');
        getUsers(url);
    })
})