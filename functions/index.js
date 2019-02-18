const functions = require('firebase-functions');
const admin=require('firebase-admin');
admin.initializeApp();
const database=admin.database();
const jwt = require('jsonwebtoken');
const cors=require('cors');
const express = require('express');
const app= express();

app.use(cors({origin:true}));

exports.api=functions.https.onRequest(app);
app.get('/addf1m10',function(req,response){
   let f1=req.query.f1;
   database.ref().child('class10/').child('mathematics/').child('fact1/').push(f1);
   console.log('entered in the api');
   response.send('f1 added');
});
app.get('/addf2m10',function(req,response){
  let f2=req.query.f2;
  database.ref().child('class10/').child('mathematics/').child('fact2/').push(f2);
  console.log('entered in the api');
  response.send('f2 added');
});
app.get('/addf3m10',function(req,response){
  let f3=req.query.f3;
  database.ref().child('class10/').child('mathematics/').child('fact3/').push(f3);
  console.log('entered in the api');
  response.send('f3 added');
});
app.get('/addf4m10',function(req,response){
  let f4=req.query.f4;
  database.ref().child('class10/').child('mathematics/').child('fact4/').push(f4);
  console.log('entered in the api');
  response.send('f4 added');
});
app.get('/addf5m10',function(req,response){
  let f5=req.query.f5;
  database.ref().child('class10/').child('mathematics/').child('fact5/').push(f5);
  console.log('entered in the api');
  response.send('f5 added');
});
app.get('/addf1s10',function(req,response){
  let f1=req.query.f1;
  database.ref().child('class10/').child('science/').child('fact1/').push(f1);
  console.log('entered in the api');
  response.send('f1 added');
});
app.get('/addf2s10',function(req,response){
  let f2=req.query.f2;
  database.ref().child('class10/').child('science/').child('fact2/').push(f2);
  console.log('entered in the api');
  response.send('f2 added');
});
app.get('/addf4s10',function(req,response){
  let f4=req.query.f4;
  database.ref().child('class10/').child('science/').child('fact4/').push(f4);
  console.log('entered in the api');
  response.send('f4 added');
});
app.get('/addf3s10',function(req,response){
  let f3=req.query.f3;
  database.ref().child('class10/').child('science/').child('fact3/').push(f3);
  console.log('entered in the api');
  response.send('f3 added');
});
app.get('/addf5s10',function(req,response){
  let f5=req.query.f5;
  database.ref().child('class10/').child('science/').child('fact5/').push(f5);
  console.log('entered in the api');
  response.send('f5 added');
});
app.get('/addf1m9',function(req,response){
  let f1=req.query.f1;
  database.ref().child('class9/').child('mathematics/').child('fact1/').push(f1);
  console.log('entered in the api');
  response.send('f1 added');
});
app.get('/addf2m9',function(req,response){
  let f2=req.query.f2;
  database.ref().child('class9/').child('mathematics/').child('fact2/').push(f2);
  console.log('entered in the api');
  response.send('f2 added');
});
app.get('/addf3m9',function(req,response){
  let f3=req.query.f3;
  database.ref().child('class9/').child('mathematics/').child('fact3/').push(f3);
  console.log('entered in the api');
  response.send('f3 added');
});
app.get('/addf4m9',function(req,response){
  let f4=req.query.f4;
  database.ref().child('class9/').child('mathematics/').child('fact4/').push(f4);
  console.log('entered in the api');
  response.send('f4 added');
});
app.get('/addf5m9',function(req,response){
  let f5=req.query.f5;
  database.ref().child('class9/').child('mathematics/').child('fact5/').push(f5);
  console.log('entered in the api');
  response.send('f5 added');
});
app.get('/addf1s9',function(req,response){
  let f1=req.query.f1;
  database.ref().child('class9/').child('science/').child('fact1/').push(f1);
  console.log('entered in the api');
  response.send('f1 added');
});
app.get('/addf2s9',function(req,response){
  let f2=req.query.f2;
  database.ref().child('class9/').child('science/').child('fact2/').push(f2);
  console.log('entered in the api');
  response.send('f2 added');
});
app.get('/addf3s9',function(req,response){
  let f3=req.query.f3;
  database.ref().child('class9/').child('science/').child('fact3/').push(f3);
  console.log('entered in the api');
  response.send('f3 added');
});
app.get('/addf4s9',function(req,response){
  let f4=req.query.f4;
  database.ref().child('class9/').child('science/').child('fact4/').push(f4);
  console.log('entered in the api');
  response.send('f4 added');
});
app.get('/addf5s9',function(req,response){
  let f5=req.query.f5;
  database.ref().child('class9/').child('science/').child('fact5/').push(f5);
  console.log('entered in the api');
  response.send('f5 added');
});
app.get('/addf1m8',function(req,response){
  let f1=req.query.f1;
  database.ref().child('class8/').child('mathematics/').child('fact1/').push(f1);
  console.log('entered in the api');
  response.send('f1 added');
});
app.get('/addf2m8',function(req,response){
  let f2=req.query.f2;
  database.ref().child('class8/').child('mathematics/').child('fact2/').push(f2);
  console.log('entered in the api');
  response.send('f2 added');
});
app.get('/addf3m8',function(req,response){
  let f3=req.query.f3;
  database.ref().child('class8/').child('mathematics/').child('fact3/').push(f3);
  console.log('entered in the api');
  response.send('f3 added');
});
app.get('/addf4m8',function(req,response){
  let f4=req.query.f4;
  database.ref().child('class8/').child('mathematics/').child('fact4/').push(f4);
  console.log('entered in the api');
  response.send('f4 added');
});
app.get('/addf5m8',function(req,response){
  let f5=req.query.f5;
  database.ref().child('class8/').child('mathematics/').child('fact5/').push(f5);
  console.log('entered in the api');
  response.send('f5 added');
});
app.get('/addf1s8',function(req,response){
  let f1=req.query.f1;
  database.ref().child('class8/').child('science/').child('fact1/').push(f1);
  console.log('entered in the api');
  response.send('f1 added');
});
app.get('/addf2s8',function(req,response){
  let f2=req.query.f2;
  database.ref().child('class8/').child('science/').child('fact2/').push(f2);
  console.log('entered in the api');
  response.send('f2 added');
});
app.get('/addf3s8',function(req,response){
  let f3=req.query.f3;
  database.ref().child('class8/').child('science/').child('fact3/').push(f3);
  console.log('entered in the api');
  response.send('f3 added');
});
app.get('/addf4s8',function(req,response){
  let f4=req.query.f4;
  database.ref().child('class8/').child('science/').child('fact4/').push(f4);
  console.log('entered in the api');
  response.send('f4 added');
});
app.get('/addf5s8',function(req,response){
  let f5=req.query.f5;
  database.ref().child('class8/').child('science/').child('fact5/').push(f5);
  console.log('entered in the api');
  response.send('f5 added');
});
app.get('/addf1m7',function(req,response){
  let f1=req.query.f1;
  database.ref().child('class7/').child('mathematics/').child('fact1/').push(f1);
  console.log('entered in the api');
  response.send('f1 added');
});
app.get('/addf2m7',function(req,response){
  let f2=req.query.f2;
  database.ref().child('class7/').child('mathematics/').child('fact2/').push(f2);
  console.log('entered in the api');
  response.send('f2 added');
});
app.get('/addf3m7',function(req,response){
  let f3=req.query.f3;
  database.ref().child('class7/').child('mathematics/').child('fact3/').push(f3);
  console.log('entered in the api');
  response.send('f3 added');
});
app.get('/addf4m7',function(req,response){
  let f4=req.query.f4;
  database.ref().child('class7/').child('mathematics/').child('fact4/').push(f4);
  console.log('entered in the api');
  response.send('f4 added');
});
app.get('/addf5m7',function(req,response){
  let f5=req.query.f5;
  database.ref().child('class7/').child('mathematics/').child('fact5/').push(f5);
  console.log('entered in the api');
  response.send('f5 added');
});
app.get('/addf1s7',function(req,response){
  let f1=req.query.f1;
  database.ref().child('class7/').child('science/').child('fact1/').push(f1);
  console.log('entered in the api');
  response.send('f1 added');
});
app.get('/addf2s7',function(req,response){
  let f2=req.query.f2;
  database.ref().child('class7/').child('science/').child('fact2/').push(f2);
  console.log('entered in the api');
  response.send('f2 added');
});
app.get('/addf3s7',function(req,response){
  let f3=req.query.f3;
  database.ref().child('class7/').child('science/').child('fact3/').push(f3);
  console.log('entered in the api');
  response.send('f3 added');
});
app.get('/addf4s7',function(req,response){
  let f4=req.query.f4;
  database.ref().child('class7/').child('science/').child('fact4/').push(f4);
  console.log('entered in the api');
  response.send('f4 added');
});
app.get('/addf5s7',function(req,response){
  let f5=req.query.f5;
  database.ref().child('class7/').child('science/').child('fact5/').push(f5);
  console.log('entered in the api');
  response.send('f5 added');
});
app.get('/addf1m6',function(req,response){
  let f1=req.query.f1;
  database.ref().child('class6/').child('mathematics/').child('fact1/').push(f1);
  console.log('entered in the api');
  response.send('f1 added');
});
app.get('/addf2m6',function(req,response){
  let f2=req.query.f2;
  database.ref().child('class6/').child('mathematics/').child('fact2/').push(f2);
  console.log('entered in the api');
  response.send('f2 added');
});
app.get('/addf3m6',function(req,response){
  let f3=req.query.f3;
  database.ref().child('class6/').child('mathematics/').child('fact3/').push(f3);
  console.log('entered in the api');
  response.send('f3 added');
});
app.get('/addf4m6',function(req,response){
  let f4=req.query.f4;
  database.ref().child('class6/').child('mathematics/').child('fact4/').push(f4);
  console.log('entered in the api');
  response.send('f4 added');
});
app.get('/addf5m6',function(req,response){
  let f5=req.query.f5;
  database.ref().child('class6/').child('mathematics/').child('fact5/').push(f5);
  console.log('entered in the api');
  response.send('f5 added');
});
app.get('/addf1s6',function(req,response){
  let f1=req.query.f1;
  database.ref().child('class6/').child('science/').child('fact1/').push(f1);
  console.log('entered in the api');
  response.send('f1 added');
});
app.get('/addf2s6',function(req,response){
  let f2=req.query.f2;
  database.ref().child('class6/').child('science/').child('fact2/').push(f2);
  console.log('entered in the api');
  response.send('f2 added');
});
app.get('/addf3s6',function(req,response){
  let f3=req.query.f3;
  database.ref().child('class6/').child('science/').child('fact3/').push(f3);
  console.log('entered in the api');
  response.send('f3 added');
});
app.get('/addf4s6',function(req,response){
  let f4=req.query.f4;
  database.ref().child('class6/').child('science/').child('fact4/').push(f4);
  console.log('entered in the api');
  response.send('f4 added');
});
app.get('/addf5s6',function(req,response){
  let f5=req.query.f5;
  database.ref().child('class6/').child('science/').child('fact5/').push(f5);
  console.log('entered in the api');
  response.send('f5 added');
});
app.get('/likem10',function(req,response){
let t=req.query.t;
 t1=t.split(/[;]/)[1];
 t1=t1.split(/[@]/)[0];
 let ref=database.ref().child('class10/').child('mathematics/').child('likes/');
database.ref().child('class10/').child('mathematics/').child('likes/').push(t1);
response.send('added:'+t1);
});
app.get('/likes10',function(req,response){
  let t=req.query.t;
   t1=t.split(/[;]/)[1];
   t1=t1.split(/[@]/)[0];
   let ref=database.ref().child('class10/').child('science/').child('likes/');
  database.ref().child('class10/').child('science/').child('likes/').push(t1);
  response.send('added:'+t1);
});
app.get('/likem9',function(req,response){
    let t=req.query.t;
     t1=t.split(/[;]/)[1];
     t1=t1.split(/[@]/)[0];
     let ref=database.ref().child('class9/').child('mathematics/').child('likes/');
    database.ref().child('class9/').child('mathematics/').child('likes/').push(t1);
    response.send('added:'+t1);
});
app.get('/likes9',function(req,response){
      let t=req.query.t;
       t1=t.split(/[;]/)[1];
       t1=t1.split(/[@]/)[0];
       let ref=database.ref().child('class9/').child('science/').child('likes/');
      database.ref().child('class9/').child('science/').child('likes/').push(t1);
      response.send('added:'+t1);
});
app.get('/likem8',function(req,response){
        let t=req.query.t;
         t1=t.split(/[;]/)[1];
         t1=t1.split(/[@]/)[0];
         let ref=database.ref().child('class8/').child('mathematics/').child('likes/');
        database.ref().child('class8/').child('mathematics/').child('likes/').push(t1);
        response.send('added:'+t1);
});
app.get('/likes8',function(req,response){
          let t=req.query.t;
           t1=t.split(/[;]/)[1];
           t1=t1.split(/[@]/)[0];
           let ref=database.ref().child('class8/').child('science/').child('likes/');
          database.ref().child('class8/').child('science/').child('likes/').push(t1);
          response.send('added:'+t1);
});
app.get('/likem7',function(req,response){
            let t=req.query.t;
             t1=t.split(/[;]/)[1];
             t1=t1.split(/[@]/)[0];
             let ref=database.ref().child('class7/').child('mathematics/').child('likes/');
            database.ref().child('class7/').child('mathematics/').child('likes/').push(t1);
            response.send('added:'+t1);
});
app.get('/likes7',function(req,response){
  let t=req.query.t;
   t1=t.split(/[;]/)[1];
   t1=t1.split(/[@]/)[0];
   let ref=database.ref().child('class7/').child('science/').child('likes/');
  database.ref().child('class7/').child('science/').child('likes/').push(t1);
  response.send('added:'+t1);
});
app.get('/likem6',function(req,response){
  let t=req.query.t;
   t1=t.split(/[;]/)[1];
   t1=t1.split(/[@]/)[0];
   let ref=database.ref().child('class6/').child('mathematics/').child('likes/');
  database.ref().child('class6/').child('mathematics/').child('likes/').push(t1);
  response.send('added:'+t1);
});
app.get('/likes6',function(req,response){
  let t=req.query.t;
   t1=t.split(/[;]/)[1];
   t1=t1.split(/[@]/)[0];
   let ref=database.ref().child('class6/').child('science/').child('likes/');
  database.ref().child('class6/').child('science/').child('likes/').push(t1);
  response.send('added:'+t1);
});

exports.signUp=functions.https.onRequest(function(req,response){
  let email=req.query.email1;
  email=email.split(/[@]/)[0];
      let emailRef=email;
      let ref=database.ref().child('users/'+email).push('true');
      return response.send('done');
});
app.get('/adminemail',function(req,response){
   let ref=database.ref().child('admin');
   ref.once('value',function(snapshot){
     response.send(snapshot.val());
   });
});
app.get('/requestemail',function(req,response){
  let t=req.query.t;
  t1=t.split(/[;]/)[1];
  t1=t1.split(/[@]/)[0];
  response.send(t1);
});
app.get('/removem6',function(req,response){
  database.ref().child('class6/').child('mathematics/').child('fact1/').remove();
  database.ref().child('class6/').child('mathematics/').child('fact2/').remove();
  database.ref().child('class6/').child('mathematics/').child('fact3/').remove();
  database.ref().child('class6/').child('mathematics/').child('fact4/').remove();
  database.ref().child('class6/').child('mathematics/').child('fact5/').remove();
  database.ref().child('class6/').child('mathematics/').child('likes/').remove();
  response.send('removed all');
});
app.get('/removem10',function(req,response){
  database.ref().child('class10/').child('mathematics/').child('fact1/').remove();
  database.ref().child('class10/').child('mathematics/').child('fact2/').remove();
  database.ref().child('class10/').child('mathematics/').child('fact3/').remove();
  database.ref().child('class10/').child('mathematics/').child('fact4/').remove();
  database.ref().child('class10/').child('mathematics/').child('fact5/').remove();
  database.ref().child('class10/').child('mathematics/').child('likes/').remove();
  response.send('removed all');
});
app.get('/removem9',function(req,response){
  database.ref().child('class9/').child('mathematics/').child('fact1/').remove();
  database.ref().child('class9/').child('mathematics/').child('fact2/').remove();
  database.ref().child('class9/').child('mathematics/').child('fact3/').remove();
  database.ref().child('class9/').child('mathematics/').child('fact4/').remove();
  database.ref().child('class9/').child('mathematics/').child('fact5/').remove();
  database.ref().child('class9/').child('mathematics/').child('likes/').remove();
  response.send('removed all');
});
app.get('/removem8',function(req,response){
  database.ref().child('class8/').child('mathematics/').child('fact1/').remove();
  database.ref().child('class8/').child('mathematics/').child('fact2/').remove();
  database.ref().child('class8/').child('mathematics/').child('fact3/').remove();
  database.ref().child('class8/').child('mathematics/').child('fact4/').remove();
  database.ref().child('class8/').child('mathematics/').child('fact5/').remove();
  database.ref().child('class8/').child('mathematics/').child('likes/').remove();
  response.send('removed all');
});
app.get('/removem7',function(req,response){
  database.ref().child('class7/').child('mathematics/').child('fact1/').remove();
  database.ref().child('class7/').child('mathematics/').child('fact2/').remove();
  database.ref().child('class7/').child('mathematics/').child('fact3/').remove();
  database.ref().child('class7/').child('mathematics/').child('fact4/').remove();
  database.ref().child('class7/').child('mathematics/').child('fact5/').remove();
  database.ref().child('class7/').child('mathematics/').child('likes/').remove();
  response.send('removed all');
});
app.get('/removes6',function(req,response){
  database.ref().child('class6/').child('science/').child('fact1/').remove();
  database.ref().child('class6/').child('science/').child('fact2/').remove();
  database.ref().child('class6/').child('science/').child('fact3/').remove();
  database.ref().child('class6/').child('science/').child('fact4/').remove();
  database.ref().child('class6/').child('science/').child('fact5/').remove();
  database.ref().child('class6/').child('science/').child('likes/').remove();
  response.send('removed all');
});
app.get('/removes7',function(req,response){
  database.ref().child('class7/').child('science/').child('fact1/').remove();
  database.ref().child('class7/').child('science/').child('fact2/').remove();
  database.ref().child('class7/').child('science/').child('fact3/').remove();
  database.ref().child('class7/').child('science/').child('fact4/').remove();
  database.ref().child('class7/').child('science/').child('fact5/').remove();
  database.ref().child('class7/').child('science/').child('likes/').remove();
  response.send('removed all');
});
app.get('/removes8',function(req,response){
  database.ref().child('class8/').child('science/').child('fact1/').remove();
  database.ref().child('class8/').child('science/').child('fact2/').remove();
  database.ref().child('class8/').child('science/').child('fact3/').remove();
  database.ref().child('class8/').child('science/').child('fact4/').remove();
  database.ref().child('class8/').child('science/').child('fact5/').remove();
  database.ref().child('class8/').child('science/').child('likes/').remove();
  response.send('removed all');
});
app.get('/removes9',function(req,response){
  database.ref().child('class9/').child('science/').child('fact1/').remove();
  database.ref().child('class9/').child('science/').child('fact2/').remove();
  database.ref().child('class9/').child('science/').child('fact3/').remove();
  database.ref().child('class9/').child('science/').child('fact4/').remove();
  database.ref().child('class9/').child('science/').child('fact5/').remove();
  database.ref().child('class9/').child('science/').child('likes/').remove();
  response.send('removed all');
});
app.get('/removes10',function(req,response){
  database.ref().child('class10/').child('science/').child('fact1/').remove();
  database.ref().child('class10/').child('science/').child('fact2/').remove();
  database.ref().child('class10/').child('science/').child('fact3/').remove();
  database.ref().child('class10/').child('science/').child('fact4/').remove();
  database.ref().child('class10/').child('science/').child('fact5/').remove();
  database.ref().child('class10/').child('science/').child('likes/').remove();
  response.send('removed all');
});
app.get('/getf1m10',function(req,response)
{ 
let ref=database.ref().child('class10/').child('mathematics/').child('fact1/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getexact',function(req,response){
let t=req.query.t;
let t1=t.split(/[{]/)[1];
  let t2=t1.split(/[:]/)[1];
  let t3=t2.split(/["]/)[1];
  let t4=t3.split(/[}]/)[0];
response.send(t4);
});
app.get('/getf2m10',function(req,response)
{ 
let ref=database.ref().child('class10/').child('mathematics/').child('fact2/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf3m10',function(req,response)
{ 
let ref=database.ref().child('class10/').child('mathematics/').child('fact3/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf4m10',function(req,response)
{ 
let ref=database.ref().child('class10/').child('mathematics/').child('fact4/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf5m10',function(req,response)
{ 
let ref=database.ref().child('class10/').child('mathematics/').child('fact5/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf1s10',function(req,response)
{ 
let ref=database.ref().child('class10/').child('science/').child('fact1/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf2s10',function(req,response)
{ 
let ref=database.ref().child('class10/').child('science/').child('fact2/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf3s10',function(req,response)
{ 
let ref=database.ref().child('class10/').child('science/').child('fact3/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf4s10',function(req,response)
{ 
let ref=database.ref().child('class10/').child('science/').child('fact4/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf5s10',function(req,response)
{ 
let ref=database.ref().child('class10/').child('science/').child('fact5/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf1s9',function(req,response)
{ 
let ref=database.ref().child('class9/').child('science/').child('fact1/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf2s9',function(req,response)
{ 
let ref=database.ref().child('class9/').child('science/').child('fact2/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf3s9',function(req,response)
{ 
let ref=database.ref().child('class9/').child('science/').child('fact3/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf4s9',function(req,response)
{ 
let ref=database.ref().child('class9/').child('science/').child('fact4/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf5s9',function(req,response)
{ 
let ref=database.ref().child('class9/').child('science/').child('fact5/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf1s8',function(req,response)
{ 
let ref=database.ref().child('class8/').child('science/').child('fact1/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf2s8',function(req,response)
{ 
let ref=database.ref().child('class8/').child('science/').child('fact2/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf3s8',function(req,response)
{ 
let ref=database.ref().child('class8/').child('science/').child('fact3/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf4s8',function(req,response)
{ 
let ref=database.ref().child('class8/').child('science/').child('fact4/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf5s8',function(req,response)
{ 
let ref=database.ref().child('class8/').child('science/').child('fact5/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf1s7',function(req,response)
{ 
let ref=database.ref().child('class7/').child('science/').child('fact1/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf2s7',function(req,response)
{ 
let ref=database.ref().child('class7/').child('science/').child('fact2/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf3s7',function(req,response)
{ 
let ref=database.ref().child('class7/').child('science/').child('fact3/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf4s7',function(req,response)
{ 
let ref=database.ref().child('class7/').child('science/').child('fact4/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf5s7',function(req,response)
{ 
let ref=database.ref().child('class7/').child('science/').child('fact5/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf1s6',function(req,response)
{ 
let ref=database.ref().child('class6/').child('science/').child('fact1/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf2s6',function(req,response)
{ 
let ref=database.ref().child('class6/').child('science/').child('fact2/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf3s6',function(req,response)
{ 
let ref=database.ref().child('class6/').child('science/').child('fact3/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf4s6',function(req,response)
{ 
let ref=database.ref().child('class6/').child('science/').child('fact4/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf5s6',function(req,response)
{ 
let ref=database.ref().child('class6/').child('science/').child('fact5/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf1m9',function(req,response)
{ 
let ref=database.ref().child('class9/').child('mathematics/').child('fact1/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf2m9',function(req,response)
{ 
let ref=database.ref().child('class9/').child('mathematics/').child('fact2/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf3m9',function(req,response)
{ 
let ref=database.ref().child('class9/').child('mathematics/').child('fact3/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf4m9',function(req,response)
{ 
let ref=database.ref().child('class9/').child('mathematics/').child('fact4/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf5m9',function(req,response)
{ 
let ref=database.ref().child('class9/').child('mathematics/').child('fact5/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf1m8',function(req,response)
{ 
let ref=database.ref().child('class8/').child('mathematics/').child('fact1/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf2m8',function(req,response)
{ 
let ref=database.ref().child('class8/').child('mathematics/').child('fact2/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf3m8',function(req,response)
{ 
let ref=database.ref().child('class8/').child('mathematics/').child('fact3/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf4m8',function(req,response)
{ 
let ref=database.ref().child('class8/').child('mathematics/').child('fact4/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf5m8',function(req,response)
{ 
let ref=database.ref().child('class8/').child('mathematics/').child('fact5/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf1m7',function(req,response)
{ 
let ref=database.ref().child('class7/').child('mathematics/').child('fact1/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf2m7',function(req,response)
{ 
let ref=database.ref().child('class7/').child('mathematics/').child('fact2/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf3m7',function(req,response)
{ 
let ref=database.ref().child('class7/').child('mathematics/').child('fact3/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf4m7',function(req,response)
{ 
let ref=database.ref().child('class7/').child('mathematics/').child('fact4/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf5m7',function(req,response)
{ 
let ref=database.ref().child('class7/').child('mathematics/').child('fact5/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf1m6',function(req,response)
{ 
let ref=database.ref().child('class6/').child('mathematics/').child('fact1/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf2m6',function(req,response)
{ 
let ref=database.ref().child('class6/').child('mathematics/').child('fact2/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf3m6',function(req,response)
{ 
let ref=database.ref().child('class6/').child('mathematics/').child('fact3/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf4m6',function(req,response)
{ 
let ref=database.ref().child('class6/').child('mathematics/').child('fact4/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getf5m6',function(req,response)
{ 
let ref=database.ref().child('class6/').child('mathematics/').child('fact5/');
ref.on('value',function(snapshot){
response.send(snapshot.val());
})
});
app.get('/getlikem10',function(req,response){
  let ref=database.ref().child('class10/').child('mathematics/').child('/likes');
  ref.on('value',function(snapshot){
   let e=(snapshot.numChildren());
   response.send(e+'');
  })
});
app.get('/getlikem9',function(req,response){
  let ref=database.ref().child('class9/').child('mathematics/').child('/likes');
  ref.on('value',function(snapshot){
   let e=(snapshot.numChildren());
   response.send(e+'');
  })
});
app.get('/getlikem8',function(req,response){
  let ref=database.ref().child('class8/').child('mathematics/').child('/likes');
  ref.on('value',function(snapshot){
   let e=(snapshot.numChildren());
   response.send(e+'');
  })
});
app.get('/getlikem7',function(req,response){
  let ref=database.ref().child('class7/').child('mathematics/').child('/likes');
  ref.on('value',function(snapshot){
   let e=(snapshot.numChildren());
   response.send(e+'');
  })
});
app.get('/getlikem6',function(req,response){
  let ref=database.ref().child('class6/').child('mathematics/').child('/likes');
  ref.on('value',function(snapshot){
   let e=(snapshot.numChildren());
   response.send(e+'');
  })
});
app.get('/getlikes10',function(req,response){
  let ref=database.ref().child('class10/').child('science/').child('/likes');
  ref.on('value',function(snapshot){
   let e=(snapshot.numChildren());
   response.send(e+'');
  })
});
app.get('/getlikes9',function(req,response){
  let ref=database.ref().child('class9/').child('science/').child('/likes');
  ref.on('value',function(snapshot){
   let e=(snapshot.numChildren());
   response.send(e+'');
  })
});
app.get('/getlikes8',function(req,response){
  let ref=database.ref().child('class8/').child('science/').child('/likes');
  ref.on('value',function(snapshot){
   let e=(snapshot.numChildren());
   response.send(e+'');
  })
});
app.get('/getlikes7',function(req,response){
  let ref=database.ref().child('class7/').child('science/').child('/likes');
  ref.on('value',function(snapshot){
   let e=(snapshot.numChildren());
   response.send(e+'');
  })
});
app.get('/getlikes6',function(req,response){
  let ref=database.ref().child('class6/').child('science/').child('/likes');
  ref.on('value',function(snapshot){
   let e=(snapshot.numChildren());
   response.send(e+'');
  })
});