
(function ($) {


    var localVariable = [];

    $('#autocomplete').autocomplete({
        lookup: localVariable,
        showNoSuggestionNotice: true,
        groupBy: 'category',
        onSelect: function (suggestion) {
            console.log(suggestion);
        }
    });

    var HttpService = {
        send: function (term) {
            var promise = $.Deferred();
            setTimeout(function () {
                promise.resolve({ value: term, data: term + ' -> found' });
            }, 1000);

            return promise.promise();
        }
    };

    var autocomplete = document.querySelector('#autocomplete');

    var observable = Rx.Observable.fromEvent($('#autocomplete'), 'keyup')
        .pluck('target', 'value')
        .debounce(750)
        .distinctUntilChanged()
        //.withLatestFrom()
        .flatMapLatest(HttpService.send);
    

    observable.subscribe(
        function (val) { 
            localVariable.push(val);
            console.log(val); 
        }, 
        
        function (val) {
            console.log(val);    
        }, 
        
        function (val) {
            console.log(Val);
        }
    );



})(jQuery);