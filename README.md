# nagesen
  Tipping YouTube Live (superchat) randamly.

  ©︎ u-sho, s-nitta4

## How to set up
  1.  your first time (or when add packeges)
  ```
  composer install
  ```
  
  2.  only your fist time
  ```
  cp .env.example .env
  php artisan key:generate
  ```
  
  3.  node packege install
  ```
  npm install
  ```
  
  4.  build and observe
  ```
  npm run watch
  ```
  
  5.  execute
  ```
  php artisan serve
  ```
  and the on other bash
  ```
  ./ngrok http 8000
  ```
  check https://YOUR_NGROK_DOMAIN.io/nagesen/login
