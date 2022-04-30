define(['underscore', 'knockout', 'knockout-mapping', 'viewmodels/map-report', 'viewmodels/report', 'reports/map-header'], function(_, ko, koMapping, MapReportViewModel, ReportViewModel) {

    return ko.components.register('dataquality', {
        viewModel: MapReportViewModel,
        template: { require: 'text!report-templates/dataquality' }
    });

});
