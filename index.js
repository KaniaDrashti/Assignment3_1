var rs = require("readline-sync")
const chalk = require("chalk")
let log = console.log

let blueBright = chalk.bold.blueBright
let green = chalk.bold.green
let red = chalk.bold.red
let cyan = chalk.bold.cyan
let yellow = chalk.bold.yellow
let title = chalk.black.bold.bgYellow
let inverse = chalk.inverse

var score = 0;
var highscore = 15;

let questions =[
  {
        id:"1",
        question:"Name the citizen centric government portal for missing children which was launched in July 2015.",
        optionA:"(A) Dindia portla",
        optionB:"(B) Mahi portal",
        optionC:"(C) ambedkar",
        optionD:"(D) Khoya Paya Portal",
        Ans: "D",
       // "CorrectOption":"D"
    },
    {
        id:"2",
        question:"Which government platform facilitates proactive release of datasets in an open format by ministries/ departments?",
        optionA:"(A) data.gov.in",
        optionB:"(B) digitalguj.in",
        optionC:"(C) smartgujat.in",
        optionD:"(D) greencity.com",
        Ans: "A",
       // "CorrectOption":"A"
    },{
        id:"3",
        question:"What is the total number of Mission Mode Projects under Digital India (as of 1-March-2016)",
        optionA:"(A) 50",
        optionB:"(B) 45",
        optionC:"(C) 44",
        optionD:"(D) 22",
        Ans: "C",
        //"CorrectOption":"c"
    },{
        id:"4",
        question:"Public Internet Access Programme aims to cover how many Gram Panchayats through CSCs?",
        optionA:"(A) 10,000",
        optionB:"(B) 50,000",
        optionC:"(C) 2,50,000",
        optionD:"(D) 1,50,050",
        Ans:"C ",
        //"CorrectOption":"c"
    },{
        "id":5,
        "question":"Which city is also known as the Diamond City of India?",
        "optionA":"(A) Rajkot",
        "optionB":"(B) Surat",
        "optionC":"(C) Gandhinagar",
        "optionD":"(D) Ahmedabad",
        "Ans": "B",
        //"CorrectOption":"B" 
    },
    {
        "id":6,
        "question":"What is the total number of digits in Aadhaar?",
        "optionA":"(A) 10",
        "optionB":"(B) 09",
        "optionC":"(C) 12",
        "optionD":"(D) 18",
        "Ans": "C",
        //"CorrectOption":"c"
    },{
        "id":7,
        "question":"Name the mobile governance initiative of the Government of India",
        "optionA":"(A) Digital seva",
        "optionB":"(B) mobile app",
        "optionC":"(C) samrt app",
        "optionD":"(D) Mobile Seva",
        "Ans": "D",
        //"CorrectOption":"D"
    },{
        "id": 8,
        "question":"Name the cloud initiative of the Government of India.",
        "optionA":"(A) vishnu",
        "optionB":"(B) MeghRaj",
        "optionC":"(C) gujgov",
        "optionD":"(D) cloudGi",
        "Ans":"B",
        //"CorrectOption":"B"
    },{
      "id":9,
      "question":"Which government project aims to link all universities in India through a high-speed network?",
      "optionA":"(A) National Knowledge Network",
      "optionB":"(B) india knoweledge",
      "optionC":"(C) gov knoweledge network",
      "optionD":"(D) learn knoweledge",
      "Ans":"A",
      //"CorrectOption":"A"
    },{
      "id":10,
      "question":"How many languages are available on Aarogya Setu app?",
      "optionA":"(A) 7",
      "optionB":"(B) 11",
      "optionC":"(C) 12",
      "optionD":"(B) 20",
      "Ans":"C",
      //"CorrectOption":"C"
    },
];

log(cyan("Welcome to the "), title("Digital india.\n"))
let user = rs.question("Please Enter Your Name : ")
log(yellow(`Hello ${user}`))

log(blueBright("\nA Quiz of Digital india ..."))
log("\nThere will be 20(20) questions.....")
log(yellow("+5"), "Point For Correct Answer.....", yellow("-2"), "Point For Wrong Answer....\n")

for (q of questions) {
  log(yellow(q.no + ': ' + q.question));
  log(cyan('optionA' + q.optionA));
  log(cyan('optionB' + q.optionB));
  log(cyan('optionC' + q.optionC));
  log(cyan('optionD' + q.optionD));

  //input answer
  var answer = rs.question('Answer : ');

  //compare answer
  if (answer.toLowerCase() === q.Ans.toLowerCase()) {
    log(green("\n+5"), "Your Answer Is :- ", green("correct"), ".");
    score += 5;
    log("Your Current Score Is :-", green(score), "\n");
  } else {
    log(red("-2"), "Your answer Is :-", red("incorrect"), ".");
    score -= 2;
    log("Your Current Score Is :-", red(score), "\n");
  }
}


if (score > highscore) {
  log(green("Congratulation..!You Are Win....."))
} else {
  log(red("You Are Not Win The Quiz.....!\n"))
}

log(blue("Scoreboard :="))
log('Hello ' + green(user) + ' Your Final Resuly Is :- ' + score)