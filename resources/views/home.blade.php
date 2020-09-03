<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="/images/favicon.ico">
    <title>Oliver & Grimsley, LLC Firm Client System</title>

    <!-- Styles -->
    <link href="/css/tailwind.css" rel="stylesheet">
</head>
<body class="bg-grey-lighter h-screen font-sans">
  <div id="app" style="margin-top: 1.2em;" class="container mx-auto">

    <div class="flex flex-col">
            <navigation v-if="getIsUserLoggedIn"></navigation>
            <router-view></router-view>
    </div>
</div>

{{-- <script src="/js/app.js"></script> --}}
<script src="/js/app.js"></script>
</body>
</html>