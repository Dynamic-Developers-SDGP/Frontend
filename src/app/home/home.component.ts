import { Component } from '@angular/core';


import { User } from '@app/_models';
import { AccountService } from '@app/_services';
import { HttpClient } from '@angular/common/http';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;
    selectedFile: File = null;
    constructor(private http: HttpClient,accountService: AccountService){
        
     }

    onFileSelected(event){
       this.selectedFile =<File>event.target.files[0];
    }
    onUpload(){
        const fd = new FormData();
        fd.append('image',this.selectedFile,this.selectedFile.name);
        this.http.post('',fd).subscribe(res=>{
            console.log(res);
        });

    }

    //  constructor(private accountService: AccountService) {
    //      this.user = this.accountService.userValue;
    //  }
}
