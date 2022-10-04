import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  //Welcome Dashboard
  dashboard() {
    this.router.navigate(['/layout/dashboard/admin']);
  }
  //active e-vouchers
  active() {
    this.router.navigate(['/layout/e-voucher/active']);
  }
  //generate e-vouchers
  generate() {
    this.router.navigate(['/layout/e-voucher/generate']);
  }
  //redeemed e-vouchers
  redeemed() {
    this.router.navigate(['/layout/e-voucher/redeemed']);
  }
   //unclaimed e-vouchers
   unclaimed() {
    this.router.navigate(['/layout/e-voucher/unclaimed']);
  }

  // farmers
  registerFarmers(){
    this.router.navigate(['/layout/farmers/register']);
  }
  houseHolds(){
    this.router.navigate(['/layout/beneficiary/register-household']);
  }
  microFinance(){
    this.router.navigate(['/layout/beneficiary/register-micro-finance']);
  }
  manageBeneficiary(){
    this.router.navigate(['/layout/beneficiary/manage-beneficiaries']);
  }

  // Distributing Agents
  registerAgents(){
    this.router.navigate(['/layout/agents/register']);
  }
  manageAgents(){
    this.router.navigate(['/layout/agents/manage']);
  }

  // Implementing Partners
  registerPartners(){
    this.router.navigate(['/layout/partners/register']);
  }
  managePartners(){
    this.router.navigate(['/layout/partners/manage']);
  }

  // Assets Management
  captureAssets(){
    this.router.navigate(['/layout/assets/capture']);
  }
  manageAssets(){
    this.router.navigate(['/layout/assets/manage']);
  }
  allocateAssets(){
    this.router.navigate(['/layout/assets/allocate']);
  }
  trackAssets(){
    this.router.navigate(['/layout/assets/track-location']);
  }
  recoverAssets(){
    this.router.navigate(['/layout/assets/recovery']);
  }
  invetoryAssets(){
    this.router.navigate(['/layout/assets/invetory']);
  }

  // Wallet Trans
  walletAccount(){
    this.router.navigate(['/layout/wallet/account']);
  }
  walletTrans(){
    this.router.navigate(['/layout/wallet/transactions']);
  }

  // E-Voucher Transaction
  evtopUps(){
    this.router.navigate(['/layout/transactions/top-ups']);
  }
  evRedemption(){
    this.router.navigate(['/layout/transactions/redeem-evoucher']);
  }

  // User Management
  users(){
    this.router.navigate(['/layout/users/all-users']);
  }
  profiles(){
    this.router.navigate(['./layout/profiles/profiles'])
  }
  roles(){
    this.router.navigate(['/layout/profiles/roles'])
  }

  // Planting Seasons
  seasons(){
    this.router.navigate(['./layout/seasons/planting-season'])
  }



  logOut(){
    this.router.navigate(['/auth/login']);
  }
  

}
