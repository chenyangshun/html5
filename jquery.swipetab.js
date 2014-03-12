
(function($) {
	var defaultOptions={width:100};
	var opts={};
	var $this;
	var $thispanel;
	$.fn.swipeTab = function(options,debug) {    
		 $this=$(this);
		 $thispanel=$this.find(".tab-panel:first");
	     opts=$.extend({},defaultOptions,options);
	     $.fn.swipeTab.init();
	}; 
	function debug(info){
		if(debug){
			if (window.console && window.console.log)    
				window.console.log(info);  
		}
	}
	$.fn.swipeTab.init=function(){
		debug("$.fn.swipeTab.init start... ");
		/*$(window).resize(function(){
			$.fn.swipeTab.init();
		});*/
		var w=$(document.body).width();
		opts=$.extend({},opts,{width:w});
		debug(opts.width);
		$this.width(opts.width);
		$this.find(".tab-panel").each(function(){
			$(this).width(($this.find(".ui-navbar").find("li").length+1)*opts.width);
		});
		$this.find(".sub-tab").each(function(){
			$(this).width(opts.width).css("float","left");
		});
		$("#nav-one").addClass("ui-btn-active");
		
		$("body").bind("swipeleft", function() {
			$("#nav-two").addClass("ui-btn-active");
			$("#nav-one").removeClass("ui-btn-active");
			move("left");
		});
		$("body").bind("swiperight", function() {
			$("#nav-one").addClass("ui-btn-active");
			$("#nav-two").removeClass("ui-btn-active");
			move("right");
		});
		function move(w){
			var v =$thispanel.offset().left;
			debug(v);
			if(w=="left"){
				v=v-$("#one").width()-28;
			}else{
				v=v+opts.width+12;
			}
			$thispanel.animate({
				left :v+"px"
			});
		}
	};
})(jQuery);
