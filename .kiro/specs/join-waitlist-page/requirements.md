# Requirements Document

## Introduction

This document defines the requirements for a new "Join" waitlist page on the Vocolens website. The page serves as a pre-launch landing destination where potential users can sign up to be notified when the app becomes available. The page is accessed via direct link only (shared in emails, social media, etc.) and does not appear in the site's navigation menu. It embeds an external waitlist form via an iframe.

## Glossary

- **Join_Page**: The new webpage rendered at the `/join` URL path on the Vocolens website, containing the waitlist signup iframe embed.
- **Header_Component**: The site-wide navigation component (`Header.tsx`) that renders desktop and mobile navigation links across all pages.
- **Waitlist_Iframe**: The embedded iframe element sourcing content from `https://claude.site/public/artifacts/37b6f24e-4826-4d57-b9ed-da44e7a02bad/embed` that provides the waitlist signup form.
- **TanStack_Router**: The file-based routing system used by the Vocolens site, where adding a file in `src/routes/` automatically creates a corresponding URL route.
- **Site_Layout**: The shared visual shell (background color, fonts, spacing) applied consistently across all pages via the root route layout.

## Requirements

### Requirement 1: Route Registration

**User Story:** As a visitor, I want to access the waitlist page at `/join`, so that I can sign up for the Vocolens waitlist via a direct link.

#### Acceptance Criteria

1. WHEN a visitor navigates to the `/join` URL path, THE Join_Page SHALL return an HTTP 200 response and render a visible page containing the Waitlist_Iframe element in the document.
2. THE Join_Page SHALL be implemented as a TanStack_Router file-based route at `src/routes/join.tsx`.
3. WHEN the `/join` route loads, THE Join_Page SHALL display the Waitlist_Iframe as the sole content element within the page's main content area, occupying the full available width of its container.
4. IF the Waitlist_Iframe source fails to load or is unreachable, THEN THE Join_Page SHALL remain rendered without displaying a broken or empty page to the visitor.

### Requirement 2: Navigation Exclusion

**User Story:** As the site owner, I want the join page excluded from all navigation menus, so that it remains a hidden landing page accessible only via direct link.

#### Acceptance Criteria

1. THE Header_Component SHALL NOT include any anchor element, button, or programmatic navigation target with a destination of `/join` in the desktop navigation bar.
2. THE Header_Component SHALL NOT include any anchor element, button, or programmatic navigation target with a destination of `/join` in the mobile navigation menu.
3. WHEN the Header_Component renders on the Join_Page, THE Header_Component SHALL display the identical set of navigation items (Story, Privacy, Features, Resources, and the "Start Your Journal" call-to-action) as it displays on every other page.
4. THE Join_Page SHALL NOT be listed in the `sitemap.xml` file, so that search engine crawlers do not discover it through the sitemap.

### Requirement 3: Iframe Embed Rendering

**User Story:** As a visitor, I want to see the waitlist signup form embedded on the page, so that I can join the waiting list without leaving the Vocolens site.

#### Acceptance Criteria

1. WHEN a visitor navigates to the `/join` route, THE Join_Page SHALL render an iframe element with the `src` attribute set to `https://claude.site/public/artifacts/37b6f24e-4826-4d57-b9ed-da44e7a02bad/embed`.
2. THE Waitlist_Iframe SHALL have its `width` attribute set to `100%`.
3. THE Waitlist_Iframe SHALL have its `height` attribute set to `600` pixels.
4. THE Waitlist_Iframe SHALL have the `title` attribute set to `vocolens-waitlist.html`.
5. THE Waitlist_Iframe SHALL have `frameborder` set to `0`.
6. THE Waitlist_Iframe SHALL include `clipboard-write` in the `allow` attribute.
7. THE Waitlist_Iframe SHALL include the `allowfullscreen` attribute.
8. IF the iframe content fails to load within 10 seconds, THEN THE Join_Page SHALL remain displaying the iframe element without removing it or showing an error state, allowing the browser's default iframe loading behavior to apply.
9. THE Waitlist_Iframe SHALL be the primary content element of the Join_Page, rendered below any site-wide navigation header and above any site-wide footer.

### Requirement 4: Responsive Layout

**User Story:** As a visitor on any device, I want the waitlist page to display properly on mobile, tablet, and desktop screens, so that I can sign up regardless of my device.

#### Acceptance Criteria

1. THE Waitlist_Iframe SHALL render at 100% width of its parent container on all viewport widths from 320px to 1920px.
2. WHILE the viewport width is between 320px and 767px, THE Join_Page SHALL display the Waitlist_Iframe without horizontal overflow or horizontal scrollbars appearing on the page.
3. THE Join_Page SHALL apply top padding of no less than the rendered height of the fixed Header_Component so that no portion of the Waitlist_Iframe is obscured behind the Header_Component when the page first loads at scroll position zero.
4. WHILE the viewport width is 768px or greater, THE Join_Page SHALL display the Waitlist_Iframe without horizontal overflow or horizontal scrollbars appearing on the page.

### Requirement 5: SEO and Social Sharing Meta Tags

**User Story:** As the site owner, I want the join page to have proper meta tags, so that shared links display meaningful previews on social media and search engines index the page appropriately.

#### Acceptance Criteria

1. THE Join_Page SHALL set the page title meta tag to "Join the Waitlist | Vocolens".
2. THE Join_Page SHALL set the meta description to "Sign up for the Vocolens waitlist. Be the first to know when our AI voice journal for emotional clarity launches."
3. THE Join_Page SHALL set the `og:title` meta property to "Join the Waitlist | Vocolens".
4. THE Join_Page SHALL set the `og:description` meta property to "Sign up for the Vocolens waitlist. Be the first to know when our AI voice journal for emotional clarity launches."
5. THE Join_Page SHALL set a canonical link element with `href` set to `https://vocolens.com/join`.
6. THE Join_Page SHALL set the `og:image` meta property to a URL referencing the site preview image so that social media platforms display a visual thumbnail when the link is shared.
7. THE Join_Page SHALL set the `og:type` meta property to "website" and the `og:url` meta property to `https://vocolens.com/join`.
8. THE Join_Page SHALL set the `twitter:card` meta name to "summary_large_image" so that Twitter/X displays a large image preview card when the link is shared.

### Requirement 6: Visual Consistency with Site

**User Story:** As a visitor, I want the join page to feel like part of the Vocolens site, so that I trust the page is legitimate.

#### Acceptance Criteria

1. THE Join_Page SHALL render as a child route of the root layout, inheriting the site background color (`bg-surface`), global CSS custom properties, and typography rules defined in the site stylesheet.
2. WHEN the Join_Page loads, THE Header_Component SHALL be displayed at the top of the page with the same logo, navigation links, scroll-hide behavior, and mobile menu as all other site pages.
3. THE Join_Page SHALL use the same font families (Comfortaa, Fraunces, Inter) as the rest of the site, applying Fraunces for headings and Inter for body text.
4. THE Join_Page SHALL NOT introduce any custom background colors, font overrides, or layout wrappers that differ from the site's root layout shell.

### Requirement 7: Iframe Accessibility

**User Story:** As a visitor using assistive technology, I want the embedded form to be identifiable, so that my screen reader can describe what the iframe contains.

#### Acceptance Criteria

1. THE Waitlist_Iframe SHALL have a `title` attribute containing the words "waitlist" and either "signup" or "sign up" (case-insensitive), with a total length between 10 and 80 characters.
2. THE Join_Page SHALL contain exactly one h1 heading element that includes the word "waitlist" (case-insensitive) and has a total length between 5 and 100 characters.
3. THE Join_Page SHALL render the h1 heading element before the Waitlist_Iframe in DOM order so that screen readers encounter the page heading before the embedded form.
4. THE h1 heading element SHALL be visible (not hidden via `display:none`, `visibility:hidden`, `aria-hidden="true"`, or zero dimensions) so that both sighted users and screen readers can perceive it.
