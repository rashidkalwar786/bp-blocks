parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TmUL":[function(require,module,exports) {
var e=wp.blocks.registerBlockType,t=wp.element,n=t.createElement,s=t.Fragment,l=wp.components,i=l.Placeholder,r=l.Disabled,a=l.PanelBody,o=l.SelectControl,d=l.ToggleControl,u=l.Toolbar,p=l.ToolbarButton,b=wp.blockEditor,m=b.InspectorControls,y=b.BlockControls,c=wp.data.withSelect,g=wp.compose.compose,h=wp.editor.ServerSideRender,v=wp.i18n.__,f=bp.blockComponents.AutoCompleter,C=[{label:v("None","buddypress"),value:"none"},{label:v("Thumb","buddypress"),value:"thumb"},{label:v("Full","buddypress"),value:"full"}],S=function(e){var t=e.attributes,l=e.setAttributes,b=e.bpSettings,c=b.isAvatarEnabled,g=b.isMentionEnabled,S=b.isCoverImageEnabled,I=t.avatarSize,k=t.displayMentionSlug,M=t.displayActionButton,w=t.displayCoverImage;return t.itemID?n(s,null,n(y,null,n(u,null,n(p,{icon:"edit",title:v("Select another member","buddypress"),onClick:function(){l({itemID:0})}}))),n(m,null,n(a,{title:v("Profile button settings","buddypress"),initialOpen:!0},n(d,{label:v("Display Profile button","buddypress"),checked:!!M,onChange:function(){l({displayActionButton:!M})},help:v(M?"Include a link to the user's profile page under their display name.":"Toggle to display a link to the user's profile page under their display name.","buddypress")})),c&&n(a,{title:v("Avatar settings","buddypress"),initialOpen:!1},n(o,{label:v("Size","buddypress"),value:I,options:C,onChange:function(e){l({avatarSize:e})}})),S&&n(a,{title:v("Cover image settings","buddypress"),initialOpen:!1},n(d,{label:v("Display Cover Image","buddypress"),checked:!!w,onChange:function(){l({displayCoverImage:!w})},help:v(w?"Include the user's cover image over their display name.":"Toggle to display the user's cover image over their display name.","buddypress")})),g&&n(a,{title:v("Mention settings","buddypress"),initialOpen:!1},n(d,{label:v("Display Mention slug","buddypress"),checked:!!k,onChange:function(){l({displayMentionSlug:!k})},help:v(k?"Include the user's mention name under their display name.":"Toggle to display the user's mention name under their display name.","buddypress")}))),n(r,null,n(h,{block:"bp/member",attributes:t}))):n(i,{icon:"admin-users",label:v("BuddyPress Member","buddypress"),instructions:v("Start typing the name of the member you want to feature into this post.","buddypress")},n(f,{component:"members",ariaLabel:v("Member's username","buddypress"),placeholder:v("Enter Member's username here…","buddypress"),onSelectItem:l,useAvatar:c}))},I=g([c(function(e){return{bpSettings:e("core/editor").getEditorSettings().bp.members||{}}})])(S);e("bp/member",{title:v("Member","buddypress"),description:v("BuddyPress Member.","buddypress"),icon:"admin-users",category:"buddypress",attributes:{itemID:{type:"integer",default:0},avatarSize:{type:"string",default:"full"},displayMentionSlug:{type:"boolean",default:!0},displayActionButton:{type:"boolean",default:!0},displayCoverImage:{type:"boolean",default:!0}},edit:I});
},{}]},{},["TmUL"], null)