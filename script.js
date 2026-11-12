const FIAO_KEY = 'fiaoData_v2';
const iso = (ago = 0) => { const d = new Date(); d.setDate(d.getDate() - ago); return d.toISOString().slice(0, 10); };
function seedData() {
  return {
    blocking: true, nextId: 100,
    customers: [
      { id: 1, name: 'Ramón Batista', phone: '507-6123-4567', limit: 100, debt: 35, history: [
        { d: iso(0), t: 'Milk (2)', a: 8, k: 'credit' }, { d: iso(2), t: 'Detergent', a: 4.5, k: 'credit' },
        { d: iso(6), t: 'Payment received', a: 20, k: 'payment' }, { d: iso(10), t: 'Groceries Pack', a: 12.5, k: 'credit' }] },
      { id: 2, name: 'Ana Pérez', phone: '507-6234-5678', limit: 150, debt: 0, history: [
        { d: iso(3), t: 'Rice & beans', a: 14, k: 'credit' }, { d: iso(3), t: 'Payment received', a: 14, k: 'payment' }] },
      { id: 3, name: 'Luis Gómez', phone: '507-6345-6789', limit: 100, debt: 92, history: [
        { d: iso(1), t: 'Cooking oil', a: 22, k: 'credit' }, { d: iso(9), t: 'Groceries', a: 70, k: 'credit' }] },
      { id: 4, name: 'María Castillo', phone: '507-6456-7890', limit: 200, debt: 48, history: [
        { d: iso(5), t: 'Bread & eggs', a: 18, k: 'credit' }, { d: iso(15), t: 'Soft drinks', a: 30, k: 'credit' }] },
      { id: 5, name: 'Carlos Ríos', phone: '507-6567-8901', limit: 80, debt: 0, history: [
        { d: iso(12), t: 'Sugar', a: 6, k: 'credit' }, { d: iso(11), t: 'Payment received', a: 6, k: 'payment' }] }
    ],
    products: [
      { id: 1, name: 'Sugar', cat: 'Pantry', price: 0.85, stock: 25, unit: 'lb', img: 'https\://img.magnific.com/psd-gratis/primer-plano-cuenco-madera-lleno-arroz-blanco-cocido_191095-79998.jpg?semt=ais_hybrid&w=740&q=80' },
      { id: 2, name: 'Rice', cat: 'Pantry', price: 0.95, stock: 38, unit: 'lb', img: 'https\://img.magnific.com/psd-gratis/primer-plano-cuenco-madera-lleno-arroz-blanco-cocido_191095-79998.jpg?semt=ais_hybrid&w=740&q=80' },
      { id: 3, name: 'White Bread', cat: 'Bakery', price: 1.5, stock: 12, unit: 'unit', img: 'https\://img.magnific.com/psd-gratis/sola-rebanada-pan-marron-dorado_191095-79854.jpg?semt=ais_hybrid&w=740&q=80' },
      { id: 4, name: 'Coca Cola 2L', cat: 'Beverages', price: 2.1, stock: 18, unit: 'unit', img: 'https\://media.gettyimages.com/id/458464735/es/foto/coca-cola.jpg?s=612x612&w=gi&k=20&c=QtFhj6D4-FzKcQjMpufy0X8AZUyMmXecBi9J5hQDYo8=' },
      { id: 5, name: 'Eggs (Dozen)', cat: 'Dairy', price: 3.2, stock: 14, unit: 'dozen', img: 'https\://img.magnific.com/free-psd/single-brown-chicken-egg-with-transparent-background_84443-71961.jpg?semt=ais_hybrid&w=740&q=80' }
    ]
  };
}
const LOCATIONS = [
  { name: "FIA'O Ciudad de Panamá", note: 'Sede principal', lat: 8.9824, lng: -79.5199 },
  { name: "FIA'O Colón", note: 'Atención en tienda', lat: 9.3592, lng: -79.9013 },
  { name: "FIA'O La Chorrera", note: 'Atención en tienda', lat: 8.8741696, lng: -79.8175636, maps: 'https\://www.google.com/maps/@8.8741696,-79.8175636,13z?entry=ttu&g_ep=EgoyMDI2MTEwOS4wIKXMDSoASAFQAw%3D%3D' },
  { name: "FIA'O Penonomé", note: 'Atención en tienda', lat: 8.5167, lng: -80.3567 },
  { name: "FIA'O Chitré", note: 'Atención en tienda', lat: 7.9627, lng: -80.4297 },
  { name: "FIA'O Santiago", note: 'Atención en tienda', lat: 8.1, lng: -80.98 },
  { name: "FIA'O David", note: 'Atención en tienda', lat: 8.4273, lng: -82.4308 },
  { name: "FIA'O Ubicación General", note: 'Vista del mapa', lat: 7.7241625, lng: -80.0411357, maps: 'https\://www.google.com/maps/@7.7241625,-80.0411357,7.13z?entry=ttu&g_ep=EgoyMDI2MTEwOS4wIKXMDSoASAFQAw%3D%3D' }
];
const FAQS = [
  ['Does it work without internet?', 'Your data is saved on this device. The map needs internet to load.'],
  ['How to start using the app?', 'Go to Home, choose a customer, then use Credit to register purchases and payments.'],
  ['Do payment reminders arrive automatically?', 'From Clients you can open a ready-made WhatsApp reminder with one tap.'],
  ['Can I export my reports?', 'Yes. Reports has PDF (print) and Excel (CSV) export buttons.'],
  ["What if a customer doesn't pay?", 'Check the status and pending balance on Clients, then send a reminder.']
];
const I18N = {
  es: { home: 'Inicio', credit: 'Crédito', products: 'Productos', clients: 'Clientes', reports: 'Reportes', map: 'Mapa', contact: 'Contacto', homeTitle: 'Deudas <span>&</span> Pagos', homeSub: 'Gestiona las deudas de tus clientes, registra pagos y controla saldos fácilmente.', creditTitle: 'Gestión de <span>Crédito</span>' },
  en: { home: 'Home', credit: 'Credit', products: 'Products', clients: 'Clients', reports: 'Reports', map: 'Map', contact: 'Contact', homeTitle: 'Debts <span>&</span> Payments', homeSub: 'Manage customer debts, register payments, and track balances easily.', creditTitle: 'Credit <span>Management</span>' }
};
let DB;
try { DB = JSON.parse(localStorage.getItem(FIAO_KEY)) \|\| seedData(); } catch (e) { DB = seedData(); }
const save = () => { try { localStorage.setItem(FIAO_KEY, JSON.stringify(DB)); } catch (e) {} };
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const money = n => 'B/. ' + Number(n).toFixed(2);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&', '<': '<', '>': '>', '"': '"', "'": ''' }[c]));
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const status = c => c.debt <= 0 ? 'On Time' : c.debt / c.limit >= 0.8 ? 'Overdue' : 'Pending';
const customer = id => DB.customers.find(c => c.id == id);
let selected = DB.customers[0]?.id;
const notifs = [];
let toastTimer;
function toast(msg, track = true) {
  const n = $('#notification'); n.textContent = msg; n.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => n.classList.remove('show'), 2800);
  if (track) { notifs.unshift(msg); $('#notifBadge').textContent = Math.min(notifs.length, 9); }
}
function modal(title, fields, onSave) {
  $('#modalTitle').textContent = title;
  $('#modalFields').innerHTML = fields.map(f => \`<label>${f.l}${f.opts
    ? \`<select name="${f.k}">${f.opts.map(o => \`<option ${o == f.v ? 'selected' : ''}>${esc(o)}</option>\`).join('')}</select>\`
    : \`<input name="${f.k}" type="${f.t \|\| 'text'}" step="any" value="${esc(f.v ?? '')}" required>\`}</label>\`).join('');
  $('#modalForm').onsubmit = e => { e.preventDefault(); onSave(Object.fromEntries(new FormData(e.target))); $('#modal').close(); };
  $('#modal').showModal();
}
function download(name, text, type = 'text/csv') {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob(['\ufeff' + text], { type })); a.download = name; a.click();
}
const allTx = () => DB.customers.flatMap(c => c.history.map(h => ({ ...h, name: c.name, cid: c.id }))).sort((a, b) => b.d.localeCompare(a.d));
const histRow = (h, name) => {
  const [y, m, d] = h.d.split('-'); const pay = h.k === 'payment';
  return \`<div class="h-item"><div class="h-date">${+d}<small>${MONTHS[m - 1]}</small></div>
  <div class="h-main">${esc(h.t)}<small>${name ? esc(name) : pay ? 'Abono' : 'Fiado'}</small></div>
  <div class="h-amt ${pay ? 'pay' : ''}">${pay ? '-' : ''}${money(h.a)}</div><span class="tag ${pay ? 'paid' : ''}">${pay ? 'Paid' : 'Pending'}</span></div>\`;
};
let fullHistory = false, fullActivity = false;
function renderSelects() {
  const opts = DB.customers.map(c => \`<option value="${c.id}">${esc(c.name)}</option>\`).join('');
  ['customerSelect', 'creditCustomer', 'paymentCustomer'].forEach(id => { $('#' + id).innerHTML = opts; $('#' + id).value = selected; });
  const cur = $('#reportCustomerFilter').value;
  $('#reportCustomerFilter').innerHTML = '<option value="all">All Customers</option>' + opts; $('#reportCustomerFilter').value = cur \|\| 'all';
}
function renderHome() {
  const c = customer(selected) \|\| DB.customers[0];
  if (!c) { $('#customerName').textContent = 'Sin clientes'; return; }
  const pct = Math.round(c.debt / c.limit * 100), st = status(c);
  $('#customerName').textContent = c.name;
  $('#statusDot').textContent = st === 'On Time' ? '🟢' : st === 'Pending' ? '🟡' : '🔴';
  $('#currentDebt').textContent = money(c.debt); $('#creditLimit').textContent = money(c.limit);
  $('#percentage').textContent = pct + '% used'; $('#limitText').textContent = 'Limit: ' + money(c.limit);
  $('#progressBar').style.width = Math.min(pct, 100) + '%';
  $('#blocking').checked = DB.blocking;
  $('#historyList').innerHTML = c.history.slice(0, fullHistory ? 50 : 4).map(h => histRow(h)).join('') \|\| '<div class="empty">Aún no hay movimientos.</div>';
  $('#historyButton').textContent = fullHistory ? 'Show less ↑' : 'View Full History →';
  const act = allTx().slice(0, fullActivity ? 12 : 3);
  $('#activityList').innerHTML = act.map(a => \`<div class="activity-row"><div>${esc(a.name)}<small>${a.k === 'payment' ? 'Paid ' + money(a.a) : 'New debt ' + money(a.a)}</small></div><small>${a.d === iso(0) ? 'Today' : a.d === iso(1) ? 'Yesterday' : a.d}</small></div>\`).join('');
  $('#activityButton').textContent = fullActivity ? 'Show less ↑' : 'View all activity →';
  const today = allTx().filter(t => t.d === iso(0) && t.k === 'payment').reduce((s, t) => s + t.a, 0);
  $('#ovDebt').textContent = money(DB.customers.reduce((s, x) => s + x.debt, 0));
  $('#ovToday').textContent = money(today);
  $('#ovCust').textContent = DB.customers.filter(x => x.debt > 0).length;
  $('#ovOver').textContent = DB.customers.filter(x => status(x) === 'Overdue').length;
}
function renderProducts() {
  const q = $('#productSearch').value.toLowerCase(), cat = $('#productFilters .active').dataset.cat;
  const list = DB.products.filter(p => (cat === 'All' \|\| p.cat === cat) && p.name.toLowerCase().includes(q));
  
  $('#productGrid').innerHTML = list.map(p => \`<div class="pcard"><div class="pcard-top"><img src="${p.img \|\| 'https\://img.magnific.com/psd-gratis/primer-plano-cuenco-madera-lleno-arroz-blanco-cocido_191095-79998.jpg?semt=ais_hybrid&w=740&q=80'}" alt="${esc(p.name)}" class="pimage">
    <div><span class="pcat">${esc(p.cat)}</span><div class="pname">${esc(p.name)}</div><div class="pprice">${money(p.price)}</div></div></div>
    <div class="pstock"><span>Stock:</span><b>${p.stock} ${esc(p.unit)}</b></div>
    <div class="pactions"><button data-act="editP" data-id="${p.id}">✎ Edit</button><button data-act="delP" data-id="${p.id}">🗑 Delete</button></div></div>\`).join('')
    + '<button class="padd" data-act="addP"><span><b>+</b>Add product<br><small style="font-weight:400">Create a new inventory item</small></span></button>';
  $('#productCount').textContent = DB.products.length;
}
function renderClients() {
  const q = $('#clientSearch').value.toLowerCase(), st = $('#clientFilters .active').dataset.st;
  const list = DB.customers.filter(c => (st === 'All' \|\| status(c) === st) && (c.name.toLowerCase().includes(q) \|\| c.phone.includes(q)));
  $('#clientsTable').innerHTML = list.map(c => { const s = status(c);
    return \`<div class="trow"><div><b>${esc(c.name)}</b><small>${esc(c.phone)}</small></div><div>${c.history.filter(h => h.k === 'credit').length}</div>
    <div class="red"><b>${money(c.debt)}</b></div><div><span class="tag ${s === 'On Time' ? 'ontime' : s === 'Overdue' ? 'overdue' : ''}">${s}</span></div>
    <div><button class="iconbtn" title="WhatsApp" data-act="wa" data-id="${c.id}">💬</button><button class="iconbtn" title="Edit" data-act="editC" data-id="${c.id}">✎</button><button class="iconbtn" title="Delete" data-act="delC" data-id="${c.id}">🗑</button></div></div>\`; }).join('')
    \|\| '<div class="empty">No hay clientes con ese filtro.</div>';
  const c = customer(selected);
  if (c) $('#reminderText').textContent = \`WhatsApp to ${c.name}: “${reminderMsg(c)}”\`;
}
const reminderMsg = c => \`Hola ${c.name.split(' ')[0]}, tienes ${money(c.debt)} pendientes en Minisúper Doña Chela. ¡Te esperamos pronto!\`;
function filteredTx() {
  const f = $('#dateFrom').value, t = $('#dateTo').value, cid = $('#reportCustomerFilter').value;
  return allTx().filter(x => (!f \|\| x.d >= f) && (!t \|\| x.d <= t) && (cid === 'all' \|\| x.cid == cid));
}
function renderReports() {
  const tx = filteredTx(), cr = tx.filter(x => x.k === 'credit'), pay = tx.filter(x => x.k === 'payment');
  const sum = a => a.reduce((s, x) => s + x.a, 0), debt = sum(DB.customers.map(c => ({ a: c.debt })));
  const stats = [['Total Active Credit', money(debt), \`${DB.customers.filter(c => c.debt > 0).length} accounts with balance\`], ['Collected (period)', money(sum(pay)), \`${pay.length} payments\`],
    ['Credit Issued', money(sum(cr)), \`${cr.length} purchases\`], ['Total Customers', DB.customers.length, \`${DB.customers.filter(c => status(c) === 'Overdue').length} overdue\`]];
  $('#reportStats').innerHTML = stats.map(s => \`<div class="rstat"><span>${s[0]}</span><strong>${s[1]}</strong><em>${s[2]}</em></div>\`).join('');
  const weeks = [3, 2, 1, 0].map(w => { const from = iso(w * 7 + 6), to = iso(w * 7);
    const inW = tx.filter(x => x.d >= from && x.d <= to);
    return { l: 'Week ' + (4 - w), c: sum(inW.filter(x => x.k === 'credit')), p: sum(inW.filter(x => x.k === 'payment')) }; });
  const max = Math.max(1, ...weeks.flatMap(w => [w.c, w.p]));
  $('#barChart').innerHTML = weeks.map(w => \`<div class="bgroup"><b class="c-credit" style="height:${w.c / max * 100}%" title="${money(w.c)}"></b><b class="c-pay" style="height:${w.p / max * 100}%" title="${money(w.p)}"></b><b class="c-over" style="height:${Math.max(0, w.c - w.p) / max * 100}%"></b><span>${w.l}</span></div>\`).join('');
  const g = { 'On Time': [0, 'var(--green)'], Pending: [0, 'var(--gold)'], Overdue: [0, 'var(--red-600)'] };
  DB.customers.forEach(c => g[status(c)][0] += c.debt);
  const tot = Math.max(1, debt);
  $('#breakdown').innerHTML = Object.entries(g).map(([k, [v, col]]) => \`<div class="bd"><div><span>${k} (${Math.round(v / tot * 100)}%)</span><span>${money(v)}</span></div><div class="track"><i style="width:${v / tot * 100}%;background:${col}"></i></div></div>\`).join('');
  $('#reportTransactions').innerHTML = tx.slice(0, 12).map(x => \`<div class="trow"><div><b>${esc(x.name)}</b></div><div>${esc(x.t)}</div><div class="${x.k === 'payment' ? '' : 'red'}"><b>${money(x.a)}</b></div><div>${x.d}</div><div><span class="tag ${x.k === 'payment' ? 'paid' : ''}">${x.k === 'payment' ? 'Paid' : 'Credit'}</span></div></div>\`).join('') \|\| '<div class="empty">Sin transacciones en este rango.</div>';
}
function renderFaq() {
  $('#faqList').innerHTML = FAQS.map(f => \`<div class="faq-item"><button class="faq-q"><span>${f[0]}</span><span>+</span></button><div class="faq-a">${f[1]}</div></div>\`).join('');
}
function renderAll() { renderSelects(); renderHome(); renderProducts(); renderClients(); renderReports(); }
let map = null, markers = [];
function initMap() {
  const mapEl = $('#map');
  if (!mapEl) return;
  // Google Maps embed works without the Leaflet JavaScript library.
  const defaultLocation = LOCATIONS[0];
  mapEl.innerHTML = \`<iframe id="fiaoMapFrame"
    title="Mapa de ubicaciones FIA'O"
    width="100%" height="100%" style="border:0; min-height:380px"
    loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"
    src="https\://maps.google.com/maps?q=${defaultLocation.lat},${defaultLocation.lng}&z=7&output=embed"></iframe>\`;
  $('#mapList').innerHTML = LOCATIONS.map((l, i) =>
    \`<button class="map-item" data-i="${i}">📍 ${esc(l.name)}<small>${esc(l.note)}</small></button>\`
  ).join('');
  map = { iframe: $('#fiaoMapFrame') };
}
function focusLoc(i) {
  const l = LOCATIONS[i];
  if (!l) return;
  const frame = $('#fiaoMapFrame');
  if (frame) frame.src = \`https\://maps.google.com/maps?q=${l.lat},${l.lng}&z=14&output=embed\`;
  // Open the selected place in Google Maps from the list when needed.
}
function nearest() {
  if (!map) return toast('El mapa no está disponible.', false);
  if (!navigator.geolocation) return toast('Tu navegador no permite ubicación.', false);
  navigator.geolocation.getCurrentPosition(p => {
    const { latitude: la, longitude: lo } = p.coords;
    let best = 0, bd = 1e9;
    LOCATIONS.forEach((l, i) => { const d = Math.hypot(l.lat - la, l.lng - lo); if (d < bd) { bd = d; best = i; } });
    focusLoc(best); toast('Más cercano: ' + LOCATIONS[best].name, false);
  }, () => toast('No pudimos obtener tu ubicación. Permite el acceso e inténtalo de nuevo.', false));
}
function addCredit() {
  const c = customer($('#creditCustomer').value), a = parseFloat($('#creditAmount').value), t = $('#purchaseDescription').value.trim();
  if (!c \|\| !t \|\| !(a > 0)) return toast('Completa la descripción y un monto mayor a 0.', false);
  if (DB.blocking && c.debt + a > c.limit) return toast(\`Bloqueado: ${c.name} superaría su límite de ${money(c.limit)}.\`);
  c.debt = +(c.debt + a).toFixed(2); c.history.unshift({ d: iso(0), t, a, k: 'credit' });
  selected = c.id; save(); renderAll(); $('#creditAmount').value = ''; $('#purchaseDescription').value = '';
  toast(\`Crédito de ${money(a)} registrado para ${c.name}.\`);
}
function pay(all) {
  const c = customer($('#paymentCustomer').value); if (!c) return;
  const a = all ? c.debt : parseFloat($('#paymentAmount').value);
  if (!(a > 0)) return toast(all ? \`${c.name} no tiene deuda.\` : 'Ingresa un monto mayor a 0.', false);
  if (a > c.debt) return toast(\`El pago excede la deuda (${money(c.debt)}).\`, false);
  c.debt = +(c.debt - a).toFixed(2); c.history.unshift({ d: iso(0), t: 'Payment received', a, k: 'payment' });
  selected = c.id; save(); renderAll(); $('#paymentAmount').value = ''; toast(\`Pago de ${money(a)} registrado para ${c.name}.\`);
}
function clientForm(c) {
  modal(c ? 'Edit client' : 'Add client', [{ k: 'name', l: 'Name', v: c?.name }, { k: 'phone', l: 'Phone', v: c?.phone }, { k: 'limit', l: 'Credit limit (B/.)', t: 'number', v: c?.limit ?? 100 }], f => {
    if (c) Object.assign(c, { name: f.name, phone: f.phone, limit: +f.limit });
    else { const n = { id: DB.nextId++, name: f.name, phone: f.phone, limit: +f.limit, debt: 0, history: [] }; DB.customers.push(n); selected = n.id; }
    save(); renderAll(); toast('Cliente guardado.');
  });
}
function productForm(p) {
  modal(p ? 'Edit product' : 'Add product', [{ k: 'name', l: 'Name', v: p?.name }, { k: 'cat', l: 'Category', opts: ['Pantry', 'Bakery', 'Beverages', 'Dairy'], v: p?.cat },
    { k: 'price', l: 'Price (B/.)', t: 'number', v: p?.price }, { k: 'stock', l: 'Stock', t: 'number', v: p?.stock }, { k: 'unit', l: 'Unit', v: p?.unit ?? 'unit' }], f => {
    const d = { name: f.name, cat: f.cat, price: +f.price, stock: +f.stock, unit: f.unit };
    if (p) Object.assign(p, d); else DB.products.push({ id: DB.nextId++, ...d });
    save(); renderProducts(); toast('Producto guardado.');
  });
}
function whatsapp(c) { window.open(\`https\://wa.me/${c.phone.replace(/\D/g, '')}?text=${encodeURIComponent(reminderMsg(c))}\`, '\_blank', 'noopener'); }
function exportCsv() {
  const rows = [['Customer', 'Description', 'Type', 'Amount', 'Date'], ...filteredTx().map(x => [x.name, x.t, x.k, x.a.toFixed(2), x.d])];
  download('fiao-report.csv', rows.map(r => r.map(v => \`"${String(v).replace(/"/g, '""')}"\`).join(',')).join('\n')); toast('Reporte Excel (CSV) descargado.', false);
}
function sendMessage() {
  const n = $('#contactName').value.trim(), e = $('#contactEmail').value.trim(), m = $('#contactMessage').value.trim();
  if (!n \|\| !/^\S+@\S+\.\S+$/.test(e) \|\| !m) return toast('Completa nombre, un correo válido y tu mensaje.', false);
  location.href = \`mailto:soporte@fiao.app?subject=${encodeURIComponent('Mensaje de ' + n)}&body=${encodeURIComponent(m + '\n\n' + e)}\`;
  toast('Abriendo tu correo para enviar el mensaje…', false);
  ['#contactName', '#contactEmail', '#contactMessage'].forEach(s => $(s).value = '');
}
(function () {
  let mode = 'signin', role = 'owner';
  const msg = $('#authMsg'), accounts = () => { try { return JSON.parse(localStorage.getItem('fiaoAccounts') \|\| '[]'); } catch (e) { return []; } };
  function setMode(m) {
    mode = m; const su = m === 'signup';
    $$('.auth-tabs button').forEach(b => b.classList.toggle('active', b.dataset.mode === m));
    $('#signupExtra').hidden = !su; $('#confirmWrap').hidden = !su;
    $('#authTitle').textContent = su ? 'Crea tu cuenta' : 'Inicia sesión';
    $('#authSub').textContent = su ? 'Empieza a llevar tu negocio con orden.' : 'Tu negocio, justo donde lo dejaste.';
    $('#authSubmit').textContent = su ? 'Crear cuenta' : 'Iniciar sesión'; msg.textContent = '';
  }
  const enter = a => { sessionStorage.setItem('fiaoSession', JSON.stringify({ name: a.name, email: a.email, role: a.role })); document.body.classList.add('authed'); document.body.dataset.role = a.role; };
  $$('.auth-tabs button').forEach(b => b.onclick = () => setMode(b.dataset.mode));
  $$('.auth-roles button').forEach(b => b.onclick = () => { role = b.dataset.role; $$('.auth-roles button').forEach(x => x.classList.toggle('selected', x === b)); });
  $('#demoLogin').onclick = () => enter({ name: 'Demo', email: 'demo@fiao.app', role: 'owner' });
  $('#logoutButton').onclick = () => { sessionStorage.removeItem('fiaoSession'); document.body.classList.remove('authed'); };
  $('#authForm').onsubmit = e => {
    e.preventDefault(); msg.className = 'auth-msg';
    const email = $('#aEmail').value.trim().toLowerCase(), pass = $('#aPass').value, list = accounts();
    if (!/^\S+@\S+\.\S+$/.test(email)) return msg.textContent = 'Escribe un correo válido.';
    if (pass.length < 6) return msg.textContent = 'La contraseña debe tener al menos 6 caracteres.';
    if (mode === 'signup') {
      const name = $('#aName').value.trim();
      if (!name) return msg.textContent = 'Escribe tu nombre completo.';
      if (pass !== $('#aConfirm').value) return msg.textContent = 'Las contraseñas no coinciden.';
      if (list.some(a => a.email === email)) return msg.textContent = 'Ya existe una cuenta con ese correo. Inicia sesión.';
      const acc = { name, email, role, pass }; list.push(acc); localStorage.setItem('fiaoAccounts', JSON.stringify(list)); enter(acc);
    } else {
      const acc = list.find(a => a.email === email && a.pass === pass);
      if (!acc) return msg.textContent = 'Correo o contraseña incorrectos. Si eres nuevo, crea una cuenta.';
      enter(acc);
    }
  };
  try { const s = JSON.parse(sessionStorage.getItem('fiaoSession')); if (s) { document.body.classList.add('authed'); document.body.dataset.role = s.role; } } catch (e) {}
})();
let lang = 'es';
function showPage(p) {
  const id = p === 'map' ? 'map-page' : p;
  $$('.page').forEach(s => s.classList.toggle('active', s.id === id));
  $$('#navLinks button').forEach(b => b.classList.toggle('active', b.dataset.page === p));
  document.body.dataset.page = p; $('#navLinks').classList.remove('open');
  if (p === 'map') initMap();
  if (location.hash !== '#' + p) history.replaceState(null, '', '#' + p);
  window.scrollTo(0, 0);
}
function applyLang() {
  $$('[data-i18n]').forEach(el => { const t = I18N[lang][el.dataset.i18n]; if (t) el.innerHTML = t; });
  $('#langButton').textContent = '🌐 ' + lang.toUpperCase();
}
function init() {
  applyLang(); renderFaq(); renderAll();
  $('#dateFrom').value = iso(30); $('#dateTo').value = iso(0); renderReports();
  $('#navLinks').onclick = e => { const b = e.target.closest('button'); if (b) showPage(b.dataset.page); };
  $('.logo').onclick = () => showPage('home');
  $('#menuButton').onclick = () => $('#navLinks').classList.toggle('open');
  $('#darkButton').onclick = () => document.body.classList.toggle('dark');
  $('#langButton').onclick = () => { lang = lang === 'es' ? 'en' : 'es'; applyLang(); };
  $('#notificationButton').onclick = () => { toast(notifs.length ? notifs.slice(0, 3).join(' • ') : 'No tienes notificaciones nuevas.', false); notifs.length = 0; $('#notifBadge').textContent = 0; };
  $('#customerSelect').onchange = e => { selected = +e.target.value; renderAll(); };
  $('#blocking').onchange = e => { DB.blocking = e.target.checked; save(); toast('Bloqueo automático ' + (DB.blocking ? 'activado.' : 'desactivado.'), false); };
  $('#historyButton').onclick = () => { fullHistory = !fullHistory; renderHome(); };
  $('#activityButton').onclick = () => { fullActivity = !fullActivity; renderHome(); };
  $('#addCredit').onclick = addCredit; $('#registerPayment').onclick = () => pay(false); $('#markPaid').onclick = () => pay(true);
  $('#productSearch').oninput = renderProducts; $('#clientSearch').oninput = renderClients;
  [['#productFilters', renderProducts], ['#clientFilters', renderClients]].forEach(([s, fn]) => $(s).onclick = e => { const b = e.target.closest('.chip'); if (!b) return; $$(s + ' .chip').forEach(x => x.classList.toggle('active', x === b)); fn(); });
  $('#addClient').onclick = () => clientForm();
  $('#sendReminder').onclick = () => { const c = customer(selected); if (c) whatsapp(c); };
  $('#applyFilters').onclick = () => { renderReports(); toast('Filtros aplicados.', false); };
  $('#exportPdf').onclick = () => { showPage('reports'); window.print(); }; $('#exportCsv').onclick = exportCsv;
  $('#sendMessage').onclick = sendMessage; $('#locateMe').onclick = nearest; $('#modalCancel').onclick = () => $('#modal').close();
  $('#mapList').onclick = e => { const b = e.target.closest('.map-item'); if (b) focusLoc(+b.dataset.i); };
  $('#faqList').onclick = e => { const q = e.target.closest('.faq-q'); if (q) { const it = q.parentElement; it.classList.toggle('open'); q.lastElementChild.textContent = it.classList.contains('open') ? '−' : '+'; } };
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-act]'); if (!b) return; const id = +b.dataset.id;
    ({ addP: () => productForm(), editP: () => productForm(DB.products.find(p => p.id === id)),
      delP: () => { if (confirm('¿Eliminar este producto?')) { DB.products = DB.products.filter(p => p.id !== id); save(); renderProducts(); } },
      editC: () => clientForm(customer(id)), wa: () => whatsapp(customer(id)),
      delC: () => { if (confirm('¿Eliminar este cliente y su historial?')) { DB.customers = DB.customers.filter(c => c.id !== id); if (selected === id) selected = DB.customers[0]?.id; save(); renderAll(); } } })[b.dataset.act]?.();
  });
  const start = location.hash.slice(1); showPage(['home', 'credit', 'products', 'clients', 'reports', 'map', 'contact'].includes(start) ? start : 'home');
}
init();
