var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+919098820658'> <div class='socialItem' id='call'><img class='socialItemI' src='phone.jpg' width=300 height=200/><label class='number'>9098820658</label></div> </a> <a href='https://gmail.com/baghelharshsingh41@gmail.com'> <div class='socialItem'><img class='gmail' src='gmail.png' alt='' width=300 height=200></div> </a> <a target='_blank' href='https://github.com/Harshsingh2340'> <div class='socialItem'><img class='socialItemI' src='github.png' alt=''></div> </a> <a target='_blank' href='https://wa.me/919098820658'> <div class='socialItem'><img class='socialItemI' src='whatsapp.png' alt='' width=300 height=200></div> </a> <a target='_blank' href='https://t.me/baghel21052905'> <div class='socialItem'><img class='socialItemI' src='telegram.png' alt=''></div> </a> <a target='_blank' href='https://instagram.com/HARSH_SINGH_BAGHEL__' > <div class='socialItem'><img class='socialItemI' src='instagram.jpeg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/harsh-singh-06672621b/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='Linkedin.png' alt='' width=300 height=200></div> </a> </div>";
var resumeString = "<img src='harshresume.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='harshresume.png'><label>Harsh Resume.png</label></div><a href='harshresume.png' download='Harsh Singh Resume.jpg'><img class='download' src='images/downloadIcon.hpg'></a></div>";
var addressString = "<div class='mapview'>'<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1287.7821122615342!2d81.31214934088112!3d24.516037141656554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39845a5ea5e3afa9%3A0xbd81b0ec9c521acd!2sDikshakulam%20School!5e0!3m2!1sen!2sin!4v1692967420311!5m2!1sen!2sin' > class='map'></iframe></div><label class='add'><address>'krishna nagar'<br>chirula colony<br>Rewa, Madhyapradesh, INDIA 486001</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Harsh Singh</a>.</span><br><br>I am a Computer Engineering student at <span class='bold'>Kalinga University 👨🏻‍💻📚</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>Send <span class='bold'>'hi'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "hi":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>' skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'competitve coding'</span> - to get details of competitve coding<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing B.Tech degree in Computer Science Engineering.<br><br>I can comfortably write code in following languages :<br><span class='bold'>Java<br>C++(one of my best langauge)<br>C<br>Python<br>CSS<br>HTML</span><br><br>I've experiance with following frameworks :<span class='bold'><br>ReactJs</span><br>Favourite IDE:VSCode</span>");
            break;

        case "education":
            sendTextMessage("I am currently pusuing B.Tech degree in Computer Science Engineering from Kalinga Instuite of Industrial Techononlgy<br>Passing Year : 2025<br><br>I have completed my postmatrix from Gyanasthali Vidhalaya school ,Rewa<br>Passing year:2021<br><br>I have completed my Secondary school from Banyan Inernational SCHOOL,Jammu<br>Passing Year:2019");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://instagram.com/harsh_singh_baghel__?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'><span class='bold'>Harsh Singh</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Harshsingh2340'> <div class='socialItem'><img class='socialItemI' src='github.png' alt=''></div> </a></div>");
            break;
        case "competitve coding":
            sendTextMessage("You want to check my coding skills? Then just jump into my Hacker rank Account.<br><br><div class='social'><a target='_blank' href='https://www.hackerrank.com/h21052905'> <div class='socialItem'><img class='socialItemI' src='hacker.png' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}