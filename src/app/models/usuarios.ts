export class Usuarios {
  constructor(
    public email: string = '',
    public roles: string[] = [],
    public tags: string[] = [],
    public online: boolean = false,
    public isVerified: boolean = false,
    public receivePromoMessage: boolean = false,
    public created_at: string = '',
    public nombre: string = '',
    public uid: string = ''
  ) {
  }
}
