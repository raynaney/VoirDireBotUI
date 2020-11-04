"use strict";

//end study if user has not moved the mouse, clicked on the page, or pressed any key for two minutes
var redirectTimeoutId = window.setTimeout(redirectToEnd, 120000);
function redirectToEnd() {
  window.location.href = '/resultsPage'; 
}
window.addEventListener('click keypress mousemove', function() { 
  window.clearTimeout(redirectTimeoutId)
}, true)

console.log(sessionStorage.participantID);
const participantID = JSON.parse(sessionStorage.participantID);
var botui = new BotUI("help-bot");
var messageList = [];
var participantResponse = [];
var onBoard = 0;
let done = false;
let delay;
//utilities
function pause0() {
  return botui.message.add({
    type: "html",
    delay: 500,
    loading: false,
    content: "none",
    cssClass: ["none"]
  });
}

function pause1() {
  return botui.message.add({
    type: "html",
    delay: 1000,
    loading: false,
    content: "none",
    cssClass: ["none"]
  });
}

function pause2() {
  return botui.message.add({
    type: "html",
    delay: 4000,
    loading: false,
    content: "none",
    cssClass: ["none"]
  });
}

function pause3() {
  return botui.message.add({
    type: "html",
    delay: 7000,
    loading: false,
    content: "none",
    cssClass: ["none"]
  });
}
function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
let counterBalance = 0;
let numberList = [0, 1];
counterBalance = choose(numberList);
console.log("The counterBalance is: ", counterBalance);

let condition;
let conditionList = [0, 1, 2];
condition = choose(conditionList);
console.log("The condtion number is: ", condition);

//start voir dire script

botui.message.add({
  delay: 500,
  loading: true,
  content: "Loading..."
});
botui.message
  .remove(0)
  .then(function(res) {
    var message;
    message =
      "Automated System:<br>Welcome to the Jury Chatroom. You are Juror 3. Please click the button below to continue";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 5,
      // photo: true, SEE https://github.com/botui/botui/issues/81
      loading: false,
      content: message,
      cssClass: ["automated"]
    });
  })

  //   .then(function() {
  //     return botui.action.button({
  //       action: [
  //         {
  //           icon: "check",
  //           text: "Continue",
  //           value: "do"
  //         }
  //         // {
  //         //   text: "What do you do?",
  //         //   value: "do",
  //         // },
  //       ]
  //     });
  //   })

  //   .then(function(res) {
  //     var message;
  //     message =
  //       "Automated System:<br>Thank you. Please wait patiently for the other participants to join.";
  //     messageList.push(message);
  //     return botui.message.add({
  //       type: "html",
  //       delay: 5,
  //       loading: false,
  //       content: message,
  //       cssClass: ["automated"]
  //     });
  //   })
  //   .then(function(res) {
  //     var message;
  //     message = "Loading...";
  //     messageList.push(message);
  //     return botui.message.add({
  //       type: "html",
  //       delay: 4000,
  //       loading: false,
  //       content: message,
  //       cssClass: ["machine"]
  //     });
  //   })
  //   //
  //   //
  //   //
  //   //
  //   //
  //   //
  //   //
  //   // REMOVE ALL PRIOR MESSAGES
  //   .then(botui.message.removeAll)
  //   // START NEW CHAT THREAD:
  //   //
  //   //
  //   //
  //   //
  //   //
  //   //
  //   .then(function(res) {
  //     var message;
  //     message = " Joining chatroom 456-32";
  //     messageList.push(message);
  //     return botui.message.add({
  //       type: "html",
  //       delay: 5,
  //       loading: true,
  //       content: message,
  //       cssClass: ["machine"]
  //     });
  //   })
  //   .then(function() {
  //     const icon = document.getElementById("connected-icon");
  //     const text = document.getElementById("connected-text");
  //     icon.style.display = "block";
  //     text.style.display = "block";
  //   })
  //   .then(function(res) {
  //     var message;
  //     message = "Loaded";
  //     messageList.push(message);
  //     return botui.message.add({
  //       type: "html",
  //       delay: 2000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["machine"]
  //     });
  //   })
  //   //
  //   //
  //   //
  //   //
  //   //
  //   //
  //   //
  //   // REMOVE ALL PRIOR MESSAGES
  //   .then(botui.message.removeAll)
  //   // START NEW CHAT THREAD:
  //   //
  //   //
  //   //
  //   //
  //   //
  //   //
  //   .then(function(res) {
  //     var message;
  //     message = " Waiting for jurors to enter chatroom...";
  //     messageList.push(message);
  //     return botui.message.add({
  //       type: "html",
  //       delay: 5,
  //       loading: true,
  //       content: message,
  //       cssClass: ["machine"]
  //     });
  //   })

  //   .then(function(res) {
  //     var message;
  //     message = "Loaded";
  //     messageList.push(message);
  //     return botui.message.add({
  //       type: "html",
  //       delay: 9000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["machine"]
  //     });
  //   })
  //   //
  //   //
  //   //
  //   //
  //   //
  //   //
  //   //
  //   // REMOVE ALL PRIOR MESSAGES
  //   .then(botui.message.removeAll)
  //   // START NEW CHAT THREAD:
  //   //
  //   //
  //   //
  //   //
  //   //
  //   //
  //   //ADD CHATROOM NAME AT THE TOP HERE USING CREATE NEW DIV, STYLE DIV
  //   .then(function(index) {
  //     var message;
  //     message = "Juror 1 has joined the chat";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 0,
  //       loading: false,
  //       content: message,
  //       cssClass: ["machine"]
  //     });
  //   })
  //   .then(function(index) {
  //     var message;
  //     message = "Juror 2 has joined the chat";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 0,
  //       loading: false,
  //       content: message,
  //       cssClass: ["machine"]
  //     });
  //   })
  //   .then(function(index) {
  //     var message;
  //     message = "none";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 5000,
  //       loading: false,
  //       content: message,
  //       cssClass: ["none"]
  //     });
  //   })

  //   //   .then(function(index) {
  //   //     var message;
  //   //     message =
  //   //       "Chat Room Admin: <br> Welcome all to our online jury selection.\
  //   //     thanks all for joining us today. I am the chat room admin and will\
  //   //    provide you with an overview of the study. The Judge will join shortly.";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 23000,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["admin"]
  //   //     });
  //   //   })
  //   //   .then(pause1)
  //   //   .then(pause1)
  //   //   .then(function(index) {
  //   //     var message;
  //   //     message =
  //   //       "Chat Room Admin: <br> This study will be focused on voir dire, which is the process of jury selection\
  //   //     in the legal world.  Voir dire is a\
  //   //      chance for Judges and lawyers to ask jurors questions to ensure\
  //   //      the jurors are able to consider the case fairly";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 25000,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["admin"]
  //   //     });
  //   //   })
  //   //   .then(pause0)
  //   //   .then(pause1)
  //   //   .then(function(index) {
  //   //     var message;
  //   //     message =
  //   //       "Chat Room Admin: <br> Normally, voir dire is done in person, but in light of COVID-19,\
  //   //       courts across the country want to transition to an online format for jury trials.\
  //   //       So we are testing out methods to resolve legal disputes online. ";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 32000,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["admin"]
  //   //     });
  //   //   })
  //   //   .then(pause1)
  //   //   .then(pause1)

  //   //   .then(function(index) {
  //   //     var message;
  //   //     message =
  //   //       "Chat Room Admin: <br> This study is vital to advancing how the courts work and improving\
  //   //        the functioning of our legal system.  So, we need you to participate seriously and honestly.\
  //   //       Please treat this as a real legal case because it will soon be a real legal case";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 35500,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["admin"]
  //   //     });
  //   //   })
  //   //   .then(pause3)
  //   //   .then(pause0)

  //   //   .then(function(index) {
  //   //     var message;
  //   //     message =
  //   //       "Chat Room Admin: <br>  And, if you are selected for the jury today, you will\
  //   //       be asked to take part in a brief online case presentation (where you hear what\
  //   //       the parties have to say) and deliberation (discussion with your fellow jurors about the case). ";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 27200,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["admin"]
  //   //     });
  //   //   })
  //   //   .then(pause1)
  //   //   .then(pause1)
  //   //   .then(pause0)

  //   //   .then(function(index) {
  //   //     var message;
  //   //     message =
  //   //       "Chat Room Admin: <br> As we want to keep everyone’s answers confidential, you have been assigned a juror number.\
  //   //        It can be found in the left-hand side bar under the instructions.";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 20000,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["admin"]
  //   //     });
  //   //   })
  //   //   .then(pause1)
  //   //   .then(pause1)

  //   //   .then(function(index) {
  //   //     var message;
  //   //     message =
  //   //       "Chat Room Admin: <br> So everyone doesn't chat at once, the Judge and I will unblock\
  //   //      your chatbar when it is your turn. Lets try a practice round.";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 10000,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["admin"]
  //   //     });
  //   //   })
  //   //   .then(function(index) {
  //   //     var message;
  //   //     message =
  //   //       "Chat Room Admin: <br> Juror 1, can you press 'A' from the menu below?";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 15000,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["admin"]
  //   //     });
  //   //   })
  //   //   .then(function(index) {
  //   //     var message;
  //   //     message = "Juror 1: <br> A ";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 4000,
  //   //       loading: false,
  //   //       content: message,
  //   //       cssClass: ["juror1"]
  //   //     });
  //   //   })
  //   //   .then(function(index) {
  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 3000,
  //   //       loading: false,
  //   //       content: "none",
  //   //       cssClass: ["none"]
  //   //     });
  //   //   })
  //   //   .then(function(index) {
  //   //     var message;
  //   //     message =
  //   //       "Chat Room Admin: <br>Glad to see the multiple choice feature is working. Ok so now juror 2, please press 'raise hand' from the\
  //   //       options below";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 10000,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["admin"]
  //   //     });
  //   //   })
  //   //   .then(function(index) {
  //   //     var message;
  //   //     message = "Juror 2: <br> Raise hand";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 4000,
  //   //       loading: false,
  //   //       content: message,
  //   //       cssClass: ["juror2"]
  //   //     });
  //   // })
  //   // .then(function(index) {
  //   //   return botui.message.add({
  //   //     type: "html",
  //   //     delay: 6000,
  //   //     loading: false,
  //   //     content: "none",
  //   //     cssClass: ["none"]
  //   //   });
  //   // })
  .then(function(index) {
    var message;
    message =
      "Chat Room Admin: <br>Alright, now juror 3, please type in 'here' into the chatbar that should pop up below";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 17000,
      loading: true,
      content: message,
      cssClass: ["admin"]
    });
  })
  .then(function(index) {
    return botui.action.text({
      action: [
        {
          placeholder: "Enter your text here",
          value: "input"
        }
      ]
    });
  })
  .then(function(res) {
    // will be called when it is submitted.
    console.log(res.value); // will print whatever was typed in the field.
    participantResponse.push(res.value);
    console.log(participantResponse);
    if (!res.value.toLowerCase().includes("here")) {
      var message;
      message = 'Chat Room Admin: <br>That wasn\'t "here" but lets continue';
      messageList.push(message);

      return botui.message.add({
        type: "html",
        delay: 9000,
        loading: true,
        content: message,
        cssClass: ["admin"]
      });
    } else {
      var message;
      message =
        "Chat Room Admin: <br>Ok everyting seems to be in working order.";
      messageList.push(message);

      return botui.message.add({
        type: "html",
        delay: 15000,
        loading: true,
        content: message,
        cssClass: ["admin"]
      });
    }
  })
  //   .then(function(index) {
  //     var message;
  //     message =
  //       "Chat Room Admin: <br>Now I am going to ask each of you some questions\
  //        before the judge joins us.";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 10000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["admin"]
  //     });
  //   })
  //   //   .then(function(index) {
  //   //     var message;
  //   //     message =
  //   //       "Chat Room Admin: <br> Okay, lets start with Juror 3.\
  //   //       Juror 3, what is the purpose of your participation today? <br>\
  //   //       A) Participate on a jury <br>\
  //   //       B) Help pick a Judge  <br>\
  //   //       C) Test a new type of online voir dire <br>\
  //   //       D) Persuade a Judge";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 50000,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["admin"]
  //   //     });
  //   //   })
  .then(function() {
    return botui.action.button({
      action: [
        {
          text: "A",
          value: "a"
        },
        {
          text: "B",
          value: "b"
        },
        {
          text: "C",
          value: "c"
        },
        {
          text: "D",
          value: "d"
        }
      ]
    });
  })
  .then(function(res) {
    // will be called when it is submitted.
    console.log(res.value); // will print whatever was typed in the field.
    participantResponse.push(res.value);
  })
  //   //   .then(function(index) {
  //   //     var message;
  //   //     message =
  //   //       "Chat Room Admin: <br> Ok, Juror 2, how many Judges will you interact with today?\
  //   //       <br>\
  //   //       A) None <br>\
  //   //       B) One  <br>\
  //   //       C) Two <br>\
  //   //       D) Three";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 40000,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["admin"]
  //   //     });
  //   //   })
  //   //   .then(function(index) {
  //   //     var message;
  //   //     message = "Juror 2: <br> B";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 4000,
  //   //       loading: false,
  //   //       content: message,
  //   //       cssClass: ["juror2"]
  //   //     });
  //   //   })

  //   //   .then(function(index) {
  //   //     var message;
  //   //     message =
  //   //       "Chat Room Admin: <br> Juror 1, who benefits from this kind of study?\
  //   //       <br>\
  //   //       A) Judges <br>\
  //   //       B) Lawyers <br>\
  //   //       C) Jurors <br>\
  //   //       D) All of the above";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 35000,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["admin"]
  //   //     });
  //   //   })
  //   //   .then(function(index) {
  //   //     var message;
  //   //     message = "Juror 1: <br> D";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 2000,
  //   //       loading: false,
  //   //       content: message,
  //   //       cssClass: ["juror1"]
  //   //     });
  //   //   })
  //   .then(function(index) {
  //     var message;
  //     message =
  //       "Chat Room Admin: <br> Great. It seems like all of you understand what we are going to do today.";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 11000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["admin"]
  //     });
  //   })

  //   .then(function(index) {
  //     var message;
  //     message =
  //       "Chat Room Admin: <br> At this point, I would like to introduce Judge George Raymond Sturgill.";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["admin"]
  //     });
  //   })
  //   .then(function(index) {
  //     var message;
  //     message = "none";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: false,
  //       content: message,
  //       cssClass: ["none"]
  //     });
  //   })
  //   .then(function(index) {
  //     var message;
  //     message =
  //       "Judge: <br> Thank you, admin. And thank you everyone for joining us. Your help is vital to making this all work.";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["judge"]
  //     });
  //   })
  //   .then(function(index) {
  //     var message;
  //     message =
  //       "Judge: <br> Let’s begin by discussing how this will work today.\
  //       I am going to go around and ask you all a series of questions.\
  //       You will then respond when I call on you to answer.\
  //       This will help ensure that everyone doesn’t answer all at the same time. ";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["judge"]
  //     });
  //   })
  //   .then(function(index) {
  //     var message;
  //     message = "Judge: <br> Ok.  So, let’s get started.";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["judge"]
  //     });
  //   })
  //   .then(function(index) {
  //     var message;
  //     message =
  //       "Judge: <br>  Juror 1, thank you for being here today.  Have you ever been on a jury before?";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["judge"]
  //     });
  //   })
  //   .then(function(index) {
  //     var message;
  //     message = "Juror 1: <br> No";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 2000,
  //       loading: false,
  //       content: message,
  //       cssClass: ["juror1"]
  //     });
  //   })
  //   .then(function(index) {
  //     return botui.message.add({
  //       type: "html",
  //       delay: 2000,
  //       loading: false,
  //       content: "none",
  //       cssClass: ["none"]
  //     });
  //   })
  //   .then(function(index) {
  //     var message;
  //     message =
  //       "Judge: <br>  Are you a lawyer or is anyone else in your life a lawyer? ";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["judge"]
  //     });
  //   })
  //   .then(function(index) {
  //     return botui.message.add({
  //       type: "html",
  //       delay: 4000,
  //       loading: false,
  //       content: "none",
  //       cssClass: ["none"]
  //     });
  //   })
  //   .then(function(index) {
  //     var message;
  //     message = "Juror 1: <br> Yes, my mother is a lawyer.";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["juror1"]
  //     });
  //   })
  //   .then(function(index) {
  //     return botui.message.add({
  //       type: "html",
  //       delay: 1000,
  //       loading: false,
  //       content: "none",
  //       cssClass: ["none"]
  //     });
  //   })
  //   .then(function(index) {
  //     var message;
  //     message = "Judge: <br>  What type of law does she practice? ";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["judge"]
  //     });
  //   })
  //   .then(function(index) {
  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: false,
  //       content: "none",
  //       cssClass: ["none"]
  //     });
  //   })
  //   .then(function(index) {
  //     var message;
  //     message = "Juror 1: <br>  Labor and employment law.";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 4000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["juror1"]
  //     });
  //   })

  .then(function(index) {
    var message;
    message =
      "Judge: <br> Understood.  Now, before we get too much further, let me tell you a little bit about this case.\
       Just to make sure this is still working for everyone. Can everyone raise their hand showing they are ready? ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 3000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(function() {
    return botui.action.button({
      action: [
        {
          icon: "hand-paper-o",
          text: "Raise hand",
          value: "hand"
        }
      ]
    });
  })
  //   .then(function(index) {
  //     var message;
  //     message = "Juror 1: <br> Raise hand";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 6000,
  //       loading: false,
  //       content: message,
  //       cssClass: ["juror1"]
  //     });
  //   })
  //   .then(function(index) {
  //     var message;
  //     message = "Juror 2: <br> Raise hand";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 1000,
  //       loading: false,
  //       content: message,
  //       cssClass: ["juror2"]
  //     });
  //   })

  //   .then(function(index) {
  //     var message;
  //     message = "none";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: false,
  //       content: message,
  //       cssClass: ["none"]
  //     });
  //   })

  //   .then(function(index) {
  //     var message;
  //     message =
  //       "Judge: <br> OK. For this case, you need to know that the defendant, John Dennis, is accused of murder.\
  //       He works as a supervisor for Capitol Building Inc., a large construction company.";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["judge"]
  //     });
  //   })

  //   .then(function(index) {
  //     var message;
  //     message =
  //       "Judge: <br> As a supervisor, Mr. Dennis' job is to oversee the progress of construction projects\
  //       and to coordinate the different work teams involved.  ";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["judge"]
  //     });
  //   })

  //   .then(function(index) {
  //     var message;
  //     message =
  //       "Judge: <br> At the end of every day, the company's bookkeeper\
  //        places all of the company's cash in a safe. The safe is located\
  //        in the back of the bookkeeper's office. The safe has a timing mechanism\
  //        that records the time and date every time it is opened and closed.";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["judge"]
  //     });
  //   })

  //   .then(function(index) {
  //     var message;
  //     message =
  //       "Judge: <br> The safe is also used for safeguarding other kinds\
  //       of sensitive information, including pending bids and project reports.\
  //       In addition to the bookkeeper and her assistant, the safe is accessed by\
  //       the supervisors, senior salespeople, and executives. In total, about 28 people,\
  //       including John Dennis, have access to the safe. ";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["judge"]
  //     });
  //   })

  //   .then(function(index) {
  //     var message;
  //     message =
  //       "Judge: <br>One morning, the company's bookkeeper discovered the building's security guard, Benjamin Miller, dead";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["judge"]
  //     });
  //   })

  //   .then(function(index) {
  //     var message;
  //     message =
  //       "Judge: <br>The timing mechanism showed that the safe was last opened the previous night at 7:21 PM.\
  //       The cause of death was a massive brain hemorrhage brought upon by the blows to the head.  ";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["judge"]
  //     });
  //   })

  //   .then(function(index) {
  //     var message;
  //     message =
  //       "Judge: <br>The suspect also removed the cash from the safe totaling $5,200.\
  //       No biological evidence or fingerprints were recovered from the crime scene. ";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["judge"]
  //     });
  //   })

  //   .then(function(index) {
  //     var message;
  //     message =
  //       "Judge: <br>Juror #1, have you heard or read anything about this case before coming\
  //       here today that you think would affect your decision? ";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["judge"]
  //     });
  //   })

  //   .then(function(index) {
  //     var message;
  //     message =
  //       "Juror 1:<br> No, I did not read anything about the case today that would affect my ability to be a juror. ";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["juror1"]
  //     });
  //   })

  //   .then(function(index) {
  //     var message;
  //     message =
  //       "Judge: <br>Juror #1, is there anything else that you want to tell me? ";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["judge"]
  //     });
  //   })

  //   .then(function(index) {
  //     var message;
  //     message = "Juror 1:<br> No.";
  //     messageList.push(message);

  //     return botui.message.add({
  //       type: "html",
  //       delay: 3000,
  //       loading: true,
  //       content: message,
  //       cssClass: ["juror1"]
  //     });
  //   })

  .then(function(index) {
    var message;
    message =
      "Judge: <br> Jurors #2 and #3, I am going to ask you both pretty much the same questions.\
      Are you a lawyer or is anyone else in your life a lawyer? I am going to ask you raise your hands.\
      You will see the option pop up below. ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 3000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(function(index) {
    var message;
    message = "none";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 2000,
      loading: false,
      content: message,
      cssClass: ["none"]
    });
  })
  .then(function(index) {
    var message;
    message = "Juror 2: <br> Raise hand";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 500,
      loading: false,
      content: message,
      cssClass: ["juror2"]
    });
  })

  .then(function() {
    return botui.action.button({
      action: [
        {
          icon: "hand-paper-o",
          text: "Raise hand",
          value: "handRaisedTrue"
        },
        {
          text: "Don't raise hand",
          value: "handRaisedFalse"
        }
      ]
    });
  })
  .then(function(res) {
    console.log(res.value);
    participantResponse.push(res.value);
    console.log(participantResponse);
    var message;
    if (res.value === "handRaisedTrue") {
      message =
        "Judge: <br> Ok, two hands. Juror 2, since you raised your hand first, this question is for you:";
    } else if (res.value === "handRaisedFalse") {
      message =
        "Judge: <br> Ok, so one hand. Juror 2, this question is for you:";
    }

    return botui.message.add({
      type: "html",
      delay: 3000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })

  //   //   .then(function(index) {
  //   //     var message;
  //   //     message = "Judge:<br> Who in your life is a lawyer?";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 3000,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["judge"]
  //   //     });
  //   //   })
  //   //   .then(function(index) {
  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 1000,
  //   //       loading: false,
  //   //       content: "none",
  //   //       cssClass: ["none"]
  //   //     });
  //   //   })
  //   //   .then(function(index) {
  //   //     var message;
  //   //     message =
  //   //       "Juror 2:<br> my dad is a police officer, which is related to lawyer";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 3000,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["juror2"]
  //   //     });
  //   //   })
  //   //   .then(function(index) {
  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 3000,
  //   //       loading: false,
  //   //       content: "none",
  //   //       cssClass: ["none"]
  //   //     });
  //   //   })
  //   //   .then(function(index) {
  //   //     var message;
  //   //     message = "Judge:<br> Can you tell me more about that?";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 3000,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["judge"]
  //   //     });
  //   //   })
  //   //   .then(function(index) {
  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 2000,
  //   //       loading: false,
  //   //       content: "none",
  //   //       cssClass: ["none"]
  //   //     });
  //   //   })

  //   //   .then(function(index) {
  //   //     var message;
  //   //     message =
  //   //       "Juror 2:<br> Yeah.  He has been on the force for like twenty or thirty years.\
  //   //       He is a detective now but he doesn’t work homicide. ";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 3000,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["juror2"]
  //   //     });
  //   //   })
  //   //   .then(function(index) {
  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 1000,
  //   //       loading: false,
  //   //       content: "none",
  //   //       cssClass: ["none"]
  //   //     });
  //   //   })
  //   //   .then(function(index) {
  //   //     var message;
  //   //     message = "Judge:<br> So, he likely wouldn’t have been on this case? ";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 3000,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["judge"]
  //   //     });
  //   //   })
  //   //   .then(function(index) {
  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 1000,
  //   //       loading: false,
  //   //       content: "none",
  //   //       cssClass: ["none"]
  //   //     });
  //   //   })

  //   //   .then(function(index) {
  //   //     var message;
  //   //     message = "Juror 2:<br> Yup.  He works other types of crimes, SVU stuff.";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 3000,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["juror2"]
  //   //     });
  //   //   })
  //   //   .then(function(index) {
  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 3000,
  //   //       loading: false,
  //   //       content: "none",
  //   //       cssClass: ["none"]
  //   //     });
  //   //   })

  //   //   .then(function(index) {
  //   //     var message;
  //   //     message =
  //   //       "Judge:<br>  OK.  So, back to you Juror 1, have you heard anything\
  //   //       about this case before coming here today that you think would affect your decision? ";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 3000,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["judge"]
  //   //     });
  //   //   })
  //   //   .then(function(index) {
  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 3000,
  //   //       loading: false,
  //   //       content: "none",
  //   //       cssClass: ["none"]
  //   //     });
  //   //   })
  //   //   .then(function(index) {
  //   //     var message;
  //   //     message =
  //   //       "Juror 1:<br>  Yes. When I was waiting to join the chat today, I read an article about the defendant. ";
  //   //     messageList.push(message);

  //   //     return botui.message.add({
  //   //       type: "html",
  //   //       delay: 3000,
  //   //       loading: true,
  //   //       content: message,
  //   //       cssClass: ["juror1"]
  //   //     });
  //   //   })
  //   //======================Judicial manipulation=======================

  .then(function(res) {
    if (condition === 0) {
      var message;
      message = "Judge:<br>  OK.";
      messageList.push(message);

      return botui.message.add({
        type: "html",
        delay: 3000,
        loading: true,
        content: message,
        cssClass: ["judge"]
      });
    } else if (condition === 1) {
      var message;
      message =
        "Judge: <br> Thank you for being so honest. This information is really helpful.\
        Not every juror is the right fit for every case.  The more I know about what you have\
        already heard about the defendant, the better able I will be to determine whether it might\
        impact your ability to be a fair and impartial juror in this case.\
        Do you have anything else to say about what you read? ";
      messageList.push(message);

      return botui.message
        .add({
          type: "html",
          delay: 6000,
          loading: true,
          content: message,
          cssClass: ["judge"]
        })
        .then(function(res) {
          var message;
          message =
            "Juror 1: <br> Yeah. I did read the story online and now I just have concerns about my ability to not\
          have that affect my decision. I am worried that it will just keep popping into my head.";
          messageList.push(message);

          return botui.message.add({
            type: "html",
            delay: 6000,
            loading: true,
            content: message,
            cssClass: ["juror1"]
          });
        })
        .then(function(res) {
          var message;
          message =
            "Judge: <br> Ok.  Thank you. That additional information is really helpful and the kind of thing we want to hear. ";
          messageList.push(message);

          return botui.message.add({
            type: "html",
            delay: 6000,
            loading: true,
            content: message,
            cssClass: ["judge"]
          });
        });
    } else {
      var message;
      message =
        "Judge: <br> I am not sure if that is relevant. As a juror, you must\
        ignore any news or media about this case or the people involved.\
        The case must be decided based only on the evidence and on my instructions as to the law that applies\
        in this case. Do you have anything else to say about what you read?";
      messageList.push(message);

      return botui.message
        .add({
          type: "html",
          delay: 9000,
          loading: true,
          content: message,
          cssClass: ["judge"]
        })
        .then(function(res) {
          var message;
          message = "Juror 1: <br> No, then I have nothing else to add.";
          messageList.push(message);

          return botui.message.add({
            type: "html",
            delay: 6000,
            loading: true,
            content: message,
            cssClass: ["juror1"]
          });
        });
    }
  })

  //========== end priming==================
  .then(function() {
    return botui.message.add({
      type: "html",
      delay: 3000,
      loading: false,
      content: "none",
      cssClass: ["none"]
    });
  })
  .then(function(index) {
    var message;
    message = "Judge: <br> Juror 2, have you ever been on a jury before?";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 3000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })

  .then(function(index) {
    var message;
    message = "Juror 2: <br>  Yes";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 3000,
      loading: false,
      content: message,
      cssClass: ["juror2"]
    });
  })

  .then(function(index) {
    var message;
    message = "Judge:<br>What type of case was it: civil or criminal? ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 3000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })

  .then(function(index) {
    var message;
    message = "Juror 2:<br> It was an automobile accident case. ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 3000,
      loading: true,
      content: message,
      cssClass: ["juror2"]
    });
  })
  .then(function(index) {
    var message;
    message = "Judge:<br>A civil case.  Did you reach a verdict in that case?";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 3000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })

  .then(function(index) {
    var message;
    message = "Juror 2:<br> Yes.";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 3000,
      loading: false,
      content: message,
      cssClass: ["juror2"]
    });
  })
  .then(function(index) {
    var message;
    message = "Judge:<br>Ok";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 1000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })

  .then(function(index) {
    var message;
    message =
      "Judge: <br>   Juror 3, how about you?  Have you ever been on a jury before and, if so, what type of case was it? ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 3000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(function(index) {
    return botui.action.text({
      action: [
        {
          placeholder: "Enter your text here",
          value: "input"
        }
      ]
    });
  })
  .then(function(res) {
    // will be called when it is submitted.
    console.log(res.value); // will print whatever was typed in the field.
    participantResponse.push(res.value);
    console.log(participantResponse);
  })
  .then(function(index) {
    var message;
    message = "Judge:<br>Ok, understood";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 3000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })

  .then(function(index) {
    var message;
    message =
      "Judge: <br>  As you may be expecting at this point, the next question I’m going to ask you\
      is whether you heard or read anything about this case before coming here today.";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 3000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })

  //=== priming======
  .then(function(index) {
    if (condition == 2) {
      //minimizing
      var message;
      message =
        "Judge:<br>I want to remind you in advance that I’m only interested in hearing\
        information that is relevant. As a juror you must ignore any news or media about this case\
        or the people involved in this case. Fair trials cannot be conducted if people do not follow\
        this instruction.  I only care about things that will make it hard for you to be fair and impartial.";
      messageList.push(message);

      return botui.message.add({
        type: "html",
        delay: 6000,
        loading: true,
        content: message,
        cssClass: ["judge"]
      });
    } else if (condition == 1) {
      //maximizing
      var message;
      message =
        "Judge: <br> I want to thank you in advance for your honesty, and remind you that there\
           are no wrong answers here today.  I want you to feel comfortable telling us any information\
           you have that might be relevant. Fair trials cannot be conducted without helpful people like you.\
          I just need to hear if there is anything that you think will make it hard for you to be\
          a fair and impartial juror in this case.";
      messageList.push(message);

      return botui.message.add({
        type: "html",
        delay: 6000,
        loading: true,
        content: message,
        cssClass: ["judge"]
      });
    }
  })
  // ===============end priming
  .then(function() {
    return botui.message.add({
      type: "html",
      delay: 8000,
      loading: false,
      content: "none",
      cssClass: ["none"]
    });
  })
  //==================== counter balance =======================
  .then(function() {
    console.log("The counterBalance is: ", counterBalance);
    console.log(counterBalance);
    if (counterBalance == 0) {
      console.log("counter balance 1");
      var message;
      message =
        "Judge: <br>  Juror #3, have you heard anything about this case before being here today?";
      messageList.push(message);

      return botui.message
        .add({
          type: "html",
          delay: 6000,
          loading: true,
          content: message,
          cssClass: ["judge"]
        })
        .then(function(index) {
          return botui.action.text({
            action: [
              {
                placeholder: "Enter your text here",
                value: "input"
              }
            ]
          });
        })
        .then(function(res) {
          console.log(res.value);
          participantResponse.push(res.value);
          console.log(participantResponse);
        })
        .then(function(index) {
          var message;
          message =
            "Judge: <br>Is there anything that you think would make you biased and unable to be an impartial juror for this case? ";
          messageList.push(message);

          return botui.message.add({
            type: "html",
            delay: 3000,
            loading: true,
            content: message,
            cssClass: ["judge"]
          });
        })
        .then(function(index) {
          return botui.action.text({
            action: [
              {
                placeholder: "Enter your text here",
                value: "input"
              }
            ]
          });
        })
        .then(function(res) {
          console.log(res.value);
          participantResponse.push(res.value);
          console.log(participantResponse);
        });
    } else {
      console.log("counter balance 2");
      var message;
      message =
        "Judge: <br>Is there anything that you think would make you biased and unable to be an impartial juror for this case? ";
      messageList.push(message);

      return botui.message
        .add({
          type: "html",
          delay: 3000,
          loading: true,
          content: message,
          cssClass: ["judge"]
        })
        .then(function() {
          return botui.action.text({
            action: [
              {
                placeholder: "Enter your text here",
                value: "input"
              }
            ]
          });
        })
        .then(function(res) {
          console.log(res.value);
          participantResponse.push(res.value);
          console.log(participantResponse);
        })
        .then(function() {
          var message;
          message =
            "Judge: <br>  Juror #3, have you heard anything about this case before being here today?";
          messageList.push(message);

          return botui.message
            .add({
              type: "html",
              delay: 6000,
              loading: true,
              content: message,
              cssClass: ["judge"]
            })
            .then(function(index) {
              return botui.action.text({
                action: [
                  {
                    placeholder: "Enter your text here",
                    value: "input"
                  }
                ]
              });
            });
        })
        .then(function(res) {
          console.log(res.value);
          participantResponse.push(res.value);
          console.log(participantResponse);
        });
    }
  })
  .then(function(index) {
    var message;
    message =
      "Judge: <br> OK.  Thank you.  The attorneys for the parties to this case and I will now take a few minutes\
      to talk about your responses and compare them with the jurors we spoke to in the other voir dire groups.\
      We will then select the jurors for this case.  While we meet, the automsted system is going to ask you few questions\
      about your opinions about the case.  Your responses are confidential and will not be used outside\
      this context.";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 3000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(function(index) {
    var message;
    message = "Judge: <br> Thank you again for your time";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 3000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(function() {
    const icon = document.getElementById("connected-icon");
    const text = document.getElementById("connected-text");
    icon.style.display = "none";
    text.style.display = "none";
  })
  .then(function(res) {
    var message;
    message = "This chat has been disconnected";
    messageList.push(message);
    return botui.message.add({
      type: "html",
      delay: 4000,
      loading: false,
      content: message,
      cssClass: ["machine"]
    });
  })
  .then(function(res) {
    var message;
    message = "Loading...";
    messageList.push(message);
    return botui.message.add({
      type: "html",
      delay: 4000,
      loading: false,
      content: message,
      cssClass: ["machine"]
    });
  })
  .then(function(res) {
    var message;
    message = "Loaded";
    messageList.push(message);
    return botui.message.add({
      type: "html",
      delay: 4000,
      loading: false,
      content: message,
      cssClass: ["machine"]
    });
  })

  //
  //
  //
  //
  //
  //
  //
  // REMOVE ALL PRIOR MESSAGES
  .then(botui.message.removeAll)
  // START NEW CHAT THREAD:
  //
  //
  //
  //
  //
  //
  .then(function(res) {
    var message;
    message = "Automated System:<br>Question 1: ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 5,
      // photo: true, SEE https://github.com/botui/botui/issues/81
      loading: false,
      content: message,
      cssClass: ["automated"]
    });
  })
  .then(function() {
    return botui.action.button({
      action: [
        {
          text: "A",
          value: "a"
        },
        {
          text: "B",
          value: "b"
        },
        {
          text: "C",
          value: "c"
        },
        {
          text: "D",
          value: "d"
        }
      ]
    });
  })
  .then(function(res) {
    // will be called when it is submitted.
    console.log(res.value); // will print whatever was typed in the field.
    participantResponse.push(res.value);
  })
  .then(function(res) {
    var message;
    message = "Automated System:<br>Question 2: ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 5,
      // photo: true, SEE https://github.com/botui/botui/issues/81
      loading: false,
      content: message,
      cssClass: ["automated"]
    });
  })
  .then(function() {
    return botui.action.button({
      action: [
        {
          text: "A",
          value: "a"
        },
        {
          text: "B",
          value: "b"
        },
        {
          text: "C",
          value: "c"
        },
        {
          text: "D",
          value: "d"
        }
      ]
    });
  })
  .then(function(res) {
    console.log(res.value);
    participantResponse.push(res.value);
  })
  .then(function(res) {
    console.log(participantResponse);
    console.log(messageList);
  })
  .then(function() {
    let q1 = participantResponse[6];
    let q2 = participantResponse[7];
    let surveyData = {
      q1: q1,
      q2: q2,
      participantID: participantID
    };
    console.log(surveyData);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "/saveSurveyData");
    // important to set this for body-parser
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // setup callback function
    xmlhttp.send(JSON.stringify(surveyData));
  })
  //ADD BANNER THAT NOTIFIES PARTICIPANT THAT THEY HAVE NOT BEEN SELECTED FOR STUDY.
  .then(function(res) {
    var message;
    message =
      "Automated System:<br>END OF CHAT. THANK YOU FOR YOUR TIME.\
    YOU WILL BE REDIRECTED TO THE RESULTS PAGE SHORTLY.";
    messageList.push(message);
    done = true;

    return botui.message.add({
      type: "html",
      delay: 5,
      // photo: true, SEE https://github.com/botui/botui/issues/81
      loading: false,
      content: message,
      cssClass: ["automated"]
    });
  })
  .then(function() {
    let heard_case;
    let biased;
    if (counterBalance == 0) {
      console.log("counterbalance 0");
      heard_case = participantResponse[4];
      biased = participantResponse[5];
    } else {
      console.log("counterBalance 1");
      heard_case = participantResponse[5];
      biased = participantResponse[4];
    }
    let here = participantResponse[0];
    let attention = participantResponse[1];
    let juryHand = participantResponse[2];
    let jury = participantResponse[3];

    switch (condition) {
      case 0:
        condition = "neutral";
        break;
      case 1:
        condition = "max";
        break;
      default:
        condition = "min";
    }
    let data = {
      counterBalance: counterBalance,
      condition: condition,
      here: here,
      attention: attention,
      juryHand: juryHand,
      jury: jury,
      heard_case: heard_case,
      biased: biased,
      participantID: participantID
    };
    console.log(data);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "/saveData");
    // important to set this for body-parser
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // setup callback function
    xmlhttp.send(JSON.stringify(data));
  })
  //add delay here, not using pauses
  .then(function() {
    location.href = "/resultsPage";
  });
window.onbeforeunload = function(event) {
  if (done == false) {
    return confirm(" ");
  }
};
