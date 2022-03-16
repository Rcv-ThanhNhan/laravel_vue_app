function getUsers(url = 'http://localhost:8000/api/user') {

    // var url = 'http://localhost:8000/api/user';
    var render = $('#lstUsers');

    $.ajax({
            url: url,
            method: "get"
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

    if (type == 'add') {
        resetForm(modal.find('form'))
        title = 'Thêm user';
        action = '<div class="spinner-border text-light d-none loading-submit" role="status" style="width: 1rem; height: 1rem"></div> Thêm';
        url = 'http://localhost:8000/api/user';

        modal.find('form [name="passwd_confirm"]').closest('.mb-3').removeClass('d-none');
        modal.find('form [name="passwd"]').closest('.mb-3').removeClass('d-none');
        modal.find('form [name="email"]').prop('disabled', false);
    }

    if (type == 'edit') {
        title = 'Chỉnh sửa user';
        action = '<div class="spinner-border text-light d-none loading-submit" role="status" style="width: 1rem; height: 1rem"></div> Lưu';
        url = 'http://localhost:8000/api/user/' + id;

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

    modal.find('form').attr('action', url);
    modal.find('form').attr('data-type', type);
    modal.find('.modal-title').text(title);
    modal.find('.btn-submit').html(action);


}

function navigation(links) {

    var render = $('.pagination-container');
    var pageItem = '';
    var paginate = '';
    let maxItem = 5;

    //Render nút nhảy trang

    $(links.links).each((i, v) => {
        if (v.url != null) {
            if (links.total > maxItem) {
                if (v.label <= 2 || v.label > links.last_page - 2) {
                    if (links.current_page == v.label) {
                        pageItem += `<li class="page-item">
                                    <button class="page-link"> ${ v.label } </button>
                                </li>`
                    } else {
                        pageItem += `<li class="page-item">
                                    <button class="page-link" data-link="${ v.url }"> ${ v.label } </button>
                                </li>`
                    }
                } else if (v.label == links.last_page - 3) {
                    pageItem += `<li class="page-item">
                                    <button class="page-link"> ... </button>
                                </li>`
                }
            } else {
                pageItem += `<li class="page-item">
                                <button class="page-link" data-link="${ v.url }"> ${ v.label } </button>
                            </li>`;
            }
        }
    });

    // render nút về trang đầu trang cuối
    var renderPrev = "";
    var renderNext = "";
    if (links.last_page > 3) {
        if (links.current_page !== 1 && links.current_page > 3) {
            renderPrev += ` <li className = "page-item">
                                <button class="page-link" data-link="${links.links[links.from].url}">&laquo;</button>
                            </li >`;
        }
        if (links.current_page !== links.last_page && links.current_page + 2 < links.last_page) {
            renderNext += `<li class="page-item">
                                <button class="page-link" data-link="${links.links[links.last_page].url}"> &raquo; </button>
                            </li>`
        }
    }

    if (links.last_page > 1) {
        paginate += `
                        <span> Hiển thị từ ${ links.from }
                        đến ${ links.to }
                        của ${ links.total }
                        người dùng </span>

                <ul class="pagination justify-content-end" >
                    ${ renderPrev } ${ pageItem } ${ renderNext }
                </ul>`;
    } else {
        paginate += `<div class = "paginate-style" ></div>`;
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

    var url = 'http://localhost:8000/api/user/' + id;

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
            title: 'Bạn có muốn khóa tài khoản ' + data.data.name,
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Hủy',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                var url = 'http://localhost:8000/api/user/update-status';

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
                var url = 'http://localhost:8000/api/user/' + id;

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

function addUser() {
    var modal = $('#UserEditAddModal');

    var form = modal.find('form[data-type="add"]');

    form.submit(function(e) {
        e.preventDefault();

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
                url: form.attr('action'),
                method: 'post',
                data: data,
                beforeSend: function() {
                    loading.toggleClass('d-none');
                }
            })
            .then(function(data) {
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
                    $('.invalid-feedback-email').toggleClass('d-block').text(data.error);
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
                        $('.invalid-feedback-passwd').toggleClass('d-block').text(err.passwd);
                    }
                    if (err.passwd_confirm) {
                        $('.invalid-feedback-passwd_confirm').toggleClass('d-block').text(err.passwd_confirm);
                    }
                }
            })
    })

}

function updateUser() {
    var modal = $('#UserEditAddModal');

    var form = modal.find('form[data-type="edit"]');

    form.submit(function(e) {
        e.preventDefault();
        var frmData = new FormData(this);
        var loading = $('.loading-submit');

        var data = {
            username: frmData.get('username'),
            email: frmData.get('email'),
            group: frmData.get('group'),
            is_active: frmData.get('status'),
        }

        $.ajax({
                url: form.attr('action'),
                method: 'PATCH',
                data: data,
                beforeSend: function() {
                    loading.toggleClass('d-none');
                }
            })
            .then(function(data) {
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
                    $('.invalid-feedback-email').toggleClass('d-block').text(data.error);
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
                }
            })
    })
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
        addUser();
        updateUser();
    })

    $('.pagination-container').click('.page-link', function(e) {
        // let loading = $('.loading-table');
        // loading.toggleClass('d-none');
        let url = $(e.target).data('link');
        getUsers(url);
        // loading.toggleClass('d-none');
    })
})