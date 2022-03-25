var urlApi = 'http://127.0.0.1:8000/api/product';

function getProducts(url = urlApi, data = {}) {

    var render = $('#lstProducts');

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
                // navigation(data.meta);
            }
        })
        .fail((error) => {
            console.log(error.responseJSON);
        })

}

function modalAddEditProduct(type, id) {
    var modal = $('#productEditAddModal');

    resetForm(modal.find('form'));
    var title = '';
    var action = '';
    var url = '';
    var method = '';


    if (type == 'add') {
        resetForm(modal.find('form'))
        title = 'Thêm sản phẩm';
        action = '<div class="spinner-border text-light d-none loading-submit" role="status" style="width: 1rem; height: 1rem"></div> Thêm';
        url = urlApi;
        method = 'POST';

    }

    if (type == 'edit') {
        title = 'Chỉnh sửa sản phẩm';
        action = '<div class="spinner-border text-light d-none loading-submit" role="status" style="width: 1rem; height: 1rem"></div> Lưu';
        url = urlApi + '/' + id;
        method = 'POST'

        let productData = getProduct(id);
        productData.then(function(data) {

            let product = data.data;
            let name = product.product_name;
            let price = product.product_price;
            let description = product.description;
            let image = product.product_image;
            let is_sale = product.is_sale;
            let imgPath = window.location.origin + (image ? '/upload/images/' + image : '/img/no_image.png');

            modal.find('.img-preview').attr('src', imgPath);
            modal.find('form [name="name_product"]').val(name);
            modal.find('form [name="price_product"]').val(price);
            modal.find('form [name="desc"]').val(description);
            modal.find('form [name="img_product_name"]').val(image);
            modal.find('form [name="status"]').val(is_sale).change();

        })
    }

    modal.find('form').attr('action', url);
    modal.find('form').attr('method', method);
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
    form.removeClass('was-validated');
    $(form).find("input").each(function() {
        $(this).val("");
    });
    $(form).find("textarea").each(function() {
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

function removeFileFromFileList() {
    // const dt = new DataTransfer();
    // const input = $('[name="img_product"]');

    // console.log(dt.files);
    // input.files = dt.files;
    // console.log(input.prop('files'), input.files)
    alert('not work');
}


function addEditProduct() {
    var form = $('#productEditAddModal').find('form');

    form.submit(function(e) {
        e.preventDefault();

        var url = $(this).attr('action');
        var method = $(this).attr('method');
        let type = $(this).attr('data-type');

        var frmData = new FormData(this);

        if ($(this).data('type') == 'edit') {
            frmData.append('_method', 'PATCH');
        }

        if (type == 'edit') {
            frmData.append('_method', 'PATCH');
        }


        if (
            frmData.get('name_product') == '' ||
            frmData.get('price_product') == ''
        ) {
            return;
        }

        var loading = $('.loading-submit');

        $.ajaxSetup({
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
                url: url,
                method: method,
                data: frmData,
                contentType: false,
                processData: false,
                cache: false,
                beforeSend: function() {
                    loading.addClass('d-none');
                }
            })
            .done(function(data) {
                loading.removeClass('d-none');
                if (data) {
                    $('#productEditAddModal').modal('toggle');
                    resetForm(form);
                    Swal.fire({
                        icon: 'success',
                        title: data.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    getProducts();
                }
            })
            .fail(function(error) {
                var err = error.responseJSON.errors;
                loading.removeClass('d-none');
                if (err) {
                    if (err.name_product) {

                        $('.invalid-feedback-name_product').text(err.name_product);
                    }
                    if (err.price_product) {
                        $('[name="price_product"]')[0].setCustomValidity('Invalid field.');
                        $('.invalid-feedback-price_product').text(err.price_product);
                    }
                }
            })
        return;
    })
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
    if (file.size > 1024000) {
        return Swal.fire({
            title: 'Dung lượng ảnh phải nhỏ hơn 1MB',
            icon: 'warning',
            showCancelButton: false,
            confirmButtonText: 'Đóng',
        });
    }
    reader.onload = function() {
        render.attr('src', reader.result);
    }

    reader.readAsDataURL(file);
}



$(document).ready(function() {
    getProducts();
    addEditProduct();

    $('#lstProducts').on('click', '.btn-delete-product', function() {
        deleteProduct($(this).data('id'));
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

    $('[for="destroyImage"]').click(function() {
        removeFileFromFileList();
    })
})