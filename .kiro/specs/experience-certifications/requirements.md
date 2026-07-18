# Requirements Document

## Introduction

This feature covers two workstreams for the Vite + React 19 + Tailwind CSS 3 + Framer Motion portfolio site:

1. **Codebase Audit Fixes** — ten discrete bugs and code-quality issues identified in the existing source (dead files, unused imports, duplicate logic, missing dark-mode styles, naming inconsistency, semantic HTML issues).
2. **New Sections** — an Experience timeline section and an Achievements & Certifications carousel section, each backed by new data in a renamed data file and surfaced via two new Navbar links.

The goal is a clean, consistent, accessible, and fully dark-mode-aware portfolio that accurately represents a student AI Engineering developer persona.

---

## Glossary

- **App**: The top-level React application component (`src/App.jsx`).
- **Navbar**: The fixed bottom dock navigation component (`src/components/Navbar.jsx`).
- **About**: The about + tech-stack section component (`src/components/About.jsx`).
- **AboutSimple**: A dead duplicate component (`src/components/AboutSimple.jsx`) with no imports — scheduled for deletion.
- **Projects**: The projects grid section component (`src/components/Projects.jsx`).
- **ProjectModal**: The project detail modal component (`src/components/ProjectModal.jsx`).
- **Hero**: The hero / landing section component (`src/components/Hero.jsx`).
- **BackToTop**: The scroll-to-top floating button component (`src/components/BackToTop.jsx`).
- **ThemeContext**: The dark/light theme provider (`src/contexts/ThemeContext.jsx`).
- **SkillGroup**: A new reusable sub-component to be extracted from About for rendering a labelled grid of skill icons.
- **Experience**: The new work-experience timeline section component (`src/components/Experience.jsx`).
- **Certifications**: The new achievements and certifications carousel section component (`src/components/Certifications.jsx`).
- **portfolioData**: The renamed data file (`src/Data/portfolioData.js`), previously `mockData.js`.
- **DesignSystem**: The established visual conventions: colors `#fff` / `#181818` / gray scale, Inter typeface, `.section-padding`, `.container-custom`, `rounded-2xl` cards, `border border-gray-200 dark:border-gray-700`, `hover:shadow-xl`, `transition-all duration-300`, `staggerContainer` + `fadeIn` / `slideUp` / `scaleUp` motion variants.
- **motionVariants**: The shared animation preset module (`src/utils/motionVariants.js`).
- **EARS**: Easy Approach to Requirements Syntax — the pattern language used in acceptance criteria.
- **prefers-reduced-motion**: CSS media query (`@media (prefers-reduced-motion: reduce)`) indicating user preference for minimal animation.

---

## Requirements

### Requirement 1: Delete Dead Component

**User Story:** As a developer, I want to remove the unused `AboutSimple` component, so that the codebase contains no dead files that cause confusion.

#### Acceptance Criteria

1. THE Developer SHALL delete the file `src/components/AboutSimple.jsx` from the repository.
2. WHEN the project is built after deletion, THE App SHALL compile without errors or warnings related to `AboutSimple`.
3. THE codebase SHALL contain no `import` statement that references `AboutSimple`.

---

### Requirement 2: Rename Data File

**User Story:** As a developer, I want to rename `mockData.js` to `portfolioData.js`, so that the filename accurately reflects that it contains real portfolio content.

#### Acceptance Criteria

1. THE Developer SHALL rename `src/Data/mockData.js` to `src/Data/portfolioData.js`.
2. WHEN the rename is complete, THE App SHALL update every `import` statement that previously referenced `mockData` to reference `portfolioData` instead.
3. THE renamed portfolioData module SHALL export at minimum the `projects` array with the same shape as before.
4. WHEN the project is built after the rename, THE App SHALL compile without missing-module errors.

---

### Requirement 3: Extend Portfolio Data

**User Story:** As a developer, I want `portfolioData.js` to export `experience` and `certifications` arrays with realistic placeholder data, so that the new sections have content to render on first load.

#### Acceptance Criteria

1. THE portfolioData module SHALL export an `experience` array containing between 1 and 2 entries.
2. EACH experience entry SHALL contain: `id` (number), `role` (string), `company` (string), `type` (one of `'Internship' | 'Freelance' | 'Full-time' | 'Part-time'`), `duration` (object with `start: string` and `end: string | 'Present'`), `location` (string), `description` (string), `responsibilities` (non-empty string array), `technologies` (non-empty string array), `achievements` (string array, may be empty), `url` (`string | null`).
3. THE portfolioData module SHALL export a `certifications` array containing between 4 and 6 entries.
4. EACH certifications entry SHALL contain: `id` (number), `title` (string), `organization` (string), `issueDate` (string in `'Month YYYY'` format), `credentialId` (`string | null`), `skills` (non-empty string array), `verificationUrl` (`string | null`), `badgeEmoji` (`string | null`).
5. THE placeholder experience entries SHALL reflect a student AI Engineering developer persona (e.g., internship or freelance roles involving Python, JavaScript, React, Node.js, or AI tooling).
6. THE placeholder certifications entries SHALL include recognisable issuers appropriate for a student developer (e.g., Google, Microsoft, Coursera, NPTEL, Kaggle, or AWS free-tier programs).

---

### Requirement 4: Extract SkillGroup Sub-Component

**User Story:** As a developer, I want a reusable `SkillGroup` component extracted from `About.jsx`, so that the five copy-pasted skill grid blocks are replaced by a single reusable pattern.

#### Acceptance Criteria

1. THE Developer SHALL define a `SkillGroup` sub-component (co-located in `About.jsx` or a dedicated file) that accepts `title` (string) and `skills` (array of `{ name: string, logo: string }`) as props.
2. THE SkillGroup component SHALL render a labelled card with `rounded-lg`, `border border-gray-100 dark:border-gray-600`, `bg-white dark:bg-dark-custom`, `shadow-sm hover:shadow-lg transition-all duration-300`, and a responsive grid of skill icon tiles inside.
3. EACH skill tile rendered by SkillGroup SHALL display the skill logo image and skill name, matching the existing visual style (logo size `w-12 h-12`, name `text-sm font-medium`).
4. THE About component SHALL replace all five copy-pasted skill grid blocks (Languages, Environments, Frontend Development, Backend Development, Tools & Technologies) with invocations of `SkillGroup`.
5. WHEN the About section is viewed, THE rendered output SHALL be visually identical to the original five skill groups.

---

### Requirement 5: Fix About Section Heading Semantics

**User Story:** As a developer, I want the About section to have correct heading hierarchy, so that screen readers and search engines understand the document structure.

#### Acceptance Criteria

1. THE About section (`id="about"`) SHALL contain exactly one `<h2>` element for the section title "About Me".
2. THE "Tech Stack" heading SHALL be rendered as an `<h2>` element introduced by a clear visual or structural section break that separates it from the About Me prose, rather than being a second `<h2>` within the same continuous flow.
3. WHEN the About section is rendered, THE document outline SHALL show "About Me" and "Tech Stack" as sibling `<h2>` headings under the same section, each heading the content that follows it.

---

### Requirement 6: Remove Dead Code from Projects

**User Story:** As a developer, I want unused state, variables, and declarations removed from `Projects.jsx`, so that the component contains only code that is actually executed.

#### Acceptance Criteria

1. THE Projects component SHALL NOT declare a `filter` state variable.
2. THE Projects component SHALL NOT declare a `categories` constant.
3. THE Projects component SHALL NOT declare or call an `openModal` function.
4. WHEN the Projects component is built, THE linter SHALL report zero unused-variable warnings for those identifiers.
5. THE Projects component SHALL continue to render all project cards and the GitHub link without behavioural regression.

---

### Requirement 7: Merge Duplicate useEffects in ThemeContext

**User Story:** As a developer, I want the two duplicate `useEffect` hooks in `ThemeContext.jsx` merged into one, so that the DOM is updated in a single, authoritative place.

#### Acceptance Criteria

1. THE ThemeContext provider SHALL contain exactly one `useEffect` hook that depends on `[isDark]`.
2. WHEN `isDark` changes, THE single useEffect SHALL add or remove the `dark` class on `document.documentElement` AND write the new value to `localStorage`.
3. WHEN the ThemeProvider mounts with `isDark = true`, THE `dark` class SHALL be present on `document.documentElement`.
4. WHEN the ThemeProvider mounts with `isDark = false`, THE `dark` class SHALL NOT be present on `document.documentElement`.

---

### Requirement 8: Add Dark Mode Styles to ProjectModal

**User Story:** As a user viewing the site in dark mode, I want the project modal to use dark background and text colours, so that it is readable and consistent with the rest of the UI.

#### Acceptance Criteria

1. THE ProjectModal inner panel SHALL apply `dark:bg-gray-900` as its dark-mode background.
2. THE project title inside the modal SHALL apply `dark:text-white`.
3. THE project description inside the modal SHALL apply `dark:text-gray-300`.
4. THE "Technologies Used" heading inside the modal SHALL apply `dark:text-white`.
5. THE technology tag pills inside the modal SHALL apply `dark:bg-gray-700 dark:text-gray-200` as their dark-mode styles.
6. THE close button inside the modal SHALL apply `dark:bg-gray-800 dark:hover:bg-gray-700` as its dark-mode styles.
7. THE GitHub icon button inside the modal SHALL apply `dark:bg-gray-700 dark:hover:bg-gray-600` as its dark-mode styles.
8. WHEN the modal is opened in dark mode, THE rendered modal SHALL NOT display any white or light-grey background areas.

---

### Requirement 9: Remove Unused Imports from Hero

**User Story:** As a developer, I want unused icon imports removed from `Hero.jsx`, so that the bundle does not include dead code.

#### Acceptance Criteria

1. THE Hero component SHALL NOT import `Download` from `lucide-react`.
2. THE Hero component SHALL NOT import `MapPin` from `lucide-react`.
3. THE Hero component SHALL NOT import `Mail` from `lucide-react`.
4. THE Hero component SHALL NOT import `Phone` from `lucide-react`.
5. WHEN the Hero component is built, THE linter SHALL report zero unused-variable warnings for those identifiers.
6. THE Hero component SHALL continue to render the hero section without behavioural regression.

---

### Requirement 10: Fix BackToTop Button Color

**User Story:** As a user, I want the Back-to-Top button to use the black/white design system colours, so that it is visually consistent with the rest of the portfolio.

#### Acceptance Criteria

1. THE BackToTop button SHALL apply `bg-black` as its light-mode background colour.
2. THE BackToTop button SHALL apply `dark:bg-gray-700` as its dark-mode background colour.
3. THE BackToTop button SHALL apply `hover:bg-gray-800` as its light-mode hover background.
4. THE BackToTop button SHALL apply `dark:hover:bg-gray-600` as its dark-mode hover background.
5. THE BackToTop button SHALL NOT apply any `bg-blue-*` class.
6. THE BackToTop button text/icon SHALL remain white (`text-white`) in both modes.

---

### Requirement 11: Remove Unused Import from Navbar

**User Story:** As a developer, I want the unused `Code` import removed from `Navbar.jsx`, so that the component file is clean.

#### Acceptance Criteria

1. THE Navbar component SHALL NOT import `Code` from `lucide-react`.
2. WHEN the Navbar component is built, THE linter SHALL report zero unused-variable warnings for `Code`.
3. THE Navbar component SHALL continue to render all existing nav links and the theme toggle without regression.

---

### Requirement 12: Add Experience and Achievements Links to Navbar

**User Story:** As a visitor, I want to see Experience and Achievements links in the navigation dock, so that I can quickly jump to those sections from anywhere on the page.

#### Acceptance Criteria

1. THE Navbar links array SHALL include an entry with `label: 'Experience'`, `href: '#experience'`, and `icon: Briefcase` (from lucide-react).
2. THE Navbar links array SHALL include an entry with `label: 'Achievements'`, `href: '#achievements'`, and `icon: Award` (from lucide-react).
3. THE Experience link SHALL appear in the dock between the About link and the Projects link, reflecting the new page order.
4. THE Achievements link SHALL appear in the dock between the Experience link and the Projects link, reflecting the new page order.
5. WHEN a visitor clicks the Experience link, THE page SHALL smooth-scroll to the element with `id="experience"`.
6. WHEN a visitor clicks the Achievements link, THE page SHALL smooth-scroll to the element with `id="achievements"`.
7. THE new links SHALL use the same icon-only dock style as existing links: `p-2.5 md:p-3 rounded-full transition-all duration-200` with the existing hover and dark-mode classes.
8. THE Navbar SHALL import `Briefcase` and `Award` from `lucide-react`.

---

### Requirement 13: Experience Section

**User Story:** As a visitor, I want to browse a timeline of the developer's work experience, so that I can understand their professional background at a glance.

#### Acceptance Criteria

1. THE Experience component SHALL render a `<section>` element with `id="experience"` and the `section-padding bg-white dark:bg-dark-custom` classes.
2. THE Experience section SHALL display a centered section header: an `<h2>` with text "Work Experience" styled `text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white`, and a subtitle `<p>` in `text-gray-600 dark:text-gray-300`.
3. WHEN the experience array contains entries, THE Experience component SHALL render one card per entry.
4. EACH experience card SHALL display: role title (`font-bold text-xl`), company name, employment type badge, duration string (formatted as `start – end` or `start – Present`), location, description, a bullet list of responsibilities, a row of technology tag pills, and optionally a row of achievement highlights.
5. EACH experience card SHALL match the DesignSystem card style: `rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-custom hover:shadow-xl transition-all duration-300`.
6. THE Experience section layout SHALL be a vertical timeline on desktop (min-width 768 px) with a vertical line connecting cards, and a stacked single-column layout on mobile (max-width 767 px).
7. WHEN an experience entry has `url` set to a non-null string, THE card SHALL render a link icon or "View" anchor that opens that URL in a new tab with `rel="noopener noreferrer"`.
8. THE Experience section SHALL animate using `staggerContainer` as the container variant and `slideUp` for each card, with `whileInView` and `viewport={{ once: true }}`.
9. WHERE the visitor's browser reports `prefers-reduced-motion: reduce`, THE Experience section SHALL omit entrance animations (cards render immediately visible) while remaining fully functional.
10. THE App component SHALL render the Experience section between About and Projects in the main content order.
11. THE Experience component SHALL import `experience` from `portfolioData`.

---

### Requirement 14: Achievements & Certifications Section

**User Story:** As a visitor, I want to browse the developer's certifications and achievements in an interactive carousel, so that I can quickly scan credentials without long vertical scrolling.

#### Acceptance Criteria

1. THE Certifications component SHALL render a `<section>` element with `id="achievements"` and the `section-padding bg-white dark:bg-dark-custom` classes.
2. THE Certifications section SHALL display a centered section header: an `<h2>` with text "Achievements & Certifications" styled `text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white`, and a subtitle `<p>` in `text-gray-600 dark:text-gray-300`.
3. THE certifications carousel SHALL implement `scroll-snap-type: x mandatory` on the scroll container so cards snap to position when scrolling stops.
4. WHEN a user scrolls the carousel with a mouse wheel on desktop, THE Certifications component SHALL redirect the vertical wheel delta to horizontal scroll on the carousel container (mouse-wheel hijack).
5. THE carousel SHALL support touch swipe gestures on mobile for horizontal navigation.
6. THE carousel SHALL be keyboard-navigable: pressing the right arrow key SHALL advance one card, pressing the left arrow key SHALL retreat one card, when the carousel container or any child element has focus.
7. THE Certifications component SHALL render a Prev button and a Next button that scroll the carousel by one card-width when clicked.
8. WHEN the carousel is at the first card, THE Prev button SHALL be visually disabled (`opacity-50 cursor-not-allowed`).
9. WHEN the carousel is at the last card, THE Next button SHALL be visually disabled (`opacity-50 cursor-not-allowed`).
10. EACH certification card SHALL display: title (`font-bold text-lg`), issuing organization, issue date, optional credential ID, skills array as tag pills, and optionally a `badgeEmoji` rendered prominently (e.g., `text-4xl`).
11. WHEN a certification entry has `verificationUrl` set to a non-null string, THE card SHALL render a "Verify" anchor that opens the URL in a new tab with `rel="noopener noreferrer"`.
12. EACH certification card SHALL match the DesignSystem card style: `rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-custom`.
13. THE carousel container SHALL use `overflow-x: auto` with hidden scrollbar (`scrollbar-width: none` / `::-webkit-scrollbar { display: none }`) and `scroll-behavior: smooth`.
14. EACH certification card SHALL have a fixed width (e.g., `min-w-[300px] md:min-w-[340px]`) so multiple cards are visible simultaneously on wider viewports.
15. THE Certifications section SHALL animate card entrance using `scaleUp` (or `fadeIn`) with `whileInView` and `viewport={{ once: true }}`.
16. WHERE the visitor's browser reports `prefers-reduced-motion: reduce`, THE Certifications section SHALL omit entrance animations while keeping carousel scrolling fully functional.
17. THE App component SHALL render the Certifications section between Experience and Projects in the main content order.
18. THE Certifications component SHALL import `certifications` from `portfolioData`.

---

### Requirement 15: App Component Integration

**User Story:** As a developer, I want the App component to wire Experience and Certifications into the page and use the renamed data file, so that the full page renders correctly.

#### Acceptance Criteria

1. THE App component SHALL import and render `<Experience />` between `<About />` and `<Projects />` in the single-page route.
2. THE App component SHALL import and render `<Certifications />` between `<Experience />` and `<Projects />` in the single-page route.
3. THE App component SHALL NOT import from `mockData`; all data imports in the project SHALL reference `portfolioData`.
4. WHEN the full application is built, THE build SHALL succeed with zero errors.
