(function ($) {
  Drupal.behaviors.cornify =  {
    attach: function(context, settings) {
	 $(document).keyup(function(e) {
	   if(e.keyCode == 85){
	     cornify_add();
	   }
	 });
    }
  };
})(jQuery);
