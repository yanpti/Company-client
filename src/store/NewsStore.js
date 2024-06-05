import {makeAutoObservable} from "mobx"

export default class NewsStore{
    constructor(){
        this._types=[]
        this._city=[]
        this._news=[]
        this._selectedType = {}
        this._selectedCity = {}
        this._page=1
        this._totalCount=0
        this._limit=2
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types=types
    }

    setCity(city){
        this._city=city
    }

    setNews(news){
        this._news=news
    }

    setSelectedType (type) {
        this._selectedType=type
    }

    setSelectedCity (city) {
        this._selectedCity=city
    }

    setPage (page) {
        this._page=page
    }

    setTotalCount (count) {
        this._totalCount=count
    }

    get types(){
        return this._types
    }

    get city(){
        return this._city
    }

    get news(){
        return this._news
    }

    get selectedType(){
        this.setPage(1)
        return this._selectedType
    }

    get selectedCity(){
        this.setPage(1)
        return this._selectedCity
    }

    get totalCount(){
        return this._totalCount
    }

    get page(){
        return this._page
    }

    get limit(){
        return this._limit
    }
}