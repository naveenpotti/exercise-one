
Handlebars.registerHelper("user-details", function(user) {    
   return new Handlebars.SafeString(`<li>${user.name} <img src="{{user.avatar}}" /> ${user.createdDate} ${id}</li>`);
});
