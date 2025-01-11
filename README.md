Snowfall Heatmap Issue with Mapbox GL JS
Overview
This project uses Mapbox GL JS to create an interactive snowfall heatmap displaying ski resorts and their respective snow accumulation data. While most of the map functionality is working, there are significant issues related to the heatmap rendering, particularly with color-coding and opacity.

Problem Description
Snowfall Intensity Color Coding:

The heatmap is designed to represent snowfall intensity in three categories:
Low (1–5 inches): light blue
Medium (5–12 inches): White
High (>12 inches): Red
However, the current implementation does not correctly map the colors to the snowfall intensity legend. For instance:
Resorts with snowfall values in the medium or high range often appear in the wrong color.
Some snowfall data appears to be ignored or incorrectly weighted.
Opacity and Zoom Behavior:

At higher zoom levels (closer to resorts), the heatmap colors fade or disappear entirely.
At lower zoom levels (zoomed out to see a larger area), the highest intensity colors dominate the map, making it challenging to discern individual resort snowfall data.
Legend Inconsistency:

The legend displays the intended color mapping but does not reflect the actual map rendering. This creates confusion for users attempting to interpret the map.
Known Issues
Resorts with low snowfall (e.g., 2–3 inches) are not appearing on the map despite being included in the data source (resorts_with_snowfall.json).
The heatmap seems to treat resorts with 0in snowfall as if they have data, causing unintended color rendering.
Resort names and snowfall values are displaying correctly in popups, confirming that the data source is accurate.
Goal
Fix the heatmap rendering so that:

Colors accurately reflect the snowfall intensity legend.
Opacity remains consistent across zoom levels.
Resorts with low snowfall appear correctly on the map.
The heatmap dynamically and accurately updates based on the provided JSON data.
Environment
Mapbox GL JS Version: 
JavaScript Frameworks/Libraries Used: Plain JavaScript
Data Source: resorts_with_snowfall.json
Development Environment: Local Machine (Mac)
Steps to Reproduce
Load the heatmap.html file in a browser.
Observe the heatmap at various zoom levels and compare it to the legend.
Inspect a resort’s popup for snowfall values and compare it to the heatmap color.
Expected Behavior
Low snowfall resorts (1–5 inches) should display as Light Blue  .
Medium snowfall resorts (5–12 inches) should display as white.
High snowfall resorts (>12 inches) should display as red.
Colors should remain consistent across all zoom levels.
