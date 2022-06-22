Project Title: Jillian's Trip to Belize

Hosted on Netlify: https://musical-mousse-1a8cbf.netlify.app

Decription:
This website informs users of my recent to trip to Belize, Central America. It consists of 7 pages:
1) Welcome
    -Introduces the user to the background of my trip.
2) Belize background and history
    - Prior to traveling to Belize, I didn't know much at all about its history. This page is not specific to my trip, but rather it informs users of the country's general history.
3) Ramon's Village in San Pedro
    - This page informs users of my time in San Pedro, Belize.
4) Caves Branch Lodge in Belmopan
    -This page informs users of my time in the jungle region of Belize.
5) Photo Gallery
    -A place to view all photos and videos
    -Includes interactive filters that enable the user to view photos and videos by location
6) Contact 
    -a form that allows users to "contact" me to ask questions about my trip (the form is not connected to a database on the backend)
    -includes form validations that require the first and last names to be A-Z or a-z characters, the email to be a proper email format, and every field to be filled in
7) Weather
    -connects to a weather API to tell users what the whether currently is in Belize City and San Pedro

CSS Styling:

Navigation bar:
-The navigation bar is consistent across all pages of the website
-Created using Flexbox
-When the user hovers over a link in the nav bar, it changes color to indicate clickability

Media queries:
-largest screen is 1200px+
    -Uses flexbox to organize content
    -The pictures and videos move onto the right side of the screen, while the text content remains on the left
    -Paragraph text and headers are largest
- medium screen size is 730px to 1200px
    -At this point, the web design starts using flexbox to organize content
    -Paragraph and header font sizes become smaller
-smallest screen size is 730px or less
    -Flexbox no longer applies, and the text begins to wrap around the images and videos
    -font size decreases once more
    -font size in the nav bar decreases to fit on a single line of the screen

Images and Videos:
-I added a border to the pictures and videos to make them look like polaroid photos with captions

Font:
-I imported a google font to give the site more of a fun and carefree aesthetic

JS script:
- uses Vue to organize content and improve ease of code editing

- Data Section:
    - Images and Videos arrays store necessary info for all photos and videos
        - photos and videos are uploaded to Google Drive to save space in the website file
    - galleryFilters is an array of all of the locations that are used as filters in the photo gallery
    - weatherAPI stores the API key
    - WeatherAttributes stores the attributes for both weather location

- Computed Section:
    -computed boolean values that inform whether a given location's checkbox is checked in the photo gallery
    - if the location is checked, the function returns 'true' and the figure will be shown

-Created section:
    - upon loading the page, a method is called that fetches and parses the JSON data from the weather API

- Methods Section
    - postToDom methods update the variables that display the weather info on the Weather page
    - validateCOntact method validates the form on the Contact page, and adds errors to an array if the user must change any of their inputs
    - checkedAll function adds all checks to the gallery filter checkboxes if the user select "All"
    - uncheckAll unchecks the "All" if the user unselects any option

Extra Credit:
- Styled layout using flexbox
- Connects to external weather API to display weather information

File Structure:
```
CS601_Term_Project_Turner
├─ .DS_Store
├─ .vscode
│  └─ launch.json
├─ README.md
├─ css
│  └─ styles.css
├─ html
│  ├─ caves_branch.html
│  ├─ contact_form.html
│  ├─ gallery.html
│  ├─ history.html
│  ├─ san_pedro.html
│  └─ weather.html
├─ index.html
└─ js
   └─ script.js

```