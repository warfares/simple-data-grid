App.tpl.Grid = '' +
'<table class="alpha-grid">' +
    '<thead class="head" />' +
    '<tbody class="body" />' +
'</table>';


App.tpl.PagingToolbar = '' +
'<table class="ptb-table-bbar">' +
  '<tr>' +
      '<td><div id="ptb-first" class="sprite-board-paging sprite-board_paging-first nsb-paging-btn" title="First"></div></td>' +
      '<td><div id="ptb-prev" class="sprite-board-paging sprite-board_paging-prev nsb-paging-btn" title="Previous"></div></td>' +
      '<td><div><b>Page  <input id="ptb-current" type="text" class="ptb-current" value="<%= firstPage %>" /> of <span id="ptb-total"><%= lastPage %></span></b></div></td>' +
      '<td><div id="ptb-next" class="sprite-board-paging sprite-board_paging-next nsb-paging-btn" title="Next"></div></td>' +
      '<td><div id="ptb-last" class="sprite-board-paging sprite-board_paging-end nsb-paging-btn" title="Last"></div></td>' +
  '</tr>' +
'</table>';