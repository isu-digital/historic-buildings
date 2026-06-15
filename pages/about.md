---
title: About
layout: about
permalink: /about.html
# include CollectionBuilder info at bottom
credits: false
# featured-image value can be one objectid for a photo object in this collection, a relative path to an image in this project, or a full url to any image. If left blank, no featured image will appear at top of About page.
about-featured-image: /objects/hub_001.jpg
# set background-position for featured image, "center", "top", "bottom"
position: center
# major heading to display over featured image
heading: Campus Cornerstones
# paragraph text below heading in featured image
sub-heading: A mapped history of Iowa State University
# additional padding added to the feature to increase size. Give value in em or px, e.g. "5em".
padding: 6em
# Edit the markdown on in this file to describe your collection
# Look in _includes/feature for options to easily add features to the page
---

## About this Project

Beginning in 2023, this project proposed researching how an open source geographic information system (QGIS) could bring together historical maps, photos, and texts to study the planning and building of the Iowa State University campus. Through a partnership with the ISU Library's Digital Scholarship and Initiatives department in 2024, this site shares the progress we have made exploring this campus history through historical photographs, maps, and modern GIS data. 

This project is a work in progress, and is led by [Kevin Kane, director emeritus](https://faculty.sites.iastate.edu/kkane/){:target="_blank" rel="noopener"} of the Iowa State University GIS Support and Research Facility, and [Erin Ridnour, digital scholarship librarian](https://digital.lib.iastate.edu/people/erin-ridnour.html){:target="_blank" rel="noopener"} at Iowa State University Library.

## Project Contributors

**Kevin Kane**, Director Emeritus, ISU GIS Facility - Project Lead

**Erin Ridnour**, Digital Scholarship Librarian, Digital Scholarship and Initiatives - Project Lead

**Wael Alhaj**, GIS Analyst, ISU GIS Facility

**Michaela Beck**, GIS Student Assistant, ISU GIS Facility

**Mary Witkowski**, Digital Scholarship Student Assistant, ISU Library

---

## Using GIS for Research on the Historical Buildings and Grounds of Iowa State University

The mapping portion of this project brings together historical maps of Iowa State College/University to research the evolution of the buildings and grounds on campus using QGIS, an open-source geographic information system.

### Locating and Compiling Historical maps of ISU

The first task in the research process was to identify, locate, and compile the best versions possible of historic ISU maps.  Sources for these maps included online archives (including ISU Facilities and Planning Management and the Internet Archive) and Special Collections and University Archives at the Iowa State Library.  Maps that were paper copies were digitized by the ISU GIS Facility and ISU Library staff to make them available in GIS format, Usually JPG or TIF.

{% include feature/image.html objectid="/assets/img/college-map-1868.jpg" caption="Portion of the 1868 College Map (University Archives)" alt="Black and white map titled Map of Agricultural College Farm, 1868" %}

### Georeferencing Digital Maps in QGIS

Once the maps were in digital format, care was taken to locate the maps into a known earth coordinate system so maps from different time periods could be located as precisely as possible over one another for spatial-temporal analysis.  Digital map images are also processed at this point for readability and transparency (ability to “see through” to other images).  A conscious decision to use QGIS as the GIS software framework was made for this work so that it could be done in an open-source environment, making the tools available to a much larger audience.

In the overlay and georeferencing process, care has been given to locate benchmarks on each map that can be compared over time and used to most accurately locate features on each map.  However, based on the detail and accuracy of each map used in the overlay, there will be slight differences (usually within feet) of benchmarks that have not moved over time.  These errors, while visible on the maps, are slight and inherent to the digitizing and georeferencing process using documents that have been prepared at different times using different technology and mapping standards.

{% include feature/image.html objectid="/assets/img/campus-map-1896.jpg; /assets/img/six-maps-day.jpg" caption="1896 map georeferenced and overlayed on current map base layer; Six separate maps from 'The Iowa State University Campus and Its Buildings, 1859-1979,' by H.S. Day" %}

### Map Analysis

Once maps have been georeferenced, each map can be overlayed on every other map for spatial-temporal analysis.  Questions like “locate the original Dinky train line and map it on a map of current day campus” or “where is the building footprint of the first Chemical Laboratory in relation to present day Pearson Hall” can be researched and answered.  There are currently 26 historic ISU maps, from 1868 to current maps, available for GIS analysis. 

In addition, other GIS and historic photography data layers can be overlayed with the ISU historic maps to research interrelated phenomena like landcover, topography, archeology, etc.

{% include feature/image.html objectid="/assets/img/day-maps-qgis.jpg" caption="The six H.S. Day maps overlayed in QGIS" %}

### GIS Portability to Cornerstones

While detailed analysis of these maps and GIS data layers are currently limited to the QGIS application, a goal of this project was to port some of these maps to the Campus Cornerstones website. The collection and interaction of maps, photos, and documentation of historic Iowa State University is primary to the successful implementation of the site. 

{% include feature/image.html objectid="/assets/img/cc-interactive-footprints.jpg" caption="Campus Cornerstones interactive mapping application showing 1883 map with building footprints through 1900" %}


In addition, the map collection contains maps which can be found both on the interactive map and in the QGIS implementation so that users can view map documentation and download these maps for their own use.

{% include feature/image.html objectid="/assets/img/historical-map-browse.jpg" caption="The historical maps collection browser on Campus Cornerstones site" %}