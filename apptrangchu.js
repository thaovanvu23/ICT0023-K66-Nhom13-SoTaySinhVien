// 1. Phân tích các tham số trên thanh địa chỉ URL
const thamSoUrl = new URLSearchParams(window.location.search);
let tenNguoiDung = thamSoUrl.get("name");

// Nếu mở trực tiếp Trangchu.html mà không có ?name=, lấy từ localStorage
if (!tenNguoiDung) {
  tenNguoiDung = localStorage.getItem("tenNguoiDung");
} else {
  localStorage.setItem("tenNguoiDung", tenNguoiDung);
}

// 2. Định vị thẻ h1 hiển thị lời chào ở file HTML
const theHienThiChao = document.getElementById("loiChaoAdmin");

// 3. Nếu trên URL có tên, lập tức thay đổi nội dung chữ hiển thị
if (tenNguoiDung) {
  theHienThiChao.innerText = "Phòng của " + tenNguoiDung + "!";
}

function doiTen() {
  localStorage.removeItem("tenNguoiDung");
  window.location.href = "index.html";
}
