Ext.define('UseApp.DLApp.controller.DLController', {
	extend : 'Ext.app.Controller',
	onLaunch : function() {
		var me = this;
		this.control({
			// 下载按钮
			'DLMainLayout button[id=download]':{
				click:function(o){
					var paramsObj = {};
					paramsObj.exportFlag = true;
					var turnForm = window.document.createElement("form");
					//一定要加入到body中！！  
					window.document.body.appendChild(turnForm);
					turnForm.method = 'post';
					turnForm.action = "../httpDownLoad/pointDownLoad.html";
					//turnForm.target = '_blank';
					//创建隐藏表单
					for (var property in paramsObj) {
						var newElement = document.createElement("input");
						newElement.setAttribute("name", property);
						newElement.setAttribute("type", "hidden");
						newElement.setAttribute("value", paramsObj[property]);
						turnForm.appendChild(newElement);
					}
					turnForm.submit();
				}
			},
			
			'DLMainLayout button[id=mvcFile]':{
				click:function(o){
					var paramsObj = {};
					paramsObj.exportFlag = true;
					var turnForm = window.document.createElement("form");
					//一定要加入到body中！！  
					window.document.body.appendChild(turnForm);
					turnForm.method = 'post';
					turnForm.action = "../httpDownLoad/downOdex.html";
					//turnForm.target = '_blank';
					//创建隐藏表单
					for (var property in paramsObj) {
						var newElement = document.createElement("input");
						newElement.setAttribute("name", property);
						newElement.setAttribute("type", "hidden");
						newElement.setAttribute("value", paramsObj[property]);
						turnForm.appendChild(newElement);
					}
					turnForm.submit();
				}
			},
			
			'DLMainLayout button[id=downloadFile]':{
				click:function(o){
					var paramsObj = {};
					paramsObj.exportFlag = true;
					var turnForm = window.document.createElement("form");
					//一定要加入到body中！！  
					window.document.body.appendChild(turnForm);
					turnForm.method = 'post';
					turnForm.action = "../httpDownLoad/downLoadFile.html";
					//turnForm.target = '_blank';
					//创建隐藏表单
					for (var property in paramsObj) {
						var newElement = document.createElement("input");
						newElement.setAttribute("name", property);
						newElement.setAttribute("type", "hidden");
						newElement.setAttribute("value", paramsObj[property]);
						turnForm.appendChild(newElement);
					}
					turnForm.submit();
				}
			},
			
			'DLMainLayout button[id=fileSubmit]':{
				click:function(o){
					var form = o.ownerCt.ownerCt;
					form.submit({
						url : '../httpUpLoad/form.html',
						method : 'POST',
						baseParams : {
							submit:true
						},
						waitTitle : '系统提示',
						waitMsg : '正在导入数据，请您耐心等候...',
						failure : function(form1, action, response) {
							var msg = action.result.wrongString + "!";
							Ext.Msg.show({
								title : '系统提示',
								msg : msg,
								buttons : Ext.Msg.OK,
								icon : Ext.MessageBox.ERROR
							});
						},
						success : function(form, action) {
							// o.ownerCt.ownerCt.ownerCt.close();
							Ext.MessageBox.alert("提示","上传成功!");
						}
					});
				}
			}
			
		});
	},
	views : ['DLMainLayout','DLCheckCode','DLVerifyCode'],
	stores : [],
	models : []
});