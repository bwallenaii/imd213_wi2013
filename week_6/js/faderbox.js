var FaderBox = new Class({
	//Extends: ,

	Implements: [Options, Events],

	options:{
		navBoxSelector: ".nav",
		navTagSelector: "a",
		contentBoxSelector: ".content",
		contentItemSelector: "div",
		changeHeight: true
	},

	initialize: function(element, options)
	{
		this.element = document.id(element);
		this.setOptions(options);
		//Select the elements within our main element (faderbox)
		//that we will need for later
		this.navBox = this.element.getElement(this.options.navBoxSelector);
		this.atags = this.navBox.getElements(this.options.navTagSelector);
		this.contentBox = this.element.getElement(this.options.contentBoxSelector);
		this.sections = this.contentBox.getChildren(this.options.contentItemSelector);
		//Added a click listener to our navigation tags
		this.atags.addEvent("click", this.navClicked.bind(this));
		this.contentBox.setStyle("position", "relative");
		this.sections.setStyle("position", "absolute");
		this.sections.setStyle("opacity", 0);
		
		var highestBox = this.sections[0];
		if(!this.options.changeHeight)
		{
			for(var i =0; i < this.sections.length;++i)
			{
				if(this.sections[i].getStyle("height").toInt() > highestBox.getStyle("height").toInt())
				{
					highestBox = this.sections[i];
				}
			}

			this.element.setStyle("height", highestBox.getStyle("height").toInt() + this.navBox.getStyle("height").toInt() );
		}
		
	},

	navClicked: function(e)
	{
		e.stop();

		for(var i = 0; i < this.atags.length;++i)
		{
			if(this.atags[i] == e.target)
			{
				break; // get out of the for loop, i is the index of the section we want
			}
		}

		//fade out all sections
		this.sections.tween("opacity", 0);
		//show the section we want
		this.sections[i].tween("opacity", 1);
		if(this.options.changeHeight)
		{
			this.element.tween("height", this.sections[i].getStyle("height").toInt() + this.navBox.getStyle("height").toInt() );
		}
		return false;
	}

});