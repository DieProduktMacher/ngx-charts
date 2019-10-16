import { EventEmitter, TemplateRef } from '@angular/core';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
import { DataItem } from '../models/chart-data.model';
export declare class PieChartComponent extends BaseChartComponent {
    labels: boolean;
    legend: boolean;
    legendAdvanced: boolean;
    legendTitle: string;
    legendPosition: string;
    explodeSlices: boolean;
    doughnut: boolean;
    totalValue: string;
    totalLabel: string;
    arcWidth: number;
    gradient: boolean;
    activeEntries: any[];
    tooltipDisabled: boolean;
    labelFormatting: any;
    trimLabels: boolean;
    maxLabelLength: number;
    tooltipText: any;
    dblclick: EventEmitter<{}>;
    margins: number[];
    select: EventEmitter<{}>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    tooltipTemplate: TemplateRef<any>;
    translation: string;
    labelTranslation: string;
    labelWidth: number;
    outerRadius: number;
    innerRadius: number;
    data: any;
    colors: ColorHelper;
    domain: any;
    dims: any;
    legendOptions: any;
    totalNumber: any;
    xOffset: number;
    yOffset: number;
    labelTranslationX: any;
    update(): void;
    setMyStyles(): {
        position: string;
        width: string;
        display: string;
        'flex-direction': string;
        'justify-content': string;
        'text-align': string;
        top: number;
        left: number;
        transform: string;
    };
    getTotalLabel(): void;
    getDomain(): any[];
    onClick(data: DataItem): void;
    setColors(): void;
    getLegendOptions(): {
        scaleType: string;
        domain: any;
        colors: ColorHelper;
        title: string;
        position: string;
    };
    onActivate(item: any, fromLegend?: boolean): void;
    onDeactivate(item: any, fromLegend?: boolean): void;
    private hasNoOptionalMarginsSet;
}
