(function(){
	
	var pre;
	var d = document;
	var jq = jQuery;
	jQuery.preloader = (function(){
		
		var count = 0;
		var int
		var dotcoll=[];
		function _create(){
			pre = d.createElement('div');
			jq(pre).addClass('pre-preloader');
			var i,dot;
			for(i=0; i<5; i++){
				dot = d.createElement('span');
				var color = "#000";
				switch(i){
				case 0:
					color = "#ccc";
					break;
				case 1:
					color = "#999";
					break;
				case 2:
					color = "#666";
					break;
				case 3:
					color = "#333";
					break;
				case 4:
					color = "#000";
					break;
				}
				dot.style.backgroundColor = color;
				jq(pre).append(dot);
				dotcoll.push(jq(dot));
			}
			
		}
		
		var int;
		function _show(container){
			var count = 0;
			int = setInterval(_animate,100);
			
			jq(container).append(pre);
		}
		function _hide(){
			if(int) clearInterval(int);
			jq(pre).detach();
		}
		function _animate(){
			if(count<5){
				dotcoll[count].show();
				count++;
			}else{
				jq.each(dotcoll,function(ind,el){
					el.hide();
				});
				count = 0;
			}
		}
		
		return {
			create:_create,
			show:_show,
			hide:_hide
		}
	}());
	
}());
	