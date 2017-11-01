var cars_data = {
  "sprite": "images/cars_sprite.png",
  "images": [
    {
      "id": 1,
      "url": "images/cars/tesla_model_s_2016.jpg",
      "sprite_position": "0 0",
      "title": "Tesla Model S",
      "description": "Electric mirracle from Elon Musk"
    },
    {
      "id": 2,
      "url": "images/cars/lamborghini_veneno_supercar_3.jpg",
      "sprite_position": "-310px 0",
      "title": "Lamborghini Veneno",
      "description": "Italian classic"
    },
    {
      "id": 3,
      "url": "images/cars/lamborghini_aventador_lp_700_4_special_edition_2.jpg",
      "sprite_position": "-620px 0",
      "title": "Lamborghini Aventador",
      "description": "Yet another Italian whroom-whroom"
    },
    {
      "id": 4,
      "url": "images/cars/bugatti_chiron___2017.jpg",
      "sprite_position": "-930px 0",
      "title": "Bugatti Chiron",
      "description": "This one costs a lot"
    },
    {
      "id": 5,
      "url": "images/cars/2018_mercedes_amg_gt_r.jpg",
      "sprite_position": "-1240px 0",
      "title": "Mercedes ANG GTR",
      "description": "German quality"
    },
    {
      "id": 5,
      "url": "images/cars/2017_acura_nsx.jpg",
      "sprite_position": "-1550px 0",
      "title": "Acura NSX",
      "description": "Japanese style"
    }
  ]
};


function renderCols(cols) {
    var row = $("<div class='row'></div>").append(cols);
    $('main.content').append(row);
}


$(document).ready(function(){
    var cols = [];
    for (var i = 0; i < cars_data.images.length; i++) {
        var car = cars_data.images[i];
        var link = $("<a data-toggle='modal' data-target='#infoModal'></a>").attr(
            "data-url", car.url).attr("data-title", car.title).attr("data-description", car.description);
        var img = $("<div class='cars_sprite'></div>").css(
            "background", "url('" + cars_data.sprite + "') no-repeat top left"
        ).css(
            "background-position", car.sprite_position
        );
        cols.push($("<div class='col-md-4'></div>").append(link.append(img)));
        if (cols.length === 3) {
            renderCols(cols);
            cols = [];
        }
    }
    if (cols.length > 0) {
        renderCols(cols);
    }
});



$(document).on('show.bs.modal', '#infoModal', function (event) {
    console.log('hello!');
    var button = $(event.relatedTarget);
    var url = button.data("url");
    var title = button.data("title");
    var description = button.data("description");
    var modal = $(this);
    modal.find(".modal-title").text(title);
    modal.find(".picture").attr("src", url);
    modal.find(".description").text(description);
});
