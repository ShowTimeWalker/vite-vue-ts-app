import { HomeOutlined, PlusOutlined } from '@ant-design/icons-vue'
import { h } from 'vue'

export class Hierarchy {
    panels: Panel[] = []

    constructor(panels: Panel[]) {
        this.panels = panels
    }

    getPanels(): Option[] {
        return this.panels
            .filter(panel => !panel.hidden)
            .map(panel => ({
                key: panel.name,
                icon: panel.icon || h(HomeOutlined),
                label: panel.name,
                title: panel.name,
            }))
    }

    getPages(panelName: string[]): Option[] {
        const panel = this.panels.find(panel => panelName.includes(panel.name))
        if (panel) {
            return panel.pages
                .filter(page => !page.hidden)
                .map(page => ({
                    key: page.name,
                    icon: page.icon || h(HomeOutlined),
                    label: page.name,
                    title: page.name,
                }))
        } else {
            return []
        }
    }
}

export interface Panel {
    name: string
    pages: Page[]
    icon?: ReturnType<typeof h>
    hidden?: boolean
}

export interface Page {
    name: string
    icon?: ReturnType<typeof h>
    hidden?: boolean
}

export interface Option {
    key: string
    icon: ReturnType<typeof h>
    label: string
    title: string
    children?: Option[]
}

export const layoutHierarchy: Hierarchy = new Hierarchy([
    {
        name: 'Home',
        pages: [
            { name: 'Specification', icon: h(PlusOutlined) },
        ],
        hidden: true,
    },
    {
        name: 'Resource',
        pages: [
            { name: 'Coupon', icon: h(PlusOutlined) },
            { name: 'Product' },
        ]
    },
    {
        name: 'Apis',
        pages: [
            { name: 'Test' },
            { name: 'List' },
        ]
    },
    {
        name: 'History',
        pages: [
            { name: 'List' },
        ]
    },
])
