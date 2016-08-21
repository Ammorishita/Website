
step = animationOpen = off = step4 = 0
function changeImage(event) {
    var targetElement = event.target || event.srcElement;
    if (targetElement.tagName == "IMG")
    document.getElementById("mainImage").src = targetElement.getAttribute("src");
	step = illustrationImages.indexOf(targetElement.getAttribute("src")) 
	step2 = gameAssets.indexOf(targetElement.getAttribute("src"))
	step3 = graphicAssets.indexOf(targetElement.getAttribute("src"))
	this.selectImage(step);
	this.selectGameImage(step2);
	this.selectGraphicImage(step3);
};
function closeImage() {
	animationOpen = 0; 
	$("#play").css({visibility: "hidden"})		
	$("#body").css({opacity : "1"});
	$("#banner").css({opacity : "1"});
	$("#nav").css({opacity : "1"});
	$("#mainBackground").css({display : "none"})
	$("#leftButton").css({display : "none"})
	$("#rightButton").css({display : "none"})
	$("#slideshow > IMG:nth-child("+ step +")").removeClass("selected")
	$("#slideshowGame > IMG:nth-child("+ step2 +")").removeClass("selected")
};
function startAnimate() {
	var i = 1;
	setInterval(function() {
		if  (i<animation.length) {
		document.getElementById('mainImage').src = animation[i]
		i++
		}
	}, 63);
}
var animation = []

animation[1] = "Images/Animations/2ndplace1.png"
animation[2] = "Images/Animations/2ndplace2.png"
animation[3] = "Images/Animations/2ndplace3.png"
animation[4] = "Images/Animations/2ndplace4.png"
animation[5] = "Images/Animations/2ndplace5.png"
animation[6] = "Images/Animations/2ndplace6.png"
animation[7] = "Images/Animations/2ndplace7.png"
animation[8] = "Images/Animations/2ndplace8.png"
animation[9] = "Images/Animations/2ndplace9.png"
animation[10] = "Images/Animations/2ndplace10.png"
animation[11] = "Images/Animations/2ndplace11.png"
animation[12] = "Images/Animations/2ndplace12.png"
animation[13] = "Images/Animations/2ndplace13.png"
animation[14] = "Images/Animations/2ndplace14.png"
animation[15] = "Images/Animations/2ndplace15.png"
animation[16] = "Images/Animations/2ndplace16.png"
animation[17] = "Images/Animations/2ndplace17.png"
animation[18] = "Images/Animations/2ndplace18.png"
animation[19] = "Images/Animations/2ndplace19.png"
animation[20] = "Images/Animations/2ndplace20.png"
animation[21] = "Images/Animations/2ndplace21.png"
animation[22] = "Images/Animations/2ndplace22.png"
animation[23] = "Images/Animations/2ndplace23.png"
animation[24] = "Images/Animations/2ndplace24.png"
animation[25] = "Images/Animations/2ndplace25.png"
animation[26] = "Images/Animations/2ndplace26.png"
animation[27] = "Images/Animations/2ndplace27.png"
animation[28] = "Images/Animations/2ndplace28.png"
animation[29] = "Images/Animations/2ndplace29.png"
animation[30] = "Images/Animations/2ndplace30.png"
animation[31] = "Images/Animations/2ndplace31.png"
animation[32] = "Images/Animations/2ndplace32.png"
animation[33] = "Images/Animations/2ndplace33.png"

var gameAssets = []

gameAssets[1] ="Images/2D/Enzymes.png"
gameAssets[2] ="Images/2D/lunch panel.jpg" 
gameAssets[3] ="Images/2D/Background Silo.jpg" 
gameAssets[4] ="Images/2D/Geothermal Background.jpg" 
gameAssets[5] ="Images/2D/City Destroyed scene.png"
gameAssets[6] ="Images/2D/EarthDestroyed.jpg" 
gameAssets[7] ="Images/2D/Earthwithclouds.jpg" 
gameAssets[8] ="Images/2D/Massteroid Box Art.png"
gameAssets[9] ="Images/2D/Massteroid Sprites.png"

var graphicAssets = []

graphicAssets[1] ="Images/Graphics/Bulldog.jpg"
graphicAssets[2] ="Images/Graphics/Bison.jpg"
graphicAssets[3] ="Images/Graphics/DiamondDusters.jpg" 
graphicAssets[4] ="Images/Graphics/eaglenewNH.jpg" 
graphicAssets[5] ="Images/Graphics/Football Field.jpg"
graphicAssets[6] ="Images/Graphics/Gladiator.jpg" 
graphicAssets[7] ="Images/Graphics/HelmetLogo.jpg" 
graphicAssets[8] ="Images/Graphics/Wolf Head.jpg"

var graphicsOld = []

graphicsOld[1] ="Images/Graphics/BulldogOld.jpg"
graphicsOld[2] ="Images/Graphics/Bison Old.jpg"
graphicsOld[3] ="Images/Graphics/DiamondDustersOld.jpg"
graphicsOld[4] ="Images/Graphics/eaglenewNHOld.jpg"
graphicsOld[5] ="Images/Graphics/Football Field Old.jpg"
graphicsOld[6] ="Images/Graphics/Gladiator old.jpg"
graphicsOld[7] ="Images/Graphics/Helmet Logo Old.jpg"
graphicsOld[8] ="Images/Graphics/Wolf Head Old.jpg"

var illustrationImages = []

illustrationImages[1] = "Images/Illustrations/Sniper Soldier.jpg"
illustrationImages[2] = "Images/Illustrations/Snow Archer.jpg"
illustrationImages[3] = "Images/Illustrations/Four elements of cycling.jpg"
illustrationImages[4] = "Images/Illustrations/StudentArtProgram.jpg"
illustrationImages[5] = "Images/Illustrations/Energy Summoner.jpg"
illustrationImages[6] = "Images/Illustrations/Fox McCloud.jpg"
illustrationImages[7] = "Images/Illustrations/Sith Lord.jpg"
illustrationImages[8] = "Images/Illustrations/Reno Cycling.jpg"
illustrationImages[9] = "Images/Illustrations/Universe Girl.jpg"

var switchImage = function() {
	if (off == 0) {
	document.getElementById("mainImage").src = graphicsOld[step3]
	off = 1
	} else {
	document.getElementById("mainImage").src = graphicAssets[step3]
	off = 0;
	}
}

var selectImage = function(index) {
	var lastImage = illustrationImages.length - 1
	if(step == 1) {
		$("#slideshow > IMG:nth-child("+ lastImage +")").removeClass("selected")
	}
		$("#slideshow > IMG:nth-child("+ index +")").addClass("selected")
		$("#slideshow > IMG:nth-child("+ --index +")").removeClass("selected")
}

var selectGameImage = function(index) {
	var lastImage = gameAssets.length - 1
	if(step2 == 1) {
		$("#slideshowGame > IMG:nth-child("+ lastImage +")").removeClass("selected")
	}
		$("#slideshowGame > IMG:nth-child("+ index +")").addClass("selected")
		$("#slideshowGame > IMG:nth-child("+ --index +")").removeClass("selected")
}

var selectGraphicImage = function(index) {
	var lastImage = graphicAssets.length - 1
	if(step3 == 1) {
		$("#slideshowGraphics > IMG:nth-child("+ lastImage +")").removeClass("selected")
	}
	$("#slideshowGraphics > IMG:nth-child("+ index +")").addClass("selected")
	$("#slideshowGraphics > IMG:nth-child("+ --index +")").removeClass("selected")
}

var selectImageBackwards = function(index) {
	if (step == illustrationImages.length - 1) {
		$("#slideshow > IMG:nth-child(1)").removeClass("selected")
	}
	$("#slideshow > IMG:nth-child("+ index +")").addClass("selected")
	$("#slideshow > IMG:nth-child("+ ++index +")").removeClass("selected")
}

var selectGameImageBackwards = function(index) {
	if (step2 == gameAssets.length - 1) {
		$("#slideshowGame > IMG:nth-child(1)").removeClass("selected")
	}
	$("#slideshowGame > IMG:nth-child("+ index +")").addClass("selected")
	$("#slideshowGame > IMG:nth-child("+ ++index +")").removeClass("selected")
}

var selectGraphicBackwards = function(index) {
	if (step3 == graphicAssets.length - 1) {
		$("#slideshowGraphics > IMG:nth-child(1)").removeClass("selected")
	}
	$("#slideshowGraphics > IMG:nth-child("+ index +")").addClass("selected")
	$("#slideshowGraphics > IMG:nth-child("+ ++index +")").removeClass("selected")
}

function forwards() {
	if (step < illustrationImages.length - 1) {
		step++
		document.getElementById('mainImage').src = illustrationImages[step]
	} else if (step=illustrationImages.length - 1) {
		step = 1
		document.getElementById('mainImage').src = illustrationImages[step]
	}
	this.selectImage(step);
}

function gameForwards() {
	if (step2 < gameAssets.length - 1) {
		step2++
		document.getElementById('mainImage').src = gameAssets[step2]
	} else if (step2=gameAssets.length - 1) {
		step2 = 1
		document.getElementById('mainImage').src = gameAssets[step2]
	}
	this.selectGameImage(step2);
}

function graphicForwards() {
	if (step3 < graphicAssets.length - 1) {
		step3++
		document.getElementById('mainImage').src = graphicAssets[step3]
	} else if (step3=graphicAssets.length - 1) {
		step3 = 1
		document.getElementById('mainImage').src = graphicAssets[step3]
	}
	this.selectGraphicImage(step3);
	off = 0
}


function backwards() {
	if (step > 1) {
		step--
		document.getElementById('mainImage').src = illustrationImages[step]
	} else if (step === 1) {
		step = illustrationImages.length - 1
		document.getElementById('mainImage').src = illustrationImages[step]
	}
	this.selectImageBackwards(step);
}

function gameBackwards() {
	if (step2 > 1) {
		step2--
		document.getElementById('mainImage').src = gameAssets[step2]
	} else if (step2 === 1) {
		step2 = gameAssets.length - 1
		document.getElementById('mainImage').src = gameAssets[step2]
	}
	this.selectGameImageBackwards(step2);
}

function graphicBackwards() {
	if (step3 > 1) {
		step3--
		document.getElementById('mainImage').src = graphicAssets[step3]
	} else if (step3 === 1) {
		step3 = graphicAssets.length - 1
		document.getElementById('mainImage').src = graphicAssets[step3]
	}
	this.selectGraphicBackwards(step3);
	off = 0
}
$(document).ready(function() {
	$("IMG").click(function() {
		if(animationOpen==0) {
		$("#body").css({opacity : "0.2"});
		$("#banner").css({opacity : "0.2"});
		$("#nav").css({opacity : "0.2"});
		$("#leftButton").css({display : "block"})
		$("#rightButton").css({display :"block"})
		$("#mainBackground").css({display : "block"})
		$("#slideshowGame").css({display : "block"})
		$("#switchButton").css({visibility : "visible"})
		}
	})

	$("#animation2ndPlace").click(function() {
		$("#body").css({opacity : "0.2"});
		$("#banner").css({opacity : "0.2"});
		$("#nav").css({opacity : "0.2"});
		$("#leftButton").css({display : "none"})
		$("#rightButton").css({display :"none"})
		$("#mainBackground").css({display : "block"})
		$("#slideshowGame").css({display : "none"})
		$("#play").css({visibility: "visible"})
		animationOpen = 1;
	});	

	$("#play").click(function(){
		startAnimate();
		$(this).attr("disabled", true);
		setTimeout(function(){
			$("#play").removeAttr("disabled")
		}, 1500)
	})
	$("#slideshowGraphics > IMG").click(function(event) {
		$("#slideshowGraphics > IMG:nth-child("+ step3 +")").removeClass("selected")		
		var targetElement = event.target || event.srcElement;
		step3 = graphicsOld.indexOf(targetElement.getAttribute("src"))
		if (targetElement.tagName == "IMG") {
		$(this).addClass("selected")
		document.getElementById("mainImage").src = graphicAssets[step3]
		off = 0; 
		}
	})
	$("#slideshow > IMG").click(function(event) {
		$("#slideshow > IMG:nth-child("+ step +")").removeClass("selected")
		var targetElement = event.target || event.srcElement;
		step = illustrationImages.indexOf(targetElement.getAttribute("src"))
		if (targetElement.tagName == "IMG") {
		$(this).addClass("selected")
		document.getElementById("mainImage").src = illustrationImages[step]
		}
	})
	$("#slideshowGame > IMG").click(function(event) {
		$("#slideshowGame > IMG:nth-child("+ step2 +")").removeClass("selected")
		var targetElement = event.target || event.srcElement;
		step2 = gameAssets.indexOf(targetElement.getAttribute("src"))
		if (targetElement.tagName == "IMG") {
		$(this).addClass("selected")
		document.getElementById("mainImage").src = gameAssets[step2]
		}
	})

});
