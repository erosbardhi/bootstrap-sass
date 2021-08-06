cards = [
    {"Title":"Bootstrap Sass and Css","Description":"Learn Bootstrap Sass and Css", "Date":"January 15, 2021", "Developer":"Eros Bardhi", "Job":"Web Developer"},
    {"Title":"Css","Description":"Learn Css"},
    {"Title":"Javascript","Description":"Learn javascript"},
    {"Title":"Bootstrap Sass and Css","Description":"Learn Bootstrap Sass and Css"},
    {"Title":"Css","Description":"Learn Css"},
    {"Title":"Javascript","Description":"Learn javascript"},
    {"Title":"Bootstrap Sass and Css","Description":"Learn Bootstrap Sass and Css"},
    {"Title":"Css","Description":"Learn Css"},
    {"Title":"Javascript","Description":"Learn javascript"},
   ];
// Card Tempalte
   $.each(cards, function(i){
	var templateString = '<div class="card text-white card-has-bg click-col filter Design"><img class="card-img d-none" src="/image/portfolio/portfolio-1.jpg" alt=""/><div class="card-img-overlay d-flex flex-column"><div class="card-body"><small class="card-meta mb-2">'+cards[i].Title+'</small><h4 class="card-title mt-0"><a class="text-white" herf="#">'+cards[i].Description+'</a></h4><small><i class="far fa-clock"></i>'+cards[i].Date+'</small><div class="card-footer"><div class="media"><imgclass="mr-3 rounded-circle"src="/image phoenix_logo.png"style="max-width: 50px"/><div><h6 class="my-0 text-white d-block">'+cards[i].Developer+'</h6><small>'+cards[i].Job+'</small></div><div></div></div></div></div>';
	$('.row-container').append(templateString);
})
