window.onload = () => { displayProductsFromLocalStorage(); };

function displayProductsFromLocalStorage() {
  const container = document.getElementById('productsContainer');
  if(!container) return;
  container.innerHTML = "";
  let totalAll = 0;

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (!key.startsWith('product_')) continue;
    let p = JSON.parse(localStorage.getItem(key));
    let linePrice = p.price * (p.quantity || 1);
    totalAll += linePrice;

    container.innerHTML += `
        <div class="col-md-4 col-xs-12 product-card" id="card-${p.id}">
            <div class="panel panel-primary">
                <div class="panel-heading text-center"><h3>${p.descraption}</h3></div>
                <div class="panel-body text-center">
                    <div class="btn-group">
                        <button class="btn btn-default" onclick="updateQty('${key}', -1)">-</button>
                        <button class="btn btn-link" disabled><b>${p.quantity}</b></button>
                        <button class="btn btn-default" onclick="updateQty('${key}', 1)">+</button>
                    </div>
                    <hr/>
                    <input type="text" class="form-control" value="${p.color}" onchange="updateColor('${key}', this.value)">
                    <h4 class="text-primary">₪${linePrice.toFixed(1)}</h4>
                    <button class="btn btn-danger" onclick="confirmDelete('${key}')">מחק מוצר</button>
                </div>
            </div>
        </div>`;
  }
  updatePriceDisplay(totalAll);
}

function updateQty(key, amt) {
    let p = JSON.parse(localStorage.getItem(key));
    p.quantity = Math.max(1, p.quantity + amt);
    localStorage.setItem(key, JSON.stringify(p));
    displayProductsFromLocalStorage();
}

function updateColor(key, val) {
    let p = JSON.parse(localStorage.getItem(key));
    p.color = val;
    localStorage.setItem(key, JSON.stringify(p));
}

function confirmDelete(key) { if(confirm("למחוק?")) { localStorage.removeItem(key); displayProductsFromLocalStorage(); } }

function updatePriceDisplay(total) {
    const el = document.getElementById('totalPrice');
    if(!el) return;
    if (total === 0) el.innerHTML = `<h4>הסל ריק</h4><button onclick="btnhome()" class="btn btn-primary">חזרה לחנות</button>`;
    else el.innerHTML = `<h3>סה"כ: ₪${total.toFixed(1)}</h3>`;
}

function copyUpdatedData() {
  if (!confirm("לשלוח הזמנה?")) return;
  let order = "הזמנה מפעמית פלוס:\n";
  let total = 0;
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.startsWith('product_')) {
      let p = JSON.parse(localStorage.getItem(key));
      order += `• ${p.quantity} יח' - ${p.descraption} (${p.color}) - ₪${(p.price * p.quantity).toFixed(1)}\n`;
      total += p.price * p.quantity;
    }
  }
  order += `\nסה"כ: ₪${total.toFixed(1)}`;
  const url = "https://docs.google.com/forms/d/e/1FAIpQLSccwkhhPQRdj6bafIT0JnKTkW6uS6xnTMEmnd9R05gny0pAqg/viewform";
  localStorage.clear();
  window.location.href = `${url}?usp=pp_url&entry.1393372309=${encodeURIComponent(order)}`;
}