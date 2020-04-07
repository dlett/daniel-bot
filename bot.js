const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: 'Daniel_Lett BOT',
    password: ''
  },
  channels: [
    'Hitchariide'
  ]
};
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName === '!myd') {
    if (target === 'UAWildcat50') {
      client.say(target, 'Very smoll');
    } else if (target === 'Daniel_Lett') {
      client.say(target, 'YUGEEE');
    }
  }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

