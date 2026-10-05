const nutDangNhap = document.querySelector('button[type="submit"]');
const oNhapTen = document.getElementById("tenNguoiDung");
const theThongBao = document.getElementById("thongBaoLoi");
const form = document.querySelector("form");

const KEY_TEN = "tenNguoiDung";

const tenDaLuu = localStorage.getItem(KEY_TEN);
if (tenDaLuu) {
  window.location.href = "trangchu.html?name=" + encodeURIComponent(tenDaLuu);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const tenCuaNguoiDung = oNhapTen.value.trim();

  if (tenCuaNguoiDung === "") {
    theThongBao.innerText = "Bạn chưa nhập Tên";
    theThongBao.style.display = "block";
  } else {
    theThongBao.style.display = "none";

    localStorage.setItem(KEY_TEN, tenCuaNguoiDung);

    window.location.href =
      "trangchu.html?name=" + encodeURIComponent(tenCuaNguoiDung);
  }
});
