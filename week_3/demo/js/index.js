document.addEvent("domready", function(){
	var nav = document.id("nav");
	var atags = $$("#nav a");
	var contents = $$(".content");
	//var atags2 = nav.getElements("a");

	nav.addEvent("mouseover", function(){
		this.addClass("light-red");
	});

	nav.addEvent("mouseout", function(){
		this.removeClass("light-red");
	});

	atags.addEvent("click", function(e){
		e.stop();
		var target = this.get("data-id");
		contents.dissolve();
		document.id(target).reveal();
		return false;
	});
});