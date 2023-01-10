export interface ILogin {
  username: string
  password: string
}

export interface IUser {
  picture: { large: string, medium: string, thumbnail: string }
  name: { title: string, first: string, last: string }
  email: string
  login: { username: string }
  dob: { date: Date, age: number }
}