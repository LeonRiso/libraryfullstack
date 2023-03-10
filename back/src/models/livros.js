class Livro {

    constructor(livro) {
        this.id = livro.id
        this.titulo = livro.titulo
        this.autor = livro.autor
        this.DataEmprest = livro.DataEmprest
        this.DataPrevDev = livro.DataPrevDev
        this.NomeUser = livro.NomeUser
        this.cpf = livro.cpf
    }

    create() {
        return `INSERT INTO Livros VALUE('${this.id}','${this.titulo}','${this.autor}','${this.DataEmprest}','${this.DataPrevDev}','${this.NomeUser}','${this.cpf}')`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM Livros`
        else
            return `SELECT * FROM Livros WHERE id = '${this.id}'`
    }

    update() {
        return `UPDATE Livros SET titulo = '${this.titulo}', autor = '${this.autor}', dataemprestimo = ${this.DataEmprest}, dataprev = '${this.DataPrevDev}', nomeusuario = '${this.NomeUser}', WHERE id = '${this.id}'`
    }

    delete() {
        return `DELETE FROM Livros WHERE id = '${this.id}'`
    }
}

module.exports = Livro