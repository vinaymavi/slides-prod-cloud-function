# slides-prod-cloud-function
A cloud function to sync google datastore and firebase real time database.

## Command to deploy
`gcloud beta functions deploy --stage-bucket slidesprod-cloudfunction --trigger-http`

`gcloud beta functions deploy website<function-name> --stage-bucket slidesprod-cloudfunction --trigger-http`

## Cloud function HTTP URLs
`https://us-central1-slides-prod.cloudfunctions.net/slidesprodget`

## Command to run locally


**Start** `functions-emulator start`

**Stop** `functions-emulator stop`

**Deploy** `functions-emulator deploy <function-name> --trigger-http`

## CURL Requests

## Reference 
* https://firebase.google.com/docs/reference/admin/node/admin.database.Database 
* 



