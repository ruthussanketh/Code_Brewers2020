/**
 * The control panel.
 */
var Panel = {
    init: function() {
        var $algo = $('#algorithm_panel');

        $('.panel').draggable();
        $('.accordion').accordion({
            collapsible: false,
        });
        $('.option_label').click(function() {
            $(this).prev().click();
        });
        $('#hide_instructions').click(function() {
            $('#instructions_panel').slideUp();
        });
        $('#hide_algorithms').click(function() {
            $('#algorithm_panel').slideUp();
        });
        $('#play_panel').css({
            top: $algo.offset().top + $algo.outerHeight() + 20
        });
        $('#button2').attr('disabled', 'disabled');
        $('#hide_instructions').click(function(hide_instructions_clicked) {
          $('#show_instructions').show();
        });
        $('#hide_algorithms').click(function(hide_algorithms_clicked) {
          $('#show_algorithms').show();
        });
        $('#show_algorithms').click(function() {
            $('#algorithm_panel').slideDown();
            $('#show_algorithms').hide();
        });
        $('#show_instructions').click(function() {
            $('#instructions_panel').slideDown();
            $('#show_instructions').hide();
        });
    },
    /**
     * Get the user selected path-finder.
     */
    getFinder: function() {
        var finder, selected_header, heuristic, allowDiagonal, biDirectional, trackRecursion, timeLimit;

        selected_header = $(
            '#algorithm_panel ' +
            '.ui-accordion-header[aria-selected=true]'
        ).attr('id');

        switch (selected_header) {

        case 'astar_header':
            allowDiagonal = typeof $('#astar_section ' +
                                     '.allow_diagonal:checked').val() !== 'undefined';
            biDirectional = typeof $('#astar_section ' +
                                     '.bi-directional:checked').val() !=='undefined';

            heuristic = $('input[name=astar_heuristic]:checked').val();
            functionality = $('input[name=astar_functionality]:checked').val();
            if (biDirectional) {
                if(closest_destination){
                    debugger;
                    finder=new PF.TraceFinder({
                      allowDiagonal: allowDiagonal,
                      heuristic: PF.Heuristic[heuristic],});
                }
                else if(multiple_stop_nodes){
                    finder = new PF.BiAStarFinder({
                      allowDiagonal: allowDiagonal,
                      heuristic: PF.Heuristic[heuristic],})
                }
                else{
                    finder=new PF.TraceFinder({
                      allowDiagonal: allowDiagonal,
                      heuristic: PF.Heuristic[heuristic],})
                }
            }
            else {
              if(closest_destination){
                  debugger;
                  finder=new PF.TraceFinder({
                    allowDiagonal: allowDiagonal,
                    heuristic: PF.Heuristic[heuristic],});
              }
              else if(multiple_stop_nodes){
                  finder = new PF.BiAStarFinder({
                    allowDiagonal: allowDiagonal,
                    heuristic: PF.Heuristic[heuristic],})
              }
              else if(multiple_visitation_nodes){
                  finder=new PF.TraceFinder({
                    allowDiagonal: allowDiagonal,
                    heuristic: PF.Heuristic[heuristic],})
              }
            }
        break;

        case 'breadthfirst_header':
            allowDiagonal = typeof $('#breadthfirst_section ' +
                                     '.allow_diagonal:checked').val() !== 'undefined';
            biDirectional = typeof $('#breadthfirst_section ' +
                                     '.bi-directional:checked').val() !== 'undefined';
            functionality = $('input[name=breadthfirst_functionality]:checked').val();
            if (biDirectional) {
                if(closest_destination){
                    debugger;
                    finder=new PF.TraceFinder({
                      allowDiagonal: allowDiagonal,
                      heuristic: PF.Heuristic[heuristic],});
                }
                else if(multiple_stop_nodes){
                    finder = new PF.BreadthFirstFinder({
                      allowDiagonal: allowDiagonal,
                      heuristic: PF.Heuristic[heuristic],})
                }
                else if(multiple_visitation_nodes){
                    finder=new PF.TraceFinder({
                      allowDiagonal: allowDiagonal,
                      heuristic: PF.Heuristic[heuristic],})
                }
            }
            else {
              if(closest_destination){
                  debugger;
                  finder=new PF.TraceFinder({
                    allowDiagonal: allowDiagonal,
                    heuristic: PF.Heuristic[heuristic],});
              }
              else if(multiple_stop_nodes){
                  finder = new PF.BiAStarFinder({
                    allowDiagonal: allowDiagonal,
                    heuristic: PF.Heuristic[heuristic],})
              }
              else if(multiple_visitation_nodes){
                  finder=new PF.TraceFinder({
                    allowDiagonal: allowDiagonal,
                    heuristic: PF.Heuristic[heuristic],})
              }
            }
        break;

        case 'dijkstra_header':
            allowDiagonal = typeof $('#dijkstra_section ' +
                                     '.allow_diagonal:checked').val() !== 'undefined';
            biDirectional = typeof $('#dijkstra_section ' +
                                     '.bi-directional:checked').val() !=='undefined';
            functionality = $('input[name=dijkstra_functionality]:checked').val();
            if (biDirectional) {
                if(closest_destination){
                    debugger;
                    finder=new PF.TraceFinder({
                      allowDiagonal: allowDiagonal,
                      heuristic: PF.Heuristic[heuristic],});
                }
                else if(multiple_stop_nodes){
                    finder = new PF.BiAStarFinder({
                      allowDiagonal: allowDiagonal,
                      heuristic: PF.Heuristic[heuristic],})
                }
                else if(multiple_visitation_nodes){
                    finder=new PF.TraceFinder({
                      allowDiagonal: allowDiagonal,
                      heuristic: PF.Heuristic[heuristic],})
                }
            }
            else {
              if(closest_destination){
                  debugger;
                  finder=new PF.TraceFinder({
                    allowDiagonal: allowDiagonal,
                    heuristic: PF.Heuristic[heuristic],});
              }
              else if(multiple_stop_nodes){
                  finder = new PF.BiAStarFinder({
                    allowDiagonal: allowDiagonal,
                    heuristic: PF.Heuristic[heuristic],})
              }
              else if(multiple_visitation_nodes){
                  finder=new PF.TraceFinder({
                    allowDiagonal: allowDiagonal,
                    heuristic: PF.Heuristic[heuristic],})
              }
            }
        break;
        }
        return finder;
    }
};
