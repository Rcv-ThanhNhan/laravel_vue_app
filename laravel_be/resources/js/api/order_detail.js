var urlApi = '/api/order';

function getStatusOrder(id) {
    var url = urlApi + '/' + id;

    var orderStatus = $.ajax({
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
    return orderStatus;
}

function changeStatus(e) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger mr-2'
        },
        buttonsStyling: false
    })
    var status = $(e.target).attr('data-action');
    var id = $(e.target).attr('data-id');
    swalWithBootstrapButtons.fire({
        title: (status == 1 ? 'Xác nhận' : (status == 2 ? 'Hoàn thành' : 'Hủy')) + ' đơn hàng',
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
                        status: status
                    }
                })
                .done((datas) => {
                    if (datas && datas.status != 500) {
                        Swal.fire({
                            icon: 'success',
                            title: datas.message,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        getStatusOrder(id).then(function(order) {
                            var status = order.data.order_status;
                            var action = '';
                            var statusText = '';
                            if (status == 0) {
                                action = `<button class="btn btn-warning" onclick="changeStatus(event)"
                                        data-id="${id}" data-action="1">Xác nhận</button>`;
                                statusText = '<span class="text-danger">Chờ xác nhận</span>';
                            } else if (status == 1) {
                                action = `<button class="btn btn-warning" onclick="changeStatus(event)"
                                        data-id="${id}" data-action="0">Hủy xác nhận</button>
                                <button class="btn btn-success ml-2" onclick="changeStatus(event)"
                                        data-id="${id}" data-action="2">Đã giao</button>`;
                                statusText = '<span class="text-success">Đã xác nhận</span>';
                            } else {
                                statusText = '<span class="text-success">Đã giao</span>';
                            }
                            $('.btn-action').html(action);
                            $('.confirm-order').html(statusText);
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: datas.error,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                .fail((error) => {
                    return error.responseJSON;
                })
        }
    })
}