import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CertificationService } from 'src/app/services/certification.service';
import { CvService } from 'src/app/services/cv.service';
import { EducationService } from 'src/app/services/education.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { ProfilService } from 'src/app/services/profil.service';
import { ProjetService } from 'src/app/services/projet.service';
import { SkillService } from 'src/app/services/skill.service';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CVComponent implements OnInit {
  curretnUserId: any
  currentUser:any
  profileForm: FormGroup;
  experienceForm: FormGroup;
  projectForm: FormGroup;
  skilsForm: FormGroup;
  certificationForm: FormGroup;
  educationForm: FormGroup;
  cvForm: FormGroup;
  //init tables
  experiences: any[] = []
  skills: any[] = []
  certifications: any[] = []
  educations: any[] = []
  projects: any[] = []
  profileDetail: any
  cvDetail: any
  isEnabled: boolean = false
  editProfile:boolean = true
  constructor(
    private profileS: ProfilService, private cvS: CvService,
    private authService: AuthService,
    private exprService: ExperienceService,
    private certService: CertificationService,
    private eduService: EducationService,
    private cvService: CvService,
    private projService: ProjetService,
    private skillService: SkillService,
    private userService: UserService,
    private activatedRout:ActivatedRoute
  ) {

    this.activatedRout.params.subscribe((param:any) => {
      if(param.id){
        this.curretnUserId = param.id
        this.isEnabled=false
        this.editProfile=false
      }else{
        this.curretnUserId = this.authService.getUserId()
        this.editProfile=true
      }
    })
    
    this.userService.getOne(this.curretnUserId).subscribe((res:any)=>{
      this.currentUser=res.data
    })
    this.profileForm = new FormGroup({
      image: new FormControl(''),
      nationality: new FormControl(''),
      dateOfBirth: new FormControl(''),
      address: new FormControl(''),
      department: new FormControl(''),
      gender: new FormControl(''),
      isEnabled: new FormControl(true),
      creationDate: new FormControl(''),

    });
    this.cvForm = new FormGroup({
      education: new FormControl(''),
      experience: new FormControl(''),
      project: new FormControl(''),
      skill: new FormControl(''),
      certification: new FormControl(''),
    });
    this.experienceForm = new FormGroup({
      company: new FormControl(''),
      job: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      description: new FormControl(''),
    })
    this.projectForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      date: new FormControl(''),
    })
    this.skilsForm = new FormGroup({
      name: new FormControl(''),
      level: new FormControl(''),

    })
    this.certificationForm = new FormGroup({
      domain: new FormControl(''),
      date: new FormControl(''),

    })
    this.educationForm = new FormGroup({
      institution: new FormControl(''),
      fieldOfStudy: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
    })
  }

  ngOnInit(): void {
    console.log(this.curretnUserId)
    this.profileS.getById(this.curretnUserId).subscribe((res: any) => {
      this.profileDetail = res.data
      console.log(this.profileDetail)
      this.profileForm.patchValue(this.profileDetail)
      this.getCV(this.profileDetail.cv)
      this.initTables(this.profileDetail.cv)

    })
  }

  addProfile() {
    let profile = this.profileForm.getRawValue();
    profile.user = this.curretnUserId;
    console.log(profile)
    this.profileS.creerProfil(profile).subscribe((res: any) => {
      this.profileDetail = res.data
      this.createCV()
    })

  }
  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file: File = inputElement.files[0];
      this.profileForm.patchValue({ image: file });
    }
  }


  addexperience() {
    let data = this.experienceForm.getRawValue();
    this.exprService.create(data).subscribe((res: any) => {
      this.experiences.push(data)
      this.cvDetail.experience.push(res.data._id)
      this.updateCV()
    })
  }
  addproject() {
    let data = this.projectForm.getRawValue();
    this.projService.create(data).subscribe((res: any) => {
      this.projects.push(data)
      console.log(res.data)
      this.cvDetail.project.push(res.data._id)
      this.updateCV()
    })
  }
  addskils() {
    let data = this.skilsForm.getRawValue();
    this.skillService.create(data).subscribe((res: any) => {
      this.skills.push(data)
      this.cvDetail.skill.push(res.data._id)
      this.updateCV()
    })

  }
  addcertification() {
    let data = this.certificationForm.getRawValue();
    this.certService.create(data).subscribe((res: any) => {
      this.certifications.push(data)
      this.cvDetail.certification.push(res.data._id)
      this.updateCV()
    })
  }
  addeducation() {
    let data = this.educationForm.getRawValue();
    this.eduService.create(data).subscribe((res: any) => {
      this.educations.push(data)
      this.cvDetail.education.push(res.data._id)
      this.updateCV()
    })
  }

  createCV() {
    let cv = {
      education: [],
      experience: [],
      project: [],
      skill: [],
      certification: []
    }
    this.cvService.create(cv).subscribe((res: any) => {
      this.updateProfile(res?.data?._id)
    })
  }

  updateCV() {
    this.cvService.update(this.cvDetail, this.cvDetail._id).subscribe((res) => {
      console.log(res)
    })
  }

  updateProfile(cv: string) {
    let profile = {
      fullName: this.profileDetail.fullName,
      phone: this.profileDetail.phone,
      email: this.profileDetail.email,
      role: this.profileDetail.role,
      image: this.profileDetail.image,
      nationality: this.profileDetail.nationality,
      dateOfBirth: this.profileDetail.dateOfBirth,
      address: this.profileDetail.address,
      department: this.profileDetail.department,
      gender: this.profileDetail.gender,
      isEnabled: this.profileDetail.isEnabled,
      creationDate: this.profileDetail.creationDate,
      cv: cv,
    }
    this.profileS
      .updateProfil(this.profileDetail._id, profile)
      .subscribe((res) => {
        console.log(res);
      });
  }

  getCV(id: any) {
    // this.cvService.getOne(id).subscribe((res: any) => {
    //   this.cvDetail = res.data
    //   console.log(this.cvDetail)
    // })
  }

  initTables(id: any) {
    // this.cvService.getOnePopulated(id).subscribe((res: any) => {
    //   if(res.data){
    //     this.educations = res.data.education
    //     this.experiences = res.data.experience
    //     this.projects = res.data.project
    //     this.skills = res.data.skill
    //     this.certifications = res.data.certification
    //   }
  
    // })
  }
}