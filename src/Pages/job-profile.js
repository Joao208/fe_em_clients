/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import '../global.css';
import '../App.css';
import '../Sidebar.css';
import '../Main.css';

import img_logo_svg from '../img/logo.png'
import img_job1 from '../img/job1.png'
import img_ads1 from '../img/ads1.png'
import img_job_profile from '../img/job-profile.jpg'
 import img_clogo2 from '../img/clogo2.png'



function Feed() {

  return (
<>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content />
  <meta name="author" content />
  <link rel="icon" type="image/png" href="img/fav.png" />
  <title>Empregue.me | Job _id</title>
  {/* Slick Slider */}
  <link rel="stylesheet" type="text/css" href="vendor/slick/slick.min.css" />
  <link rel="stylesheet" type="text/css" href="vendor/slick/slick-theme.min.css" />
  {/* Feather Icon*/}
  <link href="vendor/icons/feather.css" rel="stylesheet" type="text/css" />
  {/* Bootstrap core CSS */}
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  {/* Custom styles for this template */}
  <link href="css/style.css" rel="stylesheet" />
  {/* Navigation */}
  <nav className="navbar navbar-expand navbar-dark bg-dark osahan-nav-top p-0">
    <div className="container">
      <a className="navbar-brand mr-2" href="index"><img src={img_logo_svg} />
      </a>
      <form className="d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input type="text" className="form-control shadow-none border-0" placeholder="Search people, jobs & more..." aria-label="Search" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn" type="button">
              <i className="feather-search" />
            </button>
          </div>
        </div>
      </form>
    </div>
  </nav>
  <div className="profile-cover text-center">
    <img className="img-fluid" src={img_job_profile} />
  </div>
  <div className="bg-white shadow-sm border-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex align-items-center py-3">
            <div className="profile-left">
              <h5 className="font-weight-bold text-dark mb-1 mt-0">Nome da vaga</h5>
              <p className="mb-0 text-muted"><a className="mr-2 font-weight-bold"  href="">Nome da empresa</a> <i className="feather-map-pin" /> Data da postagem</p>
            </div>
            <div className="profile-right ml-auto">
              <button type="button" className="btn btn-primary"> Me interessei pela vaga </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Visão eral da vaga</h6>
            </div>
            <div className="box-body p-3">
              <p>Headquartered in Melbourne, Australia, Envato is a completely online company with an ecosystem of sites and services to help people get creative. We’ve consistently been named as one of the Best Places to Work in Australia, since 2015, in the BRW Awards , and we’ve also been awarded the title of Australia's Coolest Company for Women and Diversity by JobAdvisor.</p>
              <p className="mb-0">Envato was found in 2006 and, since then, we’ve helped a community of creative sellers earn more than $500 Million . Millions of people around the world choose our marketplace, studio and courses to buy files, hire freelancers, or learn the skills needed to build websites, videos, apps, graphics and more. Find out more at Envato Market , Envato Elements , Envato Sites , Envato Studio and Tuts
              </p>
            </div>
          </div>
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Detalhes da vaga</h6>
            </div>
            <div className="box-body">
              <table className="table table-borderless mb-0">
                <tbody>
                  <tr className="border-bottom">
                    <th className="p-3">Cargo</th>
                    <td className="p-3">Cargo da vaga
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <th className="p-3">Salario</th>
                    <td className="p-3">1.000</td>
                  </tr>
                  <tr className="border-bottom">
                    <th className="p-3">Employment Type</th>
                    <td className="p-3">Full-time
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <th className="p-3">Cidade</th>
                    <td className="p-3">São Paulo</td>
                  </tr>
                  <tr className="border-bottom">
                    <th className="p-3">Estado</th>
                    <td className="p-3">São Paulo</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </main>
        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
          <div className="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
            <div className="p-5">
              <img src={img_clogo2} className="img-fluid"  alt="Responsive image" />
            </div>
            <div className="p-3 border-top border-bottom">
              <h5 className="font-weight-bold text-dark mb-1 mt-0">Nome da empresa</h5>
              <p className="mb-0 text-muted">São Paulo
              </p>
            </div>
            <div className="p-3">
              <div className="d-flex align-items-top mb-2">
                <p className="mb-0 text-muted">Postado</p>
                <p className="font-weight-bold text-dark mb-0 mt-0 ml-auto">Created at data</p>
              </div>
            </div>
          </div>
          <div className="box shadow-sm mb-3 rounded bg-white ads-box text-center">
            <img src={img_job1} className="img-fluid"  alt="Responsive image" />
            <div className="p-3 border-bottom">
              <h6 className="font-weight-bold text-dark">Empregue.me</h6>
              <p className="mb-0 text-muted">Procurando um talento?</p>
            </div>
            <div className="p-3">
              <button type="button" className="btn btn-outline-primary pl-4 pr-4">Crie uma empresa</button>
            </div>
          </div>
        </aside>
        <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
          <div className="box shadow-sm mb-3 rounded bg-white ads-box text-center">
            <img src={img_ads1} className="img-fluid"  alt="Responsive image" />
            <div className="p-3 border-bottom">
              <h6 className="font-weight-bold text-gold">Anuncio</h6>
              <p className="mb-0 text-muted">Deseja não ver mais anuncios ?</p>
            </div>
            <div className="p-3">
              <button type="button" className="btn btn-outline-gold pl-4 pr-4"> Contratar Premiun </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
  {/* Bootstrap core JavaScript */}
  {/* slick Slider JS*/}
  {/* Custom scripts for all pages*/}
</div>

</>
  );
}

export default Feed;
