$(document).ready((function(){var a,n,t,e;a=window.location.href,$("ul.nav > li > a").each((function(){$(this).attr("href")!=a&&""!=$(this).attr("href")||$(this).parent("li").addClass("active")})),n=document.querySelectorAll(".needs-validation"),Array.prototype.slice.call(n).forEach((function(a){a.addEventListener("submit",(function(n){a.checkValidity()||(n.preventDefault(),n.stopPropagation()),a.classList.add("was-validated")}),!1)})),t=$("form.needs-validation"),e={passwd:"Mật khẩu",password:"Mật khẩu",passwd_confirm:"Mật khẩu xác nhận",email:"Email",number_phone:"Số điện thoại",name:"Tên",username:"Tên người dùng",address:"Địa chỉ",name_product:"Tên sản phẩm",price_product:"Giá sản phẩm"},t.each((function(a,n){$(n).find("input.form-control").on("input",(function(a){var n=$(a.target),t=n.val(),i=n.attr("maxlength")?n.attr("maxlength"):191;if(t.length>i?(n.next(".invalid-feedback").text("Không được nhập nhiều hơn "+i+" ký tự"),n.removeClass("is-valid").addClass("is-invalid"),n.val(n.val().slice(0,i))):n.removeClass("is-invalid").addClass("is-valid"),""==t){var s=n.attr("name"),l=e[s]?e[s]:"Trường";n.next(".invalid-feedback").text(l+" không được bỏ trống"),n.removeClass("is-valid").addClass("is-invalid")}else n.removeClass("is-invalid").addClass("is-valid")})),$(".login-form").submit((function(){$(this).find('[type="submit"]').prop("disabled",!1).html("Đăng nhập")}))})),$('[maxlength][type="number"]').on("input",(function(){var a;(a=$(this)).val().length>=a.attr("maxlength")&&a.val(a.val().slice(0,a.attr("maxlength")))})),$.ajaxSetup({headers:{"X-CSRF-Token":$('meta[name="csrf-token"]').attr("content")},beforeSend:function(){$(".loading-submit").removeClass("d-none")},success:function(){$(".loading-submit").addClass("d-none")}})}));