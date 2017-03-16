$(document).ready(function() {

  //Place holder from youtube data
  var localData = [];

  //Library for question and answer
  var library = [
    { cat: "HTML", id: 1, q: "What does HTML stands for?", an1: "Hyper Text Markup Language", an2:"Hyper Typo Margin Language", an3:"How to Make Lasagna", correct: "Hyper Text Markup Language", link: "what is HTML5?"},
    { cat: "HTML", id: 2, q: "How many tags are in a regular element", an1: "2", an2:"1", an3:"3", correct: "2"},
    { cat: "HTML", id: 3, q: "What is difference in an opening tag and a closing tag", an1: "Opening tag has a / in front", an2:"Closing tag has a / in front", an3:"There is no difference", correct: "Closing tag has a / in front"},
    { cat: "HTML", id: 4, q: "What type of tag is this?", an1: "Break tag", an2:"A broken one", an3:"An opening tag", correct: "Break tag"},
    { cat: "HTML", id: 5, q: "Is this an opening tag or a closing tag?", an1: "Opening", an2:"Closing", an3:"Nither", correct: "Opening"}
  ];



  //Message for each columns
  var fight = '<h1 class="center white-text">Ready for a next adventure?</h1>'

  var excuse = '<h2 class="center white-text">I do NOT make excuse.</h2><h2 class="center white-text">I make results.</h2>'

  var good = '<h1 class="center white-text">Great job!</h1>';

  var next = '<h1 class="center">Please choose next question.</h1>';

  var video = '<video width="100%" class="responsive-video" controls><source src="http://clips.vorwaerts-gmbh.de/big_buckbunny.mp4" type="video/mp4"></video>';



  //Insert a word in bottom box
  $("#message").html(fight);
  $("#message").css("background-color", "#bdbdbd" );


  //Reload a page from reset button
  $('#something').click(function() {
    location.reload();
  });

  //Click function of selecting question
  $('.waves-effect.waves-light.btn').click(function(){
    var getSrc = $(this).attr("src"); //get 1,2,3,4,5
    var getId = $(this).attr("id"); //get HTML, CSS

    //Disable a button after choose
    var getClass = $(this).attr("class"); //get class name
    var changeClass = getClass + " disabled"; //create a name to disabled button
    var updateClass = $(this).attr("class", changeClass); //update name to disable the button

    //Refresh the message box
    $('#message').html(excuse);


    for (var i=0;i<library.length;i++){

      if(getId === library[i].cat + library[i].id) { //if HTML1
        //Show question
        $('#quiz').html("<h5 id='current_question'>" + library[i].q + "</h5>" +'<label>Browser Select</label><select class="browser-default"><option value="wrong!" disabled selected>Choose your option</option><option value="1">' + library[i].an1 + '</option><option value="2">' + library[i].an2 + '</option><option value="3">' + library[i].an3 + '</option></select>' + '<button id="ansbtn" class="btn waves-effect waves-light" type="submit" name="action">Submit<i class="material-icons right"></i></button>');
      } //end of if
    } //end of for loop
  }); //end of very first click function


  //Submit answer and check answer
  $('#quiz').on("click", "#ansbtn", function(){ // this function help you to find the #ansbtn which is created by DOM
    //get what answer from option
    var current_question = $("#current_question").html(); //Look a question through "id"

    var seeAns = $('.browser-default').find('option:selected').text(); //What does stands for HTML etc..
    var index = find_current_question_index();

    if(seeAns === library[index].correct) {
      //Show Good job message on the left column
      $('#message').html(good);
      //Show the message of "choose next question"
      $('#quiz').html(next);
      //Add point to score board


    } else {
      //keyword for searching youtube video
      var url = "https://www.googleapis.com/youtube/v3/search?id=q1project-161420&key=AIzaSyAkEPhD7UaRwxc8-0VUX-4ATTtV8mvzhAw&part=snippet&q=" + encodeURI(library[index].link);

      // Grab data from youtube
          $.getJSON(url).then(function(data){
            //Part1 create a local database(I have more flexibility later)
            var allData = data.items;

            for (var i=0;i<allData.length;i++){
              var newObj = {
                id: allData[i].id.videoId, //
                title: allData[i].snippet.title,
              }//end of newobj
              localData.push(newObj);
            } //end of for loop

            //Part2 Create a array for title and videoURL
            var titleArr = []; //["What is HTML5?", "HTML5 as Fast As Possible", "What is HTML5? | lynda.com overview", "What is HTML5", "What is the difference between HTML5 and CSS3? | lynda.com"]
            var videoURL = []; //["mzPxo7Y6JyA", "IsXEVQRaTX8", "4oX9DXH4fiA", "um3DRKlN3-8", "j_pQp3KQulk"]
            for (var i=0;i<localData.length;i++){
                titleArr.push(localData[i].title);
                videoURL.push(localData[i].id);
                console.log(videoURL)
              }// end of loop

            //Part3 Pick up two videos from titleArray
            var selected1 = '<h1 class="center white-text"></h1>';
            var selected2 = '<h1 class="center white-text"></h1>';

            //Part4 show two videos on bottom column
            $('#message').html(selected);







        }) //end of json






      // $('#message').css("background-color","");
      // $('#message').html("");
      // $('#message').append(video);
      //Run Youtube API for showing the lecture video

      alert("Wrong answer!")

    }//end of if
  }); //end of answer click function


  //Function for finding index number of question
  function find_current_question_index(){
    var found_question = $("#current_question").text(); //find current question
    var found_index; //place holder for index number

    for (var i = 0; i < library.length; i++) {
      if (library[i].q ===found_question){ //if question match to library
        found_index = i;
      }
    }
    return found_index;
  } //end of function















  }); //End of JQuery
