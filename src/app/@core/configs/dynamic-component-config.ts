export class DynamicComponentConfig<T> {
    name: string;
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    placeholder: string;
    type: string;
    readonly: boolean;
    options: { key: string, value: string }[];

    constructor(options: {
        name?: string,
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        placeholder?: string,
        readonly?: boolean,
        type?: string
    } = {}) {
        this.name = options.name;
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.placeholder = options.placeholder || '';
        this.readonly = options.readonly;
        this.type = options.type || '';
    }
}

export class CustomTextBox extends DynamicComponentConfig<string> {

    controlType = 'textBox';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}


export class CustomDropdown extends DynamicComponentConfig<string> {
    controlType = 'dropdown';
    options: { key: string, value: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}
