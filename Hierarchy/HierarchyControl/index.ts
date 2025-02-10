import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as d3 from "d3";
import { OrgChart } from 'd3-org-chart';

export class HierarchyControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private _container: HTMLDivElement;
    private _context: ComponentFramework.Context<IInputs>;
    private _data: any[];

    constructor() {}

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
        this._container = container;
        this._context = context;
        this._data =  [];
        this.renderChart();
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        this._data = [
			{ "id": 1, "name": "CEO", "title": "Chief Executive Officer", "parentId": null },
			{ "id": 2, "name": "CTO", "title": "Chief Technology Officer", "parentId": 1 },
			{ "id": 3, "name": "CFO", "title": "Chief Financial Officer", "parentId": 1 },
			{ "id": 4, "name": "VP Engineering", "title": "Vice President of Engineering", "parentId": 2 },
			{ "id": 5, "name": "VP Product", "title": "Vice President of Product", "parentId": 2 }
		]
        this.renderChart();
    }

    private renderChart(): void {
		// Clear the container
		this._container.innerHTML = "";
	
		if (!this._data || this._data.length === 0) {
			this._container.innerHTML = "<p>No data available.</p>";
			return;
		}
	
		// Add a unique ID to the container for targeting
		this._container.id = "org-chart-container";
	
		// Transform the data into the format required by d3-org-chart
		const transformedData = this.transformData(this._data);
	
		// Render the org chart
		const chart = new OrgChart()
			.container(`#${this._container.id}`) // Use a CSS selector string
			.data(transformedData)
			.nodeHeight(() => 200)
			.nodeWidth(() => 100)
			.onNodeClick((d: any) => console.log(d))
			.render();
	}

    private transformData(data: any[]): any {
        // Transform the data into a hierarchical structure
        const idMapping = new Map();
        data.forEach((item) => idMapping.set(item.id, item));

        const rootNodes: any[] = [];
        data.forEach((item) => {
            if (item.parentId) {
                const parent = idMapping.get(item.parentId);
                if (parent) {
                    if (!parent.children) parent.children = [];
                    parent.children.push(item);
                }
            } else {
                rootNodes.push(item);
            }
        });

        return rootNodes.length > 0 ? rootNodes[0] : null;
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {
        // Cleanup
    }
}