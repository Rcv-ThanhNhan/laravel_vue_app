var urlApi = 'http://localhost:8000/api/product';

function getProducts(url = urlApi, data = {}) {

    var render = $('#lstProducts');

    $.ajax({
            url: url,
            method: "get",
            data: data
        })
        .done((data) => {
            if (data) {
                render.html(data.data);
                // navigation(data.meta);
            }
        })
        .fail((error) => {
            console.log(error.responseJSON);
        })

}

function modalAddEditProduct(type, id) {
    var modal = $('#productEditAddModal');

    var title = '';
    var action = '';
    var url = '';


    if (type == 'add') {
        // resetForm(modal.find('form'));

        title = 'Thêm khách sản phẩm';
        action = '<div class="spinner-border text-light d-none loading-submit" role="status" style="width: 1rem; height: 1rem"></div> Thêm';
        url = urlApi;

        modal.find('form [name="email"]').prop('disabled', false);
    }

    if (type == 'edit') {
        title = 'Chỉnh sửa sản phẩm';
        action = '<div class="spinner-border text-light d-none loading-submit" role="status" style="width: 1rem; height: 1rem"></div> Lưu';
        url = urlApi + '/' + id;

        let productData = getProduct(id);
        productData.then(function(data) {

            let product = data.data;
            let name = product.product_name;
            let price = number_format(product.product_price, 0, ',', '.');
            let description = product.description;
            let image = product.image;
            let is_sale = product.is_sale;

            modal.find('form [name="name_product"]').val(name);
            modal.find('form [name="price_product"]').val(price);
            modal.find('form [name="desc"]').val(description);
            modal.find('form [name=""]').val(image);
            modal.find('form [name="status"]').val(is_sale).change();

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

    form.find('img').attr('src', window.location.origin + '/img/no_image.png')
}

function getProduct(id) {
    var url = urlApi + '/' + id;

    var product = $.ajax({
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
    return product;
}

function deleteProduct(id) {
    getProduct(id).then(function(data) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger mr-2'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Bạn có muốn xoá sản phẩm ' + data.data.product_name,
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
                            getProducts();
                        }
                    })
                    .fail((error) => {
                        return error.responseJSON;
                    })
            }
        })
    })
}

function addProduct() {
    var modal = $('#productEditAddModal');

    var form = modal.find('form[data-type="add"]');

    form.submit(function(e) {
        e.preventDefault();

        var frmData = new FormData(this);
        var loading = $('.loading-submit');

        // var data = {
        //     product_name: frmData.get('name_product'),
        //     product_price: frmData.get('price_product'),
        //     desc: frmData.get('desc'),
        //     status: frmData.get('status'),
        //     // image: frmData.get('img_product'),
        // }

        frmData.append('attrachment', frmData.get('img_product'));


        $.ajax({
                url: form.attr('action'),
                method: 'post',
                data: frmData,
                contentType: false,
                processData: false,
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
                    getProducts();
                }
                if (data.error) {
                    $('.invalid-feedback-email').toggleClass('d-block').text(data.error);
                }
            })
            .fail(function(error) {
                var err = error.responseJSON.errors;
                loading.toggleClass('d-none');
                // console.log(error.responseJSON, error);
                if (err) {
                    if (err.name_product) {
                        $('.invalid-feedback-name_product').text(err.name_product);
                    }
                    if (err.price_product) {
                        $('.invalid-feedback-price_product').text(err.price_product);
                    }
                }
            })
    })

    return;
}

function updateProduct() {
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
                    getProducts();
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
    return;
}

function findProduct(form) {
    var frmData = new FormData(form[0]);

    var data = {
        name_product: frmData.get('name_product'),
        price_from: frmData.get('price_from'),
        price_to: frmData.get('price_to'),
        status_product: frmData.get('status_product'),
    }

    url = form.attr('action');

    getProducts(url, data);
}

function number_format(number, decimals, dec_point, thousands_sep) {
    // Strip all characters but numerical ones.
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function previewImage(file, render) {
    var reader = new FileReader();

    reader.onload = function() {
        console.log(render.src);
        render.attr('src', reader.result);
    }

    reader.readAsDataURL(file);
}



$(document).ready(function() {
    getProducts();


    $('#lstProducts').on('click', '.btn-delete-product', function() {
        deleteProduct($(this).data('id'));
    })

    // kiểm tra các hàm Add/edit có đang chạy không
    var crudProductRunning = false;

    // gọi hàm khi modal hiện ra
    document.querySelector('#productEditAddModal').addEventListener('shown.bs.modal', function(event) {
        if (crudProductRunning != true) {
            updateProduct();
            addProduct();
        }

        crudProductRunning = true;
    })

    // nút tìm kiếm
    $('.btn-search-product').click(function(e) {
        e.preventDefault();

        let form = $('#searchProduct');
        findProduct(form);
    })

    // reset form tìm kiếm
    $('.btn-reset-search-product').click(function() {
        getProducts();
    })

    // chuyển trang danh sách
    $('.pagination-container').click('.page-link', function(e) {
        let url = $(e.target).data('link');
        getProducts(url);
    })

    // chọn hình ảnh upload
    $('#chooseImage').change(function(e) {
        var showFileName = $('.name-file');
        var render = $('.img-preview');
        var file = this.files[0];

        showFileName.val(file.name)

        previewImage(file, render)
    })

    // over mouse chuột vào mã sản phẩm thì show hình ảnh sản phẩm
    $('#lstProducts').mouseover('.show-image', function(e) {
        if ($(e.target).data('id')) {
            var id = $(e.target).data('id');
            var imgPath = window.location.origin + '/image/no_image.png';
            getProduct(id).then(function(data) {

            })
        }
    })
})