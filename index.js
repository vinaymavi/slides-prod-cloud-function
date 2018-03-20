const admin = require("firebase-admin");

const serviceAccount = require("./privatekeys/slides-prod-firebase-adminsdk-ci0ku-9d20533a75.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://slides-prod.firebaseio.com"
});
const db = admin.database();
// TODO security implementation pending.

exports.slidesprodget = (req, res) => {
  res.status(200).send("Hello Thr :)");
};

exports.slidesprodset = (req, res) => {
  const msg = req.query.text;
  const user = req.body.user;
  const quiz = req.body.quiz;
  const answers = req.body.answers;
  console.log("Method = " + req.method);
  console.log("Quizid = " + quiz.quizId);
  console.log("Senderid=" + user.senderId);
  console.log("SenderName=" + user.firstName);
  console.log("AnswerLength=" + answers.length);
  console.log(JSON.stringify(user));
  let rightAnswerCount = 0;
  
  answers.length && answers.forEach((ans)=>{
    ans.isRight &&  rightAnswerCount++;
  });

  const userRef = db.ref(`/live_results/${quiz.quizId}/${user.senderId}`);
  let userInfo  = {
    name:user.firstName,
    senderId:user.senderId,    
    value:rightAnswerCount,
    icon:user.profileImage
  }
  userRef.update(userInfo).then((error)=>{
    res.status(200).send("data pushed");
  });
};

exports.datastoretrigger = (req, res) => {};
