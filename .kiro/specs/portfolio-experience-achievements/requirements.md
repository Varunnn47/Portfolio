# Requirements Document

## Introduction

This feature adds two new content sections — **Experience** and **Achievements & Certifications** — to Varun Goud's React + Vite + Tailwind CSS + Framer Motion portfolio, and applies a set of audit-driven code-quality fixes to the existing codebase.

The Experience section presents a professional timeline of internships, freelance work, and employment. The Achievements & Certifications section is a horizontally-scrolling carousel of certificates, awards, and course completions. Both sections integrate seamlessly into the existing design system and are reachable from the bottom floating navbar.

The audit fixes remove dead code, correct style inconsistencies, and eliminate redundant logic so the codebase is clean before the new sections land.

---

## Glossary

- **Portfolio**: The single-page React application that showcases Varun Goud's work.
- **Design_System**: The set of shared tokens used across the portfolio — `.section-padding`, `.container-custom`, `btn-primary`, `btn-secondary`, `rounded-2xl`, `border border-gray-200 dark:border-gray-700`, `bg-white dark:bg-dark-custom`, and the Framer Motion variants `fadeIn`, `slideUp`, `scaleUp`, `staggerContainer` from `motionVariants.js`.
- **Experience_Section**: The new `src/components/Experience.jsx` component, rendered between the About and Projects sections.
- **Achievements_Section**: The new `src/components/Achievements.jsx` component, rendered between the Projects and Contact sections.
- **Carousel**: The horizontal-scroll container used inside Achievements_Section.
- **Navbar**: The existing `src/components/Navbar.jsx` floating bottom navigation bar.
- **mockData**: The file `src/Data/mockData.js` that contains all static portfolio data.
- **ThemeContext**: `src/contexts/ThemeContext.jsx`, which manages dark/light mode state.

---

## Requirements

### Requirement 1: Experience Section — Data Structure

**User Story:** As a visitor, I want to see Varun's professional experience in a structured format, so that I can quickly understand his background and suitability for roles.

#### Acceptance Criteria

1. THE mockData SHALL export an `experience` array containing at least one experience entry object.
2. WHEN an experience entry is defined, THE mockData SHALL include the following fields per entry: `id`, `company`, `role`, `employmentType`, `startDate`, `endDate`, `location`, `technologies`, `responsibilities`, `achievements`, and optionally `companyUrl`.
3. THE mockData `experience` entries SHALL use `endDate: "Present"` to denote current positions.
4. THE mockData `technologies` field in each experience entry SHALL be an array of strings representing technology tag labels.
5. THE mockData `responsibilities` and `achievements` fields in each experience entry SHALL be arrays of strings.

---

### Requirement 2: Experience Section — Component and Layout

**User Story:** As a visitor, I want to read Varun's experience in a clear timeline layout, so that I can follow the progression of his career.

#### Acceptance Criteria

1. THE Portfolio SHALL render the Experience_Section with `id="experience"` between the About section and the Projects section.
2. THE Experience_Section SHALL use `.section-padding` and `.container-custom` from the Design_System.
3. THE Experience_Section heading SHALL follow the pattern `text-4xl md:text-5xl font-bold` with the second word wrapped in a `<span>` and no color applied to that span (black/white only palette).
4. WHEN `experience` data is available, THE Experience_Section SHALL render one card per entry using `rounded-2xl`, `border border-gray-200 dark:border-gray-700`, and `bg-white dark:bg-dark-custom` from the Design_System. IF the `experience` array is empty or undefined, THE Experience_Section SHALL render no cards.
5. WHEN a visitor hovers over an experience card, THE Experience_Section SHALL apply `whileHover={{ scale: 1.02, y: -4 }}` via Framer Motion.
6. THE Experience_Section SHALL use the `staggerContainer`, `fadeIn`, and `slideUp` variants from `motionVariants.js` for entrance animations, with `initial="hidden"`, `whileInView="visible"`, and `viewport={{ once: true }}`.
7. WHEN an experience entry includes `companyUrl`, THE Experience_Section SHALL render a link to that URL that opens in a new tab.
8. THE Experience_Section SHALL display `technologies` as pill-shaped tags matching the style used in the Projects section: `px-3 py-1 bg-gray-100 dark:bg-dark-custom text-gray-700 dark:text-gray-400 rounded-full text-sm font-medium border dark:border-gray-600`.
9. THE Experience_Section SHALL display `responsibilities` as a bullet list.
10. THE Experience_Section SHALL display `achievements` as a distinct bullet list visually differentiated from responsibilities (e.g., using a trophy or star prefix character).
11. WHEN an experience entry has `endDate: "Present"`, THE Experience_Section SHALL render the duration as `<startDate> – Present`.

---

### Requirement 3: Achievements & Certifications Section — Data Structure

**User Story:** As a visitor, I want to browse Varun's certifications and awards in one place, so that I can verify his credentials.

#### Acceptance Criteria

1. THE mockData SHALL export an `achievements` array containing at least one achievement entry object.
2. WHEN an achievement entry is defined, THE mockData SHALL include the following fields per entry: `id`, `title`, `organization`, `issueDate`, `category`, `skills`, and optionally `credentialId` and `verificationUrl`.
3. THE mockData `category` field SHALL be one of: `"Certification"`, `"Hackathon"`, `"Award"`, or `"Course"`.
4. THE mockData `skills` field in each achievement entry SHALL be an array of strings.
5. THE mockData SHALL include a `badge` field per achievement entry using an emoji string, requiring no external image dependency.

---

### Requirement 4: Achievements Section — Component and Carousel Layout

**User Story:** As a visitor, I want to scroll through Varun's achievements in a smooth carousel, so that I can browse many entries without the page growing excessively long.

#### Acceptance Criteria

1. THE Portfolio SHALL render the Achievements_Section with `id="achievements"` between the Projects section and the Contact section.
2. THE Achievements_Section SHALL use `.section-padding` and `.container-custom` from the Design_System.
3. THE Achievements_Section heading SHALL follow the pattern `text-4xl md:text-5xl font-bold` with the second word in a `<span>` with no color change.
4. THE Carousel SHALL scroll horizontally and SHALL NOT wrap cards to a new row on any viewport width.
5. THE Carousel SHALL implement CSS `scroll-snap-type: x mandatory` so cards snap into position after each scroll gesture.
6. WHEN a visitor uses a mouse wheel while the cursor is over the Carousel on any viewport, THE Carousel SHALL scroll horizontally (wheel hijacking is enabled on all viewport sizes).
7. WHEN a visitor swipes horizontally on a touch device, THE Carousel SHALL scroll to the next or previous card.
8. THE Carousel SHALL provide a Previous button and a Next button that each scroll the Carousel by one card width.
9. WHEN the Carousel is at the first card, THE Carousel SHALL disable the Previous button.
10. WHEN the Carousel is at the last card, THE Carousel SHALL disable the Next button.
11. WHEN a visitor presses the ArrowRight key while the Carousel is focused, THE Carousel SHALL scroll to the next card.
12. WHEN a visitor presses the ArrowLeft key while the Carousel is focused, THE Carousel SHALL scroll to the previous card.
13. THE Carousel SHALL NOT depend on any external carousel library; THE Carousel SHALL be implemented using native CSS scroll behavior and Framer Motion.
14. WHEN achievement cards are rendered inside the Carousel, THE Achievements_Section SHALL apply `rounded-2xl`, `border border-gray-200 dark:border-gray-700`, and `bg-white dark:bg-dark-custom` from the Design_System.
15. WHEN a visitor hovers over an achievement card, THE Achievements_Section SHALL apply `whileHover={{ scale: 1.02, y: -4 }}` via Framer Motion.
16. THE Achievements_Section SHALL use `staggerContainer`, `fadeIn`, and `scaleUp` variants from `motionVariants.js` for entrance animations, with `initial="hidden"`, `whileInView="visible"`, and `viewport={{ once: true }}`.
17. WHEN an achievement entry includes `verificationUrl`, THE Achievements_Section SHALL render a "Verify" link that opens in a new tab.
18. THE Achievements_Section SHALL display each achievement entry's `badge` emoji prominently at the top of its card.
19. THE Achievements_Section SHALL display `skills` as pill-shaped tags matching the style used in the Projects section.
20. THE Achievements_Section SHALL display the `category` label (e.g., "Certification") on each card.

---

### Requirement 5: Navbar — New Links and Active Highlighting

**User Story:** As a visitor, I want the navbar to show all available sections and indicate which section I am currently viewing, so that I can navigate the portfolio efficiently.

#### Acceptance Criteria

1. THE Navbar SHALL include a link with `href="#experience"` using the `Briefcase` icon from `lucide-react`.
2. THE Navbar SHALL include a link with `href="#achievements"` using the `Award` icon from `lucide-react`.
3. THE Navbar SHALL display the Experience link between the About and Projects links.
4. THE Navbar SHALL display the Achievements link between the Projects and Contact links.
5. WHEN one or more section `id` elements are within the viewport, THE Navbar SHALL apply an active visual state to every corresponding link simultaneously (distinct background or text color within the black/white/gray Design_System palette). WHEN no section is currently intersecting the viewport, THE Navbar SHALL display no active link.
6. THE Navbar link activation logic SHALL use an `IntersectionObserver` to detect all currently visible sections.
7. THE Navbar SHALL remove the unused `Code` import from `lucide-react`.

---

### Requirement 6: Audit Fixes — Dead Code and Unused Imports

**User Story:** As a developer maintaining this codebase, I want dead code and unused imports removed, so that the bundle is smaller and the code is easier to read.

#### Acceptance Criteria

1. THE Portfolio SHALL delete `src/components/AboutSimple.jsx` entirely, as it is never imported and contains stale content.
2. THE Hero_Component SHALL remove the unused `Download`, `MapPin`, `Mail`, and `Phone` imports from `lucide-react`, retaining only `ArrowRight`.
3. THE Contact_Component SHALL remove the unused `MapPin` and `Phone` imports from `lucide-react`, retaining only `Mail`.
4. THE Navbar SHALL remove the unused `Code` import from `lucide-react`.
5. THE Projects_Component SHALL remove the unused `filter` state, `categories` array, and `openModal` function.
6. THE Projects_Component SHALL remove the `useEffect` that sets `loading` to `false` after a 100 ms delay, replacing the conditional render with a direct render of `filteredProjects`.

---

### Requirement 7: Audit Fixes — ThemeContext Redundant Effect

**User Story:** As a developer, I want the ThemeContext to apply theme changes exactly once per state update, so that there are no duplicate DOM operations.

#### Acceptance Criteria

1. THE ThemeContext SHALL merge the two `useEffect` hooks that apply dark-mode class changes into a single `useEffect` hook.
2. WHEN `isDark` changes, THE ThemeContext SHALL add or remove the `dark` class on `document.documentElement` exactly once.
3. WHEN `isDark` changes, THE ThemeContext SHALL persist the theme preference to `localStorage` within the same single `useEffect`.

---

### Requirement 8: Audit Fixes — BackToTop Color

**User Story:** As a visitor, I want every UI element to follow the black/white/gray design system, so that the portfolio looks visually consistent.

#### Acceptance Criteria

1. THE BackToTop_Component SHALL replace the `bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600` classes with design-system-compliant classes: `bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200`.

---

### Requirement 9: Audit Fixes — Footer Email

**User Story:** As a visitor who wants to contact Varun via the footer, I want the footer email link to reach Varun's real address, so that my message is not lost.

#### Acceptance Criteria

1. THE Footer SHALL replace `mailto:hello@portfolia.dev` with `mailto:edigavarunkumar66@gmail.com`.

---

### Requirement 10: Audit Fixes — Section Padding

**User Story:** As a visitor on desktop, I want sections to be sized to their content rather than forced to full viewport height, so that the page does not feel wasteful or stretched.

#### Acceptance Criteria

1. THE `.section-padding` CSS rule in `App.css` SHALL remove the `min-height: 100vh` declaration and the `display: flex; align-items: center` pairing that was used solely to vertically center within that fixed height.
2. THE `.section-padding` rule SHALL retain vertical padding, using the responsive values `padding: 4rem 0` at mobile, `padding: 6rem 0` at `min-width: 768px`, and `padding: 8rem 0` at `min-width: 1024px`.
3. IF a section requires full viewport height (e.g., the Hero section), THE section SHALL apply its own explicit height utility rather than relying on `.section-padding`, and the two approaches SHALL be mutually exclusive — a section SHALL NOT simultaneously rely on `.section-padding` height and apply its own explicit height override.

---

### Requirement 11: Page Order and App Integration

**User Story:** As a visitor reading the portfolio top-to-bottom, I want the sections to appear in a logical narrative order, so that the page tells a coherent story.

#### Acceptance Criteria

1. THE Portfolio page order SHALL be: Hero → About → Experience → Projects → Achievements → Contact.
2. THE App_Component SHALL import and render `Experience` from `src/components/Experience.jsx` and `Achievements` from `src/components/Achievements.jsx`.
3. THE App_Component SHALL pass `addToast` to any section component that requires it (Contact), but SHALL NOT pass it to Experience or Achievements.
