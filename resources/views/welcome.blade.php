@extends('shopify-app::layouts.default')

@section('content')
    <div id="app">
        <navbar></navbar>
        <router-view></router-view>
        <footerhelp></footerhelp>
    </div>
@endsection
