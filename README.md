# Web Development Project 5 - *Weather in Your City*

Submitted by: **Faezaan Ansari**

This web app: **displays a weekly weather forecast for your city, with information for the current day and the next 6 days, and avg. information across the week. Users can filter the data in 2 ways: querying for weather on a specific day of the week or a filter for the probability of preciptation (%) for days of the week**

Time spent: **9** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard should display at least 10 unique items, one per row
  - The dashboard includes at least two features in each row
- [X] **`useEffect` React hook and `async`/`await` are used**
- [X] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    - *average high temp, average low temp, average preciptation chance*
- [X] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [X] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [X] Multiple filters can be applied simultaneously
- [X] Filters use different input types
  - e.g., as a text input, a dropdown or radio selection, and/or a slider
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [X] Date formatting with javascript so that datetime is easier to read

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<div>
    <a href="https://www.loom.com/share/d052ba00984643859cac9352d70ad387">
        <p>Baltimore, MD Weather Forecast - 15 July 2025 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/d052ba00984643859cac9352d70ad387">
        <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/d052ba00984643859cac9352d70ad387-844dc0ddabe977bf-full-play.gif">
    </a>
</div>

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->
Loom

## Notes

* Entering an empty string into the day search bar returned no results, as that is an empty string and did not match any days
* I have 2 functions for formatting the date, which is probably an area of redundancy

## License

    Copyright [2025] [name of Faezaan Ansari]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.