# Korean Word Telegram Bot

A Telegram bot that sends daily random Korean words with translations to help users learn Korean vocabulary.

## Features

- Daily delivery of random Korean words with English translations
- User registration system to receive daily words
- Command interface for on-demand word requests
- Simple word database with categories (basic, intermediate, advanced)
- Usage statistics to track learning progress
- Option to review previously sent words

## Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```
   BOT_TOKEN=your_telegram_bot_token_here
   DAILY_SEND_TIME="0 9 * * *"
   ```
4. Get a bot token from [@BotFather](https://t.me/BotFather) on Telegram
5. Start the bot:
   ```
   npm start
   ```

## Available Commands

- `/start` - Start the bot
- `/word` - Get a random Korean word right now
- `/level` - Set your difficulty level (basic, intermediate, advanced)
- `/stats` - See your learning statistics
- `/subscribe` - Subscribe to daily words
- `/unsubscribe` - Unsubscribe from daily words
- `/help` - Display help information

## Development

- Run the bot in development mode with hot reloading:
  ```
  npm run dev
  ```

## License

MIT