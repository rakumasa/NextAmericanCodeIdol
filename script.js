$(document).ready(function() {

  var library = [
    { cat: "HTML", id: 1, q: "What does HTML stands for?", an1: "Hyper Text Markup Language", an2:"Hyper Typo Margin Language", an3:"How to Make Lasagna", correct: "Hyper Text Markup Language"},
    { cat: "HTML", id: 2, q: "How many tags are in a regular element", an1: "2", an2:"1", an3:"3", correct: "2"},
    { cat: "HTML", id: 3, q: "What is difference in an opening tag and a closing tag", an1: "Opening tag has a / in front", an2:"Closing tag has a / in front", an3:"There is no difference", correct: "Closing tag has a / in front"},
    { cat: "HTML", id: 4, q: "What type of tag is this?", an1: "Break tag", an2:"A broken one", an3:"An opening tag", correct: "Break tag"},
    { cat: "HTML", id: 5, q: "Is this an opening tag or a closing tag?", an1: "Opening", an2:"Closing", an3:"Nither", correct: "Opening"}
  ];

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
    $('#message').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')


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
      $('#message').html('<h1 class="center red-text">' + "Good job!" + "</h1>");
      //Show the message of "choose next question"
      $('#quiz').html('<h2 class="center green-text">Please choose next question</h2>');
      //Add point to score board


    } else {
      alert("Wrong answer!")
      //Run Youtube API for showing the lecture video
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
