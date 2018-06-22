console.log("PAGINA LISTA");

var SERVICE_URL = "https://jsonplaceholder.typicode.com";
var API_KEY = "AIzaSyDsCNEiE11jyCqp7q6-K5uiyD-ji9AVfzU";
var YOUTUBE_URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=" + API_KEY + "&q=";

jQuery(document).ready(function ($) {
  //La pagina è completamente carica e jQuery è pronto!
  //jQuery == $
  console.log("READY!")
  //console.log("arguments", arguments)

  // $("#loadingBar").hide(); //nascondo la barra di caricamento
  //$("#usersTable").hide(); //nascondo la tabella

  //$("#searchInput").val();
  $("#searchBtn")
    .click(function (event) {
      console.log("Click", event);
      // getUsers();
      var search = $("#searchInput").val();
      getVideos(search);
    })

  //eventi del campo di input di ricerca
  $("#searchInput").keypress(function (event) {
    console.log("tasto premuto", event.key, event.keyCode)

    //se ho premuto Enter keyCode = 13
    if (event.keyCode === 13) {
      var search = $(this).val();
      getVideos(search);
    }

  })
    .focus(function (event) {
      $(this).addClass("inputFocus")
      console.log("Focus")
    })
    .blur(function () {
      $(this).removeClass("inputFocus")
    })




  function getUsers() {

    $("#loadingBar").fadeIn(); //mostro il caricamento
    $("#emptyContent").fadeOut(); //tolto il contenuto iniziale vuoto

    console.log("chiamo getUsers");
    $.getJSON(SERVICE_URL + "/users", function (response) {
      var users = response;
      console.log("USERS", users);
      fillTable(users);
    })
  }

  function getVideos(search) {

    $("#loadingBar").fadeIn(); //mostro il caricamento
    $("#emptyContent").fadeOut(); //tolto il contenuto iniziale vuoto

    console.log("chiamo getVideos");

    $.getJSON(YOUTUBE_URL + search, function (response) {
      var videos = response.items;
      console.log("VIDEOS", videos);
      fillTable(videos);
    })
  }

  function fillTable(arrayData) {

    var $tableBody = $("#usersTable tbody")

    //$tableBody.html(""); //ripulisco il contenuto del tbody
    $tableBody.empty(); //ripulisco il contenuto del tbody

    $.each(arrayData, function (index, video) {
      console.log(index, video);

      //creo una nuova riga vuota
      var newRow = jQuery("<tr></tr>");
      //Inserisco dentro la riga vuota un tag td con il valore che voglio <td>VALORE</td>
      newRow.append("<td>" + video.id.videoId + "</td>");//id
      newRow.append("<td>" + video.snippet.title + "</td>") //name
      newRow.append("<td><img src='" + video.snippet.thumbnails.default.url + "' /></td>") //email

      //append la riga alla tabella
      $tableBody.append(newRow)

    })
    //ha riempito la tabella con tutte le righe;


    //ritardo MANUALMENTE SOLO per TEST, 
    setTimeout(
      function () {
        $("#loadingBar").fadeOut(); // faccio scomparire il loading
        $("#usersTable").fadeIn(); // mostro la tabella
      },
      0 * 1000 //tempo in millisendi;
    )

  }









})//Fine ready