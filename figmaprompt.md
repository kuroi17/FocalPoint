# STRICT FIGMA-TO-CODE IMPLEMENTATION — PIXEL-PERFECT FIDELITY



## 1. PRIMARY OBJECTIVE

Implement the provided Figma design in code with the highest possible visual and structural fidelity.

Treat Figma as the **single source of truth**. Your role is to translate the existing design into working code, NOT to redesign, reinterpret, improve, modernize, simplify, or creatively modify it.

The final implementation must match the specified Figma frames and their intended UI as closely as technically possible.

**Follow the rule: EXACTLY WHAT IS IN FIGMA — NOTHING MORE, NOTHING LESS.**

## 2. INSPECT FIGMA BEFORE WRITING CODE

Before implementing anything:

- Inspect the specified Figma node and its complete hierarchy.
- Examine all relevant frames, nested components, groups, layers, variants, and instances.
- Retrieve and inspect the available design properties, measurements, typography, colors, effects, constraints, and layout settings.
- Identify every image, icon, illustration, logo, SVG, and other asset used in the design.
- Inspect the original asset sources and available exports.
- Read all visible text directly from the design.
- Identify the exact font families, font weights, font sizes, line heights, letter spacing, text alignment, and text transformations.
- Inspect component dimensions, padding, margins, gaps, alignment, border radii, borders, shadows, and background properties.
- Identify the intended viewport dimensions and responsive behavior, if specified.
- Check whether existing project components, assets, styles, and dependencies should be reused.

Do not begin implementation based on a thumbnail, partial screenshot, assumptions, or incomplete inspection when additional Figma information is available.

If any required design detail or asset cannot be retrieved, identify the specific missing information instead of silently guessing.

## 3. ASSET FIDELITY — USE THE EXACT ORIGINAL ASSETS

Every asset used in the implementation must come from the provided Figma design or its explicitly referenced source assets.

This includes, but is not limited to:

- Images and photographs
- Logos and brand marks
- Icons and icon sets
- Illustrations
- SVG graphics
- Background images and textures
- Decorative elements
- Custom fonts and font files
- Other visual resources

Mandatory rules:

1. Use the exact original assets referenced by Figma whenever they are available.
2. Preserve the original image, icon, and illustration. Do not redraw, regenerate, replace, recreate, or substitute them with visually similar alternatives.
3. Do not use AI-generated images, stock images, placeholder graphics, emoji, or unrelated external assets.
4. Do not replace original icons with Unicode characters, emoji, generic icon libraries, or hand-drawn CSS alternatives.
5. Do not use an asset from a different source merely because it looks similar.
6. Preserve the intended image dimensions, aspect ratio, cropping, object positioning, opacity, and fitting behavior.
7. Preserve SVG shapes and original vector assets whenever available.
8. Do not introduce additional assets that do not exist in the specified design.
9. Reuse existing project assets when they are confirmed to be the same assets referenced by Figma.
10. If an asset is unavailable, report it explicitly and request the required source. Do not fabricate a replacement.

The final result must use the same visual assets as the original Figma design.

## 4. TEXT AND TYPOGRAPHY — NO UNAUTHORIZED CHANGES

All text must match the Figma design exactly.

This includes:

- Text content
- Spelling and capitalization
- Punctuation
- Numbers and symbols
- Line breaks and paragraph breaks, where specified
- Font family
- Font weight
- Font size
- Line height
- Letter spacing
- Text alignment
- Text color
- Text decoration
- Text transformation
- Text container dimensions and wrapping behavior

Do not rewrite, paraphrase, shorten, expand, translate, correct, or improve any text.

Do not invent headings, subtitles, descriptions, labels, button text, helper text, navigation items, or placeholder content.

Do not use a substitute font when the original font is available. Load and configure the actual font and its required weights.

If a font is inaccessible, report the missing font rather than silently choosing a similar-looking typeface.

Text must not wrap differently from the intended design unless the specified viewport or actual runtime behavior requires it.

## 5. PIXEL-PERFECT LAYOUT AND STYLING

Match the Figma layout and styling as accurately as possible.

Implement the actual design values for:

- Width and height
- Positioning and alignment
- Padding and margins
- Gaps and spacing
- Grid and flex layouts
- Layer ordering and stacking
- Container dimensions
- Background colors and gradients
- Borders and border radii
- Shadows and blur effects
- Opacity
- Overflow and clipping
- Image sizing and cropping
- Text positioning and alignment
- Component sizes and proportions

Use the original design measurements and layout properties whenever they can be retrieved.

Do not eyeball measurements when exact values are available.

Do not introduce arbitrary spacing, extra whitespace, new containers, additional decorations, unnecessary gradients, or new visual effects.

Avoid arbitrary CSS overrides that cause the implementation to deviate from the reference.

Do not force every element into a generic design system if doing so changes the original Figma styling.

## 6. STRICT SCOPE CONTROL — DO NOT IMPROVISE

Implement only the screens, frames, components, states, and interactions included in the specified Figma scope or explicitly required by the existing design.

**Strictly prohibited:**

- Adding UI elements that do not exist in the design
- Removing existing UI elements
- Redesigning any component
- Changing the established visual hierarchy
- Adding new sections or content
- Adding extra buttons, icons, labels, badges, or cards
- Inventing navigation, menus, modals, or popups
- Adding decorative elements or animations without design evidence
- Introducing new colors, typography, or design tokens without justification
- Replacing the original layout with a preferred implementation
- Adding unnecessary responsive elements that alter the intended composition
- Making subjective design improvements
- Adding features or interactions that were not specified
- Refactoring unrelated parts of the project in a way that changes existing behavior or UI

Do not assume that a design needs improvement just because a different approach seems more modern, accessible, elegant, or conventional.

Your responsibility is faithful implementation, not creative decision-making.

If something is ambiguous, inspect the available Figma properties, components, variants, and assets first. If it remains ambiguous, ask for clarification or clearly report the limitation. Do not make an unsupported design decision.

## 7. CODE IMPLEMENTATION RULES

Translate the design into maintainable, functional code while preserving the original appearance.

- Follow the existing project's framework, architecture, file structure, naming conventions, and coding standards.
- Inspect the existing codebase before creating or modifying files.
- Reuse existing dependencies, components, assets, and utilities when appropriate.
- Avoid unnecessary new dependencies.
- Use the actual assets and fonts rather than approximations.
- Preserve existing application functionality outside the requested scope.
- Do not replace established project architecture or rewrite unrelated files without a clear technical requirement.
- Implement only the interactions supported by the design or explicitly required by the task.
- Do not invent functionality simply to make static UI elements appear interactive.
- Keep implementation changes limited to what is necessary to reproduce the specified Figma design.
- Do not leave avoidable placeholders, dummy content, or simulated assets in the final implementation.

Code quality matters, but code quality must not become an excuse to change the design.

## 8. RESPONSIVE BEHAVIOR

Use the responsive rules, constraints, and layout behavior specified in Figma whenever available.

Do not invent a new mobile, tablet, or desktop design that has not been provided.

If multiple viewport frames exist, implement each according to its corresponding reference.

If only one viewport is specified, preserve its intended composition and use the available constraints and layout properties to determine appropriate behavior at other sizes.

Do not add, remove, rearrange, or redesign components at different breakpoints without evidence from the design or explicit requirements.

When responsive behavior cannot be determined confidently, identify the ambiguity instead of inventing a new design.

## 9. VALIDATION AGAINST FIGMA

After implementation, compare the actual rendered UI against the original Figma reference.

Use the same viewport dimensions and relevant display conditions for both.

Verify:

- Every element is present and in the correct position.
- No element has been added or omitted.
- All images, icons, and illustrations match the original assets.
- All text matches the original content and typography.
- Spacing, dimensions, alignment, and proportions match.
- Colors, backgrounds, borders, radii, and shadows match.
- Image cropping and positioning match.
- Layering, clipping, and overflow behave correctly.
- Components and states match their corresponding Figma references.
- No unrelated project screens or functionality have been unintentionally changed.

If screenshot comparison tools are available, use them to identify visual differences and correct those differences iteratively.

Do not declare the implementation pixel-perfect merely because the page renders successfully.

A successful build is not proof of visual fidelity.

## 10. HANDLING MISSING INFORMATION

Never silently improvise when the source of truth is incomplete.

If you cannot access a required Figma node, image, asset, font, component property, interaction, or responsive specification:

1. Identify exactly what is missing.
2. Explain which part of the implementation depends on it.
3. Inspect alternative available Figma metadata or original project resources.
4. Ask for the missing information if necessary.
5. Continue with independently verifiable parts only when doing so does not require inventing the missing design.

Do not represent approximations as exact matches.

## 11. FINAL ACCEPTANCE CRITERIA

The implementation is complete only when:

- The specified Figma scope has been implemented.
- The original assets and fonts are used wherever available.
- The visible text and styling match the design.
- The layout matches the reference as closely as technically possible.
- No unauthorized UI or content has been introduced.
- No intended UI element has been omitted.
- The application builds and runs successfully.
- The rendered output has been checked against the reference.
- Remaining differences or unavailable resources are explicitly documented.

## FINAL INSTRUCTION

**Figma is the authority. Do not make creative decisions on behalf of the designer.**

Inspect first. Extract the actual design specifications. Implement the specified UI. Compare the result. Correct discrepancies.

Do not improvise, substitute, redesign, add, remove, or modify anything without explicit authorization or a demonstrable technical necessity.

The goal is not to create a UI inspired by the Figma design.

The goal is to reproduce the actual Figma design in working code — faithfully, precisely, and within the exact scope provided.