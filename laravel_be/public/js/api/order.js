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
                    <span>Hiển thị ${pageState.from } đên ${pageState.to } trên ${pageState.total} người dùng</span>
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

    var order = $.ajax({
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
    return order;
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

    $('.btn-search-order').click(function(e) {
        e.preventDefault();
        var formSearch = $('#searchOrder');
        const frmData = new FormData(formSearch[0]);

        var data = {
            order_code: frmData.get('order_code'),
            from_date: frmData.get('from_date'),
            status: frmData.get('status'),
        }

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