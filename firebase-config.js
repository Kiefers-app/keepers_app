// Firebase configuration - replace these values with your own
const firebaseConfig = {
  apiKey: "AIzaSyDJUIhJ0OIK0-KHNBFsTGFlth-mvIKviHQ",
  authDomain: "keepadmin.firebaseapp.com",
  projectId: "keepadmin",
  storageBucket: "keepadmin.appspot.com",
  messagingSenderId: "1046515623488",
  appId: "1:1046515623488:web:1ba2f626145405fcc621a5",
  measurementId: "G-79Z663VBGG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging instance
const messaging = firebase.messaging();

// Register service worker at custom path
navigator.serviceWorker.register('https://kiefers-app.github.io/keepers_app/firebase-messaging-sw.js')
  .then((registration) => {
    messaging.useServiceWorker(registration);
    console.log('Service Worker registered with custom path for Firebase Messaging');
  })
  .catch((error) => {
    console.error('Service Worker registration failed:', error);
  });

// Request notification permission and retrieve the FCM token
function requestNotificationPermission() {
  Notification.requestPermission()
    .then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        // Include VAPID key for web push if required
        return messaging.getToken({ vapidKey: 'BIRa73sEvvnMHydmBVT3OLIJLCwUrLhv5y6yyU7YLdewMCSQ7sHZ3kqc-gGIvkkk_COMuACAMjySj9VXEDsEF0M' });
      } else {
        console.warn('Notification permission denied');
      }
    })
    .then((token) => {
      if (token) {
        console.log('FCM Token:', token);
        // Here you can send the token to your server to store it
      } else {
        console.warn('No FCM token was retrieved.');
      }
    })
    .catch((error) => {
      console.error('Error while getting FCM token or permission:', error);
    });
}

// Listen for incoming messages when the page is in focus
messaging.onMessage((payload) => {
  console.log('Message received in foreground:', payload);
  // Display notification or update UI with the payload data if needed
});

// Expose the permission request function for manual invocation
window.requestNotificationPermission = requestNotificationPermission;
