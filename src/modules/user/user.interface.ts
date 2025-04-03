export interface IUser {
  name: string
  age: number
  email: string
  // photo is marked optional with that question mark
  photo?: string | null
  role: 'user' | 'admin'
  userStatus: 'active' | 'inactive'
}
