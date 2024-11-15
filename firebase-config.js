// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Register service worker at custom path
navigator.serviceWorker.register('/keepers_app/firebase-messaging-sw.js')
  .then((registration) => {
    messaging.useServiceWorker(registration);
    console.log('Service Worker registered with custom path for Firebase Messaging');
  })
  .catch((error) => {
    console.error('Service Worker registration failed:', error);
  });

// Request notification permission
function requestNotificationPermission() {
  return Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      return messaging.getToken({ vapidKey: "BIRa73sEvvnMHydmBVT3OLIJLCwUrLhv5y6yyU7YLdewMCSQ7sHZ3kqc-gGIvkkk_COMuACAMjySj9VXEDsEF0M" });
    } else {
      console.warn('Notification permission denied');
      return null;
    }
  });
}

// Listen for foreground messages
messaging.onMessage((payload) => {
  console.log('Received foreground message:', payload);
  alert(`Notification: ${payload.notification.title} - ${payload.notification.body}`);
});

// Expose functions to window for use in React
window.requestNotificationPermission = requestNotificationPermission;
