window.onload = function() {
  displayProductsFromLocalStorage();
  calculateTotalPrice();
}

function displayProductsFromLocalStorage() {
  const productsContainer = document.getElementById('productsContainer');
  if (localStorage.length < 1) {
    var productCard = `<h4 class="text-center" style="color:red;">אין מוצרים בסל<h4/>`
    productsContainer.innerHTML = productCard;
  }
  for (let i = 0; i < localStorage.length; i++)
   {
    let key = localStorage.key(i);
    let product = JSON.parse(localStorage.getItem(key));

    let totalProductPrice = product.price * (product.quantity || 1);

    let productCard = `
            <div class="col-md-4 product-card" id="product-${key}">
                <div class="panel panel-info">
                    <div class="panel-heading text-center">
                        <h3>${product.name}</h3>
                    </div>
                    <div class="panel-body text-center">
  <div class="btn-group">
    <button type="button" class="btn btn-danger" onclick="updateQuantity('${key}', -1)">-</button>
    <button type="button" class="btn "><span id="quantity-${key}">${product.quantity || 1}</span></button>
    <button type="button" class="btn btn-success" onclick="updateQuantity('${key}', 1)">+</button>
  </div>
</div>
                    <div class="panel-body text-center">
                        <input type="text" dir="rtl" class="form-control" value="${product.color || 'צבע ברירת מחדל (מה שקיים במלאי) '}" onchange="updateColor('${key}', this)">
                    </div>

                    <div class="panel-footer text-center" style="background:#d9edf7;">
                        <h4 id="productPrice-${key}">${totalProductPrice}₪</h4>
                        <button class="button" onclick="deleteProduct('${key}')">
                        <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                      </button>
                    </div>
                </div>
            </div>
        `;

    productsContainer.innerHTML += productCard;

}
}
function calculateTotalPrice() {
  let totalPrice = 0;

  for (let i = 0; i < localStorage.length; i++) {
    let product = JSON.parse(localStorage.getItem(localStorage.key(i)));
    totalPrice += (product.price * (product.quantity || 1));
  }

  document.getElementById('totalPrice').innerText = totalPrice;
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
  console.log("A")
  const productCard = document.getElementById(`product-${key}`);
  const productName = productCard.querySelector('.panel-heading h3').textContent;

  // Create and display the confirmation modal
  const modal = document.createElement('div');
  modal.classList.add('modal', 'fade', 'in');
  modal.style.display = 'block';
  modal.innerHTML = `
    <div class="modal-dialog" role='dialog'>
      <div class="modal-content ">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="closeM()"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title text-center">מחיקת מוצר</h4>
        </div>
        <div class="modal-body" dir="rtl">
          האם אתה בטוח שברצונך למחוק את המוצר "${productName}" מסל הקניות?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" onclick="closeM()">לא</button>
          <button type="button" class="btn btn-danger" onclick="confirmDeleteProduct('${key}')">כן, מחק</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}
function closeM(){
  const modal = document.querySelector('.modal');
  modal.remove();
}

function confirmDeleteProduct(key) {
  console.log("B",key)
  const modal = document.querySelector('.modal');
  modal.remove(); // Close the modal
let productCard = document.getElementById(`product-${key}`);
// Add fade-out animation using CSS class
  productCard.classList.add('fade-out');

  // Set a timeout to remove the product card after the animation is complete
  setTimeout(() => {
    localStorage.removeItem(key);
    productCard.remove();
    calculateTotalPrice();
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
    copiedData += `${product.quantity || 1} ${product.name} ${product.color ? 'בצבע ' + product.color : ''} ${product.price * (product.quantity || 1)}₪\n`;

    totalSum += product.price * (product.quantity || 1);
  }

  copiedData += `\nסך הכל: ${totalSum}₪`;

  let baseFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSccwkhhPQRdj6bafIT0JnKTkW6uS6xnTMEmnd9R05gny0pAqg/viewform";
  let completeURL = `${baseFormURL}?usp=pp_url&entry.1393372309=${encodeURIComponent(copiedData)}`;
  localStorage.clear();
  window.location.href = completeURL;
}


