// 1、添加样式
/*#CheckCode{
    float:left;
}
.x-form-code{
    width:73px;
    height:20px;
    vertical-align:middle;
    cursor:pointer; 
    float:left; 
    margin-left:7px;
}*/

// 2、创建类
Ext.define('SMS.view.CheckCode',{
    extend: 'Ext.form.field.Text', 
    alias: 'widget.checkcode',
    inputTyle:'codefield',
    codeUrl:Ext.BLANK_IMAGE_URL,
    isLoader:true,
    onRender:function(ct,position){
        this.callParent(arguments);
        this.codeEl = ct.createChild({ tag: 'img', src: Ext.BLANK_IMAGE_URL});
        this.codeEl.addCls('x-form-code');
        this.codeEl.on('click', this.loadCodeImg, this);
        
        if (this.isLoader) this.loadCodeImg();
    },
    alignErrorIcon: function() {
        this.errorIcon.alignTo(this.codeEl, 'tl-tr', [2, 0]);
    },
    loadCodeImg: function() {
        this.codeEl.set({ src: this.codeUrl + '?id=' + Math.random() });
    }
});

//定义验证码控件  
Ext.define('CheckCode',{  
    extend: 'Ext.form.field.Text',   
    alias: 'widget.checkcode',  
    inputTyle:'codefield',  
    codeUrl:Ext.BLANK_IMAGE_URL,  
    isLoader:true,  
    onRender:function(ct,position){  
        this.callParent(arguments);  
        this.codeEl = ct.createChild({ tag: 'img', src: Ext.BLANK_IMAGE_URL});  
        this.codeEl.addCls('x-form-code');  
        this.codeEl.on('click', this.loadCodeImg, this);  
          
        if (this.isLoader) this.loadCodeImg();  
    },  
    alignErrorIcon: function() {  
        this.errorIcon.alignTo(this.codeEl, 'tl-tr', [2, 0]);  
    },  
    //如果浏览器发现url不变，就认为图片没有改变，就会使用缓存中的图片，而不是重新向服务器请求，所以需要加一个参数，改变url  
    loadCodeImg: function() {  
        this.codeEl.set({ src: this.codeUrl + '?id=' + Math.random() });  
    }  
});  



