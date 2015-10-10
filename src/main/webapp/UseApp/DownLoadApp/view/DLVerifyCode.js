Ext.define('UseApp.DLApp.view.DLVerifyCode', {
    extend : 'Ext.form.field.Trigger',
    alias : ['widget.verifycodefield', 'widget.verifycode'],
    // 图片的URL地址
    codeImgUrl : Ext.BLANK_IMAGE_URL,
    // 图片和输入框之间的距离
    imgMargin : 5,
    // 图片的宽度
    imgWidth : 75,
    // 图片的高度
    imgHeight : 23,
    // 点击图片的时候是否清空输入框
    clearOnClick : true,
    // 临时的FieldBody样式
    extraFieldBodyCls : Ext.baseCSSPrefix + 'form-file-wrap',
    componentLayout : 'triggerfield',
    childEls : ['imageWrap'],
 
    onRender : function() {
        var me = this, id = me.id, inputEl;
        me.callParent(arguments);
        inputEl = me.inputEl;
        // name goes on the fileInput, not the text input
        inputEl.dom.name = '';
        // 将imgConfig对象拷贝给前一个参数，并覆盖
        me.image = new Ext.Img(Ext.apply({
            // renderTo : id + '-imageWrap',
            ownerCt : me,
            ownerLayout : me.componentLayout,
            id : id + '-img',
            ui : me.ui,
            src : me.codeImgUrl,
            disabled : me.disabled,
            width : me.imgWidth,
            height : me.imgHeight,
            style : me.getImgMarginProp() + me.imgMargin + 'px;cursor:pointer;',
            inputName : me.getName(),
            listeners : {
                scope : me,
                click : {
                    element : 'el',
                    fn : me.onImgClick
                }
            }
        }, me.imgConfig));
        me.imageWrap.dom.style.width = (me.imgWidth + me.image.getEl().getMargin('lr'))+ 'px';
        if (Ext.isIE) {
            me.image.getEl().repaint();
        }
    },
 
    /**
     * Gets the markup to be inserted into the subTplMarkup.
     */
    getTriggerMarkup : function() {
        return '<td id="' + this.id + '-imageWrap"></td>';
    },
 
    onImgClick : function() {
        // 重新定义图片地址
        this.image.setSrc(this.codeImgUrl + '?time=' + new Date().getTime());
        this.reset();
    },
    
    getImgMarginProp : function() {
        return 'margin-left:';
    },
 
    setValue : Ext.emptyFn,
 
    reset : function() {
        var me = this, clear = me.clearOnClick;
        if (me.rendered) {
            if (clear) {
                me.inputEl.dom.value = '';
            }
        }
    }
});