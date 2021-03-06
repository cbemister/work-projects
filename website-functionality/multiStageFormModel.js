
$(document).ready(function() {

	var formStep = 1;
	var formCompleted = false;
	var page = $('.page-bd').html();
	
	var $dialog = $('<div></div>')
		.html(page)
		.dialog({
			modal: true,
			resizable: false,
			autoOpen: false,
			title: 'We Will Buy Your Vehicle',
			height: 600,
			width: 600,
			open: function () {

				//$(this).load('/financing/calculator.htm');

			},
			close: function () {
				console.log('closed');
				formStep = 0;
				formCompleted = false;
				renderForm();
			}
		});
	
	$('#launchDialog').click(function () {

		$dialog.dialog('open');

		// prevent the default action, e.g., following a link
		return false;
	});	

	
// FORM STAGE

jQuery('.ui-dialog-titlebar.ui-widget-header.ui-corner-all.ui-helper-clearfix').after(`
	<ul class="formStage">
		<li data-form-step="1">Contact Information</li>
		<li data-form-step="2">Enter Vin</li>
		<li data-form-step="3">Confirm Trade-in</li>
		<li data-form-step="4">Additional Features</li>
		<li data-form-step="5">Confirm Condition</li>
		<li data-form-step="6">Appraisal</li>
	</ul>
`)
	
jQuery('.formStage li').click(function(){
	var formStepClick = jQuery(this).data('form-step')
	formStep = formStepClick;
	renderForm(formStep, true);
})
	
// MULTISTAGE FORM LOGIC
	
changeToNextButton();
	
// SET FORM STAGE BG COLOUR 
jQuery('ul.formStage li:nth-of-type('+ formStep + ')').css('background', '#0a2972');
	
	jQuery("button.ui-button-submit").click(function (event) {
		
		renderForm();
		
	});
	
	function changeToNextButton() {
		// CHANGED SUBMIT BUTTON TO NEXT BUTTON
		jQuery(".type-1.contact-form button").prop("type", "button");
		jQuery(".type-1.contact-form button").html('Next  <i class="fa fa-arrow-right"></i>');
	}
	
	function renderForm(step, menuClick) {
		
		if (!step) {
			step = formStep;
		}
		
		var numAdj = menuClick ? 0 : 1
		
		jQuery('ul.formStage li').css('background', '#303a51');
		jQuery('ul.formStage li:nth-of-type('+ (step + numAdj)  + ')').css('background', '#0a2972');

		if (!formCompleted) {


			
			jQuery('.contact-form fieldset').css('visibility', 'hidden').css('position', 'absolute');

			jQuery('.contact-form fieldset:nth-of-type('+ (step + numAdj) + ')').css('visibility', 'initial').css('position', 'relative');
			
			if (step === (6 - numAdj)) {
				formCompleted = true;
				jQuery(".contact-form button.ui-button-submit").prop("type", "submit");
				jQuery(".contact-form button").text("Get Your Cash!");
			} else {
				changeToNextButton();
			}
			step++;
			formStep = step;

		} else {
			
			jQuery('.contact-form fieldset').css('visibility', 'hidden').css('position', 'absolute');

			jQuery('.contact-form input ').each(function () {
				var input = jQuery(this).val();
				if (input.length > 0) {
					jQuery(this).closest('.form-group').css('visibility', 'hidden').css('position', 'absolute');
				} else {

					jQuery(this).closest('fieldset').css('visibility', 'initial').css('position', 'initial');

				}
			});

			formCompleted = false;
			formStep = 1;
		}
		
		console.log(formStep)
		
	}
	
});
