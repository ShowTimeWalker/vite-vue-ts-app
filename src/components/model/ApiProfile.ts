export class ApiProfile {
    readonly name: string
    readonly description: string
    readonly url: string
    readonly method: string

    constructor(name: string, description: string, url: string, method: string) {
        this.name = name
        this.description = description
        this.url = url
        this.method = method
    }
}
