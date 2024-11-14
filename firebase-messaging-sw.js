importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

// Firebase configuration - replace with your own values
firebase.initializeApp({
    apiKey: "AIzaSyDJUIhJ0OIK0-KHNBFsTGFlth-mvIKviHQ",
    authDomain: "keepadmin.firebaseapp.com",
    projectId: "keepadmin",
    storageBucket: "keepadmin.appspot.com",
    messagingSenderId: "1046515623488",
    appId: "1:1046515623488:web:1ba2f626145405fcc621a5",
    measurementId: "G-79Z663VBGG"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon,
  });
});
