
import { Guid } from "guid-typescript";
export class Option {
    constructor() {
        this.AllowedTransitions = new Array<AllowedTransition>();
    }

public Label: string;
public State: number | null;
public Value: number;
public Color: string;
public AllowedTransitions: AllowedTransition[];
}

export class AllowedTransition {
    constructor() {
        this.Id = Guid.create().toString();
    }

    public ParentId : string;
    public Id: string;
    public ToStateId : number;
    public ToStatusId: number;
}