# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static single-page web application that helps users select the right API Management solution through an interactive quiz, benchmark comparison, and resource library. The site is bilingual (French/English) and showcases OCTO Technology's expertise in API Management.

## Development

### Running Locally

```bash
# Simply open the index.html file in a web browser
open index.html
```

No build process, package manager, or server required. This is a static site using vanilla HTML/CSS/JavaScript.

### Updating API Management Ratings

When benchmark data needs to be refreshed:

```bash
# 1. Update the benchmark.csv file with new ratings
# 2. Install Python dependencies (if not already done)
pip install -r requirements.txt

# 3. Run the data processing script
cd skin2/python
python criteres.py

# This generates/updates: skin2/js/conf_apims_notes.js
```

The script converts CSV benchmark data (Oui/Partiel/Non responses) into numerical ratings (0-5 scale) for each APIM vendor across different criteria.

## Architecture

### Single-Page Application Structure

The entire application is a jQuery-based SPA with a single-object pattern:
- `OCTO_APIM_APP.app` object manages all application state and navigation
- Navigation uses a history stack for back-button functionality
- Dynamic content rendering via jQuery DOM manipulation

### Key Sections

1. **Home/Intro** (`displayIntro`) - Landing page with 4 entry points
2. **Quiz** (`displayQuizz`) - Decision tree to recommend APIM solutions
3. **Solutions/Benchmark** (`displaySolutionsDetailed`) - Detailed vendor information
4. **Comparator** (`displayComparateur`) - Side-by-side feature comparison with radar charts
5. **Resources** (`displayRessources`) - Refcards and blog articles

### Configuration Data (embedded in app.js)

- `conf_apims_notes` - Vendor ratings by feature (0-5 scale)
- `conf_cms` - All UI text in FR/EN for easy translation updates
- `conf_quizz` - Decision tree structure with questions, answers, and routing
- `conf_vendor_solutions` - Vendor metadata (name, logo, description, website)

The quiz uses a tree structure where each question has an ID and answers link to next question IDs or "leaf" nodes that display results.

### File Organization

```
.
├── index.html              # Main application file
├── skin2/
│   ├── css/               # Bootstrap + custom styles
│   ├── js/
│   │   ├── app.js         # Main application (~1500 lines)
│   │   └── vendor/        # anime.js for animations
│   ├── img/               # Images and refcard assets
│   ├── fonts/             # Icon fonts (Open Iconic)
│   └── python/
│       └── criteres.py    # Benchmark data processor
├── conf/apim/             # Vendor logos
└── .gitlab-ci.yml         # Deployment config
```

## Key Implementation Details

### Language Switching

The app supports FR/EN via `lang` property. All text uses `this._getCMSValue(section, key)` which appends `-FR` or `-EN` suffix to lookup keys in `conf_cms`.

### Quiz Logic

- Tree-based navigation where each node has a `type` ("question" or "leaf")
- Leaf nodes contain either `apim` array (successful matches) or `fail` message
- History stack allows backward navigation through quiz
- Radio button selections trigger immediate navigation to next question

### Dynamic Content

All sections are dynamically generated from configuration data. To add a new APIM vendor:
1. Add ratings to `conf_apims_notes`
2. Add vendor details to `conf_vendor_solutions` 
3. Add logo to `conf/apim/`
4. Reference in quiz tree (`conf_quizz`) as needed

### Background Images

The home section uses three layered background images that transition based on active section:
- `home-bg` - Default (refcard image)
- `home-bg-open` - Quiz section
- `home-bg-solutions` - Solutions/benchmark section

Transitions use `addClass('transparent')` / `removeClass('transparent')` with CSS opacity animations.

## Deployment

GitLab CI automatically deploys to GitLab Pages on push to master:
- Copies all files to `public/` directory
- No build or compilation steps

## Important Notes

- jQuery is required (loaded from CDN in index.html)
- All application state is in-memory (no localStorage or backend)
- Animations use anime.js library for smooth shape movements
- Bootstrap 4.6 provides responsive grid and components
- The site was originally built with a second "skin" architecture (hence `skin2/` directory name)
