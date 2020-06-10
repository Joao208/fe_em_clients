/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState,useEffect} from 'react';
import moment from 'moment'
import {useParams} from 'react-router'

 
  
import img_logo_svg from '../../img/logo.png'
import img_job1 from '../../img/job1.png'
import Lottie from 'react-lottie'
import loadinganimate from '../../loading.json'
import img_job_profile from '../../img/job-profile.jpg'
import img_clogo2 from '../../img/clogo2.png'
import api from '../../services/api'
import completedAnimate from '../../completed.json'
import errorAnimate from '../../error.json'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Feed() {

  const [jobs, setJobs] = useState([])
  const [title, setTitle] = useState('')
  const [description, setdescription] = useState('')
  const [salary, setsalary] = useState('')
  const [city, setcity] = useState('')
  const [uf, setuf] = useState('')
  const [avatar, setavatar] = useState('')
  const [logradouro, setlogradouro] = useState('')
  const [nome, setNome] = useState('')
  const [loading,setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [button,setButton] = useState(true)
  const [cargo, setCargo] = useState('')
  const [employment, setEmployment] = useState('')
  const {id} = useParams()

  useEffect(() => {
    async function loadSpots() {
        const response = await api.get(`/vacancie/${id}`)

        setJobs(response.data)
        setTitle(response.data.text.title)
        setdescription(response.data.text.description)
        setsalary(response.data.text.salary)
        setcity(response.data.text.city)
        setuf(response.data.text.uf)
        setavatar(response.data.bussines.avatar)
        setlogradouro(response.data.bussines.cnpjI.logradouro)
        setNome(response.data.bussines.cnpjI.nome)
        setCargo(response.data.cargo)
        setEmployment(response.data.employment)
    }

    loadSpots()
}, [] )


async function handleSubmit(event) {
  event.preventDefault();
  setButton(false)
  setLoading(true)
  try{
  await api.post(`vacancies/${id}/booking`)

  setLoading(false)
  setCompleted(true)
  }catch{
    setLoading(false)
    setButton(true)
    toast.error('Falha ao requisitar vaga, verifique seus dados');
  }

}

const lottieOptions = {
  title:'loading',
  loop:true,
  autoplay:true,
  animationData:loadinganimate
}

const lottieOptionscompleted = {
  title:'loading',
  loop:true,
  autoplay:true,
  animationData:completedAnimate
}

const lottieOptionserror = {
  title:'loading',
  loop:true,
  autoplay:true,
  animationData:errorAnimate
}

  return (
<>

<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
  <meta name="description" content />
  <meta name="author" content />
  <link rel="icon" type="image/png" href="img/fav.png" />
  <title>Empregue.me | Job Profile</title>
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
    <img className="img-fluid" style={{width:'100%'}} src={jobs.avatar ? jobs.avatar : img_job_profile} />
  </div>
  
  <div className="bg-white shadow-sm border-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex align-items-center py-3">
            <div className="profile-left">
              <h5 className="font-weight-bold text-dark mb-1 mt-0">{title}</h5>
              <p className="mb-0 text-muted"><a className="mr-2 font-weight-bold"  href="">{nome}</a></p>
            </div>
            <form onSubmit={handleSubmit} className="profile-right ml-auto">
            {
              !! button
              && <button className="btn btn-primary btn-block text-uppercase" type="submit" onSubmit={handleSubmit}>Ingressar</button>

            }
            {
                !! loading
              && <Lottie options={lottieOptions
              }
              height='100px'
              width='100px'
              className="btn btn-primary btn-block text-uppercase"
              />
              }
            {
                !! completed 
               && <Lottie options={lottieOptionscompleted
                } 
                height='100px'
                width='100px'
                className="btn btn-primary btn-block text-uppercase"
                />
               
              }
            </form>
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
              <p>{description}</p>
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
                    <td className="p-3">{cargo}
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <th className="p-3">Salario</th>
                    <td className="p-3">{salary}</td>
                  </tr>
                  <tr className="border-bottom">
                    <th className="p-3">Employment Type</th>
                    <td className="p-3">{employment}
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <th className="p-3">Cidade</th>
                    <td className="p-3">{city}</td>
                  </tr>
                  <tr className="border-bottom">
                    <th className="p-3">Estado</th>
                    <td className="p-3">{uf}</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </main>
        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
          <div className="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
            <div className="p-5">
              <img src={avatar ? avatar : img_clogo2} className="img-fluid"  alt="Responsive image" />
            </div>
            <div className="p-3 border-top border-bottom">
              <h5 className="font-weight-bold text-dark mb-1 mt-0">{nome}</h5>
            <a href=""><p className="mb-0 text-muted">{logradouro}
              </p></a>  
            </div>
            <div className="p-3">
              <div className="d-flex align-items-top mb-2">
                <p className="mb-0 text-muted">Postado</p>
                <p className="font-weight-bold text-dark mb-0 mt-0 ml-auto">{moment(jobs.createdAt).fromNow()}</p>
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
              <div className="p-3">
              <button type="button" className="btn btn-outline-gold pl-4 pr-4"> Contratar Premiun </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</div>
</>
  );
}

export default Feed;