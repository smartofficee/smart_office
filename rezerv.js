// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3001;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// const functions = require('firebase-functions');
// const admin = require("firebase-admin");

// var serviceAccount = require("./smart-office-e6873-firebase-adminsdk-2cgr1-439628b621.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://smart-office-e6873-default-rtdb.asia-southeast1.firebasedatabase.app"
// });











// const http = require('http');
// const admin = require("firebase-admin");

// const hostname = '127.0.0.1';
// const port = 3001;

// // Update the path to your JSON key file
// const serviceAccount = require("./smart-office-e6873-494145b0b67b.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://smart-office-e6873-default-rtdb.asia-southeast1.firebasedatabase.app"
// });

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

















const http = require('http');
const admin = require("firebase-admin");

const hostname = '127.0.0.1';
const port = 3001;


const serviceAccount = require("./smart-office-e6873-5f91a3131992.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  apiKey: "AIzaSyA3txSt2Tm0q4XByth4ligkMqmsaWF7xuc",
  authDomain: "smart-office-e6873.firebaseapp.com",
  databaseURL: "https://smart-office-e6873-default-rtdb.asia-southeast1.firebasedatabase.app",
  
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Worlddd');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



const {logger} = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const {onDocumentCreated} = require("firebase-functions/v2/firestore");

// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");

// initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into
// Firestore under the path /messages/:documentId/original
exports.addmessage = onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await getFirestore()
      .collection("messages")
      .add({original: original});
  // Send back a message that we've successfully written the message
  res.json({result: `Message with ID: ${writeResult.id} added.`});
});

// Listens for new messages added to /messages/:documentId/original
// and saves an uppercased version of the message
// to /messages/:documentId/uppercase
exports.makeuppercase = onDocumentCreated("/messages/{documentId}", (event) => {
  // Grab the current value of what was written to Firestore.
  const original = event.data.data().original;

  // Access the parameter `{documentId}` with `event.params`
  logger.log("Uppercasing", event.params.documentId, original);

  const uppercase = original.toUpperCase();

  // You must return a Promise when performing
  // asynchronous tasks inside a function
  // such as writing to Firestore.
  // Setting an 'uppercase' field in Firestore document returns a Promise.
  return event.data.ref.set({uppercase}, {merge: true});
});















































const db = admin.firestore();
const refPath = 'master-1/relay/0';
const realtimeRef = admin.database().ref(refPath);

realtimeRef.on('value', async (snapshot) => {
  try {
    const value = snapshot.val();
    console.log('New value:', value);
    const timestamp = new Date().toISOString(); // Получаем текущую дату и время в формате строки

    // Сохраняем значение в Firestore с использованием текущей даты в качестве имени документа
    await db.collection('0').doc(timestamp).set({
      value,
    });

    console.log('Value saved to Firestore!');
  } catch (error) {
    console.error('Error:', error);
  }
});










const db1 = admin.firestore();
const refPath1 = 'master-1/relay/1';
const realtimeRef1 = admin.database().ref(refPath1);

realtimeRef1.on('value', async (snapshot) => {
  try {
    const value = snapshot.val();
    console.log('New value:', value);
    const timestamp = new Date().toISOString(); // Получаем текущую дату и время в формате строки

    // Сохраняем значение в Firestore с использованием текущей даты в качестве имени документа
    await db1.collection('1').doc(timestamp).set({
      value,
    });

    console.log('Value saved to Firestore!');
  } catch (error) {
    console.error('Error:', error);
  }
});



const db2 = admin.firestore();
const refPath2 = 'master-1/relay/2';
const realtimeRef2 = admin.database().ref(refPath2);

realtimeRef2.on('value', async (snapshot) => {
  try {
    const value = snapshot.val();
    console.log('New value:', value);
    const timestamp = new Date().toISOString(); // Получаем текущую дату и время в формате строки

    // Сохраняем значение в Firestore с использованием текущей даты в качестве имени документа
    await db2.collection('2').doc(timestamp).set({
      value,
    });

    console.log('Value saved to Firestore!');
  } catch (error) {
    console.error('Error:', error);
  }
});





const db3 = admin.firestore();
const refPath3 = 'master-1/relay/3';
const realtimeRef3 = admin.database().ref(refPath3);

realtimeRef3.on('value', async (snapshot) => {
  try {
    const value = snapshot.val();
    console.log('New value:', value);
    const timestamp = new Date().toISOString(); // Получаем текущую дату и время в формате строки

    // Сохраняем значение в Firestore с использованием текущей даты в качестве имени документа
    await db3.collection('3').doc(timestamp).set({
      value,
    });

    console.log('Value saved to Firestore!');
  } catch (error) {
    console.error('Error:', error);
  }
});






const db4 = admin.firestore();
const refPath4 = 'master-1/relay/4';
const realtimeRef4 = admin.database().ref(refPath4);

realtimeRef4.on('value', async (snapshot) => {
  try {
    const value = snapshot.val();
    console.log('New value:', value);
    const timestamp = new Date().toISOString(); // Получаем текущую дату и время в формате строки

    // Сохраняем значение в Firestore с использованием текущей даты в качестве имени документа
    await db4.collection('4').doc(timestamp).set({
      value,
    });

    console.log('Value saved to Firestore!');
  } catch (error) {
    console.error('Error:', error);
  }
});






const db5 = admin.firestore();
const refPath5 = 'master-1/relay/5';
const realtimeRef5 = admin.database().ref(refPath5);

realtimeRef5.on('value', async (snapshot) => {
  try {
    const value = snapshot.val();
    console.log('New value:', value);
    const timestamp = new Date().toISOString(); // Получаем текущую дату и время в формате строки

    // Сохраняем значение в Firestore с использованием текущей даты в качестве имени документа
    await db5.collection('5').doc(timestamp).set({
      value,
    });

    console.log('Value saved to Firestore!');
  } catch (error) {
    console.error('Error:', error);
  }
});




const db6 = admin.firestore();
const refPath6 = 'master-1/relay/6';
const realtimeRef6 = admin.database().ref(refPath6);

realtimeRef6.on('value', async (snapshot) => {
  try {
    const value = snapshot.val();
    console.log('New value:', value);
    const timestamp = new Date().toISOString(); // Получаем текущую дату и время в формате строки

    // Сохраняем значение в Firestore с использованием текущей даты в качестве имени документа
    await db6.collection('6').doc(timestamp).set({
      value,
    });

    console.log('Value saved to Firestore!');
  } catch (error) {
    console.error('Error:', error);
  }
});






const db7 = admin.firestore();
const refPath7 = 'master-1/relay/7';
const realtimeRef7 = admin.database().ref(refPath7);

realtimeRef7.on('value', async (snapshot) => {
  try {
    const value = snapshot.val();
    console.log('New value:', value);
    const timestamp = new Date().toISOString(); // Получаем текущую дату и время в формате строки

    // Сохраняем значение в Firestore с использованием текущей даты в качестве имени документа
    await db7.collection('7').doc(timestamp).set({
      value,
    });

    console.log('Value saved to Firestore!');
  } catch (error) {
    console.error('Error:', error);
  }
});





const db8 = admin.firestore();
const refPath8 = 'modem-1/BME-280';
const realtimeRef8 = admin.database().ref(refPath8);
const humidityRef = admin.database().ref(refPath8).child('humidity');
const pressureRef = admin.database().ref(refPath8).child('pressure');
const temperatureRef = admin.database().ref(refPath8).child('temperature');
const packageRef = admin.database().ref(refPath8).child('package number');

realtimeRef8.on('value', async (snapshot) => {
  try {
    // const value = snapshot.val();
    const humidity = snapshot.child('humidity').val();
    const pressure = snapshot.child('pressure').val();
    const temperature = snapshot.child('temperature').val();
    const package = snapshot.child('package number').val();

    // console.log('New value:', value);
    // const timestamp = new Date().toISOString(); // Получаем текущую дату и время в формате строки

    // Сохраняем значение в Firestore с использованием текущей даты в качестве имени документа
    await db8.collection('modem-1').doc().set({
      humidity,
      pressure,
      temperature,
      package
    });

    console.log('saved to Firestore!');
  } catch (error) {
    console.error('Error:', error);
  }
});







const db9 = admin.firestore();
const refPath9 = 'modem-2/BME-280';
const realtimeRef9 = admin.database().ref(refPath9);
const humidityRef2 = admin.database().ref(refPath9).child('humidity');
const pressureRef2 = admin.database().ref(refPath9).child('pressure');
const temperatureRef2 = admin.database().ref(refPath9).child('temperature');
const packageRef2 = admin.database().ref(refPath9).child('package number');

realtimeRef9.on('value', async (snapshot) => {
  try {
    // const value = snapshot.val();
    const humidity = snapshot.child('humidity').val();
    const pressure = snapshot.child('pressure').val();
    const temperature = snapshot.child('temperature').val();
    const package = snapshot.child('package number').val();

    // console.log('New value:', value);
    // const timestamp = new Date().toISOString(); // Получаем текущую дату и время в формате строки

    // Сохраняем значение в Firestore с использованием текущей даты в качестве имени документа
    await db9.collection('modem-2').doc().set({
      humidity,
      pressure,
      temperature,
      package
    });

    console.log('saved to Firestore!');
  } catch (error) {
    console.error('Error:', error);
  }
});













// const db9 = admin.firestore();
// const refPath9 = 'modem-2/CCS-811';
// const realtimeRef9 = admin.database().ref(refPath9);
// const co2Ref = admin.database().ref(refPath8).child('co2');
// const tvocRef = admin.database().ref(refPath8).child('tvoc');

// realtimeRef9.on('value', async (snapshot) => {
//   try {
//     // const value = snapshot.val();
//     const co2 = snapshot.child('co2').val();
//     const tvoc = snapshot.child('tvoc').val();
//     // console.log('New value:', value);
//     const timestamp = new Date().toISOString(); // Получаем текущую дату и время в формате строки

//     // Сохраняем значение в Firestore с использованием текущей даты в качестве имени документа
//     await db9.collection('CCS-811').doc(timestamp).set({
//       co2,
//       tvoc,
//     });

//     console.log('saved to Firestore!');
//   } catch (error) {
//     console.error('Error:', error);
//   }
// });

