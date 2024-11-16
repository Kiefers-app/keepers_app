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

  const hj = localStorage.getItem("fcm");
  if(!hj){
    document.getElementById("hg").style.display = 'block';
  }else{
    document.getElementById("hg").style.display = 'none';
  }


  function hideper () {
    document.getElementById("hg").style.display = 'none';
  }

  
// Request notification permission and get the FCM token
function requestNotificationPermission() {
  document.getElementById("ene").innerHTML = 'Allowing..';
  setTimeout(() => {
    console.log("asking permission")
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
          localStorage.setItem("fcm", token);
          document.getElementById("ene").innerHTML = 'Enable';
          document.getElementById("hg").style.display = 'none';
          // Save token to your server for later use
        }
      })
      .catch((error) => {
        console.error('Permission denied or error occurred:', error);
      });
  }, 3000);  // Delay the request by 3 seconds
}

// Make the function accessible in global scope
window.requestNotificationPermission = requestNotificationPermission;

// Listen for incoming messages while the page is in focus
messaging.onMessage((payload) => {
  console.log('Message received in foreground:', payload);

  // Optional: Show a notification with the Notification API
  const notificationTitle = payload.notification?.title || 'New Notification';
  const notificationOptions = {
    body: payload.notification?.body ?? 'You have a new message.',
    icon: 'https://kiefers-app.github.io/keepers_app/512.png',  // Specify a default icon if needed
    data: {
      url: 'https://kiefers-app.github.io/keepers_app/' // URL to open when clicked
    }
  };

  // Display the notification if Notification permissions are granted
  if (Notification.permission === 'granted') {
    const notification = new Notification(notificationTitle, notificationOptions);

    // Play sound when the notification is displayed
    const audio = new Audio('https://kiefers-app.github.io/keepers_app/ding.mp3'); // Provide the URL of the sound file
    audio.play().catch((error) => console.error('Audio play failed:', error));

    // Optionally handle click to open a URL
    notification.onclick = (event) => {
      event.preventDefault(); // Prevent the default action (which is typically focus)
      window.open(notificationOptions.data.url, '_blank');
    };
  }
});

