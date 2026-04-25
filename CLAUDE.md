# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the app

Open `index.html` directly in a browser — no build step, no server, no dependencies. All CSS and JS are inlined in that single file.

## Architecture

The app is two files:

- **`index.html`** — the entire app: HTML structure, all CSS, all JavaScript, and all static class feature content rendered inline.
- **`class-data.js`** — a data-only file defining `CLASS_DATA` with all class/subclass features. It is **not currently loaded by `index.html`**; the class tab HTML is pre-rendered as static markup in the HTML file. `class-data.js` serves as the canonical source of truth for class features when editing content.

### Data model

All character state lives in named form inputs. `collectData()` serializes every `<input>` and `<textarea>` (by `name` attribute) into a flat `{ fieldName: value }` JSON object. `applyData(data)` does the reverse. There is no data model layer — the DOM is the model.

**Persistence paths:**
- **Save (URL)** — `collectData()` → JSON → gzip → base64url → stored in `window.location.hash`. Clicking Save copies the URL to clipboard.
- **Export/Import JSON** — raw `collectData()` output written/read as a `.json` file. This is what the character JSON files (e.g. `soren-drael.json`) contain.

### Key field names

Ability scores: `strval`, `dexval`, `conval`, `wisval`, `intval`, `chaval` (scores, **readonly** — computed by `recalcDerived()`) and `strmod`, `dexmod`, `conmod`, `wismod`, `intmod`, `chamod` (modifier text, also readonly).

Ability score breakdown (editable): `str-roll`, `str-racial`, `str-misc` (and same pattern for dex/con/wis/int/cha). The final score = roll + racial + misc. In ultra mode, `str-ultra` replaces `str-roll` in that sum. `recalcDerived()` falls back to reading `strval` directly if `str-roll` is empty (backward compat for old JSONs).

Saving throws: `str-save`, `dex-save`, `con-save`, `wis-save`, `int-save`, `cha-save` (values, readonly) + `str-save-prof` etc. (checkbox booleans).

Skills (value / prof checkbox): `athletics` / `athletics-prof`, `deception` / `deception-prof`, `engineering` / `engineering-prof`, `hacking` / `hacking-prof`, `insight` / `insight-prof`, `intimidation` / `intimidation-prof`, `investigation` / `investigation-prof`, `medicine` / `medicine-prof`, `perception` / `perception-prof`, `persuasion` / `persuasion-prof`, `piloting` / `piloting-prof`, `stealth` / `stealth-prof`, `survival` / `survival-prof`. Skill values are readonly and auto-computed.

Skill → ability mapping: Athletics→STR; Piloting/Stealth→DEX; Engineering/Hacking/Investigation→INT; Insight/Medicine/Perception/Survival→WIS; Deception/Intimidation/Persuasion→CHA.

### Auto-calculation

`recalcDerived()` recomputes all ability scores, modifiers, saving throws, skills, initiative, and passive perception from the breakdown inputs and proficiency checkboxes. It fires on any breakdown input change, any prof checkbox change, and after `applyData()`. Saves/skills/initiative/passive perception are **readonly** in the DOM.

**Bonus inputs**: Each computed field (saves, skills, initiative, passiveperc) has a sibling `<input name="<field>-bonus">` (class `bonus-input`, default empty = 0) injected by the `setupDerivedFields` IIFE. These are included in `collectData()` automatically. The bonus is added on top of the computed value.

### Ultra mode

`ultramode` (hidden input, `"true"`/`"false"`) persists in JSON. When active, `str-ultra` (etc.) replaces `str-roll` in the score calculation. `syncUltraToggle()` updates the button label/style and sets `data-ultra` on `.attr-grid`, which drives CSS (purple score color, dimmed roll inputs, glowing ultra inputs). If an ultra input is empty, falls back to the regular roll value.

### Level gating and subclass visibility

Class feature elements carry `data-min-level` and `data-subclass` HTML attributes. `updateLevelFeatures()` reads the current class level and chosen subclass and toggles `display:none` on each element accordingly. This runs on every level/subclass change.

### Theme system

`applyTheme(name)` sets `data-theme` on `<body>`. Each subclass has its own CSS theme defined via `[data-theme="..."]` selectors at the top of the `<style>` block. The active theme is stored as `_theme` in the serialized JSON.

### Class system

Five classes (marine, engineer, operator, kineticist, specialist) each have a checkbox (`class-<name>`) that controls tab visibility. Each class also has a level input (`class-level-<name>`) and a subclass hidden input whose name is listed in `CLASS_SUBCLASS_INPUTS`. Classes can be active simultaneously (multiclass).
