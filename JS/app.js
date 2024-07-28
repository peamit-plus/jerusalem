function index1() { window.location.href = "../products/index1.html" }
function index2() { window.location.href = "../products/index2.html" }
function index3() { window.location.href = "../products/index3.html" }
function index4() { window.location.href = "../products/index4.html" }
function index5() { window.location.href = "../products/index5.html" }
function index6() { window.location.href = "../products/index6.html" }
function index7() { window.location.href = "../products/index7.html" }
function index8() { window.location.href = "../products/index8.html" }
function index9() { window.location.href = "../products/index9.html" }
function index10() { window.location.href = "../products/index10.html" }
function index11() { window.location.href = "../products/index11.html" }
function index12() { window.location.href = "../products/index12.html" }
function end() { window.location.href = "../page/end.html" }
function btnhome() { window.location.href = "../page/main.html" }
function btnsale() { window.location.href = "../page/sale.html" }
function help() { window.location.href = "../page/help.html" }
function whatsapp() { window.location.assign("https://wa.me/0556610747") }
function searchProductForm() {
  var word = document.getElementById("searchInput").value;
  if (word.length > 0) {
    window.location.href = `https://peamit-plus.github.io/jerusalem/page/search.html?searchInput=${word}`
  }
  else {
    alert("הכנס שם מוצר לחיפוש .")
  }
}

function notfound() { alert("אפשרות זאת לא פעילה בדף הנוכחי") }
function search() { window.location.href = "../page/search.html" }
function resetLocalStorage() {
  // הצגת חלון אישור עם אופציות לביטול ואישור
  var confirmation = confirm("אתה בטוח שברצוך למחוק את כל המוצרים בסל הקניות ?");

  // בדיקה אם המשתמש אישר את הפעולה
  if (confirmation) {
    // הפעולה לאישור
    localStorage.clear();
    addSampleProducts()
  }
  else {
    return
  }
}

function addSampleProducts() {
  var productList = $('#productList');
  productList.empty(); // לוודא שאין פריטים כפולים
  for (var i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let product = JSON.parse(localStorage.getItem(key));

      productList.append(
          '<div class="product-item">' +
          '<strong>' + product.descraption + '</strong>' +
          '<p style="text-align:center;">מחיר: ₪' + product.price + '</p>' +
          '</div>'
      );
  }
}


