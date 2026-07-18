# Requirements Document

## Introduction

This feature expands the existing React/Vite/Tailwind portfolio by: (1) cleaning up all identified dead code and code quality issues, (2) consolidating data into a single well-named file, (3) adding an Experience section with a vertical timeline layout, and (4) adding an Achievements & Certifications section with a horizontally scrolling carousel. Both new sections must integrate seamlessly with the existing monochrome design system, match established animation patterns, respect user accessibility preferences, and be fully responsive.

## Glossary

- **Portfolio**: The React/Vite/Tailwind single-page application at the workspace root.
- **Design_System**: The established visual language — monochrome black/white/gray palette, `bg-white dark:bg-dark-custom` backgrounds, `rounded-xl/2xl` cards with `border border-gray-100 dark:border-gray-600 shadow-sm hover:shadow-lg`, and `staggerContainer / fadeIn / slideUp / scaleUp` Framer Motion variants.
- **portfolioData**: The renamed and consolidated data file at `src/Data/portfolioData.js` that exports `projects`, `experiences`, and `achievements` arrays.
- **Experience_Section**: The new `src/components/Experience.jsx` component rendering work history in a vertical timeline (desktop) / stacked card (mobile) layout.
- **Achievements_Section**: The new `src/components/Achievements.jsx` component rendering certifications in a horizontally scrolling carousel with snap scrolling.
- **SkillGroup**: The extracted reusable component inside `About.jsx` that renders a labeled group of skill icon cards.
- **Reduced_Motion**: The CSS `prefers-reduced-motion: reduce` media query that must disable or simplify all animations.
- **Carousel**: The horizontally scrollable container inside the Achievements section supporting mouse-wheel, touch/swipe, keyboard (ArrowLeft/ArrowRight), and scroll-snap navigation.
- **Section_Anchor**: An HTML `id` attribute on a `<section>` element used by the Navbar for smooth-scroll targeting.

---

## Requirements

### Requirement 1: Codebase Audit — Remove Dead Code and Unused Imports

**User Story:** As a developer maintaining this portfolio, I want all dead code and unused imports removed, so that the codebase remains clean, production-safe, and free of misleading artifacts.

#### Acceptance Criteria

1. THE Portfolio SHALL delete `src/components/AboutSimple.jsx` because it is never imported or used.
2. THE Portfolio SHALL delete `src/utils/analytics.js` because it is never imported or used.
3. WHEN `src/components/Hero.jsx` is compiled, THE Portfolio SHALL not import `Download`, `MapPin`, `Mail`, or `Phone` from `lucide-react`.
4. WHEN `src/components/Navbar.jsx` is compiled, THE Portfolio SHALL not import `Code` from `lucide-react`.
5. WHEN `src/components/Contact.jsx` is compiled, THE Portfolio SHALL not import `MapPin` or `Phone` from `lucide-react`.
6. WHEN `src/components/Hero.jsx` renders an image load error, THE Portfolio SHALL handle it silently without calling `console.log`.
7. WHEN `src/components/Projects.jsx` is compiled, THE Portfolio SHALL not declare the unused `filter` state variable, `setFilter` setter, or `categories` array.
8. WHEN `src/components/Projects.jsx` is compiled, THE Portfolio SHALL not define or call the `openModal` function, since `ProjectModal` is never triggered from a card.

### Requirement 2: Codebase Audit — Fix Duplicate Logic and Minor Quality Issues

**User Story:** As a developer, I want duplicate effects and missing accessibility attributes fixed, so that the app behaves predictably and meets basic accessibility standards.

#### Acceptance Criteria

1. WHEN `src/contexts/ThemeContext.jsx` is compiled, THE ThemeContext SHALL contain exactly one `useEffect` that both applies the dark class to `document.documentElement` and writes to `localStorage`.
2. THE BackToTop button SHALL have an `aria-label` attribute with a descriptive value (e.g., "Scroll to top").
3. WHEN a Navbar link is in the active viewport section, THE Navbar SHALL visually distinguish that link from inactive links using a highlighted background or contrasting text color.

### Requirement 3: Data Consolidation

**User Story:** As a developer, I want all portfolio data in a single, accurately named file, so that updates to content require changes in only one place.

#### Acceptance Criteria

1. THE Portfolio SHALL create `src/Data/portfolioData.js` that exports `projects`, `experiences`, and `achievements` arrays.
2. WHEN `src/Data/portfolioData.js` is created, THE `projects` array SHALL contain the same entries previously in `src/Data/mockData.js`.
3. WHEN `src/components/Projects.jsx` imports project data, THE Projects_Section SHALL import `projects` from `src/Data/portfolioData.js`.
4. THE Portfolio SHALL keep `src/Data/mockData.js` intact as a backward-compatibility shim that re-exports from `portfolioData.js`, or delete it once all consumers are migrated.
5. THE `experiences` array in `portfolioData.js` SHALL contain at least one entry with the fields: `id`, `company`, `role`, `type`, `duration` (with `start` and `end` strings), `location`, `technologies` (array of strings), `responsibilities` (array of strings), `achievements` (array of strings), and `link` (string or null).
6. THE `achievements` array in `portfolioData.js` SHALL contain at least one entry with the fields: `id`, `title`, `issuer`, `issueDate`, `credentialId` (string or null), `skills` (array of strings), `verifyUrl` (string or null), and `badge` (string or null).

### Requirement 4: About.jsx Refactor — SkillGroup Component

**User Story:** As a developer, I want the repeated skill-card markup in About.jsx extracted into a reusable component, so that adding or restyling skill groups requires editing only one place.

#### Acceptance Criteria

1. THE About_Section SHALL define a `SkillGroup` component (within `About.jsx` or as a separate file) that accepts `title` (string) and `skills` (array of `{ name, logo }`) props.
2. WHEN `About.jsx` renders skill groups, THE About_Section SHALL use `SkillGroup` for all five groups (Languages, Environments, Frontend Development, Backend Development, Tools & Technologies) instead of repeating the card markup inline.
3. WHEN `SkillGroup` renders, THE About_Section SHALL preserve the existing card appearance: `rounded-xl`, `border border-gray-100 dark:border-gray-600`, `shadow-sm hover:shadow-lg`, `whileHover={{ scale: 1.05, y: -3 }}`, and icon + label layout.

### Requirement 5: Experience Section — Layout and Content

**User Story:** As a portfolio visitor, I want to see Varun's work experience in a clear timeline, so that I can quickly understand his background and professional history.

#### Acceptance Criteria

1. THE Experience_Section SHALL render at `<section id="experience">` positioned between the About and Projects sections in `App.jsx`.
2. WHEN the viewport width is 1024px or wider, THE Experience_Section SHALL render a vertical timeline with a centered connecting line and alternating left/right cards.
3. WHEN the viewport width is below 1024px, THE Experience_Section SHALL render stacked cards without a timeline line.
4. WHEN rendering each experience entry, THE Experience_Section SHALL display: company name, role/title, employment type badge, duration (start–end), location, technologies (as tag pills), responsibilities (as a bullet list), and achievements (as a highlighted list).
5. WHEN the `link` field of an experience entry is not null, THE Experience_Section SHALL render an external link icon that opens the URL in a new tab.
6. THE Experience_Section SHALL use a `staggerContainer` wrapper with `slideUp` per card, triggered `whileInView` with `viewport={{ once: true, amount: 0.1 }}`.
7. THE Experience_Section SHALL follow the Design_System: `bg-white dark:bg-dark-custom`, card tokens, section header typography, and `.container-custom` width constraint.
8. THE Experience_Section SHALL read all data from the `experiences` array in `portfolioData.js` and render no hardcoded content.

### Requirement 6: Achievements & Certifications Section — Layout and Content

**User Story:** As a portfolio visitor, I want to browse certifications and achievements in a smooth carousel, so that I can review credentials without the section dominating the page height.

#### Acceptance Criteria

1. THE Achievements_Section SHALL render at `<section id="achievements">` positioned between the Projects and Contact sections in `App.jsx`.
2. THE Achievements_Section SHALL NOT use the `section-padding` CSS class, to avoid the `min-height: 100vh` constraint on the carousel.
3. WHEN rendering the carousel, THE Achievements_Section SHALL use `scroll-snap-type: x mandatory` on the scroll container and `scroll-snap-align: start` on each card.
4. WHEN a user scrolls the mouse wheel vertically while the cursor is over the carousel container, THE Achievements_Section SHALL translate that vertical delta into horizontal scroll on the container.
5. WHEN a user swipes horizontally on a touch device, THE Achievements_Section SHALL scroll the carousel.
6. WHEN the carousel container is focused and a user presses the ArrowLeft or ArrowRight keyboard key, THE Achievements_Section SHALL scroll the carousel by one card width.
7. THE carousel container SHALL have `tabIndex={0}` and `aria-label="Achievements and certifications carousel"` so keyboard users can focus and navigate it.
8. WHEN rendering each achievement card, THE Achievements_Section SHALL display: title, issuer, issue date, skills (as tag pills), and a credential ID if `credentialId` is not null.
9. WHEN the `verifyUrl` field of an achievement is not null, THE Achievements_Section SHALL render a "Verify" link that opens in a new tab.
10. WHEN achievement cards enter the viewport, THE Achievements_Section SHALL animate each card from `opacity: 0, x: 40` to `opacity: 1, x: 0`, staggered by index.
11. THE Achievements_Section SHALL render left and right arrow buttons outside the scroll container for pointer-accessible navigation, each with an `aria-label`.
12. THE Achievements_Section SHALL follow the Design_System card tokens and monochrome palette.
13. THE carousel container SHALL have `overflow-x: auto` with hidden scrollbar styling, and SHALL NOT cause horizontal overflow at the page (`body`) level.

### Requirement 7: Navbar Update

**User Story:** As a portfolio visitor, I want the bottom navigation to include Experience and Achievements links, so that I can jump directly to either section.

#### Acceptance Criteria

1. THE Navbar SHALL include a link with `href="#experience"`, label "Experience", and the `Briefcase` icon from `lucide-react`.
2. THE Navbar SHALL include a link with `href="#achievements"`, label "Achievements", and the `Award` icon from `lucide-react`.
3. WHEN the links are inserted, THE Navbar SHALL maintain the existing link ordering: Home → About → Experience → Projects → Achievements → Contact.
4. WHEN `Navbar.jsx` is compiled, THE Navbar SHALL not import `Code` from `lucide-react` (satisfying Requirement 1.4).

### Requirement 8: Reduced Motion Support

**User Story:** As a user with vestibular or motion-sensitivity conditions, I want all animations to be reduced or disabled when I have enabled "Reduce Motion" in my OS settings, so that the portfolio is comfortable to view.

#### Acceptance Criteria

1. WHEN the `prefers-reduced-motion: reduce` media query is active, THE Experience_Section SHALL disable its slideUp entrance animations (elements appear instantly without translate or fade transitions).
2. WHEN the `prefers-reduced-motion: reduce` media query is active, THE Achievements_Section SHALL disable its slide-in card entrance animations.
3. WHEN the `prefers-reduced-motion: reduce` media query is active, THE Portfolio SHALL disable or simplify `whileHover` scale and translate transforms on all interactive elements in the new sections.
4. THE Portfolio SHALL implement reduced-motion support using Framer Motion's `useReducedMotion` hook or a CSS `@media (prefers-reduced-motion: reduce)` rule applied to transition properties, not by hardcoding static values.

### Requirement 9: Accessibility

**User Story:** As a user relying on keyboard navigation or a screen reader, I want all interactive elements to be accessible, so that I can use the portfolio without a mouse.

#### Acceptance Criteria

1. THE BackToTop button SHALL have `aria-label="Scroll to top"` (satisfying Requirement 2.2).
2. THE carousel container SHALL have `role="region"`, `aria-label="Achievements and certifications carousel"`, and `tabIndex={0}` (satisfying Requirement 6.7).
3. WHEN a "Verify" link is rendered inside an achievement card, THE Achievements_Section SHALL include `aria-label` describing the certificate name (e.g., `aria-label="Verify React Developer Certification"`).
4. WHEN an external link is rendered inside an experience card, THE Experience_Section SHALL include `target="_blank"` and `rel="noopener noreferrer"` and a descriptive `aria-label`.
5. THE Navbar SHALL add `aria-label={link.label}` to each icon-only nav button, and `title={link.label}` for tooltip support (existing pattern must be preserved and extended to new links).

### Requirement 10: No Horizontal Page Overflow

**User Story:** As a portfolio visitor, I want the page to never scroll horizontally at the document level, so that the layout is clean on all screen sizes.

#### Acceptance Criteria

1. THE Achievements_Section carousel container SHALL use `overflow-x: auto` internally while the parent `<section>` element uses `overflow-x: hidden` to prevent scroll bleed to the page level.
2. THE body element (`overflow-x: hidden` already set in `App.css`) SHALL continue to prevent any child element from causing a horizontal scrollbar at document level after all new sections are added.
3. WHEN the carousel renders on a viewport narrower than 400px, THE Achievements_Section carousel cards SHALL have a minimum width that keeps them readable without causing document-level horizontal overflow.
