# BikeInfo: A Friendly UI for Bikeshare Data

## Purpose
Bikeshare programs are redefining transportation in urban areas, but their unpredictable nature can make them frustrating to use at times.  Depending on traffic flows, bikeshare users may be unable to find an available bike near them when they want to ride, or may be unable to find an open dock near their destination.  Mobile apps provided by bikeshare services provide in-the-moment availability information, but don't make it easy to analyze usage patterns over time or plan a ride in advance.  This application is a web-based tool for monitoring the status of bikeshare stations.  It provides a graphical presentation of historical trends, allowing users to make informed predictions about when bikes and docking capacity will be available.  In the future, it may display preditions about future availability as well.

## Data Source
This UI is intended for use with the `gbfs-service` backend app, which interfaces with any [General Bikeshare Feed Specification (GBFS)](https://github.com/NABSA/gbfs/blob/master/gbfs.md) data feed.  GBFS is a standard format used by a number of USA bikeshare services to distribute real-time data.

## Tech Stack
* React
* Styled Components
* Babel
* Webpack

## APIs
* React Hooks
* CSS Flexbox
