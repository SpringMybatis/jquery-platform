Ext.define('UseApp.DLApp.view.DLMainLayout', {
	extend : 'Ext.tab.Panel',
	alias : 'widget.DLMainLayout',
	border: 0,
    items: [{
    	xtype:'panel',
    	layout: 'border',
    	title:'断点下载',
    	items:[{
	        xtype:'panel',
			region:'north',
			layout:'table',
			height:80,
			defaults:{
				margin:'15 0 0 15',
				labelWidth:30,
				autoScroll:true,
				editable: false
			},
			items:[{
				xtype:'button',
				id:'download',
				text:'各种下载'
			},{
				xtype:'button',
				id:'downloadFile',
				text:'下载文件'
			},{
				xtype:'button',
				id:'mvcFile',
				text:'MVC下载'
			}]
	    },{
	        xtype:'panel',
	        title:'PANEL',
			region:'center',
			id:'downloadPanel',
			border:1,
			layout:'fit',
			items:[{
				xtype : 'form',
				bodyPadding : 10,
				frame:false,
				border:0,
				items : [{
					xtype : 'filefield',
					name : 'file',
					fieldLabel : '文件名称',
					labelWidth : 60,
					msgTarget : 'side',
					allowBlank : false,
					buttonText : '选择文件'
				},{
					fieldLabel : '验证码',
					xtype:'checkcode',
				    name : 'checkcode',
				    id : 'checkcode',
				    isLoader : true,
				    labelWidth : 60,
				    width:300,
				    blankText : '验证码不能为空',
				    codeUrl : '../login/checkcode.html',
				    listeners: {
						specialkey: function(field, e) {
							//回车登录
							if (e.getKey() == e.ENTER) {
								alert('回车登录');
							}
						}
					}
				}/*{
					fieldLabel : '验证码',
					xtype:'verifycode',
				    name : 'verifycode',
				    id : 'verifycode',
				    blankText : '验证码不能为空',
				    codeImgUrl : '../login/checkcode.html',
				    tabIndex : 3,
				    x : iWidth - 500,
				    y : iHeight - 240,
				    width : 300
				}*/],
				buttons : [{
					text : '上传',
					id:'fileSubmit'
				}]
			}]
	    }]
    }]
});
