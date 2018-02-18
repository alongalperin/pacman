// global variables
var users = {};
insertUser('a', 'a'); // insert test users
insertUser('test2017', 'test2017');
var userLoggedIn;

function changeArticle(id){    
    $(".navActive").addClass("navNotActive");
    $(".navActive").removeClass("navActive");
    $("#navLink"+id).addClass("navActive");
    $("#navLink"+id).removeClass("navNotActive");

    $("#main > .sectionActive").addClass("sectionHidden");
    $("#main > .sectionActive").removeClass("sectionActive");
    $("#"+id).addClass("sectionActive");
    $("#"+id).removeClass("sectionHidden");
    
    if (id != 3)
    {
        $("#instructions").hide();
    }
}

function insertUser(_username, _password)
{
    users[_username] = _password; // insert test user   
}

function checkLogin()
{
    var username = $("#inp_username").val().trim();
    var pwd = $("#inp_pwd").val().trim();
    console.log('check login: ' + username + " " + pwd);
    if (username in users)
    {
        if (users[username] == pwd)
        {
            userLoggedIn = username;
            $("#gameSettings").show();
            $("#div_login").hide();
            $("#navLink3").text('PLAY');
            var logout ="<div class='wrapper'><li><a href='#' id='navLink5' class='navNotActive' onclick='logoff()'>LOGOUT</a></li></div>";
            $("#navList").append(logout);
            $("#p_username").text(username); //show the username in the game 
        } else {
            $("#loginComments").html("good user bad password");
        }
    } else {
        $("#loginComments").html("username not exsits");
    }
}

function getPreperedPlaying()
{
    $("#gameSettings").hide();
    $("#div_game").show();
    $("#instructions").show();
    $("#myCanvas").focus();
    window.scrollTo(0, 90);
    startPlaying();
}

function logoff()
{
    window.location.reload();
}

$( document ).ready(function() {
    $("#gameSettings").hide();
    $("#div_game").hide();
    window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
    
    $('.input-group.date').datepicker({
        keyboardNavigation: false,
        forceParse: false,
        defaultViewDate: { year: 1990, month: 01, day: 01 }
    });
    $("#instructions").hide();
    $("#div_endgame").hide();
});