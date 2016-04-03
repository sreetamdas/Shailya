 	$(document).ready(function () {
 	    function submit() {

 	        var name = encodeURIComponent($('#name').val());
 	        var email = encodeURIComponent($('#email').val());
 	        var contactNumber = encodeURIComponent($('#contactNumber').val());
 	        var message = encodeURIComponent($('#message').val());
 	        var baseURL = 'https://docs.google.com/forms/d/12hFzKLXTaaKl9EMB_PdIKD3JcMfiJDaxJPqHbZZU0GQ/formResponse?';
 	        var submitRef = '&submit=Submit';
 	        var nameID = "entry.1768691451=";
 	        var emailID = "&entry.1133368623=";
 	        var contactNumberID = "&entry.567409688=";
 	        var messageID = "&entry.206445258=";

 	        console.log(name + email + contactNumber + message);

 	        var submitURL = (baseURL + nameID + name + emailID + email + contactNumberID + contactNumber + messageID + message + submitRef);

 	        if ((name != "") && (email != "") && (contactNumber != "")) {

 	            console.log(submitURL);
 	            $(this)[0].action = submitURL;

 	            $("iframe").load(function () {

 	                document.getElementById('querySubmit').value = 'Submitted';
 	                document.getElementById('querySubmit').disabled = true;
 	                var dialog = document.getElementById('queryModal');

 	                dialog.show();
 	                document.getElementById('queryModal').onclick = function () {
 	                    dialog.close();
 	                };
 	            });

 	        }
 	    }
 	    $("#queryForm").click(submit);
 	});


 	$(document).ready(function () {
 	    $('a[href^="#"]').on('click', function (e) {
 	        e.preventDefault();

 	        var target = this.hash;
 	        var $target = $(target);

 	        $('html, body').stop().animate({
 	            'scrollTop': $target.offset().top
 	        }, 700, 'swing');
 	    });
 	});