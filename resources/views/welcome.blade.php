@extends('shopify-app::layouts.default')

@section('content')
    <div id="app">
        <navbar></navbar>
    </div>
@endsection

@section('scripts')
    @parent

    <script>
        actions.TitleBar.create(app, { title: 'Welcome' });
    </script>
@endsection
