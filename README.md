# P5Js-Template

This is a template to organize your P5Js projects into layers, classes, etc., instead of using the global namespace.  

The layers folder is intended to store all your layers.  Layer.js defines a base class, and new layers are supposed to inherit the Layer class.

The models folder is for holding your artifact classes used as animation objects in the sketch.  

The main.js is the place where both the layers and the models are put to use.  It also contains the default base layer of the sketch.

index.html is obviously the main web page.  When new layers and models are defined, then need to be included in the correct order on index.html using script tags.

The libraries folder contains the p5.js libraries. 
