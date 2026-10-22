# Focalpoint --- Project Context for AI IDE

> **Purpose of this document:** Give an AI coding assistant the project
> context, responsibilities, product requirements, design direction,
> workflow, and constraints needed to help build the Focalpoint website.
> Treat this as the working source of truth, but flag unresolved
> decisions instead of inventing answers.

## 1. Project Overview

**Focalpoint** is a Philippine student journalism publication.

**Tagline:** "Bringing stories into focus. Amplifying voices with
purpose. Empowering the next generation of student journalists."

The website will serve as the publication's official online home. It
should make journalism content easy to discover and read, represent the
publication and its desks, and provide a reliable workflow for
publishing articles.

The first release should prioritize a usable, readable publication
website. Highly interactive or decorative ideas can be considered after
the fundamentals are working.

## 2. Project Lead and Team Responsibilities

### Web Development Division Head / Project Lead

**Jyvhan Earl Ponce** is the Web Development Division Head and is
responsible for coordinating WebDev matters.

Responsibilities include: - Coordinate the WebDev team and delegate
development tasks. - Turn the approved PRD and design references into an
implementable website. - Assess design feasibility, page structure,
responsiveness, and implementation effort. - Coordinate with the GFX
team and editorial leadership. - Keep the first release aligned with the
agreed scope and launch timeline. - Organize testing and help
prepare/distribute admin accounts as appropriate. - Gather feedback from
the EIC/editorial board and staff, then prioritize fixes.

### GFX Team

The GFX team is encouraged to contribute creative layout ideas because
of its visual-design strengths.

Responsibilities: - Create visual concepts and page layouts, including
in Canva if that is the team's most comfortable tool. - Supply
references and visual guidance for the website. - Collaborate with
WebDev to ensure designs are understandable and feasible. - Designs are
proposals for review, not automatically final or binding.

### WebDev Team

Responsibilities: - Review GFX concepts and clarify details where
needed. - Implement the approved design in code. - Build the page
structure, navigation, article/category layouts, and responsive
behavior. - Ensure the site is practical to maintain and can support
recurring article publication. - Test key user flows and fix
layout/content issues.

### EIC / Editorial Board / Staff

Responsibilities: - Review and approve the overall design direction and
website structure. - Confirm publication categories, article
presentation, and content requirements. - Provide content and feedback
relevant to their desks. - Help verify that the website reflects
Focalpoint's identity and editorial needs.

### Coordination note

Selwyn Cjay Rayray offered to coordinate the project with the GFX Chief
and help find GFX members who can assist with design. WebDev task
delegation remains with the WebDev Division Head. The editorial board
should be kept aware of progress.

## 3. Working Timeline

The originally communicated schedule is:

-   **October 18--27, 2026:** Brainstorming, drafting, UI layout/design.
-   **October 27--29, 2026:** Testing and distribution of admin
    accounts.
-   **November 1, 2026:** Target website launch.

The timeline is aggressive. Treat it as a prioritization guide and keep
the first release manageable. Confirm any updated dates with the project
team rather than assuming the schedule has changed.

## 4. Product Goals

The website should:

1.  Establish Focalpoint's official online presence.
2.  Make articles easy to find, browse, read, and share.
3.  Organize stories by publication desk/category.
4.  Highlight important and recent stories.
5.  Introduce the publication, its staff, and its desks.
6.  Support a practical content-publishing workflow for authorized
    admins.
7.  Work well on desktop and mobile.
8.  Leave room for future reader-engagement and publication features
    without delaying the initial launch.

## 5. Intended Audiences

-   Students and the school community.
-   Regular readers of Focalpoint.
-   Student journalists, writers, editors, and contributors.
-   Visitors who want to learn about the publication.

## 6. Product Requirements by Phase

### Phase 1 --- Fundamentals and Design Direction

Establish the site's identity and core structure before adding advanced
functionality.

-   Agree on the website's overall identity, typography, colors,
    spacing, and visual style.
-   Establish navigation and category structure.
-   Gather staff ideas and reference websites.
-   Draft low-fidelity layouts for the homepage, article page, and
    category page.
-   Ensure the layout is readable, mobile-friendly, and avoids excessive
    whitespace.
-   Agree on how content will be reviewed and published.
-   Obtain appropriate editorial approval before implementation.

**Expected output:** An agreed structure and design direction that
WebDev can implement.

### Phase 2 --- Essential Features for Launch

These are the main priorities for the November 1 target.

-   **Homepage**
    -   Focalpoint branding and clear navigation.
    -   Featured or lead story.
    -   Top Stories / important stories.
    -   Latest Stories.
    -   Links to publication categories.
    -   Brief About Focalpoint and Meet the Team/Our Desks previews.
    -   Footer.
-   **Publication categories**
    -   News.
    -   Editorial / Column.
    -   Features.
    -   Sports.
    -   Sci-Tech.
    -   Each category should have a dedicated page or route that lists
        relevant articles.
    -   Final category names and structure must be confirmed by
        editorial leadership.
-   **Article page**
    -   Category label.
    -   Main headline.
    -   Author/byline and publication date.
    -   Featured image and caption where relevant.
    -   Readable article body with clear paragraph spacing.
    -   Related stories or a route back to the category/listing page
        where practical.
-   **About / Meet the Team**
    -   Brief publication introduction and mission.
    -   Editorial board, writers, and/or desks, based on the content
        approved by the team.
-   **Publishing and operational basics**
    -   Authorized admin publishing workflow.
    -   Responsive layout.
    -   Good readability and sensible loading performance.
    -   Basic loading and error states.
    -   Appropriate testing before launch.

**Launch principle:** Reliable article publishing and reading matter
more than decorative or complex interactive features.

### Phase 3 --- Reader Experience and Publication Enhancements

Plan these after the essentials, based on time and team capacity.

-   Search and improved story discovery.
-   Interactive photo gallery. Focalpoint crew members may submit photos
    with captions/context/story; submissions should be reviewed by the
    appropriate team (suggested: Circu/WebDev) before publication.
-   Reader feedback, potentially with an anonymous option.
-   An interactive "Explore Our Desks" section with each desk's identity
    and description.
-   "Our Journey" page covering the publication's growth, milestones,
    and achievements.
-   Multimedia or podcasts.
-   A Fokie shortcut/icon for feedback or comments.

### Phase 4 --- Nice-to-Have / Experimental Ideas

These were suggested by staff and should not block the initial launch:

-   Interactive Fokie guide to introduce Focalpoint and explain the
    website.
-   Fokie waving animation on the homepage.
-   Fokie-themed error page (for example, a confused pose).
-   Custom loading screen.
-   Time-based welcome message on the homepage.
-   Pink cursor with a feather trail while dragging.
-   Animated/GIF banners or headers.
-   Word of the Day, including meaning and example usage.
-   Journalism techniques/tips with short explanations.
-   Fokie as the default profile picture for comments or feedback.
-   Daily login streaks.
-   Global chat for discussion of opinions and favorite articles.
-   Reactions or additional reader interaction.
-   "Fokie Bitcoin" --- **unclear idea; ask the staff member who
    suggested it to clarify before defining or implementing it.**

Some of these ideas imply accounts, moderation, privacy, performance,
accessibility, or ongoing content maintenance. Assess those costs before
implementation. Do not add accounts, chat, streaks, or similar systems
without a clear approved requirement.

## 7. Homepage Wireframe Direction

A rough, hand-drawn wireframe was created for visualization only. It is
**not final and not a fixed specification**.

The initial concept includes:

1.  **Header:** Focalpoint logo/name and a search field or placeholder
    if search is in scope.
2.  **Navigation:** Home, News, Editorial, Features, Sports, Sci-Tech,
    About.
3.  **Featured story:** Large image placeholder, category label,
    headline, short excerpt, byline/date, and "Read Story" link/button.
4.  **Top Stories:** A row/grid of highlighted story cards.
5.  **Latest Stories:** A readable list/grid with thumbnails, category,
    headline, byline, and date.
6.  **Meet the Team / Our Desks:** Small preview of staff/desks, linking
    to more information.
7.  **About Focalpoint:** Short introduction and link to the About page.
8.  **Footer:** Focalpoint identity/tagline and relevant links/social
    links if confirmed.

Keep the layout clear and compact. Avoid excessive whitespace, cramped
content, overly decorative sections, and repeated information. The final
layout should follow approved GFX/editorial input, not merely copy the
wireframe.

## 8. Design Direction and Color Palette

Requested brand palette:

-   **Deep burgundy:** `#680820` --- primary color.
-   **Pink:** `#DB3E65` --- accent/interaction color.
-   **Pink-red:** `#D12F58` --- secondary emphasis/highlight color.
-   White and soft neutral backgrounds may be used for contrast and
    readability.

The initial wireframe does not need polished colors or final assets.
First establish hierarchy, spacing, page structure, and content
placement.

Design goals: - Reader-first and editorial in character. - Strong
headline hierarchy. - Clear distinction between categories, headlines,
bylines, dates, and article excerpts. - Readable article body width and
paragraph spacing. - Responsive on mobile, tablet, and desktop. -
Consistent spacing, typography, image ratios, cards, and navigation. -
Avoid generic template styling and excessive whitespace. - Maintain
accessibility and legible contrast. - Keep the design realistic for the
WebDev team to implement and maintain.

## 9. Design Reference Websites

Use these sites as inspiration for layout, editorial hierarchy,
navigation, and publication identity. **Do not copy them directly.**

-   The AXIS --- https://theaxispub.cloud/
-   The LaSallian --- https://thelasallian.com/
-   The GUIDON --- https://theguidon.com/about/
-   Ang Pamantasan --- https://www.angpamantasan.org/news
-   Pagbutlak --- https://pagbutlak.org/
-   Pressroom PH --- https://pressroomph.com
-   Explained PH --- https://explained.ph
-   JuanClick --- https://juanclick.org
-   The Frontman --- https://thefrontman.ph/
-   Philippine Collegian --- https://phkule.org/
-   JourKnows PH --- https://jourknowsph.com/
-   Astra by JuanClick --- https://astra.juanclick.org/

Staff particularly suggested looking at The AXIS, The LaSallian, The
GUIDON, Explained PH, JuanClick, The Frontman, JourKnows, and
JuanClick/Astra. Explained PH was mentioned as inspiration for
highlighting Top Stories. Staff also noted that some reference sites
have awkward whitespace; Pagbutlak was specifically noted as having too
much dead space when reading on laptop/tablet. Use references critically
and adapt useful patterns to Focalpoint's needs.

## 10. Design-to-Development Workflow

Preferred default workflow:

**GFX layout in Canva (or another tool the designers are comfortable
with) → review/approval → WebDev implementation in code → testing →
editorial review.**

-   Canva is for visual design/reference; it does **not** automatically
    produce clean, production-ready code.
-   WebDev must implement the responsive layout, navigation,
    article/category routes, content handling, and publishing workflow.
-   A Canva → WordPress → Code workflow is possible but is not required.
    Avoid adding WordPress as an extra stage unless the team has a clear
    reason to prototype or validate the design in WordPress.
-   Figma is also acceptable if it fits the team's workflow, but do not
    force GFX members to use a tool they are not comfortable with.
-   Designs should be treated as proposals until reviewed by WebDev and
    approved by the appropriate editorial lead.
-   Ask GFX to focus on useful layouts for the core pages first:
    homepage, article page, and category page. Reuse the same visual
    system across pages.
-   WebDev should raise implementation constraints early rather than
    waiting until after every page is designed.

## 11. Suggested Initial Page Structure

The PRD describes a multi-page publication structure with distinct page
types:

-   `/` --- Homepage.
-   `/news` --- News listing.
-   `/editorial` --- Editorial/Column listing.
-   `/features` --- Features listing.
-   `/sports` --- Sports listing.
-   `/sci-tech` --- Sci-Tech listing.
-   `/about` --- About the publication and team/desks, depending on
    approved structure.
-   Individual article routes --- exact route pattern to be chosen
    during implementation.

These are illustrative routes, not a mandate to use a particular
framework or routing library. The site can use a modern framework with
client-side navigation while still exposing distinct, shareable routes.
Preserve search-engine accessibility and direct loading of article URLs.

## 12. Technical Guidance for the AI IDE

The technology stack has **not been formally fixed in this context
document**. Before introducing a new framework, inspect the existing
repository and follow its current conventions.

AI IDE instructions: - First inspect the repository structure, package
files, existing code, and current implementation. - Do not replace or
restructure a working codebase without explaining why and obtaining
approval. - Identify the framework, routing approach, styling system,
content model, and deployment setup before making major decisions. -
Implement the approved first-release scope before optional features. -
Build reusable components for navigation, story cards, featured stories,
article metadata, category pages, and footer where appropriate. - Keep
article data/content separate from presentation where practical. - Use
semantic HTML and accessible controls. - Ensure responsive behavior at
mobile, tablet, and desktop widths. - Provide loading, empty, and error
states where relevant. - Avoid fake functionality: if search, admin
publishing, comments, or another feature is only a mockup, label it as
such and explain what is needed for a real implementation. - Do not
invent credentials, APIs, backend services, editorial content, staff
names, or deployment settings. - Protect admin functionality and private
configuration. Do not expose secrets in client-side code. - Ask for
clarification when an unresolved product decision materially affects
architecture or scope. - Keep changes focused, explain major
assumptions, and report what was implemented and what remains
incomplete. - Do not implement Phase 3 or Phase 4 features merely
because they appear in this document.

## 13. Content and Editorial Considerations

-   The site is a journalism publication, so article readability and
    content hierarchy are core product requirements.
-   Story cards should show the category and headline clearly;
    byline/date should be included where appropriate.
-   Images should support the story and have captions/alternative text
    when applicable.
-   Article content should not be replaced with lorem ipsum in
    production.
-   Any placeholder text, names, dates, photos, or stories used during
    development should be clearly understood as temporary sample
    content.
-   Establish who is allowed to publish or edit content before enabling
    a real admin workflow.
-   Reader-submitted photos, anonymous feedback, comments, or chat
    require an agreed review/moderation process before launch.

## 14. Prioritization Rules

When deciding what to build next, use this order:

1.  **Must work:** navigation, category/story discovery, article
    reading, responsive layout, agreed publishing workflow.
2.  **Must be clear:** visual hierarchy, headline/byline/date/category
    display, About/team information, error/loading behavior.
3.  **Improve if time allows:** search, richer desk pages, photo
    gallery, reader feedback, journey/milestones, multimedia.
4.  **Defer unless explicitly approved and feasible:** login streaks,
    global chat, complex interactive Fokie behavior, cursor effects,
    elaborate animation, experimental features.

If the timeline becomes tight, reduce optional scope rather than
compromising core article reading, publishing, responsiveness, or basic
quality.

## 15. Open Decisions --- Do Not Assume

Confirm these with the relevant team members:

-   Final category names and whether "Editorial" and "Column" are one
    category or separate.
-   Final approved homepage/article/category designs.
-   Whether search is required for the first release or can be deferred.
-   The selected framework, hosting, database/CMS, and deployment
    workflow, based on the existing repository and team capabilities.
-   The actual admin/content-publishing approach and who receives
    access.
-   How editorial review and approval will work.
-   Whether About, Meet the Team, and Explore Our Desks should be
    separate pages or combined sections.
-   Whether any reader feedback or photo submission feature is approved
    for launch.
-   Clarification of "Fokie Bitcoin."
-   Updated launch schedule, if any changes have been agreed.

## 16. Definition of a Successful Initial Launch

The first release is successful if:

-   Readers can navigate the site and find stories by category.
-   Articles have clear headlines, categories, bylines/dates, and
    readable content.
-   Featured, top, and latest stories are presented clearly.
-   The site works on mobile and desktop without major layout issues.
-   The approved publication/team information is available.
-   The agreed content-publishing process works for authorized staff.
-   Basic loading/error states and pre-launch checks are in place.
-   The website reflects Focalpoint's identity while remaining practical
    to maintain.

**Final instruction to the AI IDE:** Treat the PRD and this context as
guidance for a first-release journalism website. Inspect the repository
first, preserve existing working decisions, prioritize fundamentals, and
ask before making major architectural or scope assumptions. The
wireframe and reference websites are inspiration, not rigid
specifications.
