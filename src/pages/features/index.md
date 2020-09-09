---
templateKey: 'simple-page'
path: /features
title: Features of GPlates
---
### What is GPlates?

<hr class="mc-hr"/>

<!-- VIDEO -->
<div style="float: right;">
    <object width="480" height="385">
    <param name="movie" value="//www.youtube.com/v/mMnziH1RBlg?fs=1&amp;hl=en_US"></param>
    <param name="allowFullScreen" value="true"></param>
    <param name="allowscriptaccess" value="always"></param>
    <embed src="//www.youtube.com/v/mMnziH1RBlg?fs=1&amp;hl=en_US"
        type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true"
        width="480" height="385">
    </embed>
    </object>
</div>


GPlates is desktop software for the interactive visualisation of plate-tectonics.

GPlates offers a novel combination of interactive plate-tectonic reconstructions, geographic information system (GIS) functionality and raster data visualisation. GPlates enables both the visualisation and the manipulation of plate-tectonic reconstructions and associated data through geological time. GPlates runs on Windows, Linux and MacOS X.

The goals of GPlates are:

* to handle and visualise data in a variety of geometries and formats, including raster data
* to link plate kinematics to geodynamic models
* to serve as an interactive client in a grid-computing network
* to facilitate the production of high-quality paleo-geographic maps.

<div style="clear: right;" />

### What is a plate-tectonic reconstruction?


> The motions of tectonic plates through geological time may be described and simulated using plate-tectonic reconstructions. Plate-tectonic reconstructions are the calculations of the probable positions, orientations and motions of tectonic plates through time, based upon the relative (plate-to-plate) positions of plates at various times in the past which may be inferred from other data. Geological, geophysical and paleo-geographic data may be attached to the simulated plates, enabling a researcher to trace the motions and interactions of these data through time.


The GPlates program is accompanied by royalty-free data and a comprehensive user manual.

### What can GPlates do?

As of GPlates 2.2, GPlates functionality includes:

loading and saving geological, geographic and tectonic feature data:
loading feature data from the following formats:
GPML / compressed GPML
Plates4 line-format
ESRI Shapefile (including the ability to map shape attributes in a Shapefile to feature properties in GPlates on a user-specified, per-Shapefile basis)
GMAP VGP (Virtual Geomagnetic Pole) data files.
saving feature data in the following formats:
GPML / compressed GPML
Plates4 line-format
ESRI Shapefile
GMT “xy” format, with a variety of options for headers
recording and restoring previous sessions of files opened by the user
cookie-cutting and assigning plate IDs to loaded data using plate polygons
loading and saving reconstruction poles (finite rotations which enable geological, geographic and tectonic features to be reconstructed through geological time):
loading reconstruction poles from the following formats:
GPML / compressed GPML
Plates4 rotation-format
saving reconstruction poles in the following formats:
GPML / compressed GPML
Plates4 rotation-format
displaying raster images:
loading multiple raster images in JPEG and NetCDF format, including time-sequences of raster images, to enable visualisation of “gridded” geophysical data such as mantle density anomalies, mantle convection-driven dynamic surface topography and the crustal age or spreading rate of the ocean floor — both:
global raster images, which are assumed to cover the whole globe, from -180 to +180 degrees longitude and -90 to +90 latitude, and
smaller rasters with regional georeferencing and potentially projected spatial reference system
cookie-cutting raster images using static plate polygons.
reconstructing raster images along with vector data.
viewing feature data and raster images in a graphical display:
displaying geological, geographic and tectonic features, as well as raster images, on the globe, in any of the following map-projections:
3-D Orthographic Globe
Rectangular
Mercator
Mollweide
Robinson
moving and re-orienting the camera (the viewpoint of the user), by “dragging” the mouse on the globe, using the keyboard arrow keys, or specifying the desired viewpoint in a dialog box
activating a full-screen presentation mode, by pressing F11 to switch to a minimalist interface ideal for demonstrating data and animations on digital projectors
zooming the camera, using the scroll-wheel of the mouse, the Zoom In tool, or the slider on the right-hand-side of the reconstruction view
choosing different colouring schemes for vector features and for NetCDF gridded data
exporting a 2-D geometry snapshot of the current projected contents of the reconstruction view in Scalable Vector Graphics (SVG) format, for later viewing in a web-browser or vector-graphics editor such as Adobe Illustrator
annotating the view with text including the current reconstruction time
managing loaded data as a series of layers allowing fine control over feature visibility
calculating and displaying plate-tectonic reconstructions:
reconstructing features to a desired geological time-instant, or animating over a period of geological time
exporting “reconstructed geometries” (feature geometries at a particular reconstruction time in the past) in the following formats:
ESRI Shapefile
GMT “xy” format, with a variety of options for headers
calculating velocity fields according to plate motions
displaying flowlines and motion paths visualising plate motion
exporting “data animations” — each frame of a reconstruction animation saved automatically to disk in a sequence of files:
all reconstructed feature geometries (as GMT .xy files or Shapefiles)
a 2-D vector graphics snapshot of the view (as SVG files)
a 2-D bitmap image snapshot of the view (as PNG, etc. files)
numerical raster data (as NetCDF, GeoTIFF, etc. files) in rectangular projection
colour raster data (as PNG, etc. files) in rectangular projection
all velocity fields (as GPML files)
resolved topologies as a sequence of static polygons (as GMT .xy files)
equivalent total and stage rotation data
flowlines and motion paths
interacting with features graphically:
choosing a feature, to query or edit its properties, by clicking upon its displayed geometry
digitisation of new geometries for the creation of new features
modifying the geometry of a feature interactively by dragging vertices, inserting vertices, deleting vertices, or splitting a feature into two at a given point.
measuring distances, along the geometry of existing features, during digitisation, or between arbitrary user-chosen points on the globe.
cloning features to modify copies of a feature
tabular display of data:
listing tables of reconstruction poles (finite rotations) for the current reconstruction time:
relative and equivalent rotations for each plate
a tree-like representation of the rotation hierarchy
the circuit between any plate and the stationary reference frame
listing total reconstruction sequences for loaded rotation files:
displaying metadata associated with GPlates Rotation (GROT) files
editing total reconstruction poles and inserting new ones
exporting tables of reconstruction poles in CSV (comma-separated value) format, for later viewing in a spreadsheet such as Microsoft Excel.
listing tables of Shapefile attributes on a per-file basis, with one attribute per column
modifying reconstructions graphically:
manipulation of reconstruction poles by dragging the mouse cursor to move plates, including the ability to constrain the latitude, or constrain to a stage pole, during the interactive adjustment.
interactive plate-boundary closure, enabling GPlates to generate plate-tectonic boundary conditions for geodynamic models in software such as:
the widely-used, open-source, spherical mantle-convection package CitComS
the next-generation AuScope-funded mantle-convection package Underworld
a suite of virtual geomagnetic pole tools:
create new VGPs
calculate reconstruction poles based on VGPs
configure the visualisation of VGP data
What's next in GPlates?
Future functionality will include:

Improved symbology (line symbols, polygon fill patterns, map symbols to feature properties)
Another Python library for GPlates
