// Data section
const CATEGORIES = [
  {icon:'⚡',name:'Electrician'},{icon:'🔧',name:'Plumber'},{icon:'🏥',name:'Doctor'},
  {icon:'📚',name:'Teacher'},{icon:'🔨',name:'Carpenter'},{icon:'🎨',name:'Painter'},
  {icon:'🔩',name:'Welder'},{icon:'🚗',name:'Mechanic'},{icon:'🌿',name:'Gardener'},
  {icon:'💻',name:'Developer'},{icon:'✏️',name:'Designer'},{icon:'🎬',name:'Video Editor'},
  {icon:'📝',name:'Content Writer'},{icon:'🚕',name:'Driver'},{icon:'🔬',name:'Engineer'},
  {icon:'📊',name:'Accountant'},{icon:'🍽️',name:'Chef'},{icon:'💇',name:'Beautician'},
  {icon:'🐾',name:'Vet'},{icon:'📷',name:'Photographer'},
];

const PROVIDERS = [
  {id:1,name:'Arun Mehta',role:'Electrician',city:'Mumbai',exp:8,rate:600,rating:4.9,reviews:124,verified:true,avail:true,icon:'👨‍🔧',bg:'av-purple',bio:'Expert in residential & commercial wiring. Licensed electrician with 8 years of experience.'},
  {id:2,name:'Priya Sharma',role:'Teacher',city:'Delhi',exp:6,rate:400,rating:4.8,reviews:89,verified:true,avail:true,icon:'👩‍🏫',bg:'av-green',bio:'Math & Science tutor for Classes 8-12. CBSE and ICSE specialist.'},
  {id:3,name:'Ramesh Kumar',role:'Plumber',city:'Bengaluru',exp:10,rate:450,rating:4.7,reviews:203,verified:true,avail:true,icon:'👨‍🔧',bg:'av-blue',bio:'Experienced plumber handling leaks, drainage, and bathroom installations.'},
  {id:4,name:'Dr. Sunita Rao',role:'Doctor',city:'Hyderabad',exp:12,rate:1200,rating:4.9,reviews:341,verified:true,avail:false,icon:'👩‍⚕️',bg:'av-pink',bio:'General physician with 12 years of practice. Available for home consultations.'},
  {id:5,name:'Vikram Singh',role:'Carpenter',city:'Jaipur',exp:7,rate:500,rating:4.6,reviews:67,verified:true,avail:true,icon:'👨‍🔨',bg:'av-orange',bio:'Custom furniture, cabinets, and woodwork. Quality work guaranteed.'},
  {id:6,name:'Anjali Patel',role:'Designer',city:'Ahmedabad',exp:4,rate:800,rating:4.8,reviews:56,verified:true,avail:true,icon:'👩‍🎨',bg:'av-teal',bio:'UI/UX and graphic design for brands and startups. Figma expert.'},
  {id:7,name:'Mohan Das',role:'Painter',city:'Chennai',exp:9,rate:350,rating:4.5,reviews:88,verified:false,avail:true,icon:'👨‍🎨',bg:'av-purple',bio:'Interior and exterior painting. Wall textures and waterproofing services.'},
  {id:8,name:'Kavya Nair',role:'Video Editor',city:'Bengaluru',exp:3,rate:700,rating:4.7,reviews:41,verified:true,avail:true,icon:'👩‍💻',bg:'av-pink',bio:'Professional video editing for YouTube, reels, and corporate videos.'},
  {id:9,name:'Suresh Yadav',role:'Mechanic',city:'Kolkata',exp:15,rate:400,rating:4.6,reviews:180,verified:true,avail:true,icon:'🧑‍🔧',bg:'av-orange',bio:'Multi-brand car mechanic. Engine, suspension, AC repair specialists.'},
  {id:10,name:'Divya Menon',role:'Developer',city:'Pune',exp:5,rate:1500,rating:4.9,reviews:32,verified:true,avail:true,icon:'👩‍💻',bg:'av-green',bio:'Full-stack web developer. React, Node.js, and mobile app development.'},
  {id:11,name:'Kiran Bhat',role:'Gardener',city:'Mumbai',exp:6,rate:300,rating:4.4,reviews:54,verified:false,avail:true,icon:'👨‍🌾',bg:'av-teal',bio:'Lawn maintenance, plant care, and landscape design. Balcony gardens specialist.'},
  {id:12,name:'Neha Joshi',role:'Accountant',city:'Delhi',exp:8,rate:900,rating:4.8,reviews:73,verified:true,avail:true,icon:'👩‍💼',bg:'av-blue',bio:'CA-qualified accountant. GST filing, ITR, bookkeeping, and audit.'},
];

const TESTIMONIALS = [
  {q:'Found a brilliant electrician in under 10 minutes. He arrived on time, did excellent work, and charged fairly. Absolutely love this platform!',name:'Meera Kapoor',role:'Customer, Mumbai',icon:'👩'},
  {q:'As a freelance designer, SkillConnect helped me get 15+ new clients in my first month. My income has doubled since joining!',name:'Ravi Tiwari',role:'Designer, Bengaluru',icon:'👨'},
  {q:'Booked a math tutor for my daughter and she went from 60% to 92% in one semester. The verification system gives so much confidence.',name:'Sunita Gupta',role:'Customer, Delhi',icon:'👩'},
];

const CHAT_CONTACTS = [
  {name:'Arun Mehta',role:'Electrician',icon:'👨‍🔧',bg:'av-purple',msgs:[
    {from:'them',text:'Hello! How can I help you today?',time:'10:30 AM'},
    {from:'me',text:'Hi Arun, I need electrical work in my home.',time:'10:31 AM'},
    {from:'them',text:'Sure! When would you like me to come? I am available this Saturday.',time:'10:32 AM'},
    {from:'me',text:'Saturday works. Around 11 AM?',time:'10:33 AM'},
    {from:'them',text:'Perfect! I will confirm the booking. My rate is ₹600/hour. Anything specific I should bring?',time:'10:34 AM'},
  ]},
  {name:'Priya Sharma',role:'Teacher',icon:'👩‍🏫',bg:'av-green',msgs:[
    {from:'them',text:'Hello! I saw your inquiry for Math tuition.',time:'Yesterday'},
    {from:'me',text:'Yes, for Class 10 CBSE. My son needs help.',time:'Yesterday'},
    {from:'them',text:'I specialize in exactly that. I can start next week.',time:'Yesterday'},
  ]},
  {name:'Dr. Sunita Rao',role:'Doctor',icon:'👩‍⚕️',bg:'av-pink',msgs:[
    {from:'them',text:'Thank you for your appointment request.',time:'2 days ago'},
    {from:'me',text:'When can you visit for consultation?',time:'2 days ago'},
  ]},
];

const BOOKINGS_PROVIDER = [
  {name:'Ravi Tiwari',desc:'Electrical wiring — Living room',time:'Feb 25, 2026 • 11:00 AM',status:'pending',icon:'👨',bg:'av-blue'},
  {name:'Meena Sharma',desc:'Fan installation & switchboard repair',time:'Feb 24, 2026 • 2:00 PM',status:'accepted',icon:'👩',bg:'av-green'},
  {name:'Anjali Singh',desc:'New socket installation — Kitchen',time:'Feb 22, 2026 • 10:00 AM',status:'completed',icon:'👩',bg:'av-teal'},
  {name:'Rohit Gupta',desc:'Circuit breaker replacement',time:'Feb 20, 2026 • 3:00 PM',status:'completed',icon:'👨',bg:'av-orange'},
];

const BOOKINGS_CUSTOMER = [
  {name:'Arun Mehta',desc:'Electrician — Home wiring fix',time:'Feb 25, 2026 • 11:00 AM',status:'pending',icon:'👨‍🔧',bg:'av-purple'},
  {name:'Ramesh Kumar',desc:'Plumber — Pipe leak repair',time:'Feb 20, 2026 • 9:00 AM',status:'completed',icon:'👨‍🔧',bg:'av-blue'},
  {name:'Priya Sharma',desc:'Math Tuition — Class 10',time:'Feb 18, 2026 • 5:00 PM',status:'accepted',icon:'👩‍🏫',bg:'av-green'},
];

 
let currentUser = null;
let currentRating = 0;
let activeChatIdx = 0;
let searchResults = [];
let currentPage = 1;
const PAGE_SIZE = 6;

function init() {
  renderCategories();
  renderFeaturedProviders();
  renderTestimonials();
  renderSearch(PROVIDERS);
  initChat();
  initAdmin();
  renderEarningsChart();
  renderCalendar();
  updateNavForUser();
  // Set today as min date for booking
  document.getElementById('bookDate').min = new Date().toISOString().split('T')[0];
}


function showPage(p) {
  document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
  document.getElementById('page-' + p).classList.add('active');
  window.scrollTo(0,0);

  if (p === 'search') renderSearchPage();
  if (p === 'dashboard' && !currentUser) { openModal('authModal'); showPage('home'); }
  if (p === 'admin' && (!currentUser || currentUser.role !== 'admin')) { toast('⚠ Admin access required'); showPage('home'); }
  if (p === 'dashboard') renderDashboard();
}


function renderCategories() {
  const el = document.getElementById('catsGrid');
  el.innerHTML = CATEGORIES.map(c => `
    <div class="cat-card" onclick="searchByCategory('${c.name}')">
      <div class="cat-icon">${c.icon}</div>
      <div class="cat-name">${c.name}</div>
    </div>
  `).join('');

  // populate filter dropdown
  const sel = document.getElementById('filterCat');
  CATEGORIES.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.name; opt.textContent = c.name;
    sel.appendChild(opt);
  });

  // Admin cats
  renderAdminCats();
}

function searchByCategory(cat) {
  document.getElementById('filterCat').value = cat;
  showPage('search');
  applyFilters();
}


function providerCard(p) {
  const stars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5-Math.round(p.rating));
  return `
    <div class="provider-card">
      <div class="provider-header">
        <div class="provider-avatar ${p.bg}">
          ${p.icon}
          ${p.verified ? '<div class="verified-badge">✓</div>' : ''}
        </div>
        <div>
          <div class="provider-name">${p.name}</div>
          <div class="provider-role">${p.role}</div>
        </div>
      </div>
      <div class="provider-meta">
        <span class="meta-tag">📍 ${p.city}</span>
        <span class="meta-tag">⏱ ${p.exp} yrs exp</span>
        <span class="meta-tag">₹${p.rate}/hr</span>
        ${p.avail ? '<span class="meta-tag" style="color:var(--success);border-color:rgba(67,233,123,0.3)">● Available</span>' : '<span class="meta-tag" style="color:var(--text3)">○ Busy</span>'}
      </div>
      <div class="provider-stats">
        <div class="pstat"><div class="pstat-val stars">${stars}</div><div class="pstat-label">${p.rating}</div></div>
        <div class="pstat"><div class="pstat-val">${p.reviews}</div><div class="pstat-label">Reviews</div></div>
        <div class="pstat"><div class="pstat-val">${p.exp}</div><div class="pstat-label">Years</div></div>
      </div>
      <div class="provider-actions">
        <button class="btn btn-secondary" onclick="viewProvider(${p.id})">View Profile</button>
        <button class="btn btn-primary" onclick="openBooking(${p.id})">Book Now</button>
      </div>
    </div>
  `;
}

function renderFeaturedProviders() {
  document.getElementById('featuredProviders').innerHTML =
    PROVIDERS.filter(p => p.rating >= 4.7).slice(0,6).map(providerCard).join('');
}


function renderTestimonials() {
  document.getElementById('testiGrid').innerHTML = TESTIMONIALS.map(t => `
    <div class="testi-card">
      <div class="testi-quote">"${t.q}"</div>
      <div class="testi-author">
        <div class="testi-avatar av-purple">${t.icon}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-role">${t.role}</div>
        </div>
        <div style="margin-left:auto;color:var(--gold);font-size:13px">★★★★★</div>
      </div>
    </div>
  `).join('');
}


function doSearch() {
  const q = document.getElementById('heroSearch').value.toLowerCase();
  const city = document.getElementById('heroCity').value;
  if (city) document.getElementById('filterCity').value = city;
  if (q) {
    // Find matching category
    const match = CATEGORIES.find(c => c.name.toLowerCase().includes(q));
    if (match) document.getElementById('filterCat').value = match.name;
  }
  showPage('search');
  applyFilters();
}

function applyFilters() {
  const cat = document.getElementById('filterCat').value;
  const city = document.getElementById('filterCity').value;
  const minRating = parseFloat(document.getElementById('filterRating').value) || 0;
  const maxPrice = parseFloat(document.getElementById('filterPrice').value) || Infinity;
  const sort = document.getElementById('filterSort').value;

  let results = PROVIDERS.filter(p => {
    if (cat && p.role !== cat) return false;
    if (city && p.city !== city) return false;
    if (p.rating < minRating) return false;
    if (p.rate > maxPrice) return false;
    return true;
  });

  if (sort === 'rating') results.sort((a,b) => b.rating - a.rating);
  else if (sort === 'price_low') results.sort((a,b) => a.rate - b.rate);
  else if (sort === 'price_high') results.sort((a,b) => b.rate - a.rate);
  else if (sort === 'exp') results.sort((a,b) => b.exp - a.exp);

  searchResults = results;
  currentPage = 1;
  renderSearchPage();
}

function renderSearchPage() {
  const filtered = searchResults.length ? searchResults : PROVIDERS;
  const total = filtered.length;
  const start = (currentPage-1) * PAGE_SIZE;
  const paged = filtered.slice(start, start + PAGE_SIZE);

  document.getElementById('searchTitle').textContent = 'Showing Experts';
  document.getElementById('searchCount').textContent = `${total} experts found`;
  document.getElementById('searchResults').innerHTML = paged.length
    ? paged.map(providerCard).join('')
    : `<div class="empty-state"><div class="empty-icon">🔍</div><div class="empty-title">No experts found</div><div class="empty-desc">Try changing your filters</div></div>`;

  // Pagination
  const pages = Math.ceil(total / PAGE_SIZE);
  const pg = document.getElementById('pagination');
  pg.innerHTML = '';
  for (let i=1; i<=pages; i++) {
    const b = document.createElement('button');
    b.className = 'page-btn' + (i===currentPage ? ' active' : '');
    b.textContent = i;
    b.onclick = () => { currentPage = i; renderSearchPage(); window.scrollTo(0,0); };
    pg.appendChild(b);
  }
}


function viewProvider(id) {
  const p = PROVIDERS.find(x => x.id === id);
  if (!p) return;
  const stars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5-Math.round(p.rating));

  document.getElementById('providerModalContent').innerHTML = `
    <div class="profile-header">
      <div class="profile-avatar-lg ${p.bg}">${p.icon}</div>
      <div>
        <div style="display:flex;align-items:center;gap:10px">
          <div class="profile-name">${p.name}</div>
          ${p.verified ? '<span style="background:rgba(67,233,123,0.15);color:var(--success);border:1px solid rgba(67,233,123,0.3);padding:3px 10px;border-radius:100px;font-size:11px;font-weight:600">✓ Verified</span>' : ''}
        </div>
        <div class="profile-role">${p.role}</div>
        <div class="profile-badges" style="margin-top:12px">
          <span class="profile-badge" style="background:rgba(108,99,255,0.15);color:var(--accent)">📍 ${p.city}</span>
          <span class="profile-badge" style="background:var(--bg3);color:var(--text2)">⏱ ${p.exp} years exp</span>
          <span class="profile-badge" style="background:rgba(67,233,123,0.15);color:var(--success)">₹${p.rate}/hour</span>
          <span class="profile-badge" style="background:rgba(255,215,0,0.15);color:var(--gold)">★ ${p.rating} (${p.reviews})</span>
        </div>
      </div>
    </div>

    <div style="margin-bottom:24px">
      <h3 style="font-size:16px;font-weight:700;margin-bottom:10px">About</h3>
      <p style="color:var(--text2);font-size:14px;line-height:1.7">${p.bio}</p>
    </div>

    <div style="margin-bottom:24px">
      <h3 style="font-size:16px;font-weight:700;margin-bottom:12px">Reviews</h3>
      <div class="review-item">
        <div class="review-header">
          <div class="review-avatar av-blue">👨</div>
          <div>
            <div class="review-name">Ajay Verma</div>
            <div class="review-date">Feb 10, 2026</div>
          </div>
          <div style="margin-left:auto;color:var(--gold)">★★★★★</div>
        </div>
        <div class="review-text">Excellent work! Very professional and completed the job faster than expected. Would highly recommend.</div>
      </div>
      <div class="review-item">
        <div class="review-header">
          <div class="review-avatar av-pink">👩</div>
          <div>
            <div class="review-name">Pooja Iyer</div>
            <div class="review-date">Jan 28, 2026</div>
          </div>
          <div style="margin-left:auto;color:var(--gold)">★★★★☆</div>
        </div>
        <div class="review-text">Good service, came on time. The pricing was fair. Minor communication issue but overall happy.</div>
      </div>
    </div>

    <div style="display:flex;gap:12px">
      <button class="btn btn-secondary" onclick="closeModal('providerModal');openChat('${p.name}')">💬 Chat</button>
      <button class="btn btn-primary" onclick="closeModal('providerModal');openBooking(${p.id})">📅 Book Now</button>
      <button class="btn btn-secondary" onclick="openModal('reviewModal')">⭐ Review</button>
    </div>
  `;
  openModal('providerModal');
}

function openChat(name) {
  showPage('chat');
}

// Boking
function openBooking(id) {
  const p = PROVIDERS.find(x => x.id === id);
  if (!p) return;
  if (!currentUser) {
    toast('⚠ Please login to book');
    openModal('authModal');
    return;
  }
  document.getElementById('bookModalSub').textContent = `Book ${p.name} — ${p.role} @ ₹${p.rate}/hr`;
  openModal('bookModal');
}

function confirmBooking() {
  const service = document.getElementById('bookService').value;
  const date = document.getElementById('bookDate').value;
  if (!service || !date) { toast('⚠ Please fill all required fields'); return; }
  closeModal('bookModal');
  toast('✅ Booking confirmed! You will receive an SMS confirmation.');
}

//DashBoard

function renderDashboard() {
  if (!currentUser) return;
  const isProvider = currentUser.role === 'provider';
  document.getElementById('dashTitle').textContent = `Welcome, ${currentUser.name} 👋`;
  document.getElementById('dashSub').textContent = isProvider ? 'Service Provider Dashboard' : 'Customer Dashboard';
  document.getElementById('earningsTab').style.display = isProvider ? '' : 'none';

  // KPIs
  if (isProvider) {
    document.getElementById('kpiGrid').innerHTML = `
      <div class="kpi-card"><div class="kpi-icon">📋</div><div class="kpi-val">12</div><div class="kpi-label">Total Bookings</div><div class="kpi-change">▲ 3 new this week</div></div>
      <div class="kpi-card"><div class="kpi-icon">⏳</div><div class="kpi-val">2</div><div class="kpi-label">Pending Requests</div></div>
      <div class="kpi-card"><div class="kpi-icon">💰</div><div class="kpi-val">₹24,500</div><div class="kpi-label">This Month</div><div class="kpi-change">▲ 18%</div></div>
      <div class="kpi-card"><div class="kpi-icon">⭐</div><div class="kpi-val">4.8</div><div class="kpi-label">Avg. Rating</div></div>
    `;
  } else {
    document.getElementById('kpiGrid').innerHTML = `
      <div class="kpi-card"><div class="kpi-icon">📋</div><div class="kpi-val">3</div><div class="kpi-label">Total Bookings</div></div>
      <div class="kpi-card"><div class="kpi-icon">⏳</div><div class="kpi-val">1</div><div class="kpi-label">Pending</div></div>
      <div class="kpi-card"><div class="kpi-icon">✅</div><div class="kpi-val">2</div><div class="kpi-label">Completed</div></div>
      <div class="kpi-card"><div class="kpi-icon">❤️</div><div class="kpi-val">5</div><div class="kpi-label">Saved Experts</div></div>
    `;
  }

  // Bookings
  const bookings = isProvider ? BOOKINGS_PROVIDER : BOOKINGS_CUSTOMER;
  document.getElementById('bookingList').innerHTML = bookings.map(b => `
    <div class="booking-item">
      <div class="booking-avatar ${b.bg}">${b.icon}</div>
      <div class="booking-info">
        <div class="booking-name">${b.name}</div>
        <div class="booking-desc">${b.desc}</div>
        <div class="booking-time">🗓 ${b.time}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
        <span class="status-badge status-${b.status}">${b.status.charAt(0).toUpperCase()+b.status.slice(1)}</span>
        ${b.status === 'pending' && isProvider ? `
          <div style="display:flex;gap:6px">
            <button class="btn btn-success" style="padding:5px 12px;font-size:11px" onclick="toast('✅ Booking accepted!')">Accept</button>
            <button class="btn btn-danger" style="padding:5px 12px;font-size:11px" onclick="toast('❌ Booking rejected')">Reject</button>
          </div>
        ` : ''}
        ${b.status === 'completed' && !isProvider ? `
          <button class="btn btn-secondary" style="padding:5px 12px;font-size:11px" onclick="openModal('reviewModal')">⭐ Review</button>
        ` : ''}
      </div>
    </div>
  `).join('');
}

//Earninig 

function renderEarningsChart() {
  const months = ['Aug','Sep','Oct','Nov','Dec','Jan','Feb'];
  const vals = [18000,21000,19500,23000,20000,22000,24500];
  const max = Math.max(...vals);
  document.getElementById('earningsChart').innerHTML = months.map((m,i) => `
    <div class="chart-bar-wrap">
      <div class="chart-val">₹${(vals[i]/1000).toFixed(0)}K</div>
      <div class="chart-bar" style="height:${(vals[i]/max)*90}%"></div>
      <div class="chart-label">${m}</div>
    </div>
  `).join('');
}

//Calender

function renderCalendar() {
  const days = ['S','M','T','W','T','F','S'];
  const bookedDays = [5,10,14,18,22,25,26];
  const today = 23;
  let html = days.map(d => `<div class="cal-header">${d}</div>`).join('');
  // Feb 2026 starts on Sunday
  for (let i=0; i<28; i++) {
    const d = i+1;
    const cls = d === today ? 'today' : bookedDays.includes(d) ? 'has-booking' : '';
    html += `<div class="cal-day ${cls}">${d}</div>`;
  }
  document.getElementById('calGrid').innerHTML = html;
}

//Chats

function initChat() {
  document.getElementById('chatContacts').innerHTML = CHAT_CONTACTS.map((c,i) => `
    <div class="chat-contact ${i===0?'active':''}" onclick="switchChat(${i})">
      <div class="chat-contact-avatar ${c.bg}">${c.icon}</div>
      <div>
        <div class="chat-contact-name">${c.name}</div>
        <div class="chat-contact-msg">${c.role}</div>
      </div>
    </div>
  `).join('');
  renderChatMessages(0);
}

function switchChat(idx) {
  activeChatIdx = idx;
  document.querySelectorAll('.chat-contact').forEach((el,i) => {
    el.classList.toggle('active', i===idx);
  });
  const c = CHAT_CONTACTS[idx];
  document.getElementById('chatHeader').innerHTML = `
    <div class="chat-contact-avatar ${c.bg}" style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px">${c.icon}</div>
    <div>
      <div class="chat-contact-name">${c.name}</div>
      <div style="font-size:12px;color:var(--success)">● Online</div>
    </div>
  `;
  renderChatMessages(idx);
}

function renderChatMessages(idx) {
  const msgs = CHAT_CONTACTS[idx].msgs;
  document.getElementById('chatMessages').innerHTML = msgs.map(m => `
    <div class="msg ${m.from==='me'?'sent':'recv'}">
      <div class="msg-bubble">${m.text}</div>
      <div class="msg-time">${m.time}</div>
    </div>
  `).join('');
  const el = document.getElementById('chatMessages');
  el.scrollTop = el.scrollHeight;
}

function sendMsg() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  if (!currentUser) { toast('⚠ Please login to send messages'); openModal('authModal'); return; }

  CHAT_CONTACTS[activeChatIdx].msgs.push({from:'me',text,time:'Now'});
  renderChatMessages(activeChatIdx);
  input.value = '';

  // Auto reply
  setTimeout(() => {
    CHAT_CONTACTS[activeChatIdx].msgs.push({from:'them',text:'Thanks for your message! I will get back to you shortly.',time:'Now'});
    renderChatMessages(activeChatIdx);
  }, 1000);
}
//Admin

function initAdmin() {
  // Providers table
  document.getElementById('adminProvidersTable').innerHTML = `
    <thead><tr>
      <th>Provider</th><th>Category</th><th>City</th><th>Rating</th><th>Status</th><th>Actions</th>
    </tr></thead>
    <tbody>
      ${PROVIDERS.slice(0,8).map(p => `<tr>
        <td><div style="display:flex;align-items:center;gap:10px">
          <div class="provider-avatar ${p.bg}" style="width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px">${p.icon}</div>
          <div><div style="font-weight:600">${p.name}</div></div>
        </div></td>
        <td>${p.role}</td>
        <td>${p.city}</td>
        <td><span style="color:var(--gold)">★</span> ${p.rating}</td>
        <td><span class="status-badge ${p.verified?'status-accepted':'status-pending'}">${p.verified?'Verified':'Pending'}</span></td>
        <td><div style="display:flex;gap:6px">
          <button class="btn btn-success" style="padding:4px 10px;font-size:11px" onclick="toast('✅ Provider approved!')">Approve</button>
          <button class="btn btn-danger" style="padding:4px 10px;font-size:11px" onclick="toast('❌ Provider removed')">Remove</button>
        </div></td>
      </tr>`).join('')}
    </tbody>
  `;

  // Users table
  document.getElementById('adminUsersTable').innerHTML = `
    <thead><tr><th>Name</th><th>Email</th><th>Joined</th><th>Bookings</th><th>Actions</th></tr></thead>
    <tbody>
      ${['Meera Kapoor','Ravi Tiwari','Sunita Gupta','Ajay Verma','Pooja Iyer'].map((name,i) => `<tr>
        <td><strong>${name}</strong></td>
        <td>${name.toLowerCase().replace(' ','.')}@email.com</td>
        <td>Jan ${i+10}, 2026</td>
        <td>${[3,7,2,5,1][i]}</td>
        <td><button class="btn btn-danger" style="padding:4px 10px;font-size:11px" onclick="toast('User blocked')">Block</button></td>
      </tr>`).join('')}
    </tbody>
  `;

  // Reports table
  document.getElementById('adminReportsTable').innerHTML = `
    <thead><tr><th>Reporter</th><th>Reported</th><th>Reason</th><th>Date</th><th>Action</th></tr></thead>
    <tbody>
      <tr><td>Ajay V.</td><td>Unknown Provider</td><td>Fake profile</td><td>Feb 20</td><td><button class="btn btn-danger" style="padding:4px 10px;font-size:11px" onclick="toast('Resolved!')">Resolve</button></td></tr>
      <tr><td>Pooja I.</td><td>Mechanic X</td><td>Didn't show up</td><td>Feb 18</td><td><button class="btn btn-danger" style="padding:4px 10px;font-size:11px" onclick="toast('Resolved!')">Resolve</button></td></tr>
    </tbody>
  `;

  renderAdminCats();
}

function renderAdminCats() {
  const el = document.getElementById('adminCatsGrid');
  if (!el) return;
  el.innerHTML = CATEGORIES.map((c,i) => `
    <div class="cat-card" style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px">
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:20px">${c.icon}</span>
        <span style="font-size:14px;font-weight:500">${c.name}</span>
      </div>
      <button onclick="removeCategory(${i})" style="background:none;border:none;color:var(--text3);cursor:pointer;font-size:16px" title="Remove">✕</button>
    </div>
  `).join('');
}

function addCategory() {
  const input = document.getElementById('newCatInput');
  const name = input.value.trim();
  if (!name) return;
  CATEGORIES.push({icon:'🔧', name});
  input.value = '';
  renderAdminCats();
  renderCategories();
  toast('✅ Category added!');
}

function removeCategory(i) {
  CATEGORIES.splice(i, 1);
  renderAdminCats();
  renderCategories();
  toast('Category removed');
}

//Authentication

function doLogin() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPass').value;
  const role = document.getElementById('loginRole').value;
  if (!email || !pass) { toast('⚠ Please fill all fields'); return; }

  currentUser = {
    name: role === 'admin' ? 'Admin' : role === 'provider' ? 'Rahul Sharma' : 'Meera Kapoor',
    role,
    email
  };
  closeModal('authModal');
  updateNavForUser();
  toast(`✅ Welcome ${currentUser.name}!`);
  showPage('dashboard');
}

function doRegister() {
  currentUser = { name: 'New User', role: document.getElementById('regRole').value, email: 'new@user.com' };
  closeModal('authModal');
  updateNavForUser();
  toast('✅ Account created! Welcome to SkillConnect!');
  showPage('dashboard');
}

function logout() {
  currentUser = null;
  updateNavForUser();
  showPage('home');
  toast('👋 Logged out successfully');
}

function updateNavForUser() {
  const loggedIn = !!currentUser;
  const loginNav = document.getElementById('loginNav');
  const logoutNav = document.getElementById('logoutNav');
  const dashNav = document.getElementById('dashNav');
  const adminNav = document.getElementById('adminNav');

  loginNav.classList.toggle('hidden', loggedIn);
  logoutNav.classList.toggle('hidden', !loggedIn);
  dashNav.classList.toggle('hidden', !loggedIn);
  adminNav.classList.toggle('hidden', !(loggedIn && currentUser.role === 'admin'));
}

function toggleProviderFields() {
  const role = document.getElementById('regRole').value;
  document.getElementById('providerFields').style.display = role === 'provider' ? 'block' : 'none';
}

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach((el,i) => el.classList.toggle('active', (i===0&&tab==='login')||(i===1&&tab==='register')));
  document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('registerForm').style.display = tab === 'register' ? 'block' : 'none';
}

//Model

function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

//Review

function setRating(val) {
  currentRating = val;
  document.querySelectorAll('.rating-star').forEach((el,i) => el.classList.toggle('active', i < val));
}

function submitReview() {
  if (!currentRating) { toast('⚠ Please select a rating'); return; }
  closeModal('reviewModal');
  toast('⭐ Review submitted! Thank you for your feedback.');
  currentRating = 0;
}


function switchTab(el, id) {
  const parent = el.closest('.tabs').parentElement;
  parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  parent.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
  const target = parent.querySelector('#tc-' + id);
  if (target) target.classList.add('active');
}


function saveProfile() {
  toast('✅ Profile saved successfully!');
}


function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
}


document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
  }
});

init();