# Sahih Masr Web: Color Usage Report

## Overview

The site runs on one blue (`primary/blue`, #155EE7), one near-black ink (`primary/ink`, #070B16), a cool-white page color (`primary/cool-white`, #F5F9FF) and one red reserved for fact-check verdicts (`primary/orange-verdict`, #F03423). Light blue tints carry surfaces, tags and grid lines; one grey carries secondary text and type tags, and a lighter grey the desktop header icons.

All colors are variables in one collection, Color Tokens, with a single mode and no paint styles. It holds 17 tokens in four groups (primary, neutrals, tints, shadows), of which 14 are bound on the Web-final page. Nearly every fill, text color and stroke is bound to a token; the three exceptions are listed in the notes at the end.

Scope: the 24 visible website artboards on the Web-final page. Counts are layers or text runs using the color.

## Palette

Fourteen tokens do all the work on this page; the other three are defined but not bound anywhere. Tokens with an opacity carry it in their value, so apply them as is.

| Token | Value | Uses | Main role |
| --- | --- | --- | --- |
| primary/blue | #155EE7 | 508 | Brand color: accent text, buttons, footer, card borders, dividers, icons |
| primary/cool-white | #F5F9FF | 446 | Page background; text and icons on blue |
| primary/ink | #070B16 | 342 | Primary text; video player background |
| primary/orange-verdict | #F03423 | 307 | Verdict text, verdict tag border, the dotted connector between tags |
| primary/orange-verdict-fill | #B32116 at 10% | 52 | Verdict tag background; Statement page quote block |
| neutrals/300 | #565A63 | 192 | Secondary text (dates, excerpts); type tag text and border |
| neutrals/600 | #A6AAB1 | 24 | Header utility icons (search, language) on desktop |
| neutrals/100 | #21252F at 10% | 48 | Type tag background |
| neutrals/white | #FFFFFF | 25 | Statement cards |
| tints/900 | #DFEBFF | 138 | Topic tag background; dropdown fill; text on blue tags; slider track |
| tints/800 | #C8DAFA | 151 | Image and video placeholders; inactive table-of-contents items |
| tints/700 | #9BBBF5 | 178 | Layout grid lines, navbar borders, secondary containers, inactive icons |
| tints/600 | #6F9CF1 | 26 | Dropdown and search-bar borders, inactive language button |
| shadows/400 | #124DBD | 3 | Topic tag background on the blue hero banner |

Defined but unused: shadows/100 (#0A1C40), shadows/200 (#0D2C6A) and shadows/300 (#0F3D93).

## Usage by role

Ink carries reading text, blue carries anything accented or interactive, and the tints carry structure. Tag colors are covered in the next section.

### Text

| Color | Token | Uses |
| --- | --- | --- |
| #070B16 | primary/ink | Headlines, body text, card headlines, speaker names, navigation links, section titles, team bios |
| #155EE7 | primary/blue | Topic tag labels, quote marks on statement cards, the "المزيد" link, in-article subheadings, the Statement page lede, team role titles, the claim call-to-action text, dropdown labels |
| #565A63 | neutrals/300 | Dates, excerpts, type tag labels (تصريح, خبر) |
| #F5F9FF | primary/cool-white | Footer links and copyright, button labels on blue, all text on the brand-blue pages |
| #C8DAFA | tints/800 | Inactive items in the Article's table of contents (desktop) |
| #9BBBF5 | tints/700 | Subtitle on the blue hero banner |
| #DFEBFF | tints/900 | Topic tag label on the blue hero banner |
| #6F9CF1 | tints/600 | The inactive language option (English) in the mobile sidebar |

### Backgrounds and surfaces

| Color | Token | Uses |
| --- | --- | --- |
| #F5F9FF | primary/cool-white | Page and navbar background; footer social icons |
| #155EE7 | primary/blue | Footer, primary buttons ("أرسل إدعاء للتصحيح"), the square bullet before section titles, brand-blue pages |
| #FFFFFF | neutrals/white | Statement cards |
| #C8DAFA | tints/800 | Image and video placeholders |
| #DFEBFF | tints/900 | Topic tag background; dropdown fill |
| #DFEBFF at 75% | none (raw) | Overlay behind the video modal |
| #DFEAFD | none (raw) | Carousel arrow buttons |
| #070B16 | primary/ink | Video player |
| Gradient #F5F9FF → #FFFFFF | primary/cool-white → raw white | Fade on the edge cards of the statement carousels |

### Borders, dividers and icons

| Color | Token | Weight / style | Uses |
| --- | --- | --- | --- |
| #9BBBF5 | tints/700 | 1 px solid | Layout grid lines, navbar and second-navbar borders, secondary containers |
| #9BBBF5 | tints/700 | Icon | Video play-icon placeholder (ring and triangle), inactive icons |
| #155EE7 | primary/blue | 1 px solid | Statement card borders, carousel containers |
| #155EE7 | primary/blue | 1 px dashed | Dividers between list items |
| #155EE7 | primary/blue | 2 px dashed | The claim call-to-action box |
| #155EE7 | primary/blue | 1.5–2 px icon | Hamburger, arrows, dropdown chevrons |
| #6F9CF1 | tints/600 | 1 px solid | Dropdowns, search-bar underline, language toggle |
| #A6AAB1 | neutrals/600 | 1.5 px icon | Desktop header search and language icons |
| #F5F9FF | primary/cool-white | 2 px icon | Play icon inside the video player |

## Tags and verdicts

Each tag type has its own color pair: blue for topics, grey for content type, red for verdicts. Every verdict (مضلل, غير دقيق, مفبرك, غير موضح) uses the same red; severity is carried by the word, not the color.

| Element | Background | Border | Text |
| --- | --- | --- | --- |
| Topic tag (حقوق إنسان, سياسة واقتصاد, مرأة, حرب) | tints/900 #DFEBFF | none | primary/blue #155EE7 |
| Topic tag on the blue hero banner | shadows/400 #124DBD | none | tints/900 #DFEBFF |
| Type tag (تصريح, خبر) | neutrals/100 #21252F at 10% | neutrals/300 #565A63, 1 px | neutrals/300 #565A63 |
| Verdict tag | primary/orange-verdict-fill #B32116 at 10% | primary/orange-verdict #F03423, 1 px | primary/orange-verdict #F03423 |
| Connector between type and verdict tags | primary/orange-verdict #F03423 (four small dots) | — | — |
| Correction tag (تصحيح) on the Statement page | primary/blue #155EE7 | none | primary/cool-white #F5F9FF |

The Statement page carries the verdict colors into the quote block: primary/orange-verdict-fill as the background with a 1 px primary/orange-verdict border, and red corner brackets around the speaker photo.

## Brand-blue pages

The Sahih umbrella pages invert the scheme: the whole page is blue and everything on it is cool-white or light-blue tint. This applies to Desktop-Redirect, Desktop-Redirect-hover, Mobile-Redirect, the Sahih About page (Desktop-AboutUs(S)) and its mobile version.

| Element | Color | Token |
| --- | --- | --- |
| Page, header and footer background | #155EE7 | primary/blue |
| All text (headings, paragraphs, footer links, copyright) | #F5F9FF | primary/cool-white |
| Grid lines, header and footer borders, content containers, country cards, dividers | #9BBBF5, 1 px | tints/700 |
| Language dropdown border | #6F9CF1, 1 px | tints/600 |
| Language dropdown label and chevron | #9BBBF5 | tints/700 |
| Footer link separators (dots) | #F5F9FF | primary/cool-white |
| Dotted guide lines on the hovered country card | #DFEBFF | tints/900 |
| Logos | White image files, not colored layers | — |

The Sahih Masr pages use the same blue only for the footer, buttons and accents, on a cool-white page.

## Notes for implementation

Use the token names above as the color names on the guidelines page. There is a single mode, so there are no dark-mode values to document.

\
Two tokens carry their own opacity: neutrals/100 and primary/orange-verdict-fill, both at 10%. Apply them as defined rather than adding opacity on top. The three unused tokens (shadows/100–300) are defined in Figma but appear nowhere on this page; whether the guidelines list them is a decision for you.
