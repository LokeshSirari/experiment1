import { Component } from '@angular/core';

@Component({
  selector: 'customer-list',
  templateUrl: './customerlist.component.html'
})
export class CustomerList {
  searchdata: any;
  array = []
  customerList=[
    {
      id:1,
      lastname:"Doe",
      firstname:"John",
      email:"john.doe@example.com",
      isActive:"Yes",
      dateCreated:"2007-08-30 22:23:13",
      dateUpdated:"2008-08-08 12.28.24"
    },
    {
      id:2,
      lastname:"Feraro",
      firstname:"Richard",
      email:"richard.feraro@localhost.local",
      isActive:"Yes",
      dateCreated:"2010-05-10 15:25:47",
      dateUpdated:"2010-05-10 15:25:48"
    },
    {
    id:3,
    lastname:"dela Cruz",
    firstname:"Juan",
    email:"juan.localhost.com",
    isActive:"Yes",
    dateCreated:"2010-08-17 12:13:05",
    dateUpdated:"2010-08-17 12:13:05"
    }
  ]
  search() {
    var data = new RegExp(this.searchdata)
    console.log(data)
     this.array = this.customerList
    this.customerList = []
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i].firstname == data) {
          this.customerList.push(this.array[i])
      }
    }
  }
}