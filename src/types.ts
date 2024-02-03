export interface DataTableAction {
    label: string,
    action: () => void
}

export interface InputDataRow {
     [key: string]: any
}

export type InputData = InputDataRow[]


export type SortDirections = "asc" | "desc"


export type SortOptions = {
    'sortable': Boolean,
    'field': string,
    'direction': SortDirections,
    'selectedClasses': string[]
}

export interface DataTableOptionsProps {
multiSelect?: boolean
sort?: SortOptions
searchable?: boolean
tableActions?: DataTableAction[]
rowActions?: DataTableAction[]
idColumn?: string
showIdColumn?: boolean
rowClasses?: string[]
rowSelectedClasses?: string[]
headerClasses?: string[]
tableClasses?: string[]
}



export type DataTableError = string | null 

export class DataTableOptions {
    multiSelect: boolean
    sort: SortOptions
    searchable: boolean
    tableActions: DataTableAction[]
    rowActions: DataTableAction[]
    idColumn: string
    showIdColumn: boolean
    rowClasses: string[]
    rowSelectedClasses: string[]
    headerClasses: string[]
    tableClasses: string[]
    constructor(options: DataTableOptionsProps){
        
        this.multiSelect =  options.multiSelect === undefined  ? true : options.multiSelect
        this.sort =  options.sort === undefined ? { 'sortable': true, 'field': 'name', 'direction': 'asc', 'selectedClasses': [] } : options.sort
        this.searchable =  options.searchable === undefined ? true : options.searchable
        this.tableActions = options.tableActions === undefined ? [] : options.tableActions
        this.rowActions =  options.rowActions === undefined ? [] : options.rowActions
        this.idColumn =  options.idColumn === undefined ? 'id' : options.idColumn
        this.showIdColumn = options.showIdColumn === undefined ? false : options.showIdColumn
        this.rowClasses =  options.rowClasses === undefined ? [] : options.rowClasses
        this.rowSelectedClasses = options.rowSelectedClasses === undefined ? [] : options.rowSelectedClasses
        this.headerClasses =  options.headerClasses === undefined ? [] : options.headerClasses
        this.tableClasses =  options.tableClasses === undefined ? [] : options.tableClasses

    
}}

