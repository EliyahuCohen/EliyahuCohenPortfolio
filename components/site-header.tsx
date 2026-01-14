"use client"

// Removed language switcher - Header is now minimal logic
// Actually we can just remove the file usage or make it return null
// But user might want a logo? 
// Let's make it a minimal "Home" button or nothing.

export function SiteHeader() {
    return null; // As per "Remove all hebrew support", usually entails removing the switcher. 
    // If the user wants a logo, they usually ask. 
    // The Hero has a "Creative Developer" big title, so header is optional.
    // Let's return null to keep it pure Awwwards style (menu usually hidden or hamburger).
}
