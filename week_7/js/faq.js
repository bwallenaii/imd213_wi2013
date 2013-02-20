var FAQ = new Class({
	//Extends: ,

	Implements: [Options, Events],

	options:{

	},

	initialize: function(element, options)
	{
		this.element = document.id(element);
		this.setOptions(options);

		this.question = this.element.getElement("h3");
		this.answer = this.element.getElement("div");

		this.question.addEvent("click", this.showAnswer.bind(this));

		this.effect = new Fx.Reveal(this.answer, {
			duration: 400
		});

		
	},

	showAnswer: function(e){
		e.stop();
		this.effect.toggle();
		return false;
	}
});