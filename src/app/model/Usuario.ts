import { Postagem } from "./Postagem"

export class Usuario{
    public email : string
    public foto : string
    public idUsuario : number
    public nomeCompleto : string
    public senha : string
    public tipo : string
    public postagem : Postagem[]
    
}