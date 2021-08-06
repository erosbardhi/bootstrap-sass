var title = ["Bootstrap Sass Css", "Css", "JavaScript", "Jquery", "Ajax", "React js", "Node js", "Java", "Linux File System" ];

var description = ["Learn Bootstrap with Sass and Css", "Learn  Css", "Learn Javascript", "Learn jQuery", "Learn Ajax calls", "JavasScript Library", "Learn Node js", "Backend Programming", "Deep Dive" ];

var img = [];


var dynamic = document.querySelector('.row-container');
for (var i = 0; i < title.length; i++) {
    var fetch = document.querySelector('.row-container').innerHTML;
    dynamic.innerHTML = `
    <div class="col-sm-4">
    <div 
    class="card text-white card-has-bg click-col"
    style="background-image: url('/images/portfolio/portfolio-1.jpg')"
  >
    <img
      class="card-img d-none"
      src="/images/portfolio/portfolio-1.jpg"
      alt=""
    />
    <div class="card-img-overlay d-flex flex-column">
      <div class="card-body">
        <small class="card-meta mb-2">${title[i]}</small>
        <h4 class="card-title mt-0">
          <a class="text-white" herf="#"
            >${description[i]}</a
          >
        </h4>
        <small><i class="far fa-clock"></i> August 1, 2021</small>
      </div>
      <div class="card-footer">
        <div class="media">
          <img
            class="mr-3 rounded-circle"
            src="/images/phoenix_logo.png"
            style="max-width: 50px"
          />
          <div>
            <h6 class="my-0 text-white d-block">Eros Bardhi</h6>
            <small>Web Developer</small>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
     ` + fetch;
    
}
