@extends('layouts.show')

@section('content')

<section id="buy-tickets" class="section-with-bg">
    <div class="container" data-aos="fade-up">

      <div class="section-header">
        <h2 class="pokemon-name"></h2>
        <p class="pokemon-description">Velit consequatur consequatur inventore iste fugit unde omnis eum aut.</p>
      </div>

      <div class="row">
        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
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
