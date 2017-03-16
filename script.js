$(document).ready(function() {

  //Counter for button
  var counter = 0;

  //Place holder from youtube data
  var localData = [];

  //Library for question and answer
  var library = [
    { cat: "HTML", id: 1, q: "What does HTML stands for?", an1: "Hyper Text Markup Language", an2:"Hyper Typo Margin Language", an3:"How to Make Lasagna", correct: "Hyper Text Markup Language", link: "what is HTML5?"},
    { cat: "HTML", id: 2, q: "How many tags are in a regular element", an1: "2", an2:"1", an3:"3", correct: "2", link: "what is HTML tag?"},
    { cat: "HTML", id: 3, q: "What is difference in an opening tag and a closing tag", an1: "Opening tag has a / in front", an2:"Closing tag has a / in front", an3:"There is no difference", correct: "Closing tag has a / in front", link: "opening closing tag?"},
    { cat: "HTML", id: 4, q: "Who is making the Web standards?", an1: "My mom", an2:"Google", an3:"The World Wide Web Consortium", correct: "The World Wide Web Consortium", link: "what is wide web consortium?"},
    { cat: "HTML", id: 5, q: "All HTML tags are enclosed in what?", an1: "< and >", an2:"Meat sauce", an3:"# and #", correct: "< and >", link: "what is HTML tag"},
    { cat: "CSS", id: 1, q: " What is the difference between HTML and CSS?", an1: "CSS is a markup language unlike HTML", an2:"There is no difference.", an3:"HTML deals with the function of the site and CSS the form", correct: "HTML deals with the function of the site and CSS the form", link: "diffrence HTML CSS"},
    { cat: "CSS", id: 2, q: "Which HTML tag is used to define an internal style sheet?", an1: "style", an2:"script", an3:"css", correct: "style", link: "css style"},
    { cat: "CSS", id: 3, q: "Which is the correct CSS syntax?", an1: "body:color=black;", an2:"{body:color=black;}", an3:"body {color: black;}", correct: "body {color: black;}", link: "CSS syntax"},
    { cat: "CSS", id: 4, q: " How would you change a background color?", an1: "Call grandfather", an2:"background-color: white;", an3:"color: DarkCyan", correct: "background-color: white;", link: "CSS background color"},
    { cat: "CSS", id: 5, q: "What does CSS stand for?", an1: "Cascading Style Sheets", an2:"Creative Style Sheets", an3:"Colorful Style Sheets", correct: "Cascading Style Sheets", link: "what is CSS"},
    { cat: "JS", id: 1, q: "Inside which HTML element do we put the JavaScript?", an1: "javascript", an2:"script", an3:"scripting", correct: "script", link: "javascript HTML element"},
    { cat: "JS", id: 2, q: "Where is the correct place to insert a JavaScript?", an1: "head and body section", an2:"head section", an3:"body section", correct: "head and body section", link: "insert javascript HTML"},
    { cat: "JS", id: 3, q: 'What is the correct syntax for referring to an external script called "xxx.js"?', an1: 'script src="xxx.js"', an2:'script name="xxx.js"', an3:'script href="xxx.js"', correct: 'script href="xxx.js"', link: "javascript external script"},
    { cat: "JS", id: 4, q: 'How do you write "Hello World" in an alert box?', an1: 'alert("Hello World");', an2:"Scream loud", an3: 'msg("Hello father");', correct: 'alert("Hello World");', link: "javascript alert"},
    { cat: "JS", id: 5, q: 'How do you create a function in JavaScript?', an1: 'function myFunction()', an2:"function = myFunction()", an3: 'function:myFunction()', correct: 'function myFunction()', link: "javascript function"}
  ];

  //Messages for each columns
  var rule = '<h4 class="black-text"><u>Game instruction</u></h4><ol class="black-text"><li>Pick question from a left column</li><li>Select your answer</li><li>When you complete all question, you can hit<br>a reset button(top-right) and restart again.</li><li>Enjoy the game!</li></ol>';

  var good = '<h1 class="center blue-text">Great job!</h1>';

  var choose = '<h1 class="center red-text">Please select<br>your answer</h1>';

  var next = '<h2 class="center">Please choose<br>next question.</h2>';

  var fight = '<h1 class="center white-text">Ready for a next adventure?</h1>';

  var phrase = ["I DO NOT MAKE EXCUSE.<br> I MAKE RESULTS","SLOW PROGRESS IS BETTER THAN<br>NO PROGRESS.","STOP WISHING.<br>START DOING","THINK ABOUT<br>WHY YOU STARTED CODING", "CODE is<br>21st Century's Oxygen", "Cry Today,<br>Strong Tomorrow", "Make Code<br>Your Best Friend","<br>Coding. Smile. Repeat.","Talk is cheap.<br>Show me the code","I Was Born To Code!<br>I Was Born To Code!<br>I Was Born To Code!","You Are The Semicolon to My STATEMENTS","Without you<br>my world is NULL","Hey MOM,<br>Can I go home?"];

  //Insert a content in top column
  $("#quiz").html(rule);

  //Insert a content in bottom column
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

    //Shuffle the message box
    var randomSort = phrase.sort(function(a, b){return 0.5 - Math.random()});
    var shuffle = '<h2 class="center white-text">' + randomSort[3] + '</h2>';
    $('#message').html(shuffle);

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

    if(seeAns === "Choose your option") {
      //Show please select your answer on the bottom column
      $('#message').html(choose);
      } else if(seeAns === library[index].correct) {
        //Add 1 to counter everytime you get a right answer
        console.log(counter);
        counter = counter + 1;
        //If counter reach to 14, all question is done. If it's not, keep going
        if (counter < 3){
          //Show Good job message on the bottom column
          $('#message').html(good);
          //Show the message of "choose next question"
          $('#quiz').html(next);
        } else {
          console.log("Success");
        }
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
              } // end of loop

            //Part3 Create variable for youtube link
            var youtube = "https://www.youtube.com/watch?v=";

            //Part4 Pick up three videos from titleArray
            var selected = '<h4 class="white-text">No worry! Watch below videos and learn about what it is!</h4><ul class="white-text"><li><a href="' + youtube + videoURL[0] +'" target="_blank">' + titleArr[0].substr(0, 50) + '</a></li><li><a href="' + youtube + videoURL[1] +'" target="_blank">' + titleArr[1].substr(0, 50) + '</a></li><li><a href="' + youtube + videoURL[2] +'" target="_blank">' + titleArr[2].substr(0,50) + '</a></li></ul>';

            //Part5 show two videos on bottom column
            $('#message').html(selected);

          }) //end of json
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
