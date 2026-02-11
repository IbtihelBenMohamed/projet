# Design System: Epilepsy Awareness Guide
**Project ID:** landing_page_-_epilepsy_awareness_guide

## 1. Visual Theme & Atmosphere
The design evokes a sense of **Supportive Modernity**. It combines a clean, clinical reliability with a warm, approachable "glass-morphic" feel. The use of soft purple glows and rounded geometry creates a friendly, non-threatening environment for medical information. The "Mobile-First" card-based layout suggests a personal, handheld guide.

## 2. Color Palette & Roles
*   **Primary Purple (#7c3bed):** Used for primary actions (buttons), brand icons, and emphasis. It represents wisdom and calm.
*   **Primary Dark (#642bbc):** Used for hover states of primary actions.
*   **Background Light (#f7f6f8):** A very light grey-purple, used as the main canvas background to reduce eye strain compared to pure white.
*   **Background Dark (#171121):** Deep navy-black for dark mode backgrounds, providing high contrast without the harshness of pitch black.
*   **Slate Text (#1e293b approx / slate-800):** Primary text color for readability.
*   **Muted Text (#64748b approx / slate-500):** Secondary text for labels and supporting info.
*   **Safety Blue (#dbb4fe approx / blue classes):** Used for informational icons (Definition card).
*   **Alert Red (#ef4444 approx / red classes):** Used for critical information (First Aid card).

## 3. Typography Rules
*   **Font Family:** 'Lexend', sans-serif. Designed for optimal reading proficiency.
*   **Headings:** Bold (font-bold), used for card titles and section headers.
*   **Body:** Regular weight, often with `relaxed` line height for deeper reading.

## 4. Component Stylings
*   **Buttons:**
    *   **Primary:** Pill-shaped or heavily rounded (`rounded-xl`), Primary Purple background, white text. Includes shadow (`shadow-lg`).
    *   **Secondary:** White background with thin slate border, dark text.
*   **Cards/Containers:**
    *   **Standard Card:** White background, `rounded-2xl` corners.
    *   **Shadows:** Features a dual-layer shadow strategy:
        *   `shadow-card`: subtle definition for structure.
        *   `shadow-soft`: colorful, diffuse glow on hover (`hover:shadow-soft`) to invite interaction.
*   **Icons:** Enclosed in `rounded-full` containers with pastel backgrounds corresponding to their color meaning (e.g., Purple icon on Light Purple bg).

## 5. Layout Principles
*   **Container:** `max-w-md` centered layout, mimicking a mobile app interface even on desktop.
*   **Grid:** `grid-cols-2` for the main navigation menu, allowing for quick scanning of options.
*   **Spacing:** Generous padding (`p-5`, `p-6`) to separate content groups and prevent overcrowding.
