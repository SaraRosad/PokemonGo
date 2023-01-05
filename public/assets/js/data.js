
'use strict';
var content_body_section = '';
var pokemon_legendary_section =$('#pokemon-legendary');

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://pokemon-go1.p.rapidapi.com/pokemon_rarity.json",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "2f0e7d3dfcmshe1836446ab79b26p189cd1jsn74a5f7ee94f2",
		"X-RapidAPI-Host": "pokemon-go1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
    pokemon_legendary_section.empty();
    var list_items = {
        name:   ['Articuno','Zapdos','Moltres','Mewtwo','Raikou','Entei'],
    };
    for (let pokemon_legendary of response.Legendary){
        console.log(pokemon_legendary.pokemon_name+'_'+pokemon_legendary.form);
        let first_body_pokemon_section = `
            <div class="col-lg-4 col-md-6">
                    <div class="pokemon" data-aos="fade-up" data-aos-delay="100">
                        <img src="assets/img/pokemon_legendary/`+pokemon_legendary.pokemon_name+'_'+pokemon_legendary.form+`.png" alt="`+pokemon_legendary.rarity+`" class="img-fluid">
                        <div class="details">
                            <h3><a class="pokemon_modal" type="button" data-toggle="modal" data-target="#modal_pokemon">`+pokemon_legendary.pokemon_name+`</a></h3>
                            <p>`+pokemon_legendary.form+`</p>
                            <div class="stats">

                            <a href="" class="icon-power">
                                <p class="m-0">Max CP:</p>
                                <div class="progress mx-1">
                                    <div class="progress-bar" data-pokemon_id="`+pokemon_legendary.pokemon_id+`" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="10000"></div>
                                </div>
                            </a>
                            </div>
                        </div>
                    </div>
            </div>
        `;
        for (let pokemon_name of list_items.name) {
            if(pokemon_name === pokemon_legendary.pokemon_name){
                pokemon_legendary_section.append(first_body_pokemon_section);
            }
        }

        /* console.log(pokemon_legendary.pokemon_name); */

    }

    $('.modal-title').empty();
    $('.modal-title').append('');
});

const settings_max_cp = {
	"async": true,
	"crossDomain": true,
	"url": "https://pokemon-go1.p.rapidapi.com/pokemon_max_cp.json",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "2f0e7d3dfcmshe1836446ab79b26p189cd1jsn74a5f7ee94f2",
		"X-RapidAPI-Host": "pokemon-go1.p.rapidapi.com"
	}
};

function onlyUnique(value, index, self){
     return self.indexOf(value) === index;
}

function removeItemOnce(arr, val){
    var index = arr.indexOf(val);
    if(index > -1){
        arr.splice(index, 1);
    }
    return arr;
}

function removeItemAll(arr, val){
    var i = 0;

    while( i < arr.length){
        if(arr[i] === val){
            arr.splice(i, 1);
        }else{
            ++i;
        }
    }

    return arr;
}

$.ajax(settings_max_cp).done(function (response) {

    var progressbar = $('.progress-bar');
    response.forEach((pokemon_cp, i) => {
        for( let bar of progressbar){
            if(parseInt(bar.dataset.pokemon_id) === pokemon_cp.pokemon_id){
                let pokemon_health_cp = pokemon_cp.max_cp/100;
                bar.attributes[3].nodeValue = pokemon_health_cp;
                bar.style.width = pokemon_health_cp+"px";
            }
        }
    });
});


/* const pokemon_names = {
	"async": true,
	"crossDomain": true,
	"url": "https://pokemon-go1.p.rapidapi.com/pokemon_names.json",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "2f0e7d3dfcmshe1836446ab79b26p189cd1jsn74a5f7ee94f2",
		"X-RapidAPI-Host": "pokemon-go1.p.rapidapi.com"
	}
};

$.ajax(pokemon_names).done(function (response) {

}); */










