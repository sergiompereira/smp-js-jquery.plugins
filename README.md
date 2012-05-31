
#jQuery plugins

This is a repository of plugins that I developed to use together with the jQuery library.

## Requires

jQuery library found in: 
http://docs.jquery.com

## Usage
First, load [jQuery](http://jquery.com/) and the plugins as needed, 
preferably the end of your html document, just before the body tag.

### 1. Image Reflex plugin
Add the following call, or similar inside a script tag:
	<pre>
	
      jQuery('img').imagereflex( {
			backgroundColor : '#ffffff',
			maxAlpha : 0.3,
			spreadRatio : 0.3,
			verticalOffset : -10
		});
    </pre>

This will wrap each img tag inside a span and append just after the img tag a canvas element.
Be sure to not apply margins or padding to the img tag.

The options available are:
* backgroundColor : should match the background-color of the document or of the img parent container.
* maxAlpha : the maximum opacity (between 0 and 1) of the gradient overlay (in the color specified with the previous option).
* spreadRatio : a fraction (between 0 and 1) of the hight of the image to map to the reflection.
* verticalOffset : the distance between the image and the reflection (it actually is the margin-top of the canvas element).

## Author

[Sérgio Pereira] (http://www.sergiompereira.com)

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

