	
(function(jq){

	var opts;
	jq.fn.imagereflex = function(options){
		
		opts = jq.extend({}, jq.fn.imagereflex.defaults, options);
		return this.each(applyReflex);
	
	}
	jq.fn.imagereflex.defaults = {
		backgroundColor : '#ffffff',
		maxAlpha : 0.5,
		ratio : 1,
		spreadRatio : 0.5,
		verticalOffset : 0
	}
	
	//private
	function applyReflex(ind,el){
		var d = document;
		var image = this;
		var placeholder = d.createElement('span');
		placeholder.setAttribute('width',image.width);
		var canvas = d.createElement('canvas');
		var context = canvas.getContext('2d');
		canvas.setAttribute('width',image.width);
		canvas.setAttribute('height',image.height*opts.spreadRatio);
		canvas.style.display = 'block';
		canvas.style.marginTop = opts.verticalOffset.toString()+'px';

		context.translate(0,image.height*opts.spreadRatio);
		context.rotate(Math.PI);
		context.scale(-1,1)
		
		try{
			context.drawImage(image,0,image.height-image.height*opts.spreadRatio,image.width,image.height*opts.spreadRatio,0,0,image.width,image.height*opts.spreadRatio);
		}catch(err){
			log(err);
		}
		
		var gradient = context.createLinearGradient(0,0,0,image.height*opts.spreadRatio);
		var colorParts = getColorParts(opts.backgroundColor.substr(1),10);
		gradient.addColorStop(0,'rgba('+colorParts.r+','+colorParts.g+','+colorParts.b+',1)');
		gradient.addColorStop(0.9,'rgba('+colorParts.r+','+colorParts.g+','+colorParts.b+','+opts.maxAlpha+')');
		context.fillStyle = gradient;
		context.fillRect(0,0,image.width, image.height*opts.spreadRatio);  
		
		jq(image).after(placeholder);
		placeholder.appendChild(image);
		placeholder.appendChild(canvas);
	}
	
	/**
	 * @param	Number	color	:	in any base
	 * @param	int		to		:	which base the output should be in
	 */
	function getColorParts(color,to){
	
		var hexParts = _getHexParts(color.toString(16));
		if(to == null || to == undefined) to = 16;
		if(to == 16){
			return {
				r: hexParts.r,
				g: hexParts.g,
				b: hexParts.b
			};
		}else if(to == 10){
			return {
				r: parseInt(hexParts.r,16),
				g: parseInt(hexParts.g,16),
				b: parseInt(hexParts.b,16)
			};
		}else if(to == 2){
			//to be continued
		}
		
		//internal function
		function _getHexParts(hexvalue){
			var len,r,g,b;
			len = color.toString().length;
			if(len <= 6){
				b = color.substr(len-2);
				g = color.substr(len-4,2);
				r;
				if(len==6){
					r = color.substr(0,2);
				}else{
					r = color.substr(0,1);
					r = '0'+r;
				}
				return {
					r: r,
					g: g,
					b: b
				};
			}else{
				//consider RGBA values...
			}
		}
	}
	
	function log(obj) {
		if (window.console && window.console.log)
		  window.console.log(obj);
	  };
	
}(jQuery));

