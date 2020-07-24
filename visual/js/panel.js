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
        var finder, selected_header, heuristic, allowDiagonal, biDirectional, dontCrossCorners, weight, trackRecursion, timeLimit;

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
            dontCrossCorners = typeof $('#astar_section ' +
                                     '.dont_cross_corners:checked').val() !=='undefined';
            closest_destination = typeof $('#astar_section ' +
                                     '.closest_destination:checked').val() !=='undefined';
            multiple_stop = typeof $('#astar_section ' +
                                     '.multiple_stop:checked').val() !=='undefined';
            multiple_visitation = typeof $('#astar_section ' +
                                     '.multiple_visitation:checked').val() !=='undefined';  

            heuristic = $('input[name=astar_heuristic]:checked').val();
            if (biDirectional) {
                
                finder = new PF.BiAStarFinder({
                    allowDiagonal: allowDiagonal,
                    dontCrossCorners: dontCrossCorners,
                    heuristic: PF.Heuristic[heuristic],
                    weight: weight
                });
            } else {
                if(closest_destination){
                    finder=new PF.closest_destination_astar({allowDiagonal: allowDiagonal,
                        heuristic: PF.Heuristic[heuristic],});
                }
                else if(multiple_stop){
                finder = new PF.multiple_stop_astar({
                    allowDiagonal: allowDiagonal,
                    heuristic: PF.Heuristic[heuristic],
                });}
                else if(multiple_visitation){
                    finder = new PF.multiple_visitation_astar({
                        allowDiagonal: allowDiagonal,
                        heuristic: PF.Heuristic[heuristic],
                    }); 
                }
                else{
                    finder = new PF.AStarFinder({
                        allowDiagonal: allowDiagonal,
                        heuristic: PF.Heuristic[heuristic],
                    }); 

                }
            }
            break;

        case 'breadthfirst_header':
            allowDiagonal = typeof $('#breadthfirst_section ' +
                                     '.allow_diagonal:checked').val() !== 'undefined';
            biDirectional = typeof $('#breadthfirst_section ' +
                                     '.bi-directional:checked').val() !== 'undefined';
            dontCrossCorners = typeof $('#breadthfirst_section ' +
                                     '.dont_cross_corners:checked').val() !=='undefined';
            closest_destination = typeof $('#breadthfirst_section ' +
                                     '.closest_destination:checked').val() !=='undefined';
            multiple_stop = typeof $('#breadthfirst_section ' +
                                     '.multiple_stop:checked').val() !=='undefined';
            multiple_visitation = typeof $('#breadthfirst_section ' +
                                     '.multiple_visitation:checked').val() !=='undefined';
             if (biDirectional) {
                
                finder = new PF.BiBreadthFirstFinder({
                    allowDiagonal: allowDiagonal,
                });
            } else {
                if(closest_destination){
                    finder=new PF.closest_destination_bfs({
                        allowDiagonal: allowDiagonal,});
                }

                
                else  if(multiple_stop){
                finder = new PF.multiple_stop_bfs({
                    allowDiagonal: allowDiagonal,
                });}
                else if(multiple_visitation){
                    finder = new PF.multiple_visitation_bfs({
                        allowDiagonal: allowDiagonal,
                    });
                }
                else{
                    finder = new PF.BreadthFirstFinder({
                        allowDiagonal: allowDiagonal,
                        heuristic: PF.Heuristic[heuristic],
                    }); 
                }
            }
            break;


        case 'dijkstra_header':
            allowDiagonal = typeof $('#dijkstra_section ' +
                                     '.allow_diagonal:checked').val() !== 'undefined';
            biDirectional = typeof $('#dijkstra_section ' +
                                     '.bi-directional:checked').val() !=='undefined';
            dontCrossCorners = typeof $('#dijkstra_section ' +
                                     '.dont_cross_corners:checked').val() !=='undefined';
            if (biDirectional) {
                finder = new PF.BiDijkstraFinder({
                    allowDiagonal: allowDiagonal,
                });
            } else {
                finder = new PF.DijkstraFinder({
                    allowDiagonal: allowDiagonal,
                });
            }
            break;
        }

        return finder;
    }
};
