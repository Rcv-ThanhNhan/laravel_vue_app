(()=>{var t="/api/customer";function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=$("#searchCustomer"),i=new FormData(n[0]),s={},r=$("#lstCustomers"),l={name:i.get("name"),email:i.get("email"),address:i.get("address"),status:i.get("status")};""==l.name&&""==l.email&&""==l.address&&""==l.status||(e=n.attr("action"),s=l),$.ajax({url:e,method:"get",data:s,beforeSend:function(){r.html('\n                <div class="loading-table">\n                  <div class="spinner-border text-dark" role="status"></div>\n                </div>')}}).done((function(t){t&&(r.html(t.data),a(t.meta),$("#lstCustomers").find("input").each((function(t,e){$(e).on("input",(function(t){""==$(t.target).val()?$(t.target).removeClass("is-valid").addClass("is-invalid"):($(t.target)[0].setCustomValidity(""),$(t.target).addClass("is-valid").removeClass("is-invalid"))}))})))})).fail((function(t){console.log(t.responseJSON)}))}function a(t){var e=$(".pagination-container"),a="",n="",i=t;$(i.links).each((function(t,e){(t>i.current_page-3&&t<i.current_page+3||i.current_page===t)&&null!=e.url&&(a+=' <li class="page-item'.concat(e.active?" active":"",'">\n                            <button class="page-link" data-link="').concat(e.url,'" > ').concat(e.label,"</button>\n                        </li>"))}));var s="",r="";i.last_page>3&&(1!==i.current_page&&i.current_page>3&&(s='<li class="page-item"><button class="page-link" data-link="'.concat(t.links[0].url,'" > Trang đầu</button></li>')),i.current_page!==i.last_page&&i.current_page+2<i.last_page&&(r=' <li class="page-item"><button class="page-link"  data-link="'.concat(t.links[t.last_page].url,'" > Trang cuối</button></li>'))),i.last_page>1?n+=' <div class="paginate-style">\n                <nav aria-label="Page navigation example">\n                    <span>Hiển thị '.concat(i.from," đên ").concat(i.to," trên ").concat(i.total,' người dùng</span>\n                    <ul class="pagination justify-content-end">\n                        ').concat(s,"\n                        ").concat(a,"\n                        ").concat(r,"\n                    </ul>\n                </nav>\n            </div>"):n+='<div class="paginate-style1"></div>',e.html(n)}function n(t){t.removeClass("was-validated"),$(t).find("input").each((function(){$(this).val("")})),$(t).find("select").prop("selectedIndex",0),t.find("input").each((function(){$(this).removeClass(["is-invalid","is-valid"])}))}$(document).ready((function(){var i,s,r;e(),i=$(".import-customer"),s=$(".file-import-input"),r=$("#formImport"),i.click((function(){s.click()})),s.change((function(t){var e=t.target.files[0],a=Swal.mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger mr-2"},buttonsStyling:!1});e.extention=e.name.split(".").pop(),"xlsx"==e.extention?a.fire({title:"Đồng ý import file "+e.name,icon:"warning",showCancelButton:!0,confirmButtonText:"Đồng ý",cancelButtonText:"Hủy",reverseButtons:!0}).then((function(t){t.isConfirmed&&r.submit()})):a.fire({title:"File không đúng định dạng",icon:"warning",confirmButtonText:"Đóng"})})),$(".btn-submit").one("click",(function(){!function(t){t.submit((function(a){a.preventDefault();var i=$(this).attr("action"),s=$(this).attr("method"),r=new FormData(this),l={name:r.get("name"),email:r.get("email"),number_phone:r.get("number_phone"),address:r.get("address"),active:r.get("status")};""!=l.name&&""!=l.email&&""!=l.number_phone&&""!=l.address&&$.ajax({url:i,method:s,data:l}).done((function(a){var i=$("#customerEditAddModal");a&&422==a.status?(err=a.errors,err.name&&(i.find('[name="name"]').removeClass("is-valid").addClass("is-invalid"),$(".invalid-feedback-name").text(err.name)),err.email&&(i.find('[name="email"]')[0].setCustomValidity(err.email),i.find('[name="email"]').removeClass("is-valid").addClass("is-invalid"),$(".invalid-feedback-email").text(err.email)),err.number_phone&&(i.find('[name="number_phone"]')[0].setCustomValidity(err.email),i.find('[name="number_phone"]').removeClass("is-valid").addClass("is-invalid"),$(".invalid-feedback-tel").text(err.number_phone[0])),err.address&&(i.find('[name="address"]').removeClass("is-valid").addClass("is-invalid"),$(".invalid-feedback-address").text(err.address))):(i.modal("toggle"),n(t),Swal.fire({icon:"success",title:a.message,showConfirmButton:!1,timer:1500}),e())})).fail((function(t){200==t.status&&0!=t.status||(loading.addClass("d-none"),Swal.fire({icon:"error",title:"Thêm khách hàng thất bại",showConfirmButton:!1,timer:1500}))}))}))}($(this).closest("form"))})),$(".btn-search-customer").click((function(t){t.preventDefault();var a=$(this).closest("form"),n=new FormData(a[0]),i={name:n.get("name"),email:n.get("email"),address:n.get("address"),status:n.get("status")};""==i.name&&""==i.email&&""==i.address&&""==i.status||(!function(t){var e,a=new URL($(".export-customer").attr("href"));""!=t.name&&a.searchParams.set("name",t.name),""!=t.email&&a.searchParams.set("email",t.email),""!=t.address&&a.searchParams.set("address",t.address),""!=t.status&&a.searchParams.set("status",t.status),e=a.href,$(".export-customer").attr("href",e)}(i),e())})),$(".btn-reset-search-customer").click((function(){n($("#searchCustomer")),e()})),$(".pagination-container").click(".page-link",(function(e){$(e.target).data("link")&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=$("#lstCustomers");$.ajax({url:e,method:"get",beforeSend:function(){n.html('\n                <div class="loading-table">\n                  <div class="spinner-border text-dark" role="status"></div>\n                </div>')}}).done((function(t){t&&(n.html(t.data),a(t.meta))})).fail((function(t){return t.responseJSON}))}($(e.target).data("link"))})),$("#customerEditAddModal").find("input").each((function(t,e){$(e).on("input",(function(t){""!=$(t.target).val()&&$(t.target)[0].setCustomValidity("")}))}))}))})();