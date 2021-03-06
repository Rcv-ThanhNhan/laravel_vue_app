<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Meta -->
    <meta name="description" content="Responsive Bootstrap 4 Dashboard Template">
    <meta name="author" content="BootstrapDash">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <!-- vendor css -->
    <link href="{{ versioned_asset('lib/ionicons/css/ionicons.min.css') }}" rel="stylesheet">
    <link href="{{ versioned_asset('lib/typicons.font/typicons.css') }}" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- azia CSS -->
    <link rel="stylesheet" href="{{ versioned_asset('css/azia.css') }}">
    <link rel="stylesheet" href="{{ versioned_asset('css/style.css') }}">


    {{-- #### API ##### --}}
    <script src="{{ versioned_asset('lib/jquery/jquery.min.js') }}"></script>

    @yield('api')

    <script src="{{ versioned_asset('js/main.js') }}"></script>
  </head>
