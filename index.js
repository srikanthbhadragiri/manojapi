var http = require('http');
var fs = require('fs');
var PORT = process.env.PORT || '5000';

var dataObj = [{
  "ID": "87b225bf-4de6-489f-9e23-c8d40dd7bf29",
  "QuestionTypeId": 1,
  "Remarks": "",
  "Description": "A transfer of immovable property made with intent to defeat or delay the creditors of the transferor is ______",
  "TopicId": 79,
  "TopicDepthString": "LAW/TPA - Transfer of Property Act",
  "HasImage": false,
  "Image64BitString": null,
  "HasDrawing": false,
  "DrawingDefinitionString": null,
  "ChoiceTypeId": 0,
  "ProviderId": 1,
  "IsReviewed": false,
  "DescriptionReg": "",
  "IsSingleChoice": true,
  "RemarksReg": "",
  "PatternId": "CLP'S-ALL-INDIA-BAR-EXAMINATION-GUIDE-T.P.-ACT-P-191",
  "AnsRemarks": "",
  "CreateDate": "2018-06-20T19:01:27.2916244+05:30",
  "IsActive": true,
  "ParentPatternId": null,
  "TimeToAnswer": 20,
  "Answers": [
    {
      "AnswerID": "07e401bb-6704-4688-8688-6c82d2f22f40",
      "QuestionID": "87b225bf-4de6-489f-9e23-c8d40dd7bf29",
      "AnswerDescription": "Void ab initio",
      "IsCorrectAnswer": false,
      "AnswerOrder": "A",
      "Image64String": null,
      "Drawing": null,
      "HasImage": false,
      "HasDrawing": false,
      "AnswerDescriptionReg": "",
      "RecordingURL": ""
    },
    {
      "AnswerID": "189700cc-e30d-4167-9fef-bc30c3799674",
      "QuestionID": "87b225bf-4de6-489f-9e23-c8d40dd7bf29",
      "AnswerDescription": "Voidable at the option of  any creditor so defeated or delayed",
      "IsCorrectAnswer": true,
      "AnswerOrder": "B",
      "Image64String": null,
      "Drawing": null,
      "HasImage": false,
      "HasDrawing": false,
      "AnswerDescriptionReg": "",
      "RecordingURL": ""
    },
    {
      "AnswerID": "9d248ef4-58e1-45bd-a2ab-3764e9ba706e",
      "QuestionID": "87b225bf-4de6-489f-9e23-c8d40dd7bf29",
      "AnswerDescription": "Valid",
      "IsCorrectAnswer": false,
      "AnswerOrder": "C",
      "Image64String": null,
      "Drawing": null,
      "HasImage": false,
      "HasDrawing": false,
      "AnswerDescriptionReg": "",
      "RecordingURL": ""
    },
    {
      "AnswerID": "5cb07f2a-5621-4e0b-8cfb-1bba40885142",
      "QuestionID": "87b225bf-4de6-489f-9e23-c8d40dd7bf29",
      "AnswerDescription": "Illegal",
      "IsCorrectAnswer": false,
      "AnswerOrder": "D",
      "Image64String": null,
      "Drawing": null,
      "HasImage": false,
      "HasDrawing": false,
      "AnswerDescriptionReg": "",
      "RecordingURL": ""
    },
    {
      "AnswerID": "ee761347-c158-4b0f-ba7a-362898170004",
      "QuestionID": "87b225bf-4de6-489f-9e23-c8d40dd7bf29",
      "AnswerDescription": "",
      "IsCorrectAnswer": false,
      "AnswerOrder": "E",
      "Image64String": null,
      "Drawing": null,
      "HasImage": false,
      "HasDrawing": false,
      "AnswerDescriptionReg": "",
      "RecordingURL": ""
    }
  ],
  "AnsRemarksReg": "",
  "FromOldPaper": true,
  "PassageId": null,
  "OrderInPassage": null,
  "OperatorName": "Hira",
  "FileOrBlobName": null,
  "AnsRemarksDrawingString": null,
  "QueRemarksDrawingString": null,
  "AnsRemarksImg64String": null,
  "QueRemarksImg64String": null
},
{
  "ID": "87b225bf-4de6-489f-9e23-c8d40dd7bf30",
  "QuestionTypeId": 1,
  "Remarks": "",
  "Description": "This is a tricky question. Please answer correctly.",
  "TopicId": 79,
  "TopicDepthString": "LAW/TPA - Transfer of Property Act",
  "HasImage": false,
  "Image64BitString": null,
  "HasDrawing": false,
  "DrawingDefinitionString": null,
  "ChoiceTypeId": 0,
  "ProviderId": 1,
  "IsReviewed": false,
  "DescriptionReg": "",
  "IsSingleChoice": true,
  "RemarksReg": "",
  "PatternId": "CLP'S-ALL-INDIA-BAR-EXAMINATION-GUIDE-T.P.-ACT-P-191",
  "AnsRemarks": "",
  "CreateDate": "2018-06-20T19:01:27.2916244+05:30",
  "IsActive": true,
  "ParentPatternId": null,
  "TimeToAnswer": 20,
  "Answers": [
    {
      "AnswerID": "07e401bb-6704-4688-8688-6c82d2f22f40",
      "QuestionID": "87b225bf-4de6-489f-9e23-c8d40dd7bf29",
      "AnswerDescription": "I'm SpiderMan",
      "IsCorrectAnswer": false,
      "AnswerOrder": "A",
      "Image64String": null,
      "Drawing": null,
      "HasImage": false,
      "HasDrawing": false,
      "AnswerDescriptionReg": "",
      "RecordingURL": ""
    },
    {
      "AnswerID": "189700cc-e30d-4167-9fef-bc30c3799674",
      "QuestionID": "87b225bf-4de6-489f-9e23-c8d40dd7bf29",
      "AnswerDescription": "I'm BatMan",
      "IsCorrectAnswer": false,
      "AnswerOrder": "B",
      "Image64String": null,
      "Drawing": null,
      "HasImage": false,
      "HasDrawing": false,
      "AnswerDescriptionReg": "",
      "RecordingURL": ""
    },
    {
      "AnswerID": "9d248ef4-58e1-45bd-a2ab-3764e9ba706e",
      "QuestionID": "87b225bf-4de6-489f-9e23-c8d40dd7bf29",
      "AnswerDescription": "I'm Hanuman",
      "IsCorrectAnswer": true,
      "AnswerOrder": "C",
      "Image64String": null,
      "Drawing": null,
      "HasImage": false,
      "HasDrawing": false,
      "AnswerDescriptionReg": "",
      "RecordingURL": ""
    },
    {
      "AnswerID": "5cb07f2a-5621-4e0b-8cfb-1bba40885142",
      "QuestionID": "87b225bf-4de6-489f-9e23-c8d40dd7bf29",
      "AnswerDescription": "I'm IronMan",
      "IsCorrectAnswer": false,
      "AnswerOrder": "D",
      "Image64String": null,
      "Drawing": null,
      "HasImage": false,
      "HasDrawing": false,
      "AnswerDescriptionReg": "",
      "RecordingURL": ""
    },
    {
      "AnswerID": "ee761347-c158-4b0f-ba7a-362898170004",
      "QuestionID": "87b225bf-4de6-489f-9e23-c8d40dd7bf29",
      "AnswerDescription": "",
      "IsCorrectAnswer": false,
      "AnswerOrder": "E",
      "Image64String": null,
      "Drawing": null,
      "HasImage": false,
      "HasDrawing": false,
      "AnswerDescriptionReg": "",
      "RecordingURL": ""
    }
  ],
  "AnsRemarksReg": "",
  "FromOldPaper": true,
  "PassageId": null,
  "OrderInPassage": null,
  "OperatorName": "Hira",
  "FileOrBlobName": null,
  "AnsRemarksDrawingString": null,
  "QueRemarksDrawingString": null,
  "AnsRemarksImg64String": null,
  "QueRemarksImg64String": null
}
]


var server = http.createServer(function(req, res){
    console.log('A user made a request *** ', req.url);
    if(req.url === '/api/questions'){
      res.writeHead(200, {"context-type":"application/json"});
      //fs.createReadStream(__dirname+'/ques.json').pipe(res);
      //console.log('hello', fs);
      res.write(JSON.stringify(dataObj));
      res.end();
    }else{
      res.writeHead(200, {"context-type":"text/plain"});
      res.write('Welcome get api here -> /api/questions');
      res.end();
    }
});

server.listen(PORT);
console.log('Server is now running...');


// var http = require('http');
// var fs = require('fs');
//
// var server = http.createServer(function(req, res){
//     console.log('A user made a request *** ', req.url);
//     if(req.url === '/api/questions'){
//       res.writeHead(200, {"context-type":"application/json"});
//       var myObj = {
//        name: 'srikanth',
//        job: 'rock star'
//       };
//       res.end(JSON.stringify(myObj));
//     }else{
//       res.writeHead(200, {"context-type":"text/plain"});
//       res.write('Welcome get api here -> /api/questions');
//       res.end();
//     }
// });
//
// server.listen(8888, '127.0.0.1');
// console.log('Server is now running...');
// -------------------------------------------------------
// var http = require('http');
//
// var server = http.createServer(function(req, res){
//     console.log('A user made a request *** ', req.url);
//     res.writeHead(200, {"context-type":"text/plain"});
//     res.write('Hello Srikanth - Node sample');
//     res.end();
// });
//
// server.listen(8888, '127.0.0.1');
// console.log('Server is now running...');
// -------------------------------------------------------
// var http = require('http');
//
// function onRequest(req, res) {
//   console.log('A user made a request ', req.url);
//   res.writeHead(200, {"context-type":"text/plain"});
//   res.write('Hello Srikanth');
//   res.end();
// }
//
// http.createServer(onRequest).listen(8888);
// console.log('Server is now running...');
