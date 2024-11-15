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

// Request notification permission and get the FCM token
function requestNotificationPermission() {
  Notification.requestPermission()
    .then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        return messaging.getToken();
      } else {
        console.warn('Notification permission denied');
      }
    })
    .then((token) => {
      if (token) {
        console.log('FCM Token:', token);
        // Save token to your server for later use
      }
    })
    .catch((error) => {
      console.error('Permission denied or error occurred:', error);
    });
}

// Listen for incoming messages while the page is in focus
messaging.onMessage((payload) => {
  console.log('Message received in foreground:', payload);
  // Optionally show notification or update UI based on payload
});

// Expose the permission request function for manual invocation
window.requestNotificationPermission = requestNotificationPermission;
