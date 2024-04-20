class Movie {

    constructor(title, year, genre, franchise){
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.franchise = franchise;
    }


    toString(){
        let result = `${this.title}(${this.year})`

        if(this.genre !== null) {
            result += " in "
            result += this.genre
        }

        if(this.franchise !== null){
            result += " part of "
            result += this.franchise
        }

        return result
    }

    static equal(a, b){
        return (a.title === b.title);
    }

}

export default Movie