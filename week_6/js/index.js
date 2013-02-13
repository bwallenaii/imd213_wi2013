document.addEvent("domready", function(){
	var faderbox = new FaderBox("faderbox1");
	new FaderBox("faderbox2", {navBoxSelector:"nav"});
});