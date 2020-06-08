import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PatientModel} from './HospitalManagement.model'

@Component({
  selector: 'app-root',
  templateUrl: './HospitalManagement.component.html',
})
export class HospitalManagementComponent {
  title = 'HospitalManagement';
  constructor(public Http:HttpClient){
    this.patientObj=new PatientModel()
  }
  
  patientObj:PatientModel= null;
  // PatientList:Array<Patient>=new Array<Patient>();
  
  // Add(){
  //   this.PatientList.push(this.patientObj)
  // }

   Submit(){
     let patientObj={
       name:this.patientObj.name,
       problemDescription:this.patientObj.problemDescription
     }
     this.Http.post("https://localhost:44372/Patient/Submit", patientObj)
     .subscribe(data => {
      let res:any = data; 
    },);
   }

   Success(res){

   }
   Error(res){

   }
}
