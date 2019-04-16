@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Upload ICD9 Phecode</div>

                    <div class="card-body">
                        <form action="{{ action("UploadController@uploadICD9Phecode") }}" method="POST"
                              enctype="multipart/form-data">
                            @csrf
                            <div>
                                <input type="file" name="upload" class="form-control" required>
                                <input type="submit" class="btn btn-primary" id="save" style="margin-top: 10px">
                            </div>
                        </form>

                        <div id="message" class="clearfix">
                            @include('flash::message')
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
