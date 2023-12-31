import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { isThursday } from 'date-fns';
import { id } from 'date-fns/locale';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "http://localhost:8082";
  pspURL = "http://localhost:8083";
  pccURL = "http://localhost:8084";
  secondBankURL = "http://localhost:8085";
  agencyURL = "http://localhost:8081";

  constructor(private http: HttpClient) { }

  getAuthoHeader() : any {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + localStorage.getItem("token")
    }
    return{
      headers: headers
    };
  }  

  login(data: any) {
    return this.http.post(this.agencyURL + "/api/agency/login", data);
  }

  current() {
    return this.http.get(this.pspURL + "/api/auth/current", this.getAuthoHeader());
  }

  addBankPayment(data: any){
    return this.http.post(this.pspURL + "/api/bankPayment/addBankPayment", data, this.getAuthoHeader());
  }

  addPayment(data: any){
    return this.http.post(this.baseURL + "/api/payment/addPayment", data, this.getAuthoHeader());
  }

  addCard(data: any){
    return this.http.post(this.baseURL + "/api/card/addCard", data, this.getAuthoHeader());
  }

  loadOneCard(id: any) {
    return this.http.get(this.baseURL + "/api/card/" +id, this.getAuthoHeader());
  }

  editCard(id: number,data: any) {
    return this.http.put(this.baseURL + "/api/card/" + id, data, this.getAuthoHeader());
  }

  deleteAgnecyOffer(id: number) {
    return this.http.delete(this.agencyURL + "/api/agency/" + id, this.getAuthoHeader())
  }

  editCardPayment() {
    return this.http.put(this.baseURL + "/api/card/editCardPayment", this.getAuthoHeader());
  }

  loadLatestCard() {
    return this.http.get(this.baseURL + "/api/card/latestCard", this.getAuthoHeader());
  }

  checkCardInfo(data: any){
    return this.http.post(this.pccURL + "/api/pcc/checkCardInfo", data, this.getAuthoHeader());
  }

  addAnswer(data: any){
    return this.http.post(this.secondBankURL + "/api/answer/addAnswer", data, this.getAuthoHeader());
  }

  getAllOffers(){
    return this.http.get(this.agencyURL + '/api/agency/offers', this.getAuthoHeader());
  }

  getOffer(id: any) {
    return this.http.get(this.agencyURL + "/api/agency/" +id, this.getAuthoHeader());
  }

 

  loadLatestAnswer() {
    return this.http.get(this.secondBankURL + "/api/answer/latestAnswer", this.getAuthoHeader());
  }

  loadLatestBankPaymnet() {
    return this.http.get(this.pspURL + "/api/bankPayment/latestBankPayment", this.getAuthoHeader());
  }

  loadLatestPaymnet() {
    return this.http.get(this.baseURL + "/api/payment/latestPayment", this.getAuthoHeader());
  }

  getClients() {
    return this.http.get(this.baseURL + "/api/users/usersByType", this.getAuthoHeader());
  }

  getInstructors() {
    return this.http.get(this.baseURL + "/api/users/instructors", this.getAuthoHeader());
  }

  getHomeOwners() {
    return this.http.get(this.baseURL + "/api/users/homeOwneres", this.getAuthoHeader());
  }

  getBoatOwners() {
    return this.http.get(this.baseURL + "/api/users/boatOwners", this.getAuthoHeader());
  }

  registerClient(data: any) {
    return this.http.post(this.baseURL + "/api/users/client/register", data);
  }

  getUserInfo(){
    return this.http.get(this.baseURL + "/api/users/userInfo", this.getAuthoHeader());
  }

  registerHouseOwner(data: any) {
    return this.http.post(this.baseURL + "/api/users/house-owner/register", data);
  }

  registerSupplier(data: any) {
    return this.http.post(this.baseURL + "/api/users/supplier/register", data);
  }

  registerManager(data: any) {
    return this.http.post(this.baseURL + "/api/users/manager/register", data);
  }



  registerBoatOwner(data: any) {
    return this.http.post(this.baseURL + "/api/users/boat-owner/register", data);
  }


  registerAdmin(data: any) {
    return this.http.post(this.baseURL + "/api/users/admin/register", data, this.getAuthoHeader());
  }

  registerFishingInstructor(data: any) {
    return this.http.post(this.baseURL + "/api/users/fishing-instructor/register", data);
  }

  loginUser(data: any) {
    return this.http.post(this.baseURL + "/api/users/login", data);
  }
  addHouse(data: any) {
    return this.http.post(this.baseURL + "/api/homes", data, this.getAuthoHeader());
  }

  addProductOrder(data: any) {
    return this.http.post(this.baseURL + "/api/productOrder", data, this.getAuthoHeader());
  }

  addOffer(data: any) {
    return this.http.post(this.baseURL + "/api/offer/addOffer", data, this.getAuthoHeader());
  }

  addOrder(data: any) {
    return this.http.post(this.baseURL + "/api/order/addOrder", data, this.getAuthoHeader());
  }

  addOrderItem(data: any) {
    return this.http.post(this.baseURL + "/api/orderItem/addOrderItem", data, this.getAuthoHeader());
  }

  addOfferItem(data: any) {
    return this.http.post(this.baseURL + "/api/offerItem/addOfferItem", data, this.getAuthoHeader());
  }

  addLoyaltyProgramme(data:any){
    return this.http.post(this.baseURL + "/api/loyalty",data, this.getAuthoHeader());
  }

  addLoyalProgramme(data:any){
    return this.http.post(this.baseURL + "/api/loyal",data, this.getAuthoHeader());
  }

  addBoat(data: any) {
    return this.http.post(this.baseURL + "/api/boats", data, this.getAuthoHeader());
  }

  loadHouse() {
    return this.http.get(this.baseURL + "/api/homes/my", this.getAuthoHeader());
  }

  loadAdventure() {
    return this.http.get(this.baseURL + "/api/adventures/my", this.getAuthoHeader());
  }

  loadProduct() {
    return this.http.get(this.baseURL + "/api/products/my", this.getAuthoHeader());
  }

  loadMangerProduct() {
    return this.http.get(this.baseURL + "/api/products/approvedOrderProducts", this.getAuthoHeader());
  }

  loadPendingOrders() {
    return this.http.get(this.baseURL + "/api/productOrder/getPendingOrders", this.getAuthoHeader());
  }


  loadHousesForClients(){
    return this.http.get(this.baseURL + "/api/homes/home-profiles", this.getAuthoHeader());
  }

  loadBoatsForClients(){
    return this.http.get(this.baseURL + "/api/boats/boat-profiles", this.getAuthoHeader())
  }

  loadIstructorsForClients(){
    return this.http.get(this.baseURL + "/api/adventures/adventure-profiles", this.getAuthoHeader());
  }

  loadHousesForAllUsers(){
    return this.http.get(this.baseURL + "/api/homes/home-profiles");
  }

  loadBoatsForAllUsers(){
    return this.http.get(this.baseURL + "/api/boats/boat-profiles");
  }

  loadInstructorsForAllUsers(){
    return this.http.get(this.baseURL + "/api/adventures/adventure-profiles");
  }

  editInfo(id: number,data: any) {
    return this.http.put(this.baseURL + "/api/users/", data, this.getAuthoHeader());
  }

  editOffer(id: number,data: any) {
    return this.http.put(this.baseURL + "/api/offer/" + id, data, this.getAuthoHeader());
  }

  editOrder(id: number,data: any) {
    return this.http.put(this.baseURL + "/api/order/" + id, data, this.getAuthoHeader());
  }


  editLoyalProgramme(id: number, data: any) {
    return this.http.put(this.baseURL+ "/api/loyal/editLoyalty/" + id, data, this.getAuthoHeader());
  }


  deleteMyHouse(id: number) {
    return this.http.delete(this.baseURL + "/api/homes/" + id, this.getAuthoHeader())
  }

  deleteOffer(id: number) {
    return this.http.delete(this.baseURL + "/api/offer/" + id, this.getAuthoHeader())
  }

  deleteOfferItem(id: number) {
    return this.http.delete(this.baseURL + "/api/offerItem/" + id, this.getAuthoHeader())
  }

  deleteOrder(id: number) {
    return this.http.delete(this.baseURL + "/api/order/" + id, this.getAuthoHeader())
  }

  deleteOrderItem(id: number) {
    return this.http.delete(this.baseURL + "/api/orderItem/" + id, this.getAuthoHeader())
  }

  getUsers() {
    return this.http.get(this.baseURL + '/api/users/userStatus', this.getAuthoHeader());
  }


  approveUser(id: any) {
    return this.http.post(this.baseURL + "/api/users/approve/" + id, {}, this.getAuthoHeader());
  }

  approveOrder(id: any) {
    return this.http.post(this.baseURL + "/api/productOrder/approve/" + id, {}, this.getAuthoHeader());
  }

  declineOrder(id: any) {
    return this.http.post(this.baseURL + "/api/productOrder/decline/" + id, {}, this.getAuthoHeader());
  }

  approveOfferOrder(id: any) {
    return this.http.post(this.baseURL + "/api/orderItem/approve/" + id, {}, this.getAuthoHeader());
  }

  declineOfferOrder(id: any) {
    return this.http.post(this.baseURL + "/api/orderItem/decline/" + id, {}, this.getAuthoHeader());
  }

  deleteThisUser(id: any) {
    return this.http.post(this.baseURL + "/api/users/deleteThisUser/" + id, {}, this.getAuthoHeader());
  }

  deleteThisHome(id: any) {
    return this.http.post(this.baseURL + "/api/users/deleteThisHome/" + id, {}, this.getAuthoHeader());
  }

  deleteThisBoat(id: any) {
    return this.http.post(this.baseURL + "/api/users/deleteThisBoat/" + id, {}, this.getAuthoHeader());
  }

  deleteCottage(id: any) {
    return this.http.post(this.baseURL + "/api/homes/deleteHouse/" +id, {}, this.getAuthoHeader());
  }

  declineUser(data:any) {
    return this.http.put(this.baseURL + "/api/users/declineRegistration",data, this.getAuthoHeader());
  }

  requestDeletingAccount(data:any) {
    return this.http.put(this.baseURL + "/api/users/requestForDeleting",data, this.getAuthoHeader());
  }

  deleteUserAccount(data:any) {
    return this.http.put(this.baseURL + "/api/users/deleteAccount",data, this.getAuthoHeader());
  }

  approveAdventureEvaluation(id: any) {
    return this.http.post(this.baseURL + "/api/adventureEvaluations/approve/" + id, {}, this.getAuthoHeader());
  }

  declineAdventureEvaluation(id: any) {
    return this.http.post(this.baseURL + "/api/adventureEvaluations/decline/" + id, {}, this.getAuthoHeader());
  }

  approveBoatEvaluation(id: any) {
    return this.http.post(this.baseURL + "/api/boatEvaluations/approve/" + id, {}, this.getAuthoHeader());
  }

  declineBoatEvaluation(id: any) {
    return this.http.post(this.baseURL + "/api/boatEvaluations/decline/" + id, {}, this.getAuthoHeader());
  }

  approveHomeEvaluation(id: any) {
    return this.http.post(this.baseURL + "/api/homeEvaluations/approve/" + id, {}, this.getAuthoHeader());
  }

  declineHomeEvaluation(id: any) {
    return this.http.post(this.baseURL + "/api/homeEvaluations/decline/" + id, {}, this.getAuthoHeader());
  }

  strikeAdventureClient(id: any) {
    return this.http.post(this.baseURL + "/api/adventureReviews/strike/" + id, {}, this.getAuthoHeader());
  }

  strikeBoatClient(id: any) {
    return this.http.post(this.baseURL + "/api/boatReviews/strike/" + id, {}, this.getAuthoHeader());
  }

  strikeHomeClient(id: any) {
    return this.http.post(this.baseURL + "/api/homeReviews/strike/" + id, {}, this.getAuthoHeader());
  }



  deleteUser(id: any){
    return this.http.delete(this.baseURL + "/api/users/deleteUser/" + id, this.getAuthoHeader());
  }

  getAllUsers(){
    return this.http.get(this.baseURL + '/api/users/allUsers', this.getAuthoHeader());
  }

  getAllLoyalties(){
    return this.http.get(this.baseURL + '/api/loyal/loyalties', this.getAuthoHeader());
  }

  getAllPendingOrders(){
    return this.http.get(this.baseURL + '/api/orderItem/getPendingOrders', this.getAuthoHeader());
  }

  getAllActiveUsers(){
    return this.http.get(this.baseURL + '/api/users/userStatusActive', this.getAuthoHeader());
  }

  getAllPendingUsers(){
    return this.http.get(this.baseURL + '/api/users/userStatusPending', this.getAuthoHeader());
  }


  getAllAdventureComplaints() {
    return this.http.get(this.baseURL + '/api/adventureComplaints/getAllAdventureComplaints', this.getAuthoHeader());
  }

  getAllCottages(){
    return this.http.get(this.baseURL + '/api/homes/home-profiles', this.getAuthoHeader());
  }

  getAllBoats(){
    return this.http.get(this.baseURL + '/api/boats/boat-profiles', this.getAuthoHeader());
  }

  getAllAdventures(){
    return this.http.get(this.baseURL + "/api/adventures/adventure-profiles", this.getAuthoHeader());
  }

  getAllBoatComplaints(){
    return this.http.get(this.baseURL + "/api/boatComplaints/getAllBoatComplaints", this.getAuthoHeader());
  }

  getAllHomeComplaints(){
    return this.http.get(this.baseURL + "/api/homeComplaints/getAllHomeComplaints", this.getAuthoHeader());
  }

  getAllAdventureEvaluations(){
    return this.http.get(this.baseURL + "/api/adventureEvaluations/getAllAdventureEvaluations", this.getAuthoHeader());
  }

  getAllBoatEvaluations(){
    return this.http.get(this.baseURL + "/api/boatEvaluations/getAllBoatEvaluations", this.getAuthoHeader());
  }

  getAllHomeEvaluations(){
    return this.http.get(this.baseURL + "/api/homeEvaluations/getAllHomeEvaluations", this.getAuthoHeader());
  }

  getAllAdventureReviews(){
    return this.http.get(this.baseURL + "/api/adventureReviews/getAllAdventureReviews", this.getAuthoHeader());
  }

  getAllBoatReviews(){
    return this.http.get(this.baseURL + "/api/boatReviews/getAllBoatReviews", this.getAuthoHeader());
  }

  getAllHomeReviews(){
    return this.http.get(this.baseURL + "/api/homeReviews/getAllHomeReviews", this.getAuthoHeader());
  }

  
  deleteMyBoat(id: number) {
    return this.http.delete(this.baseURL + "/api/boats/" + id, this.getAuthoHeader())
  }

  deleteMyAdventure(id: number) {
    return this.http.delete(this.baseURL + "/api/adventures/" + id, this.getAuthoHeader());
  }

  deleteMyProduct(id: number) {
    return this.http.delete(this.baseURL + "/api/products/" + id, this.getAuthoHeader());
  }

  
  cancelMyProductOrder(id: number) {
    return this.http.delete(this.baseURL + "/api/productOrder/" + id, this.getAuthoHeader());
  }

  addHouseFreeTerms(data: any){
    return this.http.post(this.baseURL + "/api/hometerms", data, this.getAuthoHeader());
  }

  addBoatFreeTerms(data: any){
    return this.http.post(this.baseURL + "/api/boatterms", data, this.getAuthoHeader());
  }

  addAdventureFreeTerms(data: any)
  {
    return this.http.post(this.baseURL + "/api/adventureFreeTerms", data, this.getAuthoHeader());
  }

  addAdventureNotFreeTerms(data: any)
  {
    return this.http.post(this.baseURL + "/api/adventureNotFreeTerms", data, this.getAuthoHeader());
  }

  loadHouseFreeTerms(id: any){
    return this.http.get(this.baseURL + "/api/hometerms/" + id, this.getAuthoHeader());
  }

  loadAdventureFreeTerms(id: any) {
    return this.http.get(this.baseURL + "/api/adventureFreeTerms/" + id, this.getAuthoHeader());
  }

  loadAdventureNotFreeTerms(id: any) {
    return this.http.get(this.baseURL + "/api/adventureNotFreeTerms/" + id, this.getAuthoHeader());
  }


  loadBoatFreeTerms(id: any){
    return this.http.get(this.baseURL + "/api/boatterms/" + id, this.getAuthoHeader());
  }

  editHouse(id: number, data: any) {
    return this.http.put(this.baseURL + "/api/homes/" +id, data, this.getAuthoHeader());
  }



  loadBoat() {
    return this.http.get(this.baseURL + "/api/boats/my", this.getAuthoHeader());
  }

  loadApprovedOrders() {
    return this.http.get(this.baseURL + "/api/productOrder/approvedOrders", this.getAuthoHeader());
  }

  loadApprovedOfferOrders() {
    return this.http.get(this.baseURL + "/api/orderItem/approvedOrders", this.getAuthoHeader());
  }
  
  bookHouse(data: any){
    return this.http.post(this.baseURL + "/api/homeReservations/", data, this.getAuthoHeader());
  }


  bookByOwnerHouse(data: any){
    return this.http.post(this.baseURL + "/api/homeReservations/owner", data, this.getAuthoHeader());
  }

  bookByOwnerBoat(data: any){
    return this.http.post(this.baseURL + "/api/boatReservations/owner", data, this.getAuthoHeader());
  }

  bookBoat(data: any){
    return this.http.post(this.baseURL + "/api/boatReservations/book", data, this.getAuthoHeader());
  }

  bookInstructor(data: any){
    return this.http.post(this.baseURL + "/api/adventuresReservation/", data, this.getAuthoHeader());
  }

  sendDeleteRequest1(id: number, data: any){
    return this.http.delete(this.baseURL + "/api/users/" + id,  this.getAuthoHeader());
  }

  sendDeleteRequest(id: number){
    return this.http.delete(this.baseURL + "/api/users/" + id,  this.getAuthoHeader());
  }
  
  filterHouses(data:any){
    return this.http.post(this.baseURL + "/api/homes/filterHomes", data);
  }

  filterAllProducts(data:any){
    return this.http.post(this.baseURL + "/api/products/filterAllProducts", data);
  }

  filterAllProductOrders(data:any){
    return this.http.post(this.baseURL + "/api/productOrder/filterProductOrders", data);
  }

  filterBoats(data: any){
    return this.http.post(this.baseURL + "/api/boats/filterBoats",  data);
  }

  filterInstructors(data: any){
    return this.http.post(this.baseURL + "/api/adventures/filterAdventures", data);
  }

  filterProducts(data: any){
    return this.http.post(this.baseURL + "/api/products/filterProducts", data);
  }

  filterOfferItems(data: any){
    return this.http.post(this.baseURL + "/api/offerItem/filterOfferItems", data);
  }

  changePassword(data: any){
    return this.http.post(this.baseURL + "/api/users/password", data, this.getAuthoHeader());
  }
  
  searchFreeHouses(data: any){
    return this.http.post(this.baseURL + "/api/homeReservations/searchFree", data, this.getAuthoHeader());
  }

  searchFreeBoats(data: any){
    return this.http.post(this.baseURL + "/api/boatReservations/searchFree", data, this.getAuthoHeader());
  } 
  
  searchFreeInstructors(data: any){
    return this.http.post(this.baseURL + "/api/adventuresReservation/searchFree", data, this.getAuthoHeader());
  }

  loadOneUserInfo(id: any){
    return this.http.get(this.baseURL + "/api/users/" + id,this.getAuthoHeader());
  }

  loadOneUser(clientId: any){
    return this.http.get(this.baseURL + "/api/users/" + clientId,this.getAuthoHeader());
  }

  loadOneHouse(id: any) {
    return this.http.get(this.baseURL + "/api/homes/" +id, this.getAuthoHeader());
  }

  loadOneProduct(id: any) {
    return this.http.get(this.baseURL + "/api/products/" +id, this.getAuthoHeader());
  }

  getOneOffer(id: any) {
    return this.http.get(this.baseURL + "/api/offerItem/offer/" +id, this.getAuthoHeader());
  }

  loadOneProductOrder(id: any) {
    return this.http.get(this.baseURL + "/api/productOrder/" +id, this.getAuthoHeader());
  }

  loadOneBoat(id: any) {
    return this.http.get(this.baseURL + "/api/boats/" +id, this.getAuthoHeader());
  }

  loadOneAdventure(id: any) {
    return this.http.get(this.baseURL + "/api/adventures/" + id, this.getAuthoHeader());
  }

  loadOneLoyalty(id: any) {
    return this.http.get(this.baseURL + "/api/loyal/oneLoyalty/" + id, this.getAuthoHeader());
  }

  loadOneInstructor(id: any) {
    return this.http.get(this.baseURL + "/api/adventures/" +id, this.getAuthoHeader());
  }

getMyHouseReservations(){
  return this.http.get(this.baseURL + "/api/homeReservations/myReservations", this.getAuthoHeader());
}

getMyOrderedProducts(data: any){
  return this.http.post(this.baseURL + "/api/orderedProduct/myOrderedProducts",data, this.getAuthoHeader());
}

getMyHouseFinishedReservations(){
  return this.http.get(this.baseURL + "/api/homeReservations/myFinishedReservations", this.getAuthoHeader());
}

getMyBoatFinishedReservations(){
  return this.http.get(this.baseURL + "/api/boatReservations/myFinishedReservations", this.getAuthoHeader());
}

getMyHouseUpcomingReservations(){
  return this.http.get(this.baseURL + "/api/homeReservations/myUpcomingReservations", this.getAuthoHeader());
}

getMyBoatUpcomingReservations(){
  return this.http.get(this.baseURL + "/api/boatReservations/myUpcomingReservations", this.getAuthoHeader());
}

getMyInstructorUpcomingReservations(){
  return this.http.get(this.baseURL + "/api/adventuresReservation/myUpcomingReservations", this.getAuthoHeader());
}

getMyInstructorFinishedReservations(){
  return this.http.get(this.baseURL + "/api/adventuresReservation/myFinishedReservations", this.getAuthoHeader());
}

getMyBoatReservations(){
  return this.http.get(this.baseURL + "/api/boatReservations/myReservations", this.getAuthoHeader());
}

getMyInstructorReservations(){
  return this.http.get(this.baseURL + "/api/adventuresReservation/myReservations", this.getAuthoHeader());
}

getAllAdventureComplaintsWithoutResponse(){
  return this.http.get(this.baseURL + "/api/adventureComplaints/allComplaintsWithoutResponse", this.getAuthoHeader());
}



getAllNotSelectedOfferItems(){
  return this.http.get(this.baseURL + "/api/offerItem/items", this.getAuthoHeader());
}

getAllOfferItems(){
  return this.http.get(this.baseURL + "/api/offerItem/offerItems", this.getAuthoHeader());
}

getAllOrders(){
  return this.http.get(this.baseURL + "/api/order/orders", this.getAuthoHeader());
}

getAllOrderItems(){
  return this.http.get(this.baseURL + "/api/orderItem/orderItems", this.getAuthoHeader());
}

getAllBoatComplaintsWithoutResponse(){
  return this.http.get(this.baseURL + "/api/boatComplaints/allComplaintsWithoutResponse", this.getAuthoHeader());
}

getAllHomeComplaintsWithoutResponse(){
  return this.http.get(this.baseURL + "/api/homeComplaints/allComplaintsWithoutResponse", this.getAuthoHeader());
}

getAllAdventureEvaluationsWithoutApprovedAndDeclined(){
  return this.http.get(this.baseURL + "/api/adventureEvaluations/notApprovedOrDeclined", this.getAuthoHeader());
}

getAllBoatEvaluationsWithoutApprovedAndDeclined(){
  return this.http.get(this.baseURL + "/api/boatEvaluations/notApprovedOrDeclined", this.getAuthoHeader());
}

getAllHomeEvaluationsWithoutApprovedAndDeclined(){
  return this.http.get(this.baseURL + "/api/homeEvaluations/notApprovedOrDeclined", this.getAuthoHeader());
}

getAllAdventureReviewsWithoutOnePenalty(){
  return this.http.get(this.baseURL + "/api/adventureReviews/withoutOnePenalty", this.getAuthoHeader());
}

getAllBoatReviewsWithoutOnePenalty(){
  return this.http.get(this.baseURL + "/api/boatReviews/withoutOnePenalty", this.getAuthoHeader());
}

getAllHomeReviewsWithoutOnePenalty(){
  return this.http.get(this.baseURL + "/api/homeReviews/withoutOnePenalty", this.getAuthoHeader());
}

getAllAdventureReviewsWithoutOnePenaltyAndBadComment(){
  return this.http.get(this.baseURL + "/api/adventureReviews/withoutOnePenaltyAndBadComment", this.getAuthoHeader());
}

getAllBoatReviewsWithoutOnePenaltyAndBadComment(){
  return this.http.get(this.baseURL + "/api/boatReviews/withoutOnePenaltyAndBadComment", this.getAuthoHeader());
}

getAllHomeReviewsWithoutOnePenaltyAndBadComment(){
  return this.http.get(this.baseURL + "/api/homeReviews/withoutOnePenaltyAndBadComment", this.getAuthoHeader());
}



getAllHousesOnActions(){
  return this.http.get(this.baseURL + "/api/homeReservations/getHousesOnAction", this.getAuthoHeader())
}

getAllBoatsOnActions(){
  return this.http.get(this.baseURL + "/api/boatReservations/getBoatsOnAction", this.getAuthoHeader())
}

getAllInstructorsOnActions(){
  return this.http.get(this.baseURL + "/api/adventuresReservation/getAdventuresOnAction", this.getAuthoHeader())
}

addNewAdventure(data: any){
  return this.http.post(this.baseURL + "/api/adventures/addAdventure", data, this.getAuthoHeader());
}

addNewProduct(data: any){
  return this.http.post(this.baseURL + "/api/products/addProduct", data, this.getAuthoHeader());
}

cancelHouseReservation(id: number){
return this.http.delete(this.baseURL + "/api/homeReservations/" +id, this.getAuthoHeader());
}

cancelBoatReservation(id: number){
  return this.http.delete(this.baseURL + "/api/boatReservations/" +id, this.getAuthoHeader());
}

cancelInstructorReservation(id: number){
   return this.http.delete(this.baseURL + "/api/adventuresReservation/" +id, this.getAuthoHeader());
}

responseToAdventureComplaint(data: any){
  return this.http.put(this.baseURL + "/api/adventureComplaints/responseToComplaint" ,data, this.getAuthoHeader());
}

responseToBoatComplaint(data:any){
  return this.http.put(this.baseURL + "/api/boatComplaints/responseToBoatComplaint/" ,data, this.getAuthoHeader());
}

responseToHomeComplaint(data:any){
  return this.http.put(this.baseURL + "/api/homeComplaints/responseToHomeComplaint/" ,data, this.getAuthoHeader());
}

editBoat(id: number, data: any) {
  return this.http.put(this.baseURL + "/api/boats/" +id, data, this.getAuthoHeader());
}

editProduct(id: number,data: any) {
  return this.http.put(this.baseURL + "/api/products/" +id, data, this.getAuthoHeader());
}

editProductOrder(id: number, data: any) {
  return this.http.put(this.baseURL + "/api/productOrder/" +id, data, this.getAuthoHeader());
}

editAdventure(id: number, data: any) {
  return this.http.put(this.baseURL + "/api/adventures/" + id, data, this.getAuthoHeader());
}

sendComplaintsForHouseReservation(data: any){
  return this.http.post(this.baseURL + "/api/homeComplaints/", data, this.getAuthoHeader());
}

sendComplaintsForAdventureReservation(data: any){
  return this.http.post(this.baseURL + "/api/adventureComplaints/", data, this.getAuthoHeader());
}

sendComplaintsForBoatReservation(data: any){
  return this.http.post(this.baseURL + "/api/boatComplaints/", data, this.getAuthoHeader());
}

sendComplaintsForInstructorReservation(data: any){
  return this.http.post(this.baseURL + "/api/adventureComplaints/", data, this.getAuthoHeader());
}

sendReviewsForHouseReservation(data: any){
  return this.http.post(this.baseURL + "/api/homeReviews/", data, this.getAuthoHeader());
}

sendReviewsForAdventureReservation(data: any){
  return this.http.post(this.baseURL + "/api/adventureReviews/", data, this.getAuthoHeader());
}

sendReviewsForBoatReservation(data: any){
  return this.http.post(this.baseURL + "/api/boatReviews/", data, this.getAuthoHeader());
}

loadOneHouseReservation(id: any) {
  return this.http.get(this.baseURL + "/api/homeReservations/" +id, this.getAuthoHeader());
}

loadOneOffer(id: any) {
  return this.http.get(this.baseURL + "/api/offer/" +id, this.getAuthoHeader());
}

loadLatestOffer() {
  return this.http.get(this.baseURL + "/api/offer/latestOffer", this.getAuthoHeader());
}

loadLatestOrder() {
  return this.http.get(this.baseURL + "/api/order/latestOrder", this.getAuthoHeader());
}

loadOneOfferItem(id: any) {
  return this.http.get(this.baseURL + "/api/offerItem/" +id, this.getAuthoHeader());
}

loadOneOrder(id: any) {
  return this.http.get(this.baseURL + "/api/order/" +id, this.getAuthoHeader());
}

loadOneOrderItem(id: any) {
  return this.http.get(this.baseURL + "/api/orderItem/" +id, this.getAuthoHeader());
}

loadOneAdventureReservation(id: any){
  return this.http.get(this.baseURL + "/api/adventuresReservation/" + id, this.getAuthoHeader());
}

loadOneBoatReservation(id: any) {
  return this.http.get(this.baseURL + "/api/boatReservations/" +id, this.getAuthoHeader());
}

loadOneInstructorReservation(id: any) {
  return this.http.get(this.baseURL + "/api/adventuresReservation/" +id, this.getAuthoHeader());
}

sendEvaluationsForHouseReservation(data: any){
  return this.http.post(this.baseURL + "/api/homeEvaluations/", data, this.getAuthoHeader());
}


sendEvaliationsForAdventureReservation(data: any){
   return this.http.post(this.baseURL + "/api/adventureEvaluations/", data, this.getAuthoHeader());

 }
sendEvaluationsForBoatReservation(data: any){
  return this.http.post(this.baseURL + "/api/boatEvaluations/", data, this.getAuthoHeader());
}

sendEvaluationsForInstructorReservation(data: any){
  return this.http.post(this.baseURL + "/api/adventureEvaluations/", data, this.getAuthoHeader());
}



addIncome(data: any) {
  return this.http.post(this.baseURL + "/api/income", data, this.getAuthoHeader());
}

subscribeUserOnAction(id: number, data: any){
  return this.http.put(this.baseURL + "/api/subscriptions/subscribe/" +id, data, this.getAuthoHeader());
}

subscribeUserOnBoatAction(id: number, data: any){
  return this.http.put(this.baseURL + "/api/subscriptions/subscribeBoat/" +id, data, this.getAuthoHeader());
}

subscribeUserOnInstructorAction(id: number, data: any){
  return this.http.put(this.baseURL + "/api/subscriptions/subscribeAdventure/" +id, data, this.getAuthoHeader());
}

unSubscribeUserOnAction(id:number,  data: any){
  return this.http.put(this.baseURL + "/api/subscriptions/unsubscribe/" +id, data, this.getAuthoHeader());
}

unSubscribeUserOnBoatAction(id:number, data: any){
  return this.http.put(this.baseURL + "/api/subscriptions/unsubscribeBoat/" +id, data,   this.getAuthoHeader());
}

unSubscribeUserOnInstructorAction(id:number, data: any){
  return this.http.put(this.baseURL + "/api/subscriptions/unsubscribeAdventure/" +id, data,   this.getAuthoHeader());
}


getMyHouseSubscriptions(){
  return this.http.get(this.baseURL + "/api/subscriptions/mySubscribedHomeProfiles", this.getAuthoHeader());

}

getPopularProducts(){
  return this.http.get(this.baseURL + "/api/products/popular", this.getAuthoHeader());

}

getPopularAndNotDeletedProducts(){
  return this.http.get(this.baseURL + "/api/products/deletedAndPopular", this.getAuthoHeader());

}

getSeasonProducts(){
  return this.http.get(this.baseURL + "/api/products/season", this.getAuthoHeader());

}

getActionProducts(){
  return this.http.get(this.baseURL + "/api/products/actionProducts", this.getAuthoHeader());

}


getNSProducts(){
  return this.http.get(this.baseURL + "/api/products/nsSupplier", this.getAuthoHeader());

}

getBgProducts(){
  return this.http.get(this.baseURL + "/api/products/bgSupplier", this.getAuthoHeader());

}

getNisProducts(){
  return this.http.get(this.baseURL + "/api/products/nisSupplier", this.getAuthoHeader());

}

getLowQuantityProducts(){
  return this.http.get(this.baseURL + "/api/products/lowQuantityProducts", this.getAuthoHeader());

}

getAllIncomes(){
  return this.http.get(this.baseURL + "/api/income/getAllIncomes", this.getAuthoHeader());

}

getMyBoatSubscriptions(){
  return this.http.get(this.baseURL + "/api/subscriptions/mySubscribedBoatProfiles", this.getAuthoHeader());
}

getMyInstructorSubscriptions(){
  return this.http.get(this.baseURL + "/api/subscriptions/mySubscribedAdventureProfiles", this.getAuthoHeader());
}
  
getReservationsForMyHouses(data: any){
  return this.http.post(this.baseURL + "/api/homeReservations/myReservationsForMyHouses", data, this.getAuthoHeader());
}



getTodayReservationsForMyHouses(data: any){
  return this.http.post(this.baseURL + "/api/homeReservations/myTodayReservationsForMyHouses", data, this.getAuthoHeader());
}

getHistoryReservationsForMyHouses(data: any){
  return this.http.post(this.baseURL + "/api/homeReservations/myHistoryReservationsForMyHouses", data, this.getAuthoHeader());
}



getReservationsForMyAdventures(data: any){
  return this.http.post(this.baseURL + "/api/adventuresReservation/myReservationsForMyAdventures", data, this.getAuthoHeader());
}

getTodayReservationsForMyAdventures(data: any){
  return this.http.post(this.baseURL + "/api/adventuresReservation/myTodayReservationsForMyAdventures", data, this.getAuthoHeader());
}

getSupplierProductOrders(data: any){
  return this.http.post(this.baseURL + "/api/productOrder/myOrders", data, this.getAuthoHeader());
}


getHistoryReservationsForMyAdventures(data: any){
  return this.http.post(this.baseURL + "/api/adventuresReservation/myHistoryReservationsForMyAdventures", data, this.getAuthoHeader());
}
getReservationsForCharts(data: any){
  return this.http.post(this.baseURL + "/api/homeReservations/myReservationsForCharts", data, this.getAuthoHeader());

}

getHomeReservationsForCharts(data: any){
  return this.http.post(this.baseURL + "/api/homeReservations/homeReservationsForCharts", data, this.getAuthoHeader());

}

getAdventureReservationsForCharts(data: any){
  return this.http.post(this.baseURL + "/api/adventuresReservation/myReservationsForCharts", data, this.getAuthoHeader());

}

getProductOrdersForCharts(data: any){
  return this.http.post(this.baseURL + "/api/productOrder/chartOrders", data, this.getAuthoHeader());

}

getAllAdventureReservationsForCharts(data: any){
  return this.http.post(this.baseURL + "/api/adventuresReservation/allAdventureReservationsForCharts", data, this.getAuthoHeader());

}

getBoatReservationsForCharts(data: any){
  return this.http.post(this.baseURL + "/api/boatReservations/boatReservationsForCharts", data, this.getAuthoHeader());
}

getAllBoatReservationsForCharts(data: any){
  return this.http.post(this.baseURL + "/api/boatReservations/allBoatReservationsForCharts", data, this.getAuthoHeader());
}

getAllReservations(houseId: number, ownerId: number){
  return this.http.get(this.baseURL + "/api/homeReservations/getAllReservations/" +houseId + '/' + ownerId, this.getAuthoHeader());
}


getAllAdventureReservations(adventureId: number, instructorId: number){
  return this.http.get(this.baseURL + "/api/adventuresReservation/getAllAdventureReservations/" + adventureId + '/' + instructorId, this.getAuthoHeader());
}
getAllBoatReservations(boatId: number, ownerId: number){
  return this.http.get(this.baseURL + "/api/boatReservations/getAllBoatReservations/" +boatId + '/' + ownerId, this.getAuthoHeader());

}

getReservationsForMyBoats(data: any){
  return this.http.post(this.baseURL + "/api/boatReservations/myReservationsForMyBoats", data, this.getAuthoHeader());
}

getTodayReservationsForMyBoats(data: any){
  return this.http.post(this.baseURL + "/api/boatReservations/myTodayReservationsForMyBoats", data, this.getAuthoHeader());
}

getHistoryReservationsForMyBoats(data: any){
  return this.http.post(this.baseURL + "/api/boatReservations/myHistoryReservationsForMyBoats", data, this.getAuthoHeader());
}

 
filterClients(data:any){
  return this.http.post(this.baseURL + "/api/users/filterUsers", data);
}

filterOrderItems(data:any){
  return this.http.post(this.baseURL + "/api/orderItem/filterOrderItems", data);
}

}
