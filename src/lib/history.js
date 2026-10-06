// Per-browser record of which questions a user has already been served, used
// to prefer fresh questions. Storage can be unavailable (private mode, blocked
// site data), so every access is guarded and failure just means "nothing seen".

const key = (certId) => `gg-seen-${certId}`;

export function loadSeen(certId) {
  try {
    return new Set(JSON.parse(localStorage.getItem(key(certId))) || []);
  } catch {
    return new Set();
  }
}

export function markSeen(certId, ids) {
  try {
    const seen = loadSeen(certId);
    ids.forEach((id) => seen.add(id));
    localStorage.setItem(key(certId), JSON.stringify([...seen]));
  } catch {
    // Non-essential; ignore.
  }
}

export function clearSeen(certId) {
  try {
    localStorage.removeItem(key(certId));
  } catch {
    // Non-essential; ignore.
  }
}
