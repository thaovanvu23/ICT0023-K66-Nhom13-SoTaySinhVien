const thamSoUrl = new URLSearchParams(window.location.search);
let tenNguoiDung = thamSoUrl.get("name");

if (!tenNguoiDung) {
  tenNguoiDung = localStorage.getItem("tenNguoiDung");
} else {
  localStorage.setItem("tenNguoiDung", tenNguoiDung);
}

const theHienThiChao = document.getElementById("loiChaoAdmin");

if (tenNguoiDung) {
  theHienThiChao.innerText = "Phòng của " + tenNguoiDung + "!";
}

function doiTen() {
  localStorage.removeItem("tenNguoiDung");
  window.location.href = "index.html";
}
