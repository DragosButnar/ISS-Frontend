class Movie {
    static globalId=-1;
    Movie(title, year, genre, id=-1){
        if(id === -1)
            this.id = Movie.newId();
        else
            this.id = id
        this.title = title;
        this.year = year;
        this.genre = genre;
    }

    constructor(title, year, genre, id=-1) {
        if(id === -1)
            this.id = Movie.newId();
        else
            this.id = id
        this.title = title;
        this.year = year;
        this.genre = genre;
    }
    static newId(){
        return ++Movie.globalId;
    }

    toString(){
        return `${this.title}(${this.year}) in ${this.genre}`
    }

    static equal(a, b){
        return a.id === b.id || (a.title === b.title);
    }

}

export default Movie