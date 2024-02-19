const sendNotification = async (req, res) => {
  const { userId, message } = req.body;
  try {
    // Logic to send notification to the user (e.g., using push notifications)
    // You can use a service like Firebase Cloud Messaging (FCM) for push notifications
    // Example:
    // firebase.messaging().sendToDevice(userId, { data: { message } });
    res.status(200).json({ message: "Notification sent successfully" });
  } catch (error) {
    console.error("Error sending notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  sendNotification,
};
