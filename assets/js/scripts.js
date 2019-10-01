jQuery(function ($) {
	$('document').ready(function () {
		$('button').modaal({
			accessible_title: 'Je dépose mon dossier',
			content_source:'#formulaire',
			hide_close:true,
			overlay_opacity : 0.8,
			background: '#000',
			width:695,
		});

		$('a.close').click(function (e) { 
			e.preventDefault();
			$('button').modaal('close');
		});

		var validate_form = 1;
		var theForm= jQuery('#theForm');
		var email = jQuery('#email');
		var firstname = jQuery('#firstname');
		var lastname = jQuery('#lastname');
		var tel = jQuery('#tel');
		var pcode = jQuery('#pcode');
		var city = jQuery('#city');
		var optin = jQuery('#optin');
		var submit = jQuery('#submit');

		theForm.submit(function(e){
			console.log("submit");
			e.preventDefault();
		});

		$(".form-group input").focus(function (e) { 
			$(this).parent().addClass('focus');
		});

		$(".form-group input").keypress(function (e) { 
			checkFormComplete();
		});

		$(".form-group input").focusout(function() {
			if ($(this).val()=="") {
				$(this).parent().removeClass('focus');
				submit.addClass('disabled');
			} else {
				checkFormComplete(); /*autocomplete*/
			}
		});

		function checkFormComplete() {
			var formComplete=1;
			$(".form-group input").each(function () {
				if ($(this).val()=="") {
					formComplete=0;
					return false;
				} 
			});
			if (formComplete==1) {
				submit.removeClass('disabled');
			} else {
				submit.addClass('disabled');
			}
		}

	});
});