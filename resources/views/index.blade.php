<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="dns-prefetch" href="//fonts.gstatic.com">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merriweather|Roboto:400">
  <link rel="stylesheet" href="https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css">
  <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body>
  <h1> SuperSuperChat </h1>
  <div id="app">
    <router-view></router-view>
  </div>
  <script src="{{ mix('js/app.js') }}" defer></script>
</body>
</html>