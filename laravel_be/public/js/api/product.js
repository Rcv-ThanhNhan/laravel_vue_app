var urlApi = '/api/product';

function getProducts(url = urlApi) {
    var render = $('#lstProducts');

    const form = $('#searchProduct');
    const frmData = new FormData(form[0]);
    var dataSearch = {};

    var data = {
        name_product: frmData.get('name_product'),
        price_from: frmData.get('price_from'),
        price_to: frmData.get('price_to'),
        status_product: frmData.get('status_product'),
    }
    if (
        data.name_product != '' ||
        data.price_from != '' ||
        data.price_to != '' ||
        data.status_product != ''
    ) {
        url = form.attr('action');
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
        resetForm(modal.find('form'))
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
            var imgPath = '/img/no_image.png';
            if (checkUrlImage(image)) {
                imgPath = image;
            } else {
                imgPath = image ? window.location.origin + '/upload/images/' + image : '/img/no_image.png';
            }
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
            pageItem += ` <li class="page-item ${v.active ? ' active' : ''}">
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
        $(this).val("").removeClass('is-valid').removeClass('is-invalid');
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
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger mr-2'
        },
        buttonsStyling: false
    })
    getProduct(id).then(function(data) {
        if (data.data) {
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
        } else {
            swalWithBootstrapButtons.fire({
                title: 'Không tìm thấy người dùng',
                icon: 'error',
                showCancelButton: false,
                confirmButtonText: 'Đóng',
                timer: 2500
            })
        }
    })
}

function removeFileFromFileList() {
    const input = $('[name="img_product"]');

    input.files = null;

    $('.img-preview').attr('src', window.location.origin + '/img/no_image.png');
    $('input[name="img_product_name"]').val('');
}


function addEditProduct() {
    var form = $('#productEditAddModal').find('form');

    form.submit(function(e) {
        e.preventDefault();

        var url = $(this).attr('action');
        var method = $(this).attr('method');
        let type = $(this).attr('data-type');

        var frmData = new FormData(this);

        if (type == 'edit') {
            frmData.append('_method', 'PATCH');
        }

        if (
            frmData.get('name_product') == '' ||
            frmData.get('price_product') == ''
        ) {
            return;
        }
        if ($('input[name="img_product_name"]').val() == '') {
            frmData.delete('img_product');
        }

        var loading = $('.loading-submit');

        $.ajax({
                url: url,
                method: method,
                data: frmData,
                contentType: false,
                processData: false,
                cache: false
            })
            .done(function(data) {
                if (data && data.status == 422) {
                    if (err) {
                        if (err.name_product) {
                            $('.invalid-feedback-name_product').text(err.name_product);
                        }
                        if (err.price_product) {
                            $('[name="price_product"]')[0].setCustomValidity('Invalid field.');
                            $('.invalid-feedback-price_product').text(err.price_product);
                        }
                    }
                } else {
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
            }).fail(function(jqXHR) {
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
        return;
    })
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

function getExtension(filename) {
    return filename.split('.').pop().toLowerCase();
}

function getProductsInPage(url = urlApi) {
    var render = $('#lstProducts');

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

function checkUrlImage(url) {
    if (url && (url.slice(0, 7) == 'http://' || url.slice(0, 7) == 'https:/')) {
        return true;
    }
    return false;
}

$(document).ready(function() {
    getProducts();
    addEditProduct();

    // Xóa
    $('#lstProducts').on('click', '.btn-delete-product', function() {
        deleteProduct($(this).attr('data-id'));
    })

    // nút tìm kiếm
    $('.btn-search-product').click(function(e) {
        e.preventDefault();
        let form = $(this).closest('form');
        let frmData = new FormData(form[0]);
        var data = {
            name_product: frmData.get('name_product'),
            price_from: frmData.get('price_from'),
            price_to: frmData.get('price_to'),
            status_product: frmData.get('status_product'),
        }

        if (data.name_product == '' && data.price_from == '' && data.price_to == '' && data.status_product == '') {
            return;
        }
        getProducts();
    })

    // reset form tìm kiếm
    $('.btn-reset-search-product').click(function() {
        resetForm($('#searchProduct'));
        getProducts();
    })

    // chuyển trang danh sách
    $('.pagination-container').click('.page-link', function(e) {
        if ($(e.target).data('link')) {
            let url = $(e.target).data('link');
            getProductsInPage(url);
        }
    })

    // chọn hình ảnh upload
    $('#chooseImage').change(function(e) {
        var showFileName = $('.name-file');
        var render = $('.img-preview');
        var file = this.files[0];
        var extentionAcept = ['jpg', 'jepg', 'png']
        if ($.inArray(getExtension(file.name), extentionAcept) == -1) {
            Swal.fire({
                icon: 'warning',
                title: 'File không đúng định dạng',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        showFileName.val(file.name)

        previewImage(file, render)
    })

    $('[for="destroyImage"]').click(function() {
        removeFileFromFileList();
    })
})