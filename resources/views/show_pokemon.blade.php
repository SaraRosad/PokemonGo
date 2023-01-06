@extends('layouts.show')

@section('content')

<section id="show-pokemon-stats" class="section-with-bg">
    <div class="container" data-aos="fade-up">

      <div class="section-header">
        <h2>Pokemon <span class="c-red">Stats</span></h2>
        <p class="pokemon-description">Velit consequatur consequatur inventore iste fugit unde omnis eum aut.</p>
      </div>

      <div class="row pokemon-stats">
        <div class="col-lg-8" data-aos="fade-up" data-aos-delay="100">
            <div class="content-header">
                <h4 class="pokemon-name"></h4>
                <p>Rerum numquam illum recusandae quia mollitia consequatur.</p>
            </div>
            <div class="content-body">
                
            </div>
        </div>
        <div class="col-lg-4 my-5" data-aos="fade-up" data-aos-delay="100">
          <div class="card mb-5 mb-lg-0">
            <div class="card-body">
              <img src="{{asset('assets/img/pokemon_legendary/Articuno_Galarian.png')}}" alt="pokemon 1" class="img-fluid">
              <hr>
              <div class="text-center">
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#buy-ticket-modal" data-ticket-type="standard-access">Go Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
@endsection
