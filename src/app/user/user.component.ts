import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = [
    {
      "id": 1,
      "name": "ldt",
      "age": 20,
      "phone": "0123456789",
      "avatar": "https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
    },
    {
      "id": 2,
      "name": "LDT 2",
      "age": 25,
      "phone": "0123456789",
      "avatar": "https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
    },
    {
      "id": 3,
      "name": "ldt 3",
      "age": 35,
      "phone": "0123456789",
      "avatar": "https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
    },
  ]

  users = this.data

  remove(id: number) {
    this.data = this.data.filter(x => {
      return x.id != id
    })
    this.users = this.data
  }

  isEdit = false

  edit(user: any) {
    this.newUser = user
    this.isEdit = true
  }

  search(event: any) {
    const val = event.target.value.toLowerCase().trim()

    this.users = this.data.filter(x => {
      return x.name.toLowerCase().trim().indexOf(val) !== -1
    })
  }
  newUser = {
    id: 0,
    name: '',
    age: 0,
    phone: '',
    avatar: ''
  }

  onChange(event: any){
    this.newUser = {
      ...this.newUser,
      [event.target.id]: event.target.value
    }
  }

  onSubmit(){
    if (this.isEdit) {
      let i = this.data.findIndex(x => x.id == this.newUser.id)
      
      this.data[i] = this.newUser
      this.isEdit = false
      
    } else {

      this.newUser.id = this.data.length+1
      this.data.push(this.newUser)
    }
    
    this.newUser = {
      id: 0,
      name: '',
      age: 0,
      phone: '',
      avatar: ''
    }
  }

  onValidate(obj : any){
    if (!obj.name || !obj.phone || !(obj.age>0) || !obj.avatar) {
      return false
    }
    return true
  }

}
