# News aggregation pipeline

This folder supports the scheduled task that keeps Calcio Inglese updated with
fresh Premier League news. It is not imported by the Astro site — it's
bookkeeping for the automation only.

## How it works

1. **Source:** BBC Sport's Premier League RSS feed
   (`https://feeds.bbci.co.uk/sport/football/premier-league/rss.xml`). Each
   item's title/description/link/guid/pubDate is used purely as a *factual*
   basis — never copied verbatim.
2. **Dedup:** `processed-sources.json` lists every RSS `guid` already turned
   into a site article. Before writing anything new, the pipeline fetches the
   feed, drops any item whose guid is already listed, and skips items that
   aren't Premier-League relevant (pure video clips, non-PL competitions).
3. **Selection:** Per run, at most 2–3 new items are converted, to keep
   quality high and avoid flooding the site.
4. **Rewrite rules (must always be followed):**
   - Every article is original prose written from the facts in the source
     item — never copied or lightly reworded sentences.
   - No visible "read more" / "source" link is ever shown to readers.
   - `sourceNote` in frontmatter records the source internally only (e.g.
     "Public reporting on 2026-27 summer window, PL transfer tracker") — it
     is never rendered on the page.
   - Match the existing tone: measured, factual sports-desk style, 3–4
     paragraphs, ~250–350 words.
5. **Frontmatter schema** (see `src/content.config.ts`): `title`,
   `description`, `pubDate` (ISO datetime, use current date/time),
   `category` (one of: Transfer News, Match Report, Club News, Analysis,
   Injury News, Pre-Season), `teamA`/`teamB` (optional — must be existing
   keys in `src/data/teams.ts`; omit if a club isn't in that list rather than
   adding new keys casually), `tags` (array), `author` (default "Calcio
   Inglese Staff"), `sourceNote`.
6. **File naming:** kebab-case slug matching the headline, saved to
   `src/content/news/<slug>.md`.
7. **Publish:** new/changed files are uploaded to the `calcio-inglese` GitHub
   repo (jimmystrappen-cpu account) via the browser upload flow at
   `/upload/main/<path>` — screenshot-verified coordinate click on "Commit
   changes" after `file_upload` (do not trust the click landing without a
   screenshot check). Pushing to `main` triggers an automatic Netlify
   rebuild/deploy.
8. **Update tracking:** after a successful publish, append the new guids to
   `processed-sources.json` and update `lastRun`, then upload that file too.

## Manual run log

- 2026-07-25: first live run — 3 articles published (Man City/Anderson bid,
  Newcastle/Munoz talks, Man City–Chelsea Maresca talks). Seeded
  `processed-sources.json` with those 3 guids.
