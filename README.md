Skibum.com Heatmap Project
Project Overview
This project aims to create an interactive Powder Alert Map (PAM) using Mapbox GL JS, which visualizes snowfall intensity across various ski resorts. The map includes features such as:

Heatmap visualization of snowfall intensity (Low, Medium, High)
Dynamic snowfall data updated via API
Resort markers with detailed popups
Search functionality for locating specific resorts


Setup Instructions
Prerequisites
Ensure the following software is installed on your local machine:

Node.js: Version 14 or later
npm: Comes with Node.js installation
Git: For cloning the repository
Mapbox Account: Access token is required to use Mapbox GL JS
API Access: RapidAPI account for the snowfall data API


Getting Started
Clone the Repository

git clone https://github.com/YOUR_USERNAME/skibum.git
cd skibum


Install Dependencies Navigate to the root folder of the project and install any required Node.js dependencies:

npm install


Set Up Environment Variables Create a .env file in the project root and include the following:

MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
RAPIDAPI_KEY=your_rapidapi_key

Run the Local Server Start a simple HTTP server to serve the HTML files. You can use http-server or similar tools:

npx http-server .

The server will start at http://localhost:8080 or a similar port.

Project Structure
heatmap.html: Main HTML file for the Powder Alert Map.
fetch_snowdata.js: Script to fetch snowfall data from the API and generate resorts_with_snowfall.json.
style_heatmap.css: CSS file for customizing map and legend styles.
resorts_with_snowfall.json: Snowfall data used to render the heatmap.
resorts_heatmap_data.json: Base resort data with coordinates and names.


Updating Snowfall Data
Run the fetch_snowdata.js script to pull the latest snowfall data:

node heatmap/fetch_snowdata.js
This will update the resorts_with_snowfall.json file with the latest data.

Refresh the map to reflect the updated snowfall data.

Known Issues
Heatmap colors may not match the intensity legend.
Heatmap opacity changes inconsistently when zooming in/out.
These issues are actively being debugged.


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
Mapbox GL JS Version: v2.15.0
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
