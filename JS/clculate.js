window.onload = () => {
  displayProductsFromLocalStorage();
  calculateTotalPrice();
}

function displayProductsFromLocalStorage() {
  const productsContainer = document.getElementById('productsContainer');
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let product = JSON.parse(localStorage.getItem(key));

    let totalProductPrice = product.price * (product.quantity || 1);

    let productCard = `<div class="col-md-4 product-card" id="product-${key}">
    <div class="panel panel-default">
        <div class="panel-heading text-center">
            <h3>${product.descraption}</h3>
        </div>
        <div class="panel-body text-center">
            <h4 id="productPrice-${key}">${totalProductPrice}₪</h4>
            <div class="btn-group" style="margin-bottom: 10px;">
                <button type="button" class="btn btn-default" onclick="updateQuantity('${key}', -1)">-</button>
                <button type="button" class="btn btn-info"><span id="quantity-${key}">${product.quantity || 1}</span></button>
                <button type="button" class="btn btn-default" onclick="updateQuantity('${key}', 1)">+</button>
            </div>
            <div style="margin-top: 10px;">
                <input type="text" dir="rtl" class="form-control" value="${product.color || 'צבע ברירת מחדל (מה שקיים במלאי) '}" onchange="updateColor('${key}', this)">
            </div>
        </div>
        <div class="panel-footer text-center">
            <button class="btn btn-danger" onclick="deleteProduct('${key}')">
                <span class="glyphicon glyphicon-trash"></span> מחק מוצר
            </button>
        </div>
    </div>
</div>
`;

    productsContainer.innerHTML += productCard;

  }
}
function calculateTotalPrice() {
  var totalPrice = 0;
  var totalProduct = 0;

  for (let i = 0; i < localStorage.length; i++) {
    let product = JSON.parse(localStorage.getItem(localStorage.key(i)));
    totalPrice += (product.price * (product.quantity || 1));
  }
  for (let i = 0; i < localStorage.length; i++) {
    let product = JSON.parse(localStorage.getItem(localStorage.key(i)));
    totalProduct += ((product.quantity || 1));
    
  }

  var total;
  if (totalPrice == 0) {
    total = `<h4 class="text-center" style="color:red;">אין מוצרים בסל<h4/>`
  }
  else {
    total = `סה"כ: ${totalPrice}₪ <br/> סה"כ מוצרים בסל : ${totalProduct}`
  }

  document.getElementById('totalPrice').innerHTML = total;
}

function updateQuantity(key, amount) {
  let product = JSON.parse(localStorage.getItem(key));
  let newQuantity = (product.quantity || 0) + amount;

  // בדיקה שהכמות איננה שלילית
  if (newQuantity < 1) {
    return;
  }

  product.quantity = newQuantity;

  let totalProductPrice = product.price * product.quantity;
  document.getElementById(`productPrice-${key}`).innerText = `${totalProductPrice}₪`;

  localStorage.setItem(key, JSON.stringify(product));
  document.getElementById(`quantity-${key}`).innerText = product.quantity;

  calculateTotalPrice();
}

function deleteProduct(key) {
  const productCard = document.getElementById(`product-${key}`);
  const productName = productCard.querySelector('.panel-heading h3').textContent;

  var confirmation = confirm("האם אתה בטוח שברצונך למחוק מוצר זה מסל הקניות ?");

  // בדיקה אם המשתמש אישר את הפעולה
  if (confirmation) {// הפעולה לאישור
    confirmDeleteProduct(`${key}`)
    calculateTotalPrice();
  }
  else {
    return
  }

}
function closeM() {
  const modal = document.querySelector('.modal');
  modal.remove();
}

function confirmDeleteProduct(key) {
  console.log("B", key)
  let productCard = document.getElementById(`product-${key}`);
  productCard.classList.add('fade-out');

  setTimeout(() => {
    localStorage.removeItem(key);
    productCard.remove();
    
  }, 500); // Adjust the time based on your animation duration
}


function copyUpdatedData() {
  if (!confirm(" לידיעתך ! \n אם אתה ממשיך לשלב הבא לא תוכל לחזור שוב ולעדכן את ההזמנה בדוק את עצמך שוב \nהאם אתה רוצה להמשיך לשלב הבא ?")) {
    return; // המשתמש לחץ "ביטול", אז אנחנו מפסיקים את ביצוע הפונקציה
  }

  let copiedData = "";
  let totalSum = 0;

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let product = JSON.parse(localStorage.getItem(key));
    copiedData += `${product.quantity || 1} ${product.descraption} ${product.color ? 'בצבע ' + product.color : ''} ${product.price * (product.quantity || 1)}₪\n`;

    totalSum += product.price * (product.quantity || 1);
  }

  copiedData += `\nסך הכל: ${totalSum}₪`;

  let baseFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSccwkhhPQRdj6bafIT0JnKTkW6uS6xnTMEmnd9R05gny0pAqg/viewform";
  let completeURL = `${baseFormURL}?usp=pp_url&entry.1393372309=${encodeURIComponent(copiedData)}`;
  localStorage.clear();

  window.location.href = completeURL;
}


