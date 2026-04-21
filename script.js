/* ── SUPABASE CLIENT ── */
const _supabase = supabase.createClient(
    'https://qbslqgazdegyyuwseuno.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFic2xxZ2F6ZGVneXl1d3NldW5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0MTAyNDAsImV4cCI6MjA5MTk4NjI0MH0.2DuX5HqNxmAqYhNvY7yKVsGSEvRTOUlQjHgvAbFj22E'
);

/* ── GITHUB CONFIG ── */
const GITHUB_USER = 'Kushalitgithub'; // ← your GitHub username

/* ── PINTEREST BOARDS ── replace URLs with your actual Pinterest board links */
const pinterestBoards = [
    {
        title: "Sketch 1",
        description: "Expressive pencil sketches capturing emotions and stories",
        url: "https://www.pinterest.com/kushalbhattarai100/?actingBusinessId=1140114599325219118", // ← replace
        cover: "Elements/Arts/1.jpg"
    },
    {
        title: "Sketch 2",
        description: "Expressive pencil sketches capturing emotions and stories",
        url: "https://www.pinterest.com/kushalbhattarai100/?actingBusinessId=1140114599325219118", // ← replace
        cover: "Elements/Arts/2.jpg"
    },
    {
        title: "Sketch 3",
        description: "Expressive pencil sketches capturing emotions and stories",
        url: "https://www.pinterest.com/kushalbhattarai100/?actingBusinessId=1140114599325219118", // ← replace
        cover: "Elements/Arts/3.jpg"
    },
    {
        title: "Sketch 4",
        description: "Expressive pencil sketches capturing emotions and stories",
        url: "https://www.pinterest.com/kushalbhattarai100/?actingBusinessId=1140114599325219118", // ← replace
        cover: "Elements/Arts/4.jpg"
    }
];

async function loadProjects() {
    const grid = document.getElementById('projectGrid');
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text2);">⏳ Loading projects...</div>`;
    try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=12`);
        const repos = await res.json();
        const filtered = repos.filter(r => !r.fork && r.name !== 'kushalitgithub.github.io');
        if (!filtered.length) {
            grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text2);">No projects found.</div>`;
            return;
        }
        const langColors = {
            JavaScript: '#F7DF1E', TypeScript: '#3178C6', Python: '#3776AB',
            Java: '#ED8B00', HTML: '#E34F26', CSS: '#1572B6',
            'C++': '#00599C', C: '#A8B9CC', default: '#888'
        };
        grid.innerHTML = filtered.map((r, i) => {
            const lang = r.language || '';
            const desc = r.description || 'No description available';
            const langColor = langColors[lang] || langColors.default;
            const hasLive = (r.homepage && r.homepage !== '') || r.has_pages;;
            return `
            <div class="project-card fade-up" style="animation-delay:${i * 0.06}s">
                <div class="project-card-inner">
                    <div class="project-top">
                        <div class="project-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                        </div>
                        <div class="project-meta">
                            <span class="project-stars">⭐ ${r.stargazers_count}</span>
                            <span class="project-forks">🍴 ${r.forks_count}</span>
                        </div>
                    </div>
                    <h3 class="project-title">${r.name.replace(/-|_/g, ' ')}</h3>
                    <p class="project-desc">${desc.length > 80 ? desc.slice(0, 80) + '...' : desc}</p>
                    <div class="project-footer">
                        ${lang ? `<span class="project-lang"><span style="width:10px;height:10px;border-radius:50%;background:${langColor};display:inline-block;"></span>${lang}</span>` : ''}
                        <div class="project-links">
                            <a href="${r.html_url}" target="_blank" class="project-btn project-btn-github">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                                Code
                            </a>
                            ${hasLive ? `<a href="${r.homepage && r.homepage !== '' ? r.homepage : `https://${GITHUB_USER.toLowerCase()}.github.io/${r.name}`}" target="_blank" class="project-btn project-btn-live">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                                Live
                            </a>` : ''}
                        </div>
                    </div>
                </div>
            </div>`;
        }).join('');
        setTimeout(initObserver, 50);
    } catch (err) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text2);">Could not load projects.</div>`;
    }
}

function renderArt() {
    const grid = document.getElementById('artGrid');
    grid.innerHTML = pinterestBoards.map((board, i) => `
        <a href="${board.url}" target="_blank" class="pinterest-card fade-up" style="animation-delay:${i * 0.06}s">
            <div class="pinterest-img">
                ${board.cover
            ? `<img src="${board.cover}" alt="${board.title}" loading="lazy">`
            : `<div class="pinterest-img-placeholder">🎨</div>`}
                <div class="pinterest-badge">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                    Pinterest
                </div>
            </div>
            <div class="pinterest-info">
                <h4>${board.title}</h4>
                <p>${board.description}</p>
                <span class="pinterest-view">View Board →</span>
            </div>
        </a>
    `).join('');
    setTimeout(initObserver, 50);
}

async function submitForm() {
    const btn = document.querySelector('.submit-btn');
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!fname || !email || !message) { alert('Please fill in your name, email, and message.'); return; }
    btn.textContent = 'Sending...';
    btn.disabled = true;
    const { error } = await _supabase.from('messages').insert({ first_name: fname, last_name: lname, email, subject, message });
    btn.textContent = 'Send Message →';
    btn.disabled = false;
    if (error) { alert('Something went wrong. Please try again.'); console.error(error); return; }
    document.getElementById('formSuccess').classList.add('show');
    ['fname', 'lname', 'email', 'subject', 'message'].forEach(id => document.getElementById(id).value = '');
    setTimeout(() => document.getElementById('formSuccess').classList.remove('show'), 6000);
}

function toggleMenu() { document.getElementById('mobileMenu').classList.toggle('open'); }
function closeMenu() { document.getElementById('mobileMenu').classList.remove('open'); }

function initObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(el => {
            if (el.isIntersecting) { el.target.classList.add('visible'); observer.unobserve(el.target); }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up:not(.visible)').forEach(el => observer.observe(el));
}
initObserver();

loadProjects();
renderArt();


function showCvToast() {
    const t = document.getElementById('cvToast');
    t.style.display = 'block';
    setTimeout(() => t.style.display = 'none', 3000);
}