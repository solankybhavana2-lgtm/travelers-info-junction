// ===================== WISHLIST (shared across all pages) =====================
// Wishlist is stored as an array of state IDs under localStorage key "tij-wishlist".
// Any heart button with a data-id attribute automatically gets save/remove behavior.

function getWishlistIds() {
  try { return JSON.parse(localStorage.getItem('tij-wishlist')) || []; }
  catch { return []; }
}
function setWishlistIds(ids) {
  localStorage.setItem('tij-wishlist', JSON.stringify(ids));
}

function initWishlistHearts() {
  document.querySelectorAll('.heart[data-id]').forEach(btn => {
    if (btn.dataset.wishlistBound) return; // avoid double-binding
    btn.dataset.wishlistBound = '1';
    const id = btn.dataset.id;
    if (getWishlistIds().includes(id)) btn.classList.add('saved');

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const ids = getWishlistIds();
      if (ids.includes(id)) {
        setWishlistIds(ids.filter(x => x !== id));
        btn.classList.remove('saved');
      } else {
        ids.push(id);
        setWishlistIds(ids);
        btn.classList.add('saved');
      }
    });
  });
}
// Run once on load for static pages (index.html). Dynamic pages call this again after rendering.
initWishlistHearts();