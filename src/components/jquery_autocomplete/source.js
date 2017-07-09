
(function ($) {

    $.fn.extend({
        animateCss: function (animationName, cb) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
                if (cb && typeof cb == 'function') {
                    cb.call(cb);
                }
            });
        }
    });

    $('#btn').click(function () {
        var value = $('#autocomplete').val();

        if (value.length > 2) {
            $(this).animateCss('shake', function () {
                alert('글자 수가 넘었습니다.');
            });
        }

    });

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
            $('#autocomplete').autocomplete().setOptions({
                lookup: localVariable
            });
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