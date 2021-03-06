$(document).ready(function () {
    $('.search-select2').select2({
            width: '100%',
            placeholder: 'Please enter 1 or more characters to search',
            ajax: {
                url: './api/searchPhecode',
                dataType: 'json',
                delay: 1,
                data: function (params) {
                    return {
                        code: params.term, // search term
                        limit: 50
                    };
                },
                processResults: function (data, params) {
                    params.page = params.page || 1;

                    let newData = [];
                    data.data.forEach(function (item, index) {
                        newData.push({
                            'id': item.code,
                            'text': item.code + ' (' + item.description + ')'
                        });
                    });

                    data.data = newData;
                    return {
                        results: data.data,
                        pagination: {
                            more: (params.page * 30) < data.total_count
                        }
                    };
                },
                cache: true
            },
            minimumInputLength: 1
        }
    );
});
