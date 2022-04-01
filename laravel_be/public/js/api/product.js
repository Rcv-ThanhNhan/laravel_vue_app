(()=>{var t="/api/product";function n(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,a=$("#lstProducts"),i=$("#searchProduct"),o=new FormData(i[0]),r={},c={name_product:o.get("name_product"),price_from:o.get("price_from"),price_to:o.get("price_to"),status_product:o.get("status_product")};""==c.name_product&&""==c.price_from&&""==c.price_to&&""==c.status_product||(n=i.attr("action"),r=c),$.ajax({url:n,method:"get",data:r,beforeSend:function(){a.html('\n                <div class="loading-table">\n                  <div class="spinner-border text-dark" role="status"></div>\n                </div>')}}).done((function(t){t&&(a.html(t.data),e(t.meta))})).fail((function(t){console.log(t.responseJSON)}))}function e(t){var n=$(".pagination-container"),e="",a="",i=t;$(i.links).each((function(t,n){(t>i.current_page-3&&t<i.current_page+3||i.current_page===t)&&null!=n.url&&(e+=' <li class="page-item '.concat(n.active?" active":"",'">\n                            <button class="page-link" data-link="').concat(n.url,'" > ').concat(n.label,"</button>\n                        </li>"))}));var o="",r="";i.last_page>3&&(1!==i.current_page&&i.current_page>3&&(o='<li class="page-item"><button class="page-link" data-link="'.concat(t.links[0].url,'" > Trang đầu</button></li>')),i.current_page!==i.last_page&&i.current_page+2<i.last_page&&(r=' <li class="page-item"><button class="page-link"  data-link="'.concat(t.links[t.last_page].url,'" > Trang cuối</button></li>'))),i.last_page>1?a+=' <div class="paginate-style">\n                <nav aria-label="Page navigation example">\n                    <span>Hiển thị '.concat(i.from," đên ").concat(i.to," trên ").concat(i.total,' người dùng</span>\n                    <ul class="pagination justify-content-end">\n                        ').concat(o,"\n                        ").concat(e,"\n                        ").concat(r,"\n                    </ul>\n                </nav>\n            </div>"):a+='<div class="paginate-style1"></div>',n.html(a)}function a(t){t.removeClass("was-validated"),$(t).find("input").each((function(){$(this).val("").removeClass("is-valid").removeClass("is-invalid")})),$(t).find("textarea").each((function(){$(this).val("")})),$(t).find("select").prop("selectedIndex",0),t.find("img").attr("src",window.location.origin+"/img/no_image.png")}function i(n){var e=t+"/"+n;return $.ajax({url:e,method:"get"}).done((function(t){if(t)return t.data})).fail((function(t){return t.responseJSON}))}$(document).ready((function(){var o;n(),(o=$("#productEditAddModal").find("form")).submit((function(t){t.preventDefault();var e=$(this).attr("action"),i=$(this).attr("method"),r=$(this).attr("data-type"),c=new FormData(this);if("edit"==r&&c.append("_method","PATCH"),""!=c.get("name_product")&&""!=c.get("price_product")){""==$('input[name="img_product_name"]').val()&&c.delete("img_product");var s=$(".loading-submit");$.ajax({url:e,method:i,data:c,contentType:!1,processData:!1,cache:!1}).done((function(t){t&&422==t.status?err&&(err.name_product&&$(".invalid-feedback-name_product").text(err.name_product),err.price_product&&($('[name="price_product"]')[0].setCustomValidity("Invalid field."),$(".invalid-feedback-price_product").text(err.price_product))):($("#productEditAddModal").modal("toggle"),a(o),Swal.fire({icon:"success",title:t.message,showConfirmButton:!1,timer:1500}),n())})).fail((function(t){200==t.status&&0!=t.status||(s.addClass("d-none"),Swal.fire({icon:"error",title:"Thêm người dùng thất bại",showConfirmButton:!1,timer:1500}))}))}})),$("#lstProducts").on("click",".btn-delete-product",(function(){var e,a;e=$(this).attr("data-id"),a=Swal.mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger mr-2"},buttonsStyling:!1}),i(e).then((function(i){i.data?a.fire({title:"Bạn có muốn xoá sản phẩm "+i.data.product_name,icon:"warning",showCancelButton:!0,confirmButtonText:"Đồng ý",cancelButtonText:"Hủy",reverseButtons:!0}).then((function(a){a.isConfirmed&&$.ajax({url:t+"/"+e,method:"delete"}).done((function(t){t&&(Swal.fire({icon:"success",title:t.message,showConfirmButton:!1,timer:1500}),n())})).fail((function(t){return t.responseJSON}))})):a.fire({title:"Không tìm thấy người dùng",icon:"error",showCancelButton:!1,confirmButtonText:"Đóng",timer:2500})}))})),$(".btn-search-product").click((function(t){t.preventDefault();var e=$(this).closest("form"),a=new FormData(e[0]),i=a.get("name_product"),o=a.get("price_from"),r=a.get("price_to"),c=a.get("status_product");""==i&&""==o&&""==r&&""==c||n()})),$(".btn-reset-search-product").click((function(){a($("#searchProduct")),n()})),$(".pagination-container").click(".page-link",(function(n){$(n.target).data("link")&&function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,a=$("#lstProducts");$.ajax({url:n,method:"get",beforeSend:function(){a.html('\n                <div class="loading-table">\n                  <div class="spinner-border text-dark" role="status"></div>\n                </div>')}}).done((function(t){t&&(a.html(t.data),e(t.meta))})).fail((function(t){return t.responseJSON}))}($(n.target).data("link"))})),$("#chooseImage").change((function(t){var n=$(".name-file"),e=$(".img-preview"),a=this.files[0];-1!=$.inArray(a.name.split(".").pop().toLowerCase(),["jpg","jepg","png"])?(n.val(a.name),function(t,n){var e=new FileReader;if(t.size>1024e3)return Swal.fire({title:"Dung lượng ảnh phải nhỏ hơn 1MB",icon:"warning",showCancelButton:!1,confirmButtonText:"Đóng"});e.onload=function(){n.attr("src",e.result)},e.readAsDataURL(t)}(a,e)):Swal.fire({icon:"warning",title:"File không đúng định dạng",showConfirmButton:!1,timer:1500})})),$('[for="destroyImage"]').click((function(){$('[name="img_product"]').files=null,$(".img-preview").attr("src",window.location.origin+"/img/no_image.png"),$('input[name="img_product_name"]').val("")}))}))})();