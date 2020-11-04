"use strict";

//end study if user has not moved the mouse, clicked on the page, or pressed any key for two minutes
let done = false;
function redirectToEnd() {
  done == true;
  window.location.href = "/resultsPage";
}

console.log(sessionStorage.participantID);
const participantID = JSON.parse(sessionStorage.participantID);
var botui = new BotUI("help-bot");
var messageList = [];
var participantResponse = [];
var onBoard = 0;

let delay;
//utilities
function pauseMil() {
  return botui.message.add({
    type: "html",
    delay: 100,
    loading: false,
    content: "none",
    cssClass: ["none"]
  });
}
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

  .then(function() {
    return botui.action.button({
      action: [
        {
          icon: "check",
          text: "Continue",
          value: "do"
        }
        // {
        //   text: "What do you do?",
        //   value: "do",
        // },
      ]
    });
  })

  .then(function(res) {
    var message;
    message =
      "Automated System:<br>Thank you. Please wait patiently for the other participants to join.";
    messageList.push(message);
    return botui.message.add({
      type: "html",
      delay: 5,
      loading: false,
      content: message,
      cssClass: ["automated"]
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
    message = " Joining chatroom 456-32";
    messageList.push(message);
    return botui.message.add({
      type: "html",
      delay: 5,
      loading: true,
      content: message,
      cssClass: ["machine"]
    });
  })
  .then(function() {
    const icon = document.getElementById("connected-icon");
    const text = document.getElementById("connected-text");
    icon.style.display = "block";
    text.style.display = "block";
  })
  .then(function(res) {
    var message;
    message = "Loaded";
    messageList.push(message);
    return botui.message.add({
      type: "html",
      delay: 2000,
      loading: true,
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
    message = " Waiting for jurors to enter chatroom...";
    messageList.push(message);
    return botui.message.add({
      type: "html",
      delay: 5,
      loading: true,
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
      delay: 9000,
      loading: true,
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
  //ADD CHATROOM NAME AT THE TOP HERE USING CREATE NEW DIV, STYLE DIV
  .then(function(index) {
    var message;
    message = "Juror 1 has joined the chat";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 0,
      loading: false,
      content: message,
      cssClass: ["machine"]
    });
  })
  .then(function(index) {
    var message;
    message = "Juror 2 has joined the chat";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 0,
      loading: false,
      content: message,
      cssClass: ["machine"]
    });
  })
.then(function(index) {
    var message;
    message = "Juror 3 has joined the chat";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 0,
      loading: false,
      content: message,
      cssClass: ["machine"]
    });
  })
  .then(function(index) {
    var message;
    message = "none";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 5000,
      loading: false,
      content: message,
      cssClass: ["none"]
    });
  })

  .then(function(index) {
    var message;
    message =
      "Chat Room Admin: <br> Welcome to the online jury selection.\
      thanks for joining us today. I am the chat room admin and will\
     provide you with an overview of the study. The Judge will join shortly.";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 20000,
      loading: true,
      content: message,
      cssClass: ["admin"]
    });
  })
  .then(pause0)
  .then(pause1)
  .then(function(index) {
    var message;
    message =
      "Chat Room Admin: <br> I am going to be pasting some instructions and background info into the chat, so bear with me.";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 20000,
      loading: true,
      content: message,
      cssClass: ["admin"]
    });
  })
  .then(pause1)
  .then(pause1)
  .then(pause1)
  .then(function(index) {
    var message;
    message =
      "Chat Room Admin: <br> As you read in the instructions, this study will be focused on voir dire which is the process of jury selection\
      in the legal world.  You will be answering questions that will help the judge decide whether you\
      are able to consider the case fairly";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 1500,
      loading: true,
      content: message,
      cssClass: ["admin"]
    });
  }) 
  .then(pause3)
  .then(pause1)
  .then(pause1)

  .then(function(index) {
    var message;
    message =
      "Chat Room Admin: <br> Please participate honestly and with your full attention.\
     This case will soon be a real legal case so it is crucial that you treat it like one";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 1500,
      loading: true,
      content: message,
      cssClass: ["admin"]
    });
  })
  .then(pause3)
  .then(pause0)

  .then(function(index) {
    var message;
    message =
      "Chat Room Admin: <br>  And if you are selected for the jury today you will\
        be asked to take part in a follow up chatroom after this one with deliberation and more case presentation. ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 1200,
      loading: true,
      content: message,
      cssClass: ["admin"]
    });
  })
  .then(pause3)
  .then(pause1)
  .then(pause1)
  .then(pause0)

  .then(function(index) {
    var message;
    message =
      "Chat Room Admin: <br> Your answers will be kept confidential . We will be referring to all \
       participants by the juror #, which can be found in the left-hand side bar under the instructions.";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 2300,
      loading: true,
      content: message,
      cssClass: ["admin"]
    });
  })
  .then(pause3)
  .then(function(index) {
    var message;
    message =
      "Chat Room Admin: <br> So everyone doesn't chat at once the Judge and I will unblock\
       your chatbar when it is your turn. Let's try a practice round.";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 2300,
      loading: true,
      content: message,
      cssClass: ["admin"]
    });
  })
  .then(pause0)
  .then(pause1)
  .then(pause2)
  .then(function(index) {
    var message;
    message =
      "Chat Room Admin: <br> Juror 1 can you press 'A' from the menu below?";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 3000,
      loading: true,
      content: message,
      cssClass: ["admin"]
    });
  })
  .then(pause1)
  .then(function(index) {
    var message;
    message = "Juror 1: <br> A ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 6000,
      loading: false,
      content: message,
      cssClass: ["juror1"]
    });
  })
  .then(function(index) {
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
    message =
      "Chat Room Admin: <br>Great the multiple choice feature is working. Juror 2 please press 'raise hand' from the\
        options below";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 7500,
      loading: true,
      content: message,
      cssClass: ["admin"]
    });
  })
  .then(pause1)
  .then(pause0)
  .then(function(index) {
    var message;
    message = "Juror 2: <br> Raise hand";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 4000,
      loading: false,
      content: message,
      cssClass: ["juror2"]
    });
  })
  .then(function(index) {
    return botui.message.add({
      type: "html",
      delay: 6000,
      loading: false,
      content: "none",
      cssClass: ["none"]
    });
  })
  .then(function(index) {
    var message;
    message =
      "Chat Room Admin: <br>Alright now juror 3 please type in 'here' into the chatbar that should pop up below";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 10000,
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
        delay: 8000,
        loading: true,
        content: message,
        cssClass: ["admin"]
      });
    }
  })
  .then(pause1)
  .then(pause1)
  .then(pause0)
  .then(function(index) {
    var message;
    message =
      "Chat Room Admin: <br>Now I am going to ask each of you some questions\
       before the judge joins us.";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 7600,
      loading: true,
      content: message,
      cssClass: ["admin"]
    });
  })
  .then(pause1)
  .then(pause0)
  .then(function(index) {
    var message;
    message =
      "Chat Room Admin: <br> Okay, lets start with Juror 3.\
        Juror 3, what is the purpose of your participation today? <br>\
        A) Ask lawyers questions <br>\
        B) Help pick a Judge  <br>\
        C) Test a new type of online voir dire <br>\
        D) Persuade a Judge";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 3400,
      loading: true,
      content: message,
      cssClass: ["admin"]
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
  .then(pause1)
  .then(pause1)
  .then(function(index) {
    var message;
    message =
      "Chat Room Admin: <br> Ok, Juror 2, how many Judges will you interact with today?\
        <br>\
        A) None <br>\
        B) One  <br>\
        C) Two <br>\
        D) Three";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 3300,
      loading: true,
      content: message,
      cssClass: ["admin"]
    });
  })
  .then(function(index) {
    var message;
    message = "Juror 2: <br> B";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 20000,
      loading: false,
      content: message,
      cssClass: ["juror2"]
    });
  })
  .then(pause1)
  .then(pause1)
  .then(pause0)
  .then(function(index) {
    var message;
    message =
      "Chat Room Admin: <br> Juror 1, who benefits from this kind of study?\
        <br>\
        A) Judges <br>\
        B) Lawyers <br>\
        C) Jurors <br>\
        D) All of the above";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 5000,
      loading: true,
      content: message,
      cssClass: ["admin"]
    });
  })
  .then(function(index) {
    var message;
    message = "Juror 1: <br> D";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 15000,
      loading: false,
      content: message,
      cssClass: ["juror1"]
    });
  })
  .then(pause1)
  .then(pause1)
  .then(pause0)
  .then(function(index) {
    var message;
    message =
      "Chat Room Admin: <br> Great. It seems like all of you understand what we are going to do today.";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 9000,
      loading: true,
      content: message,
      cssClass: ["admin"]
    });
  })
  .then(pause0)
  .then(function(index) {
    var message;
    message =
      "Chat Room Admin: <br> At this point, I would like to introduce Judge George Raymond Sturgill.";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 7000,
      loading: true,
      content: message,
      cssClass: ["admin"]
    });
  })
  .then(function(index) {
    var message;
    message = "none";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 3000,
      loading: false,
      content: message,
      cssClass: ["none"]
    });
  })
  .then(function(index) {
    var message;
    message =
      "Judge: <br> Thank you, admin. And thank you evreyone for joining us. Your help is vital to making this all work.";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 14000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(pause1)
  .then(pause0)
  .then(pauseMil)
  .then(function(index) {
    var message;
    message =
      "Judge: <br> Lets begin by discusing how this will work today.\
      I am going ask you all a series of questions.\
      You will respond when I call on you to answer.\
      This will help ensure that everyone doesn’t answer all at the same time. ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 26000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(pause1)
  .then(pause0)
  .then(function(index) {
    var message;
    message = "Judge: <br> Ok   let’s get started.";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 5000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(pause0)
  .then(function(index) {
    var message;
    message =
      "Judge: <br>  Juror 1, thank you for being here today.  Have you ever been on a jury before?";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 9100,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(pause1)
  .then(pause0)
  .then(pause1)
  .then(function(index) {
    var message;
    message = "Juror 1: <br> No";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 9000,
      loading: false,
      content: message,
      cssClass: ["juror1"]
    });
  })
  .then(pause1)
  .then(pause1)
  .then(pause0)
  .then(pauseMil)
  .then(function(index) {
    var message;
    message =
      "Judge: <br>  Are you a lawyer or is anyone else in your life alawyer? ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 8900,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(pause2)
  .then(pauseMil)
  .then(function(index) {
    var message;
    message = "Juror 1: <br> Yes my mom is a lawyer.";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 13400,
      loading: true,
      content: message,
      cssClass: ["juror1"]
    });
  })
  .then(pause1)
  .then(pause1)
  .then(pause0)
  .then(pauseMil)
  .then(pauseMil)
  .then(function(index) {
    var message;
    message = "Judge: <br>  What type of law does she practice? ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 8900,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(pause2)
  .then(pauseMil)
  .then(function(index) {
    var message;
    message = "Juror 1: <br>  Labor and employment law.";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 15000,
      loading: true,
      content: message,
      cssClass: ["juror1"]
    });
  })
  .then(pause1)
  .then(pause1)
  .then(pause0)
  .then(pauseMil)
  .then(pauseMil)
  .then(function(index) {
    var message;
    message =
      "Judge: <br> Understood.  Before we get too much further, let me tell you a little bit about this case.\
       Just to make sure this is still working for everyone. Can everyone raise their hand showing they are ready? ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 23000,
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
  .then(function(index) {
    var message;
    message = "Juror 1: <br> Raise hand";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 300,
      loading: false,
      content: message,
      cssClass: ["juror1"]
    });
  })
  .then(function(index) {
    var message;
    message = "Juror 2: <br> Raise hand";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 1000,
      loading: false,
      content: message,
      cssClass: ["juror2"]
    });
  })

  .then(function(index) {
    var message;
    message = "none";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 3000,
      loading: false,
      content: message,
      cssClass: ["none"]
    });
  })

  .then(function(index) {
    var message;
    message =
      "Judge: <br> OK. You need to know that the defendant, John Dennis, is accused of murder.\
      He works as a supervisor for Capitol Building Inc. whihc is a large construction company.";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 21500,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(pause1)
  .then(pause0)
  .then(function(index) {
    var message;
    message =
      "Judge: <br> Actually, let me just copy and paste the case facts here, give me one moment";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 13000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(pause2)
  .then(pause2)
  .then(pause0)

  .then(function(index) {
    var message;
    message =
      "Judge: <br> As a supervisor, Mr. Dennis' job is to oversee the progress of construction projects\
      and to coordinate the different work teams involved. At the end of every day, the company's bookkeeper\
      places all of the company's cash in a safe. The safe is located\
      in the back of the bookkeeper's office. The safe has a timing mechanism\
      that records the time and date every time it is opened and closed.\
      The safe is also used for safeguarding other kinds\
      of sensitive information, including pending bids and project reports.\
      In addition to the bookkeeper and her assistant, the safe is accessed by\
      the supervisors, senior salespeople, and executives. In total, about 28 people,\
      including John Dennis, have access to the safe.\
      One morning, the company's bookkeeper discovered the building's security guard, Benjamin Miller, dead.\
      The timing mechanism showed that the safe was last opened the previous night at 7:21 PM.\
      The cause of death was a massive brain hemorrhage brought upon by the blows to the head.\
      The suspect also removed the cash from the safe totaling $5,200.\
      No biological evidence or fingerprints were recovered from the crime scene.";

    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 500,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(pause2)
  .then(pause2)
  .then(pause2)
  .then(pause2)
  .then(pause2)
  .then(pause2)
  .then(pause2)
  .then(pause2)
  .then(function(index) {
    var message;
    message =
      "Judge: <br>Alright, I hope that was enough time for everyone to read that";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 5000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(pause1)
  .then(pause1)
  .then(pause0)
  .then(function(index) {
    var message;
    message =
      "Judge: <br>Juror #1 have you heard or read anything about this case before coming\
      here today that you think would affect your decision? ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 9000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(pause1)
  .then(pause1)
  .then(pause1)
  .then(pause0)
  .then(function(index) {
    var message;
    message =
      "Juror 1:<br> No, I didt read anything about the case";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 9700,
      loading: true,
      content: message,
      cssClass: ["juror1"]
    });
  })
  .then(pause1)
  .then(pause1)
  .then(pause0)

  .then(function(index) {
    var message;
    message =
      "Judge: <br>Juror #1 is there anything else that you want to tell me? ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 10500,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(pause1)
  .then(pause0)
  .then(function(index) {
    var message;
    message = "Juror 1:<br> No";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 4500,
      loading: true,
      content: message,
      cssClass: ["juror1"]
    });
  })
  .then(pause1)
  .then(pauseMil)
  .then(pauseMil)
  .then(function(index) {
    var message;
    message =
      "Judge: <br> Jurors #2 and #3, I am going to ask you both pretty much the same questions.\
      Are you a lawyer or is anyone else in your life a lawyer? I am going to ask you raise your hands.\
      You will see the option pop up below. ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 23500,
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
      delay: 3300,
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
        "Judge: <br> Ok, two hands. Juror 2 since you raised your hand first, this question is for you:";
    } else if (res.value === "handRaisedFalse") {
      message =
        "Judge: <br> Ok, so one hand. Juror 2 this question is for you:";
    }

    return botui.message.add({
      type: "html",
      delay: 7700,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(pause0)
  .then(function(index) {
    var message;
    message = "Judge:<br> Who in your life is a lawyer?";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 6300,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(function(index) {
    return botui.message.add({
      type: "html",
      delay: 4700,
      loading: false,
      content: "none",
      cssClass: ["none"]
    });
  })
  .then(function(index) {
    var message;
    message =
      "Juror 2:<br> my dad ia a police officer which is related to lawyer";

    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 10000,
      loading: true,
      content: message,
      cssClass: ["juror2"]
    });
  })
  .then(function(index) {
    return botui.message.add({
      type: "html",
      delay: 4300,
      loading: false,
      content: "none",
      cssClass: ["none"]
    });
  })
  .then(function(index) {
    var message;
    message = "Judge:<br> Can you tell me more about that?";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 8000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(function(index) {
    return botui.message.add({
      type: "html",
      delay: 3900,
      loading: false,
      content: "none",
      cssClass: ["none"]
    });
  })

  .then(function(index) {
    var message;
    message =
      "Juror 2:<br> Hes been on the force for like twenty years.\
        He is a detective now but doesnt work homicide. ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 11000,
      loading: true,
      content: message,
      cssClass: ["juror2"]
    });
  })
  .then(function(index) {
    return botui.message.add({
      type: "html",
      delay: 4500,
      loading: false,
      content: "none",
      cssClass: ["none"]
    });
  })
  .then(function(index) {
    var message;
    message = "Judge:<br> So he likely wouldn’t have been on this case? ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 7300,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(function(index) {
    return botui.message.add({
      type: "html",
      delay: 5100,
      loading: false,
      content: "none",
      cssClass: ["none"]
    });
  })

  .then(function(index) {
    var message;
    message = "Juror 2:<br> ye He works other types of crimes SVU stuff.";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 9600,
      loading: true,
      content: message,
      cssClass: ["juror2"]
    });
  })
  .then(function(index) {
    return botui.message.add({
      type: "html",
      delay: 4300,
      loading: false,
      content: "none",
      cssClass: ["none"]
    });
  })

  .then(function(index) {
    var message;
    message =
      "Judge:<br>  Ok back to you Juror 1 have you heard anything\
        about this case before coming here today that you think would affect your decision? ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 13500,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(function(index) {
    return botui.message.add({
      type: "html",
      delay: 5900,
      loading: false,
      content: "none",
      cssClass: ["none"]
    });
  })
  .then(function(index) {
    var message;
    message =
      "Juror 1:<br>  Yes. i thikn i read an article about the guy they are accusing earlier today. ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 7700,
      loading: true,
      content: message,
      cssClass: ["juror1"]
    });
  })
  .then(pause1)
  .then(pause1)
  .then(pauseMil)
  .then(pauseMil)
  //   //======================Judicial manipulation=======================

  .then(function(res) {
    if (condition === 0) {
      var message;
      message = "Judge:<br>  OK.";
      messageList.push(message);

      return botui.message.add({
        type: "html",
        delay: 3400,
        loading: true,
        content: message,
        cssClass: ["judge"]
      });
    } else if (condition === 1) {
      var message;
      message =
        "Judge: <br> Thank you for being so honest. This information is really helpful.\
        Not every juror is the right fit for every case.  The more I know about what you have\
        already heard about the defendant, the better able I willbe to determine whether it might\
        impact your ability to be a fair and impartial juror in this case.\
        Do you have anything else to say about what you read? ";
      messageList.push(message);

      return botui.message
        .add({
          type: "html",
          delay: 25300,
          loading: true,
          content: message,
          cssClass: ["judge"]
        })
        .then(function(res) {
          var message;
          message =
            "Juror 1: <br> Yeah sort of. I read the story online and now Im worried that it wuld effect my decision.";
          messageList.push(message);

          return botui.message.add({
            type: "html",
            delay: 14000,
            loading: true,
            content: message,
            cssClass: ["juror1"]
          });
        })
      .then(pause1)
      .then(pause1)
      .then(pause1)
      .then(pauseMil)
        .then(function(res) {
          var message;
          message =
            "Judge: <br> Ok.  Thank you. That additional information is really helpful and the kind of thing we want to hear. ";
          messageList.push(message);

          return botui.message.add({
            type: "html",
            delay: 10200,
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
          delay: 13000,
          loading: true,
          content: message,
          cssClass: ["judge"]
        })
        .then(pause2)
        .then(function(res) {
          var message;
          message = "Juror 1: <br> No then I have nothing else to add.";
          messageList.push(message);

          return botui.message.add({
            type: "html",
            delay: 4100,
            loading: true,
            content: message,
            cssClass: ["juror1"]
          });
        });
    }
  })

  //========== end priming==================
  .then(pause1)
  .then(pause1)
  .then(pauseMil)
  .then(function(index) {
    var message;
    message = "Judge: <br> Juror 2 have you ever been on a jury before?";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 7600,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(pause1)
  .then(pause0)

  .then(function(index) {
    var message;
    message = "Juror 2: <br>  Yes";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 3400,
      loading: false,
      content: message,
      cssClass: ["juror2"]
    });
  })
  .then(pause1)
  .then(pause1)
  .then(function(index) {
    var message;
    message = "Judge:<br>What type of case was it: civil or criminal? ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 6000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(pause1)
  .then(pause1)
  .then(pause0)
  .then(function(index) {
    var message;
    message = "Juror 2:<br> It was a car acident case. ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 5500,
      loading: true,
      content: message,
      cssClass: ["juror2"]
    });
  })
  .then(pause0)
  .then(function(index) {
    var message;
    message = "Judge:<br>A civil case.  Did you reach a verdict? in that case";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 6300,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(pause1)
  .then(function(index) {
    var message;
    message = "Juror 2:<br> Yes.";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 6600,
      loading: false,
      content: message,
      cssClass: ["juror2"]
    });
  })
  .then(pause0)
  .then(function(index) {
    var message;
    message = "Judge:<br>Ok";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 2300,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(pause0)
  .then(function(index) {
    var message;
    message =
      "Judge: <br>   Juror 3, how about you?  Have you ever been on a jury before and if so, what kind of case was it? ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 9700,
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
    message = "Judge:<br>Ok understood";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 7000,
      loading: true,
      content: message,
      cssClass: ["judge"]
    });
  })
  .then(pause0)
  .then(function(index) {
    var message;
    message =
      "Judge: <br>  Ok, so I am going to ask you a couple more questions about whether\
      you would be a good fit as a juror for this case";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 16000,
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
        info that is relevant. jurors must ignore any news or media about this case\
        or the people involved in this case. Fair trials cannot be conducted if people do not follow\
        this instruction.  I only care about things that will make it hard for you to be fair and impartial.";
      messageList.push(message);

      return botui.message.add({
        type: "html",
        delay: 33300,
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
        delay: 33300,
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
        "Judge: <br>  Juror #3 have you heard anything about this case before being here today?";
      messageList.push(message);

      return botui.message
        .add({
          type: "html",
          delay: 7500,
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
            delay: 96000,
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
          delay: 9600,
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
              delay: 7600,
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
  .then(function(index) {
    var message;
    message =
      "Judge: <br> OK.  Thank you.  The attorneys for the parties to this case and I will now take a few minutes\
      to talk about your responses and compare them with the jurors we spoke to in the other voir dire groups.\
      We will then select the jurors for this case. ";
    messageList.push(message);

    return botui.message.add({
      type: "html",
      delay: 30300,
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
      delay: 7000,
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
      delay: 9000,
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
    console.log(participantResponse);
    console.log(messageList);
  })
  .then(function() {
    let surveyData = {
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
    message = "Automated System:<br>END OF CHAT. THANK YOU FOR YOUR TIME. ";
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
    location.href = "/resultsPage";
  });
window.onbeforeunload = function(event) {
  if (done == false) {
    return confirm(" ");
  }
};
