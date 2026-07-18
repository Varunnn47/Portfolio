# Implementation Plan: portfolio-experience-achievements

## Overview

Extend the portfolio with Experience and Achievements sections, wire them into the Navbar with IntersectionObserver active-highlighting, and apply six audit fixes (dead-code removal, color palette, email, CSS, ThemeContext, and import cleanup). All new code uses React + Vite + Tailwind CSS + Framer Motion with no new dependencies.

---

## Tasks

- [x] 1. Extend mockData.js with experience and achievements arrays
  - [x] 1.1 Add the `experience` named export to `src/Data/mockData.js`
    - Append an `experience` array with at least two sample `ExperienceEntry` objects
    - Each entry must include: `id`, `company`, `role`, `employmentType`, `startDate`, `endDate`, `location`, `technologies` (string[]), `responsibilities` (string[]), `achievements` (string[]), and an optional `companyUrl`
    - At least one entry must use `endDate: "Present"` to cover the active-position requirement
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

  - [x] 1.2 Add the `achievements` named export to `src/Data/mockData.js`
    - Append an `achievements` array with at least three sample `AchievementEntry` objects
    - Each entry must include: `id`, `title`, `organization`, `issueDate`, `category` (one of `"Certification"` | `"Hackathon"` | `"Award"` | `"Course"`), `badge` (emoji string), `skills` (string[]), optional `credentialId`, optional `verificationUrl`
    - Cover at least two distinct `category` values across the sample entries
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

  - [ ]* 1.3 Write property tests for mockData schema invariants
    - **Property 1: Experience entry schema invariant** — enumerate all entries in `experience`, assert all required fields present and `technologies`, `responsibilities`, `achievements` are string arrays
    - **Property 2: Achievement entry schema invariant** — enumerate all entries in `achievements`, assert all required fields present, `category` is a valid enum value, `skills` is a string array
    - Test file: `src/Data/mockData.test.js`
    - _Requirements: 1.2, 1.4, 1.5, 3.2, 3.3, 3.4, 3.5_

- [x] 2. Apply audit fixes to existing files
  - [x] 2.1 Fix `src/App.css` — rewrite `.section-padding`
    - Remove `min-height: 100vh`, `display: flex`, and `align-items: center` from the base `.section-padding` rule
    - Set responsive padding: `padding: 4rem 0` (mobile default), `padding: 6rem 0` at `min-width: 768px`, `padding: 8rem 0` at `min-width: 1024px`
    - Remove the `@media (max-width: 480px)` override that sets `min-height: auto`
    - _Requirements: 10.1, 10.2_

  - [x] 2.2 Fix `src/components/Hero.jsx` — remove unused imports and fix section height
    - Remove `Download`, `MapPin`, `Mail`, `Phone` from the `lucide-react` import line, retaining only `ArrowRight`
    - Add `min-h-screen flex items-center` to the `<section>` element's className so Hero maintains full-viewport height independently of `.section-padding`
    - _Requirements: 6.2, 10.3_

  - [x] 2.3 Fix `src/components/Contact.jsx` — remove unused imports
    - Remove `MapPin` and `Phone` from the `lucide-react` import line, retaining only `Mail`
    - _Requirements: 6.3_

  - [x] 2.4 Fix `src/contexts/ThemeContext.jsx` — merge double useEffect
    - Delete the first `useEffect` (DOM-only, no localStorage)
    - Keep the second `useEffect` which both mutates the DOM class and writes to `localStorage`
    - The merged effect must handle both the add/remove of the `dark` class and `localStorage.setItem` within one callback
    - _Requirements: 7.1, 7.2, 7.3_

  - [x] 2.5 Fix `src/components/BackToTop.jsx` — replace blue palette with black/white
    - Replace `bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600` with `bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200`
    - _Requirements: 8.1_

  - [x] 2.6 Fix `src/components/Footer.jsx` — correct email address
    - Replace `mailto:hello@portfolia.dev` with `mailto:edigavarunkumar66@gmail.com` in the `socials` array
    - _Requirements: 9.1_

  - [x] 2.7 Fix `src/components/Projects.jsx` — remove dead state and loading logic
    - Remove `filter` state declaration and the `setFilter` setter
    - Remove the `categories` array constant
    - Remove the `openModal` function and the `setIsModalOpen` / `setSelectedProject` calls inside it
    - Remove the `useEffect` that sets `loading` to `false` after 100 ms; remove the `loading` state declaration
    - Remove the `ProjectSkeleton` import and conditional skeleton render; render `filteredProjects.map(...)` directly (no loading branch)
    - Remove `useState` from the import if `loading` was its only remaining usage (keep it if `selectedProject`/`isModalOpen` remain — check whether ProjectModal is still needed)
    - _Requirements: 6.5, 6.6_

  - [x] 2.8 Delete `src/components/AboutSimple.jsx`
    - Delete the file entirely; confirm it has no imports in any other file before deleting
    - _Requirements: 6.1_

- [x] 3. Checkpoint — verify audit fixes
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Create `src/components/Experience.jsx`
  - [x] 4.1 Implement the Experience section component
    - Import `experience` from `../Data/mockData`
    - Import `motion` from `framer-motion` and `fadeIn`, `slideUp`, `staggerContainer` from `../utils/motionVariants`
    - Render `<section id="experience" className="section-padding bg-white dark:bg-dark-custom">`
    - Render section heading: `text-4xl md:text-5xl font-bold text-gray-900 dark:text-white` with the second word in a plain `<span>` (no color class)
    - Wrap the section body in `<motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}`
    - Map over `experience` (guard against undefined/empty — render nothing if length is 0)
    - Each card: `motion.div` with `variants={slideUp}`, `whileHover={{ scale: 1.02, y: -4 }}`, classes `rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-custom p-6`
    - Card header: company name + role + employmentType badge + date range (`startDate – endDate`; show "Present" when `endDate === "Present"`) + location
    - When `companyUrl` is a non-empty string, wrap company name in `<a href={companyUrl} target="_blank" rel="noopener noreferrer" aria-label={...}>`; otherwise render plain text
    - Card body: `responsibilities` as bullet list (`<ul>`)
    - Card footer: `achievements` list prefixed with a trophy emoji (🏆); `technologies` as pill tags with classes `px-3 py-1 bg-gray-100 dark:bg-dark-custom text-gray-700 dark:text-gray-400 rounded-full text-sm font-medium border dark:border-gray-600`
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11_

  - [ ]* 4.2 Write property tests for Experience component rendering
    - **Property 3: Experience card renders all entry content** — generate arbitrary arrays of `ExperienceEntry` objects, render `<Experience />` with injected data, assert card count equals entry count and all string fields appear in output
    - **Property 4: companyUrl link presence** — generate entries with optional `companyUrl`, assert anchor rendered iff `companyUrl` is a non-empty string
    - Test file: `src/components/Experience.test.jsx`
    - _Requirements: 2.4, 2.7, 2.8, 2.9, 2.10, 2.11_

- [x] 5. Create `src/components/Achievements.jsx`
  - [x] 5.1 Implement the Achievements carousel section component
    - Import `achievements` from `../Data/mockData`
    - Import `useRef`, `useState`, `useEffect` from `react`; `motion` from `framer-motion`; `fadeIn`, `scaleUp`, `staggerContainer` from `../utils/motionVariants`; `ChevronLeft`, `ChevronRight` from `lucide-react`
    - Declare `scrollRef = useRef(null)`, `canScrollLeft` and `canScrollRight` boolean states (initial: `false` / `true`)
    - Implement `handleScrollUpdate` to recompute `canScrollLeft = scrollLeft > 0` and `canScrollRight = scrollLeft < scrollWidth - clientWidth`
    - Implement `scrollBy` helpers for Prev (−cardWidth) and Next (+cardWidth) buttons using `scrollRef.current.scrollBy({ left: ±cardWidth, behavior: 'smooth' })`; derive `cardWidth` from `scrollRef.current.children[0]?.offsetWidth + gap` or a fixed constant matching the card's responsive width class
    - Implement `handleWheel(e)`: call `e.preventDefault()`, then `scrollRef.current.scrollLeft += e.deltaY`
    - Implement `handleKeyDown(e)`: on `ArrowRight` scroll next when `canScrollRight`, on `ArrowLeft` scroll prev when `canScrollLeft`; call `e.preventDefault()` for both arrow keys
    - Register `wheel` listener with `{ passive: false }` in a `useEffect` on mount; clean up on unmount
    - Render `<section id="achievements" className="section-padding bg-white dark:bg-dark-custom">`
    - Render heading row alongside Prev/Next buttons: Prev button `disabled={!canScrollLeft}`, Next button `disabled={!canScrollRight}`; both with `aria-label="Previous"` / `aria-label="Next"`; apply `opacity-50 cursor-not-allowed` when disabled
    - Render carousel container `<div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-4 scroll-smooth [scroll-snap-type:x_mandatory] scrollbar-hide" tabIndex={0} onScroll={handleScrollUpdate} onKeyDown={handleKeyDown}>`
    - Each card: `motion.div` with `flex-shrink-0 w-72 md:w-80 lg:w-96 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-custom p-6`, `style={{ scrollSnapAlign: 'start' }}`, `whileHover={{ scale: 1.02, y: -4 }}`
    - Card layout: badge emoji large at top, title, organization, issueDate, category label, skills as pill tags (same classes as Experience), conditional "Verify" link with `target="_blank" rel="noopener noreferrer"` when `verificationUrl` defined
    - Guard against undefined/empty `achievements` array
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10, 4.11, 4.12, 4.13, 4.14, 4.15, 4.16, 4.17, 4.18, 4.19, 4.20_

  - [ ]* 5.2 Write property tests for Achievements component
    - **Property 5: Achievement card renders all entry content** — generate arbitrary achievement arrays, assert badge/title/organization/category/skills rendered; "Verify" link present iff `verificationUrl` defined
    - **Property 6: Carousel button state tracks scroll position** — simulate scrollLeft/scrollWidth/clientWidth values, assert `canScrollLeft` and `canScrollRight` computed correctly, button `disabled` matches
    - **Property 7: Keyboard navigation** — simulate initial scroll positions and card widths, assert ArrowRight/ArrowLeft adjust scrollLeft by cardWidth, boundaries respected
    - **Property 8: Wheel hijacking** — simulate wheel events with arbitrary `deltaY`, assert `preventDefault` called and `scrollLeft` changes by `deltaY`
    - Test file: `src/components/Achievements.test.jsx`
    - _Requirements: 4.6, 4.9, 4.10, 4.11, 4.12, 4.14, 4.17, 4.18, 4.19, 4.20_

- [x] 6. Update `src/components/Navbar.jsx`
  - [x] 6.1 Add Experience and Achievements links, remove unused Code import, add IntersectionObserver active state
    - Remove `Code` from the `lucide-react` import; add `Briefcase` and `Award`
    - Add `{ label: 'Experience', href: '#experience', icon: Briefcase }` between About and Projects in the `links` array
    - Add `{ label: 'Achievements', href: '#achievements', icon: Award }` between Projects and Contact
    - Add `const [activeSections, setActiveSections] = useState(new Set())` state
    - Add a `useEffect` that creates one `IntersectionObserver` (threshold `0.3`) watching all six section IDs (`#home`, `#about`, `#experience`, `#projects`, `#achievements`, `#contact`); on each intersection update call `setActiveSections(prev => { const next = new Set(prev); entry.isIntersecting ? next.add(id) : next.delete(id); return next; })`; disconnect observer in cleanup
    - Apply active classes to each link when `activeSections.has(link.href.slice(1))` — use `bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white` for active state vs the existing idle classes
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 6.4_

  - [ ]* 6.2 Write property tests for Navbar active state
    - **Property 9: Navbar active state reflects visible sections** — generate arbitrary subsets of section IDs, simulate IntersectionObserver callbacks, assert active class applied to exactly those links whose href is in the visible set
    - Test file: `src/components/Navbar.test.jsx`
    - _Requirements: 5.5, 5.6_

- [ ] 7. Update `src/contexts/ThemeContext.jsx` property test
  - [ ]* 7.1 Write property tests for ThemeContext
    - **Property 10: Theme change applies exactly once per update** — toggle `isDark` with arbitrary boolean values, assert `classList.add/remove` called once and `localStorage.setItem` called once per update
    - Test file: `src/contexts/ThemeContext.test.jsx`
    - _Requirements: 7.1, 7.2, 7.3_

- [x] 8. Wire everything together in `src/App.jsx`
  - [x] 8.1 Import and render Experience and Achievements in App
    - Add `import Experience from './components/Experience'`
    - Add `import Achievements from './components/Achievements'`
    - Inside `<main>`, render: `<Hero />` → `<About />` → `<Experience />` → `<Projects addToast={addToast} />` → `<Achievements />` → `<Contact addToast={addToast} />`
    - Do NOT pass `addToast` to `<Experience />` or `<Achievements />`
    - _Requirements: 11.1, 11.2, 11.3_

- [x] 9. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

---

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP delivery
- Property tests require `fast-check` as a dev dependency: `npm install --save-dev fast-check`
- Each task references specific requirements for traceability
- The audit fixes in task 2 are prerequisite hygiene before new sections land
- Carousel wheel listener must use `{ passive: false }` to allow `preventDefault()`; omitting this causes a browser warning and the hijack silently fails
- `scrollbar-hide` utility needs Tailwind plugin `tailwind-scrollbar-hide` or a manual CSS rule — add `.scrollbar-hide::-webkit-scrollbar { display: none }` + `-ms-overflow-style: none; scrollbar-width: none` to `App.css` if the plugin is not already configured
- All interactive elements (Prev/Next buttons, Verify links, company links) must have visible focus rings for accessibility

---

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8"] },
    { "id": 1, "tasks": ["1.3", "4.1", "5.1"] },
    { "id": 2, "tasks": ["4.2", "5.2", "6.1"] },
    { "id": 3, "tasks": ["6.2", "7.1", "8.1"] }
  ]
}
```
