import { Injectable } from '@angular/core';
import { ProfileDetails } from 'src/app/model/ProfileDetails';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SingleChoice } from 'src/app/model/SingleChoice.model';
import { SingleInput } from 'src/app/model/singleInput.model';
import { Cities } from 'src/app/model/cities.model';

@Injectable()
export class ProfileService{

profileDetails: ProfileDetails[]=[];
ethnicity: SingleChoice[] = [];

singleInput: SingleInput = new SingleInput;

constructor(private http:HttpClient) { }

createProfile(profileDetail:ProfileDetails){
//console.log(profileDetail.dob +" ::"+profileDetail.profilePicture +"::"+profileDetail.maritalStatus );
const headers = { 'content-type': 'application/json', 'accept': '*/*' }
 this.http.post<ProfileDetails>('/api/profile/edit',profileDetail,{headers}).subscribe(
    p => this.profileDetails.push(profileDetail)
);

}

 getBase64(file,profileDetail:ProfileDetails) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () 
    {//console.log(reader.result);
        profileDetail.profilePicture =  reader.result.toString();
    
        };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

getSingleInputData():Observable<SingleInput>{
return this.http.get<SingleInput>('/api/get/singleChoice');
}

getLocation():Observable<Cities>{
   return this.http.get<Cities>('/api/get/cities');
}

getProfileData(profileId:string):Observable<ProfileDetails>{
    console.log(profileId)
    return this.http.get<ProfileDetails>('/api/profile/get?profileId='+profileId);
}

}