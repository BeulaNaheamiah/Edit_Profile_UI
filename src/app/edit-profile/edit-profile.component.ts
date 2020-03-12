import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { ProfileDetails } from '../model/ProfileDetails';
import { ProfileService } from 'src/service/profile.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import {HereMapComponent} from '../here-map/here-map.component';
import { SingleChoice } from '../model/SingleChoice.model';
import { CityModel } from '../model/city.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers:[ProfileService]
})
export class EditProfileComponent implements OnInit {

  @ViewChild(HereMapComponent) child:HereMapComponent;

  profileDetails :ProfileDetails =  new ProfileDetails();
  ethnicityList : SingleChoice[] = [];
  religions : SingleChoice[] = [];
  genderList : SingleChoice[] = [];
  maritalStatus : SingleChoice[] = [];
  figureList : SingleChoice[] = [];
  locationList: CityModel[] = [];
  base64Image : SafeUrl;
   base64result:any;
   public query: string;
   public fields: Object = { text: 'city', value: 'city' };

  public placeHolder:String='inputLocation';
  srcResult : any;
  fileToUpload: File = null;
  
  
  constructor(private profileService:ProfileService,private domSanitizer: DomSanitizer) { 
    this.query= "sparknetworks";
  }

  ngOnInit(): void {
    this.profileService.getSingleInputData().subscribe(e => {
      this.ethnicityList = e.ethnicity;
      this.religions = e.religion;
      this.genderList =  e.gender;
      this.maritalStatus =  e.marital_status;
      this.figureList = e.figure;
    });
   this.profileService.getLocation().subscribe(c => {
          this.locationList = c.cities;
   });
   this.profileService.getProfileData().subscribe(p => {
   this.profileDetails=p;
   this.base64Image=this.domSanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,'+p.profilePicture);
   this.child.places(p.location);
    //console.log(this.base64Image);
  });
  
  }

  updateProfile(){
    //console.log(this.profileDetails.displayName);
    this.profileService.createProfile(this.profileDetails);
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
 // console.log("inputNode"+inputNode);
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  //console.log(reader);
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  //console.log(inputNode.files[0]);
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

  handleFileInput(files: FileList) {
    this.profileService.getBase64(files.item(0),this.profileDetails)

}
}
