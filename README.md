# Web Development Project 6 Part 2 - WeatherDash 🌤️

Submitted by: **Kevon Dawkins**

This web app: **Provides live weather data for major cities using the WeatherBit API. Users can search, filter by AQI and temperature, and view detailed charts showing air quality and temperature trends.**

Time spent: **15hrs**

## Required Features

The following **required** functionality is completed:

- [x] **Clicking on an item in the list view displays more details about it**
  - Clicking on an item in the dashboard list navigates to a detail view for that item
  - Detail view includes extra information about the item not included in the dashboard view
  - The same sidebar is displayed in detail view as in dashboard view
  - ✅ *Sidebar is visible in the detail view recording*

- [x] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
  - ✅ *URL bar shown in walkthrough to demonstrate unique routing*

- [x] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - 1. Bar chart of city temperature data
  - 2. Line chart of AQI values

## Optional Features

- [x] The site’s customized dashboard contains more content that explains what is interesting about the data
  - Includes descriptions, average stats, and filters with sliders and dropdowns

- [x] The site allows users to toggle between different data visualizations
  - User can switch between bar and line chart in the detail view

## Additional Features

- Responsive layout using CSS flexbox and media queries
- Multiple filters working together: search, AQI dropdown, and max temperature slider
- Hover animations for weather cards
- Dark-themed dashboard for visual clarity

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://github.com/KDawTech/project5/blob/main/project5%20part2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />



## Notes

Challenges included:
- Fixing API provisioning delays from WeatherBit
- Managing component state across dynamic routes
- Resolving async data rendering before chart load

## License

    Copyright 2025 Kevon Dawkins

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

