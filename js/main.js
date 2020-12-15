

			var sectionArray = []; 

			$(".section").each(function(){ 
				var topPosition = $(this).offset().top 

				$(this).attr("data-top",topPosition) 
				sectionArray.push(topPosition) 
			})


			$(document).scroll(function(){ 	
				
				var windowOffset = $(window).height()/6
				var ft = $(document).scrollTop()+windowOffset 

				var i=0; 	
				while (i<sectionArray.length) { 

					if ((ft >= sectionArray[i]) && (ft < sectionArray[i+1])) {
						var s = "#section-"+i
						$(".section").css({"opacity":0})
						$(s).css({"opacity":1})
						
					}
					i=i+1; 
				}

			})
