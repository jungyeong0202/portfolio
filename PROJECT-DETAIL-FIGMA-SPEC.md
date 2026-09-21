# Project detail page — Figma 제작 명세

현재 포트폴리오의 데스크톱 톤을 이어가는 `nook` 프로젝트 소개 페이지 템플릿입니다. 모바일 프레임과 기존 프로토타입은 건드리지 않고, 프로젝트별 콘텐츠만 교체하는 구조를 전제로 합니다.

## Frame

- Desktop frame: `1920 × auto`
- Content width: `1680px` / left-right margin `120px` at 1920px
- Background: `mono/paper` 또는 `#F7F6F3`
- Primary font: Pretendard
- Visual language: editorial minimalism + localized gradient + restrained glass surface

## Section order

1. **Detail navigation**
   - Left: `PORTFOLIO`
   - Right: `BACK TO WORK ↗`
   - Frosted glass surface, 16px radius, 1px white stroke, blur 20px
2. **Dark project hero**
   - Eyebrow: `01 / WEBSITE DESIGN · 2026`
   - Title: `nook`
   - Korean subtitle: `일상을 고르는 감각`
   - Lead: `취향에 맞는 상품을 발견하는 라이프스타일 커머스 경험`
   - Metadata: `ROLE / YEAR / SCOPE`
   - Right card: one-sentence design note in a glass panel
   - Background: near-black with localized blue-violet glow in the lower-right
3. **Hero visual**
   - Full-width project visual, 16:9, 22px radius
   - Caption: `HERO SCREEN · replace with final project visual`
4. **Project overview**
   - Heading: `선택을 쉽게 만드는 커머스 구조`
   - Editable overview copy
   - Three facts: `CONTEXT / MY ROLE / OUTPUT`
5. **Process**
   - Three equal columns: `Discover / Structure / Refine`
6. **Selected screens**
   - Two equal visual cards
   - Captions should identify the screen’s role, not just its file name
7. **Design principles**
   - Two cards: `Hierarchy / Surface`
   - Use glass only for navigation or supporting information
8. **Next project**
   - `NEXT PROJECT · 02 / orbit ↗`
9. **Footer**
   - `PORTFOLIO / PROJECT DETAIL TEMPLATE`

## Replacement checklist

- Replace title, subtitle, overview, role, year, scope, and process copy.
- Replace hero and selected screen images while preserving frame ratios.
- Keep project number and next-project label consistent with the main page.
- Keep the CTA as a jump to the detail content; connect `VISIT WEBSITE ↗` only when the live URL is ready.
- Do not add prototype connections to the existing mobile or prototype frames.

## Local preview

Open `project-detail.html` in the `portfolio` folder to review the desktop-first composition. The CSS uses the same dark glass navigation, off-white editorial sections, localized gradient, and restrained glass card treatment requested for the current concept.
