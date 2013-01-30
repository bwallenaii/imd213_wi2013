document.addEvent("domready", function(){
	new FormCheck("contact-form", {
		display:{showErrors:1, indicateErrors: 2, flashTips: 1}
	});
	//new FormCheck("contact-form2",{alerts:{required:"Hey, stupid, fill it in!"}});
});