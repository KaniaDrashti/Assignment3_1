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
    },/*{
      "id":11,
      "question":"Name the two portals/websites where Indian citizens can maintain all vehicular documents as digital documents?",
      "optionA":"(A) DigiLocker & mParivahan",
      "optionB":"(B) myindia",
      "optionC":"(C) smartcity",
      "optionD":"(D) digitalIT",
      "Ans":"(A)  DigiLocker & mParivahan",
      //"CorrectOption":"A"
    },{
      "id":12,
      "question":" What is the name of the new feature of BHIM-UPI app that enables all users to make your recurring payments easily?",
      "optionA":"(A) GATWAY",
      "optionB":"(B) UPI AUTOPAY",
      "optionC":"(C) GPAY",
      "optionD":"(D) None of the above",
      "Ans":"(B) UPI AUTOPAY",
      //"CorrectOption":"B"
    },{
      "id":13,
      "question":"What is the name of the mobile app launched recently by IPPB to provide digital financial and assisted banking services by India Post and IPPB through the postal network across the country?",
      "optionA":"(A) Arogya setu",
      "optionB":"(B) UPDI",
      "optionC":"(C)  DakPay",
      "optionD":"(D) All of above",
      "Ans":"(C)  DakPay",
     // "CorrectOption":"C"
    },{
      "id":14,
      "question":" Name the newly developed online portal by Indian Railways to promote and develop the railways’ freight business?",
      "optionA":"(A) GOIS",
      "optionB":"(B) DOIS",
      "optionC":"(C) FOIS",
      "optionD":"(D) A and c",
      "Ans":"(C) FOIS",
      //"CorrectOption":"C"
    },{
      "id":15,
      "question":"APY full form",
      "optionA":"(A) Application of Pension Yojna",
      "optionB":"(B) None",
      "optionC":"(C) Avas Pension Yojna",
      "optionD":"(D) Atal Pension Yojana",
      "Ans":"(D) Atal Pension Yojana",
      //"CorrectOption":"D"
    },{
      "id":16,
      "question":"eSanjeevani OPD, the National Teleconsultation Service of Ministry of Health & Family Welfare is operational in how many Indian States/UTs?",
      "optionA":"(A) 19",
      "optionB":"(B) 20",
      "optionC":"(C) 31",
      "optionD":"(D) 41",
      "Ans":"(C) 31",
      //"CorrectOption":"C"
    },{
      "id":17,
      "question":" What is the name of the web-enabled patient management system for Tuberculosis control under NTEP?",
      "optionA":"(A) KISHAN",
      "optionB":"(B) NP-CANCER",
      "optionC":"(C) NI-KSHAY",
      "optionD":"(D) All of above",
      "Ans":"(C) NI-KSHAY",
      //"CorrectOption":"C"
    },{
      "id":18,
      "question":"AEPS full form:",
      "optionA":"(A) Aambedkar e-Payment System",
      "optionB":"(B) Aambedkar enabled Payment System",
      "optionC":"(C) Aadhaar e-Payment System",
      "optionD":"(D) Aadhaar enabled Payment System",
      "Ans":"(D) Aadhaar enabled Payment System",
      //"CorrectOption":"D"
    },{
      "id":19,
      "question":" Digital Identity cards of which force have been made available recently on Digilocker?",
      "optionA":"(A) NDRF",
      "optionB":"(B) MCNL",
      "optionC":"(C) A and b both",
      "optionD":"(D) none",
      "Ans":"(A) NDRF",
      //"CorrectOption":"A"
    },{
      "id":20,
      "question":"UMANG app is available in how many languages?",
      "optionA":"(A) 20 Languages",
      "optionB":"(B) 13 Languages",
      "optionC":"(C) 12 Languages",
      "optionD":"(D) 11 Languages",
      "Ans":"(B) 13 Languages",
      //"CorrectOption":"B"
    },*/
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