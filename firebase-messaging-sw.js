// Import Firebase 8.0.0 (or another 8.x.x version)
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize Firebase app inside service worker
firebase.initializeApp({
  apiKey: "AIzaSyDJUIhJ0OIK0-KHNBFsTGFlth-mvIKviHQ",
  authDomain: "keepadmin.firebaseapp.com",
  projectId: "keepadmin",
  storageBucket: "keepadmin.appspot.com",
  messagingSenderId: "1046515623488",
  appId: "1:1046515623488:web:1ba2f626145405fcc621a5",
  measurementId: "G-79Z663VBGG"
});

// Initialize messaging instance
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '512.png' // Update with your icon path if needed
  };

  // Show notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});
