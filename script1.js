function intialise(){
    var no = localStorage.getItem('comment_no1');

    if(!no){
        localStorage.setItem('comment_no1', 0);
        return '0';
    }

    return no;
}

var no_of_comments = intialise();
var isliked = false;

function likeCounter() {
    if(!isliked){
        if (localStorage.likeCount1) {
            localStorage.likeCount1 = Number(localStorage.likeCount1) + 1;
            isliked= true;

        } else {
            localStorage.likeCount1 = 1;
            isliked = true;
        }
        document.getElementById('like-button').setAttribute('src', 'like.png' );
    } 

    else{
        if(localStorage.likeCount1){
            localStorage.likeCount1 = Number(localStorage.likeCount1) - 1;
            isliked= false;
        }
        document.getElementById('like-button').setAttribute('src', 'unlike.png');
    }
    document.getElementById('likeCount').value = '';
    document.getElementById("likeCount").innerText = localStorage.likeCount1;
}

function displaylikes(){
    document.getElementById('likeCount').value = '';
    if(localStorage.likeCount1){
        document.getElementById('likeCount').innerText = localStorage.likeCount1;
    }
}

function addComment(){
    var comm = document.getElementById('comment');
    var content = comm.value.trim();

    if(content !== ''){
        no_of_comments = parseInt(no_of_comments);
        no_of_comments += 1;

        localStorage.setItem('comment_no1', no_of_comments);
        localStorage.setItem('b1c' + no_of_comments, content);

        comm.value = '';
        display_all_comments();
    }
}

function display_all_comments(){
    display_box = document.getElementById('display-comments');
    display_box.innerText = '';

    for(var i = 1; i <= no_of_comments; i++){
        stored_comment = localStorage.getItem('b1c'+i);
        display_box.innerText += stored_comment + '\n';
    }
}

var isDarkMode = true;

function toggleMode() {
    var body = document.body;
    var button = document.getElementById('toggle');
    var content = document.getElementById('content');
    var display = document.getElementById('display-comments');
    var heading = document.getElementById('heading');
 
    if (isDarkMode) {
        body.style.backgroundColor = '#e4e6c3';
        body.style.color = '#121113';
        button.setAttribute('src', 'night-mode.png');

        content.style.borderColor = 'black';
        heading.style.borderColor = 'black';
        display.style.borderColor = 'black';
    }
    
    else {
        body.style.backgroundColor = '#080E20';
        body.style.color = 'white';
        button.setAttribute('src', 'day-mode.png');

        content.style.borderColor = 'white';
        heading.style.borderColor = 'white';
        display.style.borderColor = 'white';

    }

    isDarkMode = !isDarkMode
}
