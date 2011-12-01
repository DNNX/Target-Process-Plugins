define(["tp/bus","tp/plugins/navigator","tp/status","tp/plugins/errorMessageContainer","libs/jquery/jquery","tp/jquery.utils"],function(a,b,c,d,e){function f(a){this._ctor(a)}f.prototype={_ctor:function(f){this.template='<div class="controls">\n    <div class="main-controls left">\n        <a href="javascript:void(0);" id="save" class="button success x-big">Save</a>\n        <a href="javascript:void(0);" id="cancel" style="color: #666; padding-left: 10px;">Back to plugins</a>\n    </div>\n    <div class="additional-controls right">\n    </div>\n    <div style="clear:both;" />\n</div>\n<div class="controls-widgets">\n</div> ',this.placeholder=f.placeholder,this.bus=a,this.navigator=b,this.status=c,this.errorMessageContainer=new d({placeholder:this.placeholder,generalErrorMessage:"Unable to save profile"}),this.bus.subscribe("ProfileControlsBlock",{onProfileSaveSucceed:e.proxy(this._onProfileSaveSucceed,this),onProfileSaveFailed:e.proxy(this._onProfileSaveFailed,this)},!0)},render:function(){var a=e(this.template),b=this;a.find("#save").click(function(){!e(this).enabled()||(b.errorMessageContainer.clearErrors(),e(this).enabled(!1),b.status.saving(),b.bus.publish("SaveProfile"))}),a.find("#cancel").click(function(){b.navigator.backToPlugins()}),this.placeholder.find(".controls-block").html(""),a.appendTo(this.placeholder.find(".controls-block")),this.errorMessageContainer.setOnFocusEvent(),this.bus.publish("ProfileControlsRendered",[{placeholder:this.placeholder}])},_onProfileSaveSucceed:function(a){this.status.profileSavedSuccessfully(),this.placeholder.find("#save").enabled(!0)},_onProfileSaveFailed:function(a){this.placeholder.find("#save").enabled(!0),this.status.error(this._getErrorMessage(a));!a||(a.data&&(this.errorMessageContainer.addRange(a.data),this.errorMessageContainer.render()),!a.message&&!a.data&&a.rawResponse&&(this.errorMessageContainer.add({FieldName:null,Message:a.rawResponse.responseText}),this.errorMessageContainer.render()))},_getErrorMessage:function(a){var b="Unable to save profile";a&&a.message&&(b=a.Message);return b}};return f})