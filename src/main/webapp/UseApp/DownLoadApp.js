Ext.onReady(function() {
	Ext.QuickTips.init();
	Ext.Loader.setConfig({
		enabled : true,
		paths : {}
	});
	Ext.require([]);
	Ext.application({
		name : 'UseApp.DLApp',
		appFolder : '../UseApp/DownLoadApp',
		launch : function() {
			Ext.create('Ext.container.Viewport', {
				layout : 'fit',
				items : {
					xtype : 'DLMainLayout'
				}
			});
		},
		controllers : ['DLController']
	});
});