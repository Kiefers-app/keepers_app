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
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '512.png',
    data: {
      url: 'https://kiefers-app.github.io/keepers_app/',
      sound: 'https://kiefers-app.github.io/keepers_app/ding.mp3'
    }
  };
  // Show notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Listen for notification click event
self.addEventListener('notificationclick', (event) => {
  event.notification.close(); // Close the notification

  // Open the URL specified in the notification data
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      for (const client of clientList) {
        // Check if the PWA or web app is already open
        if (client.url === event.notification.data.url && 'focus' in client) {
          return client.focus();
        }
      }
      // If not, open a new window/tab with the URL
      if (clients.openWindow) {
        return clients.openWindow(event.notification.data.url);
      }
    })
  );
});

// Play sound when notification is displayed
self.addEventListener('notificationclose', () => {
  const audio = new Audio('https://kiefers-app.github.io/keepers_app/ding.mp3');
  audio.play().catch((error) => console.error('Error playing sound:', error));
});
