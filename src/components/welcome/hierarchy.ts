export class Hierarchy {
    panels: Panel[] = []

    constructor(panels: Panel[]) {
        this.panels = panels
    }

    getPanelOptions(panelName: string): Option[] {
        const panel = this.panels.find(panel => panel.name === panelName)
        if (panel) {
            return panel.options
        }
        return []
    }
}

interface Panel {
    name: string
    icon?: string
    options: Option[]
}

interface Option {
    name: string
    icon?: string
}

export const layoutHierarchy: Hierarchy = new Hierarchy([
    {
        name: 'Resource',
        options: [
            { name: 'Coupon' },
            { name: 'Product' },
        ]
    },
    {
        name: 'Apis',
        options: [
            { name: 'Test' },
            { name: 'Organize' },
        ]
    },
    {
        name: 'History',
        options: [
            { name: 'List' },
        ]
    },
])
