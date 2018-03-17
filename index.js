const admin = require("firebase-admin");

const serviceAccount = require("./privatekeys/slides-prod-firebase-adminsdk-ci0ku-9d20533a75.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://slides-prod.firebaseio.com"
});

const db = admin.database();

exports.slidesprodget = (req, res) => {
  res.status(200).send("Hello Thr :)");
};

exports.slidesprodset = (req, res) => {
  const msg = req.query.text;
  // res.status(200).send(msg);
  db
    .ref("/msgs")
    .push({ msg: msg })
    .then(snapshot => {
      res.redirect(303, snapshot.ref);
    });
};
