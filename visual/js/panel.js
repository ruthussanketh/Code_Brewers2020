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
            if (biDirectional) {
                finder = new PF.BiAStarFinder({
                    allowDiagonal: allowDiagonal,
                    heuristic: PF.Heuristic[heuristic],
                });
            } else {
                finder = new PF.AStarFinder({
                    allowDiagonal: allowDiagonal,
                    heuristic: PF.Heuristic[heuristic],
                });
            }
            break;

        case 'breadthfirst_header':
            allowDiagonal = typeof $('#breadthfirst_section ' +
                                     '.allow_diagonal:checked').val() !== 'undefined';
            biDirectional = typeof $('#breadthfirst_section ' +
                                     '.bi-directional:checked').val() !== 'undefined';
            if (biDirectional) {
                finder = new PF.BiBreadthFirstFinder({
                    allowDiagonal: allowDiagonal,
                });
            } else {
                finder = new PF.BreadthFirstFinder({
                    allowDiagonal: allowDiagonal,
                });
            }
            break;


        case 'dijkstra_header':
            allowDiagonal = typeof $('#dijkstra_section ' +
                                     '.allow_diagonal:checked').val() !== 'undefined';
            biDirectional = typeof $('#dijkstra_section ' +
                                     '.bi-directional:checked').val() !=='undefined';
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
