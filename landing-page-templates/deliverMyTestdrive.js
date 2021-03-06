// JavaScript Document

//*** DESKTOP *** //

//Deliver My Test Drive CTA on VLP & VDP

jQuery('.vlp .item').each(function () {
	var item = $(this).attr('data-uuid');
	jQuery(this).find('.hproduct a.btn.ddc-btn.btn-default.ddc-btn-default.view-link').before('<a class="btn btn-primary dialog" data-href="/schedule-form.htm?itemId=' + item + '&category=AUTO" title="Deliver My Test Drive"><span class="ui-button-text">Deliver My Test Drive</span></a>');
});

jQuery('.vdp .inventory-detail-pricing .pricing').append('<a class="btn btn-primary btn-lg dialog btn-block" rel="nofollow" data-width="375" data-href="/schedule-form.htm?itemId=|itemId|&category=|category|&parentPageAlias=AUTO_USED_DETAILS"><i class="fa fa-automobile"></i>Deliver My Test Drive</a>');


/* -- Deliver My Test Drive DESKTOP -- */

.vdp .inventory-detail-pricing i.fa.fa-automobile {
    display: block;
    left: 0;
    position: absolute;
    height: 100%;
    top: 0%;
    vertical-align: middle;
    color: #126aae;
    border: 1px solid #126aae;
    background-color: #fff;
    width: 53px;
    line-height: 43px;
}
.vdp .inventory-detail-pricing a.btn.btn-primary.btn-lg.dialog.btn-block {
    position: relative;
    padding-left: 50.5px;
}
.vdp .links-list  .ddc-btn:nth-of-type(3) {
    display: none;
}
.vdp .links-list .ddc-btn:nth-child(4), .vdp .links-list .ddc-btn:nth-child(5) {
    background: #282828;
}
.vdp .links-list .ddc-btn:nth-child(4):hover, .vdp .links-list .ddc-btn:nth-child(5):hover {
    background: #126aae;
}
.vlp .pricing-area.has-buttons a.btn.btn-primary.dialog {
    width: 100%;
    background: #0e456f;
}
.vlp .pricing-area.has-buttons a.btn.btn-primary.dialog:hover {
    background: #000;
}

.vlp .inventoryList li.item div.calloutDetails ul {
    position: absolute;
    left: 0;
    top: 254px;
    width: 240px;
    height: 200px;
}
.vlp .inventoryList li.item div.calloutDetails ul img {
    padding: 5px 0; 
}




//*** MOBILE *** //

//Deliver My Test Drive CTA on VLP & VDP

jQuery('.vlp .item').each(function () {
	var item = $(this).attr('data-uuid');
	jQuery(this).find('.hproduct span.eprice').after('<a class="btn btn-primary dialog" data-href="/schedule-form.htm?itemId=' + item + '&category=AUTO"  title="Deliver My Test Drive" style="display:block; margin-top: 10px;"><span class="ui-button-text">Deliver My Test Drive</span></a>');
});

jQuery('.vdp .links-list').prepend('<a class="btn btn-primary btn-lg dialog btn-block"  rel="nofollow" data-width="375" data-href="/schedule-form.htm?itemId=|itemId|&category=|category|&parentPageAlias=AUTO_USED_DETAILS">Deliver My Test Drive</a>');

/* -- Deliver My Test Drive MOBILE -- */

.vdp .links-list  .ddc-btn:nth-of-type(1) {
    display: none;
}




