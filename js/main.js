$(".section").each(function(){
	topPosition = $(this.offset().top
	console.log(topPosition)

	$(this).attr("data-top",topPosition)
})


$(document).scroll(function(){
	ft = $(document).scrollTop();
	console.log(ft)

	for (i=0;i<sectionArray.length;i++) {
		if ((ft >=sectionArray [i]) && (ft < sectionArray[i+1])) {
			var s -= "#section-"+i
			var prev = "#section-"+(i-1)
			var next = "#section-"+(i+1)
			console.log(prev)
			$(prev).css({"opacity":0})
			$(s).css({"opacity":1})
		}
	}
})