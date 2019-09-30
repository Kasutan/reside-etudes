jQuery(function ($) {
	$('document').ready(function () {
		console.log('test script');
		$('button').modaal({
			accessible_title: 'Je dépose mon dossier',
			content_source:'#formulaire',
			close_text:' Fermer',
			close_aria_label:'Fermer (appuyer sur ESC pour fermer)',
			overlay_opacity : 0.6,
			background: '#000',
		});
	});
});