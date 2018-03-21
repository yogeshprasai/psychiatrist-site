import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CliniciansComponent } from './clinicians/clinicians.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PortalAndFormsComponent } from './portal-and-forms/portal-and-forms.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MadanUpretyComponent } from './clinicians/madan-uprety/madan-uprety.component';
import { SaminaRajaComponent } from './clinicians/samina-raja/samina-raja.component';
import { MedicationRefillPolicyComponent } from './clinic-policy/medication-refill-policy/medication-refill-policy.component';
import { CancellationPolicyComponent } from './clinic-policy/cancellation-policy/cancellation-policy.component';
import { FinancialPolicyComponent } from './clinic-policy/financial-policy/financial-policy.component';
import { NoticesOfPrivacyPracticesComponent } from './clinic-policy/notices-of-privacy-practices/notices-of-privacy-practices.component';
import { InsuranceComponent } from './clinic-policy/insurance/insurance.component';
import { CareersComponent } from './contact-us/careers/careers.component';
import { MedicationManagementComponent } from './services/medication-management/medication-management.component';
import { CounselingComponent } from './services/counseling/counseling.component';
import { PsychologicalTestingComponent } from './services/psychological-testing/psychological-testing.component';
import { TmsComponent } from './services/tms/tms.component';
import { PatientResourcesComponent } from './services/patient-resources/patient-resources.component';
import { EmilyOzgulComponent } from './clinicians/emily-ozgul/emily-ozgul.component';
import { JohnGetzComponent } from './clinicians/john-getz/john-getz.component';
import { PatriciaComponent } from './clinicians/patricia/patricia.component';
import { RaufDeanComponent } from './clinicians/rauf-dean/rauf-dean.component';
import { AstridCunhaComponent } from './clinicians/astrid-cunha/astrid-cunha.component';
import { SideNoticeComponent } from './side-notice/side-notice.component';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'services', component: ServicesComponent },
  { path: 'medical-management', component: MedicationManagementComponent },
  { path: 'counseling', component: CounselingComponent },
  { path: 'psychological-testing', component: PsychologicalTestingComponent },
  { path: 'tms', component: TmsComponent },
  { path: 'patient-resources', component: PatientResourcesComponent },

  { path: 'clinicians', component: CliniciansComponent },
  { path: 'astrid-cunha', component: AstridCunhaComponent },
  { path: 'emily-ozgul', component: EmilyOzgulComponent },
  { path: 'john-getz', component: JohnGetzComponent },
  { path: 'madan-uprety', component: MadanUpretyComponent },
  { path: 'patricia', component: PatriciaComponent },
  { path: 'rauf-dean', component: RaufDeanComponent },
  { path: 'samina-raja', component: SaminaRajaComponent },

  { path: 'medication-refill-policy', component: MedicationRefillPolicyComponent },
  { path: 'cancellation-policy', component: CancellationPolicyComponent },
  { path: 'financial-policy', component: FinancialPolicyComponent },
  { path: 'notices-of-privacy-practices', component: NoticesOfPrivacyPracticesComponent },
  { path: 'insurance', component: InsuranceComponent },
  
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'portal-and-forms', component: PortalAndFormsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'careers', component: CareersComponent },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CliniciansComponent,
    ServicesComponent,
    TestimonialsComponent,
    PortalAndFormsComponent,
    ContactUsComponent,
    CareersComponent,
    MedicationRefillPolicyComponent,
    CancellationPolicyComponent,
    FinancialPolicyComponent,
    NoticesOfPrivacyPracticesComponent,
    InsuranceComponent,
    MedicationManagementComponent,
    CounselingComponent,
    PsychologicalTestingComponent,
    TmsComponent,
    PatientResourcesComponent,

    AstridCunhaComponent,
    EmilyOzgulComponent,
    JohnGetzComponent,
    MadanUpretyComponent,
    PatriciaComponent,
    RaufDeanComponent,
    SaminaRajaComponent,
    SideNoticeComponent,
  ],
  imports: [
   BrowserModule,
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
