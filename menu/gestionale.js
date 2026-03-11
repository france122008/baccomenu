// Dati iniziali fittizi (rispettando le nuove categorie)
const defaultProducts = [
    { id: 1, name: "Caffè Izzo (Miscela)", qty: 8, minQty: 10, type: "Sfuso", img: "" },
    { id: 2, name: "Latte Intero", qty: 24, minQty: 12, type: "Bevanda", img: "" },
    { id: 3, name: "Gin Tanqueray", qty: 2, minQty: 3, type: "Alcolico", img: "" }
];

let products = JSON.parse(localStorage.getItem('bacco_inventory_v3')) || defaultProducts;
let editingId = null;
let chartInstance = null;

const productListEl = document.getElementById('product-list');
const alertBanner = document.getElementById('alert-banner');
const alertList = document.getElementById('alert-list');
const modalProduct = document.getElementById('modal-product');
const modalReport = document.getElementById('modal-report');
const imgInput = document.getElementById('img-input');
const previewImg = document.getElementById('preview-img');

// Icona SVG generica per le foto mancanti
const imageIconSVG = `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`;

// Icona SVG per il tasto matita
const editIconSVG = `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>`;

function renderProducts() {
    productListEl.innerHTML = '';
    let lowStockItems = [];

    products.forEach(p => {
        const isLow = p.qty <= p.minQty;
        if (isLow) lowStockItems.push(p.name);

        let imgHtml = p.img 
            ? `<img src="${p.img}" alt="${p.name}" class="card-img">`
            : `<div class="card-icon-placeholder">${imageIconSVG}</div>`;

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="card-header">
                ${imgHtml}
                <div class="card-info">
                    <div class="card-name">${p.name}</div>
                    <div class="card-type">${p.type}</div>
                </div>
                
                <div class="card-status-group">
                    <span class="status-badge ${isLow ? 'status-low' : 'status-ok'}">
                        ${isLow ? '⚠️ Basso' : '✓ OK'}
                    </span>
                    <button class="btn-edit" onclick="openModal(${p.id})" title="Modifica">
                        ${editIconSVG}
                    </button>
                </div>
            </div>
            
            <div class="card-stock">
                <span class="stock-label">Scorta Attuale / Minima</span>
                <span class="stock-value">${p.qty} / ${p.minQty}</span>
            </div>
            
            <div class="card-actions">
                <button class="btn-qty minus" onclick="updateQty(${p.id}, -1)">−</button>
                <button class="btn-qty plus" onclick="updateQty(${p.id}, 1)">+</button>
            </div>
        `;
        productListEl.appendChild(card);
    });

    if (lowStockItems.length > 0) {
        alertBanner.classList.remove('hidden');
        alertList.textContent = lowStockItems.join(' • ');
    } else {
        alertBanner.classList.add('hidden');
    }

    localStorage.setItem('bacco_inventory_v3', JSON.stringify(products));
}

window.updateQty = function(id, delta) {
    const prod = products.find(p => p.id === id);
    if (prod) {
        prod.qty += delta;
        if (prod.qty < 0) prod.qty = 0; 
        
        // Tracciamento per il grafico dei più venduti
        if(delta < 0) {
            let usage = JSON.parse(localStorage.getItem('bacco_usage_v3')) || {};
            usage[prod.name] = (usage[prod.name] || 0) + Math.abs(delta);
            localStorage.setItem('bacco_usage_v3', JSON.stringify(usage));
        }
        renderProducts();
    }
};

window.openModal = function(id = null) {
    editingId = id;
    if (id) {
        const p = products.find(p => p.id === id);
        document.getElementById('modal-title').textContent = "Modifica Prodotto";
        document.getElementById('input-name').value = p.name;
        document.getElementById('input-qty').value = p.qty;
        document.getElementById('input-min-qty').value = p.minQty;
        document.getElementById('input-type').value = p.type;
        
        if (p.img) {
            previewImg.src = p.img;
            previewImg.style.display = "block";
        } else {
            previewImg.style.display = "none";
        }
    } else {
        document.getElementById('modal-title').textContent = "Nuovo Prodotto";
        document.getElementById('input-name').value = "";
        document.getElementById('input-qty').value = 0;
        document.getElementById('input-min-qty').value = 10;
        document.getElementById('input-type').value = "Sfuso";
        previewImg.src = "";
        previewImg.style.display = "none";
    }
    modalProduct.classList.remove('hidden');
};

imgInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            previewImg.src = event.target.result;
            previewImg.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('btn-save').addEventListener('click', () => {
    const name = document.getElementById('input-name').value.trim();
    const qty = parseInt(document.getElementById('input-qty').value);
    const minQty = parseInt(document.getElementById('input-min-qty').value);
    const type = document.getElementById('input-type').value;
    const img = previewImg.src;

    if (!name) {
        alert("Inserisci un nome prodotto valido.");
        return;
    }

    if (editingId) {
        const p = products.find(p => p.id === editingId);
        p.name = name; p.qty = qty; p.minQty = minQty; p.type = type; 
        if(img && img !== window.location.href) p.img = img;
    } else {
        products.push({ id: Date.now(), name, qty, minQty, type, img: img !== window.location.href ? img : "" });
    }
    
    modalProduct.classList.add('hidden');
    renderProducts();
});

// Chiusura Modali
document.getElementById('btn-cancel').addEventListener('click', () => modalProduct.classList.add('hidden'));
document.getElementById('btn-cancel-icon').addEventListener('click', () => modalProduct.classList.add('hidden'));
document.getElementById('btn-close-report').addEventListener('click', () => modalReport.classList.add('hidden'));
document.getElementById('btn-add-product').addEventListener('click', () => openModal(null));

// Gestione Modale Grafico (Più Venduti)
document.getElementById('btn-report').addEventListener('click', () => {
    modalReport.classList.remove('hidden');
    
    const usage = JSON.parse(localStorage.getItem('bacco_usage_v3')) || {};
    
    // Converte l'oggetto in array per poterlo ordinare
    const sortedUsage = Object.entries(usage)
        .sort((a, b) => b[1] - a[1]) // Ordina dal più grande al più piccolo
        .slice(0, 5); // Prende solo i top 5 per non affollare il grafico

    // Se non ci sono dati
    if(sortedUsage.length === 0) {
        sortedUsage.push(["Nessun dato", 0]);
    }

    const labels = sortedUsage.map(item => item[0]);
    const data = sortedUsage.map(item => item[1]);

    const ctx = document.getElementById('salesChart').getContext('2d');
    
    if(chartInstance) chartInstance.destroy();

    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Quantità scaricata',
                data: data,
                backgroundColor: '#2563eb', // Colore Accent
                borderRadius: 4,
                barThickness: 30
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, grid: { borderDash: [4, 4] } },
                x: { grid: { display: false } }
            },
            plugins: {
                legend: { display: false },
                tooltip: { padding: 12, cornerRadius: 8 }
            }
        }
    });
});

renderProducts();