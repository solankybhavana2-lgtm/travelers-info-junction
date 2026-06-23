// ===================== GLOBAL SEARCH (shared across all pages) =====================
// Builds a flat searchable index from STATES + CATEGORIES data and wires up
// any input#globalSearch + div#searchResults pair found on the page.

function buildSearchIndex() {
  const index = [];

  STATES.forEach(state => {
    // The state itself
    index.push({
      label: state.name,
      sub: state.tagline,
      type: 'State',
      url: `state.html?state=${state.id}`,
    });

    // Every video across every category
    CATEGORIES.forEach(cat => {
      (state[cat.key] || []).forEach(video => {
        index.push({
          label: video.title,
          sub: `${state.name} · ${cat.label}`,
          type: cat.label,
          url: `state.html?state=${state.id}#section-${cat.key}`,
        });
      });
    });
  });

  return index;
}

function initGlobalSearch() {
  const input = document.getElementById('globalSearch');
  const resultsBox = document.getElementById('searchResults');
  if (!input || !resultsBox) return;

  const index = buildSearchIndex();

  function renderResults(query) {
    const q = query.trim().toLowerCase();
    if (q.length === 0) {
      resultsBox.innerHTML = '';
      resultsBox.classList.remove('open');
      return;
    }

    const matches = index
      .filter(item => item.label.toLowerCase().includes(q) || item.sub.toLowerCase().includes(q))
      .slice(0, 8);

    if (matches.length === 0) {
      resultsBox.innerHTML = `<div class="search-empty">No results for "${query}"</div>`;
      resultsBox.classList.add('open');
      return;
    }

    resultsBox.innerHTML = matches.map(m => `
      <a href="${m.url}" class="search-result-item">
        <span class="search-result-label">${m.label}</span>
        <span class="search-result-meta">${m.sub} <span class="search-result-tag">${m.type}</span></span>
      </a>
    `).join('');
    resultsBox.classList.add('open');
  }

  input.addEventListener('input', () => renderResults(input.value));
  input.addEventListener('focus', () => { if (input.value) renderResults(input.value); });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !resultsBox.contains(e.target)) {
      resultsBox.classList.remove('open');
    }
  });
}

initGlobalSearch();