document.addEvent("domready", function(){

	//grab the anchor tags
	var atags = $$("#ajnav a");

	atags.addEvent("click", function(e){
		//stop the link from working
		e.stop();
		//gets the href value from the tag clicked
		var location = this.get("href");
		//load the location into our content div
		document.id("content").load(location);
		//no, really, stop the link from working
		return false;
	});
});