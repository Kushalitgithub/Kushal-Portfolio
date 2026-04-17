const artworks = [
    { title: "Sketch 1", cat: "sketch", img: "Elements/Arts/1.jpg" },
    { title: "Sketch 2", cat: "sketch", img: "Elements/Arts/2.jpg" },
    { title: "Sketch 3", cat: "sketch", img: "Elements/Arts/3.jpg" },
    { title: "Sketch 4", cat: "sketch", img: "Elements/Arts/4.jpg" },
    { title: "Sketch 5", cat: "sketch", img: "Elements/Arts/5.jpg" },
    { title: "Sketch 6", cat: "sketch", img: "Elements/Arts/6.jpg" },
    { title: "Sketch 7", cat: "sketch", img: "Elements/Arts/7.jpg" },
    { title: "Sketch 8", cat: "sketch", img: "Elements/Arts/8.jpg" },
    { title: "Sketch 9", cat: "sketch", img: "Elements/Arts/9.jpg" },

];

const projects = [
    {
        title: "Yet to be Published",
        cat: "Coming Soon",
        img: "Elements/comingsoon.jpg",
        link: "#"
    },
    {
        title: "Yet to be Published",
        cat: "Coming Soon",
        img: "Elements/comingsoon.jpg",
        link: "#"
    },
    {
        title: "Yet to be Published",
        cat: "Coming Soon",
        img: "Elements/comingsoon.jpg",
        link: "#"
    },
    {
        title: "Yet to be Published",
        cat: "Coming Soon",
        img: "Elements/comingsoon.jpg",
        link: "#"
    }
];

function renderArt(filter) {
    const grid = document.getElementById('artGrid');
    const filtered = filter === 'all' ? artworks : artworks.filter(a => a.cat === filter);
    grid.innerHTML = filtered.map((a, i) => `
    <div class="art-card fade-up" onclick="openLightbox('${a.img}', '${a.title}', '${a.cat}')"" style="animation-delay:${i * 0.06}s">
        <img src="${a.img}" alt="${a.title}">
    <div class="art-overlay">
        <div class="art-overlay-text">
            <h4>${a.title}</h4>
            <span>${a.cat.charAt(0).toUpperCase() + a.cat.slice(1)}</span>
        </div>
    </div>
    </div>
    `).join('');
    setTimeout(initObserver, 50);
}

function renderProjects() {
    const grid = document.getElementById('projectGrid');

    grid.innerHTML = projects.map((p, i) => `
        <div class="art-card fade-up"onclick="openProjectLink('${p.link}')"
     style="cursor:pointer; animation-delay:${i * 0.06}s">

            <img src="${p.img}" alt="${p.title}">

            <div class="art-overlay">
                <div class="art-overlay-text">
                    <h4>${p.title}</h4>
                    <span>${p.cat}</span>
                </div>
            </div>
        </div>
    `).join('');
}

renderProjects();

function openProjectLink(link) {
    if (link === "#" || !link) {
        alert("🚧 This project is yet to be published. Stay tuned!");
        return;
    }
    window.open(link, "_blank");
}

function openLightbox(img, title, cat) {
    const lb = document.getElementById('lightbox');

    document.getElementById('lightboxImg').innerHTML = `
        <img src="${img}" style="width:100%;height:100%;object-fit:contain;background:#000;">
    `;

    document.getElementById('lightboxTitle').textContent = title;
    document.getElementById('lightboxCat').textContent = cat;

    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
    if (!e || e.target.id === 'lightbox' || e.currentTarget.tagName === 'BUTTON') {
        document.getElementById('lightbox').classList.remove('open');
        document.body.style.overflow = '';
    }
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderArt(this.dataset.filter);
    });
});

renderArt('all');

const _supabase = supabase.createClient(
    'https://qbslqgazdegyyuwseuno.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFic2xxZ2F6ZGVneXl1d3NldW5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0MTAyNDAsImV4cCI6MjA5MTk4NjI0MH0.2DuX5HqNxmAqYhNvY7yKVsGSEvRTOUlQjHgvAbFj22E'
);

async function submitForm() {
    const btn = document.querySelector('.submit-btn');
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!fname || !email || !message) {
        alert('Please fill in your name, email, and message.');
        return;
    }

    btn.textContent = 'Sending...';
    btn.disabled = true;

    const { error } = await _supabase.from('messages').insert({
        first_name: fname,
        last_name: lname,
        email: email,
        subject: subject,
        message: message
    });

    if (error) {
        alert('Something went wrong. Please try again.');
        console.error(error);
        btn.textContent = 'Send Message →';
        btn.disabled = false;
        return;
    }

    document.getElementById('formSuccess').classList.add('show');
    btn.textContent = 'Send Message →';
    btn.disabled = false;

    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';

    setTimeout(() => {
        document.getElementById('formSuccess').classList.remove('show');
    }, 6000);
}

function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMenu() {
    document.getElementById('mobileMenu').classList.remove('open');
}

function initObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(el => {
            if (el.isIntersecting) { el.target.classList.add('visible'); observer.unobserve(el.target); }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-up:not(.visible)').forEach(el => observer.observe(el));
}
initObserver();

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox({}); });