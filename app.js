(function(){
    var getUerList= function() {
            const request= {
                url: ' https://5dc588200bbd050014fb8ae1.mockapi.io/assessment',
                method: 'GET',
                data: null,
                success: function(res){
                    console.log('res', res);
                },
                error: function() {
                    console.log('error');
                }
            };

            $.ajax(request);
    };
})();

getuserList();