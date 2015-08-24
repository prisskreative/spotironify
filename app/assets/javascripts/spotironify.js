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
    var firstSong = song.tracks.items[0];
    $('.title').text(firstSong.name);        
  }

  function artist(art) {
    var firstSongArtist = art.tracks.items[0].artists[0];
    $('.author').text(firstSongArtist.name);   
  }

  function trackImage(img) {
    var firsttrackImage = img.tracks.items[0].album.images[0];
    $('.coverimg').prop("src", firsttrackImage.url); // change to this url   
  }

  function playSong(cc) {
  	var firstSongPlay = cc.tracks.items[0];
    $('#audio').prop("src", firstSongPlay.preview_url);

    $('.btn-play').click(function(){
    	if (!$('.btn-play').hasClass('playing')){
    	    $(this).addClass('playing');
    	    $('#audio').trigger('play');
        }
    	else{
    		$(this).addClass('disabled').removeClass('playing');
    	    $('#audio').trigger('pause');
    	}
    }); 

    }

 

  function handleError (err1, err2, err3) {
    console.error('OH NO!!', err1, err2, err3);
  }

  request.done(searchSong);
  request.done(artist);
  request.done(trackImage);
  request.done(playSong);
  request.fail(handleError);
  }

function printTime () {
    $('.js-progress-bar').prop("value", audio.currentTime);
}
 
$('.js-search-button').on('click', spotifySearch);
$('#audio').on('timeupdate', printTime);


$('.js-modal').modal();



