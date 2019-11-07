import { NgModule } from '@angular/core';
import { AreaChartComponent } from './area-chart.component';
import { AreaChartNormalizedComponent } from './area-chart-normalized.component';
import { AreaChartStackedComponent } from './area-chart-stacked.component';
import { AreaChartRidgeComponent } from './area-chart-ridge.component';
import { AreaSeriesComponent } from './area-series.component';
import { ChartCommonModule } from '../common/chart-common.module';

@NgModule({
  imports: [ChartCommonModule],
  declarations: [
    AreaChartComponent,
    AreaChartNormalizedComponent,
    AreaChartStackedComponent,
    AreaChartRidgeComponent,
    AreaSeriesComponent
  ],
  exports: [
    AreaChartComponent,
    AreaChartNormalizedComponent,
    AreaChartStackedComponent,
    AreaChartRidgeComponent,
    AreaSeriesComponent
  ]
})
export class AreaChartModule {}
