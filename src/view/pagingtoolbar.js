App.view.PagingToolbar = Backbone.View.extend({

    firstPage: 1,
    lastPage: 1,
    currentPage:1,
    tagName:'div',
    notLimit:99999,
    events: {
        'click  #ptb-first':'setFirstPage',
        'click  #ptb-prev':'prevPage',
        'click  #ptb-next':'nextPage',
        'click  #ptb-last':'setLastPage',
        'keypress #ptb-current':'keypress',
        'change #ptb-current':'change'
    },
    initialize:function(){
        this.lastPage = this.options.lastPage || this.lastPage;
        if(this.lastPage == '?') this.lastPage = this.notLimit;

        this.render();
        $('.sprite-board-paging').tipsy({gravity: 's', fade: true });

    },
    elements:function(){
        this.els = {
            currentPage: $(this.el).find('#ptb-current')
        };
    },
    render:function() {
        var s = {
            firstPage: this.firstPage,
            lastPage: (this.lastPage == this.notLimit) ?  '?' : this.lastPage
         };
        this.tpl = _.template(App.tpl.PagingToolbar, s);
        $(this.el).html(this.tpl);
        this.elements();

        return this;

    },
    nextPage:function(){
        var p = this.getPage();
        if (p < this.lastPage)
            this.setPage(++p);
    },
    prevPage:function(){
        var p = this.getPage();
        if (p > this.firstPage)
            this.setPage(--p);
    },
    change:function(e){
        var p = this.getPage();
        if(p > this.lastPage){
            this.setPage(this.currentPage);
            return false;
        }
        if(p < this.firstPage || _.isNaN(p)){
            this.setPage(this.firstPage);
            return false;
        }
        this.setPage(p);
    },
    keypress:function(e){
        return /\d/.test(String.fromCharCode(e.keyCode));
    },
    getPage:function(){
        return parseInt(this.els.currentPage.val());
    },
    setPage:function(p, preventEvent){
        this.curentPage = p;
        this.els.currentPage.val(p);
        if (!preventEvent) this.trigger('pageChange', p);
    },
    setLastPage:function(){
        this.setPage(this.lastPage);
    },
    setFirstPage:function(){
        this.setPage(this.firstPage);
    }
});