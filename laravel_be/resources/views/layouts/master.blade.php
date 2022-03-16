<!DOCTYPE html>
<html lang="en">
    @include('layouts.head')
  <body>

    <!-- az-header -->
    @include('layouts.header')

    @yield('content')

    @include('layouts.footer')

    @include('layouts.script')
  </body>
</html>
