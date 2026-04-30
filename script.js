/* ── SUPABASE CLIENT ── */
const _supabase = supabase.createClient(
    'https://qbslqgazdegyyuwseuno.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFic2xxZ2F6ZGVneXl1d3NldW5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0MTAyNDAsImV4cCI6MjA5MTk4NjI0MH0.2DuX5HqNxmAqYhNvY7yKVsGSEvRTOUlQjHgvAbFj22E'
);

/* ── GITHUB CONFIG ── */
const GITHUB_USER = 'Kushalitgithub';

/* ── PINTEREST BOARDS ── */
const pinterestBoards = [
    {
        title: "Sketch 1",
        description: "Expressive pencil sketches capturing emotions and stories",
        url: "https://www.pinterest.com/kushalbhattarai100/",
        cover: "Elements/Arts/1.jpg"
    },
    {
        title: "Sketch 2",
        description: "Expressive pencil sketches capturing emotions and stories",
        url: "https://www.pinterest.com/kushalbhattarai100/",
        cover: "Elements/Arts/2.jpg"
    },
    {
        title: "Sketch 3",
        description: "Expressive pencil sketches capturing emotions and stories",
        url: "https://www.pinterest.com/kushalbhattarai100/",
        cover: "Elements/Arts/3.jpg"
    },
    {
        title: "Sketch 4",
        description: "Expressive pencil sketches capturing emotions and stories",
        url: "https://www.pinterest.com/kushalbhattarai100/",
        cover: "Elements/Arts/4.jpg"
    }
];

const WELCOME_AUDIO_B64 = "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";

/* ══════════════════════════════════════
   THEME SWITCHER
══════════════════════════════════════ */
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kb-theme', theme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
}

(function () {
    const saved = localStorage.getItem('kb-theme') || 'light';
    applyTheme(saved);
})();

window.addEventListener('resize', () => {
    const mobileBtn = document.getElementById('mobileThemeToggle');
    if (mobileBtn) {
        mobileBtn.style.display = window.innerWidth <= 900 ? 'flex' : 'none';
    }
});
window.dispatchEvent(new Event('resize'));

/* ══════════════════════════════════════
   INTRO SPLASH + WELCOME SOUND
   — intro shows every visit
   — sound plays only once ever (stored in localStorage)
══════════════════════════════════════ */
function runIntro() {
    const intro = document.getElementById('introScreen');
    if (!intro) return;

    // Sound: play only on very first ever visit
    const soundPlayed = localStorage.getItem('kb-sound-played');

    // After 2.2s (bar finishes) → trigger exit animation
    setTimeout(() => {
        intro.classList.add('exit');

        // Play sound at the moment of transition (user has "interacted" by visiting)
        if (!soundPlayed) {
            localStorage.setItem('kb-sound-played', '1');
            try {
                const audio = new Audio('data:audio/mp3;base64,' + WELCOME_AUDIO_B64);
                audio.volume = 1.0;
                audio.play().catch(() => {
                    // fallback: try on next click
                    window.addEventListener('click', () => audio.play().catch(() => {}), { once: true });
                });
            } catch (e) {}
        }

        // Remove from DOM after animation
        setTimeout(() => {
            intro.style.display = 'none';
            intro.remove();
        }, 800);

    }, 2200);
}

window.addEventListener('DOMContentLoaded', runIntro);

/* ══════════════════════════════════════
   SLIDE ANIMATIONS FOR ABOUT SECTION
══════════════════════════════════════ */
function initSlideObserver() {
    const slideEls = document.querySelectorAll('.slide-left, .slide-right');
    if (!slideEls.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    slideEls.forEach(el => observer.observe(el));
}

/* ── GITHUB PROJECTS ── */
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
            const hasLive = (r.homepage && r.homepage !== '') || r.has_pages;
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
initSlideObserver();
loadProjects();
renderArt();

function showCvToast() {
    const t = document.getElementById('cvToast');
    t.style.display = 'block';
    setTimeout(() => t.style.display = 'none', 3000);
}