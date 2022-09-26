/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('PdWare.view.main.Main', {
  extend: 'Ext.tab.Panel',
  cls: 'hopscotch-bubble-container',
  height: '100%',
  html: [
    '<div class="container-fluid">       <div class="row flex-nowrap">         <div           class="col-auto col-md-3 col-xl-2 sidebar-bg d-none d-sm-block sidebar-animation px-0"           id="sidebar"         >           <div             class="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white min-vh-100 sidebar-animation"           >             <a               href="/"               class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none ms-sm-4 ms-0 p-2 p-sm-0"             >               <img src="./images/PDWare-website-logo.png" alt="" class="logo" />             </a>             <ul               class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100 mt-3"               id="menu"             >               <li class="w-100">                 <a                   href="#submenu1"                   data-bs-toggle="collapse"                   class="nav-link px-4 align-middle p-3 sidebar-menu"                 >                   <img src="./images/project.png" alt="" class="icon" />                   <span class="ms-1 text-dark">Project</span>                 </a>                 <ul                   class="collapse nav flex-column ms-1"                   id="submenu1"                   data-bs-parent="#menu"                 >                   <li class="w-100">                     <a                       href="#"                       class="nav-link px-0 text-dark sidebar-submenu p-3"                     >                       <span class="">Dashboard</span>                     </a>                   </li>                   <li>                     <a                       href="#"                       class="nav-link px-0 text-dark sidebar-submenu p-3"                     >                       <span class="">Project Data</span>                     </a>                   </li>                   <li>                     <a                       href="#"                       class="nav-link px-0 text-dark sidebar-submenu p-3"                     >                       <span class="">Demands</span>                     </a>                   </li>                   <li>                     <a                       href="#"                       class="nav-link px-0 text-dark sidebar-submenu p-3"                     >                       <span class="">Assignments</span>                     </a>                   </li>                 </ul>               </li>               <li class="w-100">                 <a                   href="#submenu2"                   data-bs-toggle="collapse"                   class="nav-link px-4 align-middle p-3 sidebar-menu"                 >                   <img src="./images/analysis.png" alt="" class="icon" />                   <span class="ms-1 text-dark">Resources</span>                 </a>                 <ul                   class="collapse nav flex-column ms-1"                   id="submenu2"                   data-bs-parent="#menu"                 >                   <li class="w-100">                     <a                       href="#"                       class="nav-link px-0 text-dark sidebar-submenu p-3"                     >                       <span class="">Dashboard</span>                     </a>                   </li>                   <li>                     <a                       href="#"                       class="nav-link px-0 text-dark sidebar-submenu p-3"                     >                       <span class="">Project Data</span>                     </a>                   </li>                   <li>                     <a                       href="#"                       class="nav-link px-0 text-dark sidebar-submenu p-3"                     >                       <span class="">Demands</span>                     </a>                   </li>                   <li>                     <a                       href="#"                       class="nav-link px-0 text-dark sidebar-submenu p-3"                     >                       <span class="">Assignments</span>                     </a>                   </li>                 </ul>               </li>               <li class="w-100">                 <a                   href="#submenu3"                   data-bs-toggle="collapse"                   class="nav-link px-4 align-middle p-3 sidebar-menu"                 >                   <img src="./images/project.png" alt="" class="icon" />                   <span class="ms-1 text-dark">Analysis</span>                 </a>                 <ul                   class="collapse nav flex-column ms-1"                   id="submenu3"                   data-bs-parent="#menu"                 >                   <li class="w-100">                     <a                       href="#"                       class="nav-link px-0 text-dark sidebar-submenu p-3"                     >                       <span class="">Dashboard</span>                     </a>                   </li>                   <li>                     <a                       href="#"                       class="nav-link px-0 text-dark sidebar-submenu p-3"                     >                       <span class="">Project Data</span>                     </a>                   </li>                   <li>                     <a                       href="#"                       class="nav-link px-0 text-dark sidebar-submenu p-3"                     >                       <span class="">Demands</span>                     </a>                   </li>                   <li>                     <a                       href="#"                       class="nav-link px-0 text-dark sidebar-submenu p-3"                     >                       <span class="">Assignments</span>                     </a>                   </li>                 </ul>               </li>               <li class="w-100">                 <a                   href="#submenu4"                   data-bs-toggle="collapse"                   class="nav-link px-4 align-middle p-3 sidebar-menu"                 >                   <img src="./images/project.png" alt="" class="icon" />                   <span class="ms-1 text-dark">Administration</span>                 </a>                 <ul                   class="collapse nav flex-column ms-1"                   id="submenu4"                   data-bs-parent="#menu"                 >                   <li class="w-100">                     <a                       href="#"                       class="nav-link px-0 text-dark sidebar-submenu p-3"                     >                       <span class="">Dashboard</span>                     </a>                   </li>                   <li>                     <a                       href="#"                       class="nav-link px-0 text-dark sidebar-submenu p-3"                     >                       <span class="">Project Data</span>                     </a>                   </li>                   <li>                     <a                       href="#"                       class="nav-link px-0 text-dark sidebar-submenu p-3"                     >                       <span class="">Demands</span>                     </a>                   </li>                   <li>                     <a                       href="#"                       class="nav-link px-0 text-dark sidebar-submenu p-3"                     >                       <span class="">Assignments</span>                     </a>                   </li>                 </ul>               </li>             </ul>             <hr />           </div>         </div>          <div class="col">           <div class="row top-navbar">             <div class="d-flex align-items-center justify-content-between">               <div class="d-flex align-items-center ms-3">                 <img                   src="./images/hamburger.png"                   alt=""                   class="hamburger-menu"                   onclick="toggleMenu()"                 />                 <h6 class="ms-4 top-navbar-text mt-2">Project</h6>               </div>               <div class="d-flex align-items-center ms-3">                 <input                   type="text"                   class="form-control search-input me-3 d-none d-sm-block"                   placeholder="Search"                   aria-label="Search"                   aria-describedby="basic-addon1"                 />                 <img                   src="https://picsum.photos/48?grayscale"                   width="40"                   class="profile-img me-2"                 />               </div>             </div>           </div>           <div class="row">             <div               class="col-12 py-3 d-flex justify-content-around flex-wrap gap-3"             >               <div class="box col-3">                 <div class="ribbon ribbon-top-right"><span></span></div>                 <img src="./images/box-icon.png" alt="" class="box-icon" />                 <h6 class="box-text">5 Worst at Risk <br />Management</h6>               </div>               <div class="box col-3">                 <div class="ribbon ribbon-top-right"><span></span></div>                 <img src="./images/box-icon.png" alt="" class="box-icon" />                 <h6 class="box-text">5 Worst at Risk <br />Management</h6>               </div>               <div class="box col-3">                 <div class="ribbon ribbon-top-right"><span></span></div>                 <img src="./images/box-icon.png" alt="" class="box-icon" />                 <h6 class="box-text">5 Worst at Risk <br />Management</h6>               </div>             </div>           </div>           <div class="row">             <div class="col py-3 d-flex justify-content-around flex-wrap gap-3">               <div class="box">                 <div class="ribbon ribbon-top-right"><span></span></div>       <img src="./images/box-icon.png" alt="" class="box-icon" />                 <h6 class="box-text">5 Worst at Risk <br />Management</h6>               </div>               <div class="box">                 <div class="ribbon ribbon-top-right"><span></span></div>                 <img src="./images/box-icon.png" alt="" class="box-icon" />                 <h6 class="box-text">5 Worst at Risk <br />Management</h6>               </div>               <div class="box">                 <div class="ribbon ribbon-top-right"><span></span></div>                 <img src="./images/box-icon.png" alt="" class="box-icon" />                 <h6 class="box-text">5 Worst at Risk <br />Management</h6>               </div>             </div>           </div>            <div class="container mt-5 table-container mb-5">             <div               class="mb-2 d-flex justify-content-between align-items-center mx-4"             >               <div class="position-relative">                 <!-- <span class="position-absolute search"                   ><i class="fa fa-search"> </i                 ></span>                 <input                   class="form-control w-100"                   placeholder="Search by order#, name..."                 /> -->                 <h6 class="table-main-head">Lorem ipsum dolor sit amet.</h6>               </div>                <!-- Button with icon-->               <button                 class="btn custom-filter btn-md d-flex align-items-center px-3 fw-bold"                 type="button"               >                 FILTER                 <i class="bi bi-filter-circle ms-2 mb-1"></i>               </button>             </div>             <div class="table-responsive mt-3">               <table class="table table-responsive table-borderless">                 <thead>                   <tr class="bg-table">                     <th scope="col" width="5%">                       <input class="form-check-input" type="checkbox" />                     </th>                     <th scope="col" width="25%">Project Name</th>                     <th scope="col" width="20%">Manager</th>                     <th scope="col" width="20%">Sponser</th>                     <th scope="col" width="20%">Actions</th>                   </tr>                 </thead>                 <tbody>                   <tr>                     <th scope="row">                       <input class="form-check-input" type="checkbox" />                     </th>                     <td>                       <div class="table-td">                         <h6 class="table-td-head m-0 truncate">                           Lorem ipsum dolor sit amet consectetur                         </h6>                         <p class="table-td-sub">Lorem ipsum dolor sit amet</p>                       </div>                     </td>                     <td class="table-td-head">                       <img                         src="https://picsum.photos/40?grayscale"                         width="40"                         class="profile-img"                       />                       Althan Travis                     </td>                     <td class="table-td-head">Consectetur</td>                     <td>                       <i class="bi bi-three-dots-vertical"></i>                     </td>                   </tr>                   <tr>                     <th scope="row">                       <input class="form-check-input" type="checkbox" />                     </th>                     <td>                       <div class="table-td">                         <h6 class="table-td-head m-0 truncate">                           Lorem ipsum dolor sit amet consectetur                         </h6>                         <p class="table-td-sub">Lorem ipsum dolor sit amet</p>                       </div>                     </td>                     <td class="table-td-head">                       <img                         src="https://picsum.photos/41?grayscale"                         width="40"                         class="profile-img"                       />                       Althan Travis                     </td>                     <td class="table-td-head">Consectetur</td>                     <td>                       <i class="bi bi-three-dots-vertical"></i>                     </td>                   </tr>                   <tr>                     <th scope="row">                       <input class="form-check-input" type="checkbox" />                     </th>                     <td>                       <div class="table-td">                         <h6 class="table-td-head m-0 truncate">                           Lorem ipsum dolor sit amet consectetur                         </h6>                         <p class="table-td-sub">Lorem ipsum dolor sit amet</p>                       </div>                     </td>                     <td class="table-td-head">                       <img                         src="https://picsum.photos/45?grayscale"                         width="40"                         class="profile-img"                       />                       Althan Travis                     </td>                     <td class="table-td-head">Consectetur</td>                     <td>                       <i class="bi bi-three-dots-vertical"></i>                     </td>                   </tr>                   <tr>                     <th scope="row">                       <input class="form-check-input" type="checkbox" />                     </th>                     <td>                       <div class="table-td">                         <h6 class="table-td-head m-0 truncate">                           Lorem ipsum dolor sit amet consectetur                         </h6>                         <p class="table-td-sub">Lorem ipsum dolor sit amet</p>                       </div>                     </td>                     <td class="table-td-head truncate">                       <img                         src="https://picsum.photos/50?grayscale"                         width="40"                         class="profile-img"                       />                       Althan Travis                     </td>                     <td class="table-td-head">Consectetur</td>                     <td>                       <i class="bi bi-three-dots-vertical"></i>                     </td>                   </tr>                 </tbody>               </table>             </div>           </div>         </div>       </div>     </div>',
  ],
});
