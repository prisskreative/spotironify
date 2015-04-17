// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


// $('.js-player').trigger('play')

// $('.js-player').prop('currentTime')

// $('.js-player').prop('value', 20)

// progress var js-progress


function spotifySearch () {

  var search = $('.search').val(); // get search value
  var request = $.get('https://api.spotify.com/v1/search?type=track&q=' + search);


  function searchSong(song) {
    //console.log(characters.artists.items)
    song.tracks.items.forEach(function append (chr) {

      $('.js-songs-list').append(chr.name );
     
       console.debug(chr.name);
    });
  }

  function handleError (err1, err2, err3) {
    console.error('OH NO!!', err1, err2, err3);
  }

  request.done(searchSong);
  request.fail(handleError);
}


 
$('.search').on('click', spotifySearch);