window.onload = () => { displayProductsFromLocalStorage(); };

function displayProductsFromLocalStorage() {
  const container = document.getElementById('productsContainer');
  container.innerHTML = "";
  let totalAll = 0;

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (!key.startsWith('product_')) continue;
    
    let product = JSON.parse(localStorage.getItem(key));
    let linePrice = product.price * (product.quantity || 1);
    totalAll += linePrice;

    container.innerHTML += `
        <div class="col-md-4 product-card" id="card-${product.id}">
            <div class="panel panel-primary">
                <div class="panel-heading text-center"><h3>${product.descraption}</h3></div>
                <div class="panel-body text-center">
                    <b>כמות: ${product.quantity}</b> | <b>צבע: ${product.color}</b>
                    <h4 class="text-primary">₪${linePrice.toFixed(1)}</h4>
                    <button class="btn btn-danger btn-sm" onclick="confirmDelete('${key}')">
                        <span class="glyphicon glyphicon-trash"></span> מחק
                    </button>
                </div>
            </div>
        </div>`;
  }
  updateTotalDisplay(totalAll);
}

function updateTotalDisplay(total) {
    const priceDiv = document.getElementById('totalPrice');
    if (total === 0) {
        priceDiv.innerHTML = `<h4 class="text-danger">הסל ריק</h4><button class="btn btn-primary" onclick="btnhome()">חזרה לחנות</button>`;
    } else {
        priceDiv.innerHTML = `<h3>סה"כ לתשלום: ₪${total.toFixed(1)}</h3>`;
    }
}

function confirmDelete(key) {
    if(confirm("למחוק מוצר זה?")) {
        localStorage.removeItem(key);
        displayProductsFromLocalStorage();
    }
}

function copyUpdatedData() {
  if (localStorage.length === 0) { alert("הסל ריק!"); return; }
  if (!confirm("האם לשלוח את ההזמנה כעת?")) return;

  let orderDetails = "פירוט הזמנה פעמית פלוס:\n";
  let total = 0;

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (!key.startsWith('product_')) continue;
    let p = JSON.parse(localStorage.getItem(key));
    orderDetails += `• ${p.quantity} יח' - ${p.descraption} (${p.color}) - ₪${(p.price * p.quantity).toFixed(1)}\n`;
    total += (p.price * p.quantity);
  }
  orderDetails += `\nסה"כ: ₪${total.toFixed(1)}`;

  // שליחה ל-Google Forms
  const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSccwkhhPQRdj6bafIT0JnKTkW6uS6xnTMEmnd9R05gny0pAqg/viewform";
  const finalURL = `${formURL}?usp=pp_url&entry.1393372309=${encodeURIComponent(orderDetails)}`;
  
  localStorage.clear();
  window.location.href = finalURL;
}