document.addEvent("domready", function(){
	//new FAQ("question1");
	//new FAQ("question2");
	var questions = $$(".question");
	for(var i = 0; i < questions.length;++i)
	{
		new FAQ(questions[i]);
	}
});