App.view.Grid = Backbone.View.extend({
    tagName: 'div',
    initialize:function(){
        this.cm = this.options.cm || [];
        this.sort = this.options.sort || {};
        this.render();
        this.renderHeader();
    },
    elements:function(){
        this.els = {
            head:$(this.el).find('.head'),
            body:$(this.el).find('.body')
        };
    },
    render:function() {
        this.tpl = _.template(App.tpl.Grid);
        $(this.el).html(this.tpl());

        this.elements();
        return this;
    },
    renderHeader:function(){
        var _this = this;
        this.els.head.html('');
        var tr = $('<tr></tr>');
        _.each(this.cm, function(o){

            var renderSortable = function(v){
                var css = {
                    textDecoration:'underline',
                    cursor:'pointer',
                    fontWeight:'bold'
                };

                var span = $('<span />')
                    .css(css)
                    .html(v);

                if(_this.sort[o.id]){
                    var dir = (o.dir == 1) ? 'n' : 's';
                    span.append('<span style="float:right;margin-top:6px;" class="ui-icon ui-icon-triangle-1-'+ dir +'" />');
                }

                span.on('click',function(){
                    o.dir = (o.dir == 1) ? -1 : 1;
                    sort = {};
                    sort[o.id] = o.dir;
                    _this.sort = sort;
                    _this.trigger('sort', sort);
                });
                return span;
            }

            var html = o.sortable ? renderSortable(o.name) : o.name;

            var th = $('<th></th>').html(html);

            if(o.width) th.width(o.width);
            if(o.hcls) th.addClass(o.hcls);
            if(o.hcss) th.css(o.hcss);

            tr.append(th);
            this.els.head.append(tr);
        },this);
    },
    setValues:function(data){
        this.renderHeader();

        this.els.body.html('');
        var _this = this;
        _.each(data,function(o) {
            var tr = $('<tr></tr>');
            _.each(this.cm, function(c){
                var v = o[c.id];
                var val = c.render ? c.render(v, o) : v;
                var td = $('<td></td>').html(val);

                if(c.cls) td.addClass(c.cls);
                if(c.css) td.css(c.css);

                tr.append(td);
            },this);

            tr.on('click', function(){
                _this.trigger('rowclick',o);
            });

            this.els.body.append(tr);
        }, this);
    },
    getSort:function(){
        return this.sort;
    },
    setSort:function(sort){
        this.sort = sort;
    }
});