/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect,useMemo}  from 'react';
import moment from 'moment'
import {useNavigate} from 'react-router'
import socketio from 'socket.io-client'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 
  
import Lottie from 'react-lottie'
import EmptyAnimation from '../../Animations/empty.json'
import api from '../../services/api'
import img_logo_svg from '../../img/logo.png'
import img_job1 from '../../img/job1.png'
import img_l3 from '../../img/l3.png'


function Feed() {
  
  const [post, setPost] = useState([])
  const [profile, setProfile] = useState([])
  const [data,setData] = useState('')
  const history = useNavigate()
  const [name,setName] = useState('')
  const [text, setText] = useState('')

  async function SignOut() {
    sessionStorage.clear()
  }
  
  const user_id = sessionStorage.getItem('user_id') 

  const socket = useMemo(() => socketio('https://empregue-me-backend.herokuapp.com', {
        query: { user_id }
    }), [user_id])

  const lottieOptions = {
    title:'loading',
    loop:true,
    autoplay:true,
    animationData:EmptyAnimation
  }

  useEffect(() => {
    socket.on('like', (data) => {
      setPost([...post, data])
    })
  }, [post, socket])

  useEffect(() => {
    socket.on('follow_me', (data) => {
      setProfile([...post, data])
    })
  }, [profile, socket])

  useEffect(() => {
    async function loadSpots() {
        const response = await api.get('/profileview')

        setPost(response.data.post)
        setProfile(response.data.profile)
        setData(response.data)
    }
    loadSpots()
}, [] )


async function SearchValue(event){
  event.preventDefault()
  
  history(`/conections/${name}`)
}

  return (
<>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
  <meta name="description" content />
  <meta name="author" content />
    <title>Empregue.me Profile</title>
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
      <a className="navbar-brand mr-2"  href="/"><img src={img_logo_svg} />
      </a>
      <form onSubmit={SearchValue} className="d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input 
          type="search"                   
          placeholder='Buscar pessoas, vagas e empresas'
          aria-label="Search"
          value={name}
          onChange={event => setName(event.target.value)}
          aria-describedby="basic-addon2" 
          className="form-control shadow-none border-0"
          />
          <div>
            <button className="btn" type="button">
              <i className="feather-search" />
            </button>
          </div>
          </div>
      </form>
      <ul className="navbar-nav ml-auto d-flex align-items-center">
      <li className="nav-item dropdown no-arrow d-sm-none">
        <a className="nav-link dropdown-toggle" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <form onSubmit={SearchValue} className="form-inline mr-auto w-100 navbar-search">
          <div className="input-group">
          <input 
          type="search"                   
          placeholder='Buscar pessoas, vagas e empresas'
          aria-label="Search"
          value={name}
          onChange={event => setName(event.target.value)}
          aria-describedby="basic-addon2" 
          className="form-control shadow-none border-0"
          />
          <div>
            <button className="btn" type="button">
              <i className="feather-search" />
            </button>
          </div>
          </div>
          </form>
        </a>
        <div className="dropdown-menu dropdown-menu-right p-3 shadow-sm animated--grow-in" aria-labelledby="searchDropdown">
        </div>
      </li>
        {profile.map(profile => (
      <div key={profile._id} className="dropdown-list-image mr-3">
        <a href="profile"><img className="rounded-circle"  src={profile.user.avatar} /></a>
        <div className="status-indicator bg-success" />
      </div>
      ))}
      </ul>
    </div>
  </nav>
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        {profile
           ? profile.map(profile => (
        <aside className="col col-xl-3 order-xl-1 col-lg-12 order-lg-1 col-12">
           <div key={profile._id} className="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
            <div className="py-4 px-3 border-bottom">
              <img src={profile.user.avatar ? profile.user.avatar : img_l3} style={{height:130,width:130}} className="img-fluid mt-2 rounded-circle" alt="Responsive image" /> 
              <h5 className="font-weight-bold text-dark mb-1 mt-4">{profile.user.name}</h5>
              <p className="mb-0 text-muted">UI / UX Designer</p>
            </div>
            <div className="d-flex">
              <div className="col-6 border-right p-3">
                <h6 className="font-weight-bold text-dark mb-1">{data.followersCount}</h6>
                <p className="mb-0 text-black-50 small">Conexões</p>
              </div>
              <div className="col-6 p-3">
                <h6 className="font-weight-bold text-dark mb-1">{data.followingCount}</h6>
                <p className="mb-0 text-black-50 small">Seguindo</p>
              </div>
            </div>
            <form onSubmit={SignOut} className="overflow-hidden border-top">
              <button style={{textAlign:'center',width:'100%',backgroundColor:'white',color:'blue',border:'none'}} className="font-weight-bold p-3 d-block" > Sair </button>
              <a href="/edit-profile" className="font-weight-bold p-3 d-block">Editar Perfil</a>
            </form>
          </div>
          <div className="box shadow-sm mb-3 rounded bg-white ads-box text-center overflow-hidden">
            <img src={img_job1} className="img-fluid"  alt="Responsive image" />
            <div className="p-3 border-bottom">
              <h6 className="font-weight-bold text-dark">Osahan Solutions</h6>
              <p className="mb-0 text-muted">Looking for talent?</p>
            </div>
            <div className="p-3">
              <button type="button" className="btn btn-outline-primary pl-4 pr-4"> POST A JOB </button>
            </div>
          </div>
          <div className="border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Redes sociais</h6>
            </div>
            <div className="box-body">
              <div className="p-3 border-bottom">
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-instagram position-absolute text-warning" />
                  <p 
                  className="form-control" 
                  >
                  {
                    profile.user.FacebookUrl
                  }
                  </p>
                </div>
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-facebook position-absolute text-primary" />
                  <p 
                  className="form-control" 
                  >
                  {
                    profile.user.InstagramUrl
                  }
                  </p>
                </div>
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-twitter position-absolute text-info" />
                  <p 
                  className="form-control" 
                  >
                  {
                    profile.user.TwitterUrl
                  }
                  </p>
                </div>
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-youtube position-absolute text-danger" />
                  <p 
                  className="form-control" 
                  >
                  {
                    profile.user.YouTubeUrl
                  }
                  </p>
                </div>
                <div className="position-relative icon-form-control mb-0">
                  <i className="feather-github position-absolute text-dark" />
                  <p 
                  className="form-control" 
                  >
                  {
                    profile.user.GithubUrl
                  }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
        ))
        : <Lottie options={lottieOptions} 
        height='100%'
        width='100%'
        /> 
        }
        <aside class="col col-xl-3 order-xl-3 col-lg-12 order-lg-3 col-12">
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
            <div className="box shadow-sm border rounded bg-white mb-3">
              <div className="box-body p-3">
            {profile.map(profile => (
              <div className="box shadow-sm mb-3 rounded bg-white ads-box text-center overflow-hidden">
              <img src={`https://chart.apis.google.com/chart?cht=qr&chl=https://light-empregue-me.herokuapp.com/profile/${profile.user._id}&chs=230x230`} className="img-fluid"  alt="Responsive image" />
              <div className="p-3 border-bottom">
            <h6 className="font-weight-bold text-dark">QR code do seu perfil {profile.user.name}</h6>
                  <p className="mb-0 text-muted">Use para apresentar seu perfil a seus amigos</p>
                </div>
              </div>                
            ))}
              </div>
            </div>
            </div>
          </div>
        </aside>
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-2 col-md-12 col-sm-12 col-12">
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Sobre você</h6>
            </div>
            {profile.map(profile => (
            <div key={profile._id} className="box-body p-3">
              <p>{profile.user.bio}</p>
            </div>
            ))}
          </div>
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Publicacões</h6>
            </div>
            {post
            ? post.map(postd => (
              <div className="box mb-3 shadow-sm border rounded bg-white osahan-post">
                <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src={postd.user.avatar} alt />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">{postd.user.name}</div>
                    <div className="small text-gray-500">Ui/Ux desing</div>
                  </div>
                  <span className="ml-auto small">{moment(postd.createdAt).fromNow()}</span>
                </div>
                <div className="p-3 border-bottom osahan-post-body">
                  <p>{postd.Text.Text}</p>
                  { postd.isVideo
                  ? <video width="100%" height="100%" controls>
                  <source src={postd.avatar ? postd.avatar : null} type="video/ogg"/>
                  </video>
                  : <img src={postd.avatar ? postd.avatar : null}
                  className="img-fluid"
                  style={{width:'100%',height:'100%'}}
                  />
                  }
                  </div>
                <form 
                onClick={
                  async function Like(event){
                  event.preventDefault()
                    await api.post(`/likes/${postd._id}`)
                  }
                }
                className="p-3 border-bottom osahan-post-footer"
                >
                <button  
                style={{background:'none',border:'none'}}
                className="mr-3 text-secondary"
                ><i className="feather-heart text-danger" />
                {postd.likeCount}</button>
                <i className="feather-message-square" />{postd.commentCount}
                <button 
                onClick={
                  async function Share(event){
                    try{
                    event.preventDefault()
                    await api.post(`/post/share/${postd._id}`)
                    toast.success('Compartilhado ;)');
                    }catch(e){
                      console.log(e)
                      toast.error('Ops!! Não deu para compartilhar tente novamente');
                    }
                  }}
                className="mr-3 text-secondary" 
                style={{border:'none',background:'none',marginLeft:'8px'}}>
                  <i className="feather-share-2" /></button>
                </form>
                {postd.comments.map(comments => (
                <div className="p-3 d-flex align-items-top border-bottom osahan-post-comment">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src={comments.avatar} alt />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">{comments.username}<span className="float-right small">{moment(comments.createdAt).fromNow()}</span></div>
                    <div className="small text-gray-500">{comments.Text.text}</div>
                  </div>
                </div>
                ))}
                <form className="p-3" onSubmit={
                  async function Comentario(event){
                  event.preventDefault()
                  await api.post(`/coment/${postd._id}`,{
                    text
                  })
                }} >
                  <input 
                  placeholder="Adicionar Comentario..." 
                  className="form-control border-0 p-0 shadow-none" 
                  defaultValue={""}
                  value={text}
                  onChange={event => setText(event.target.value)}
                  />
                  <button style={{border:'none',background:'none',marginLeft:'90%',color:'cornflowerblue',fontWeight:'bold'}}>Enviar</button>
                </form>
              </div>
              ))
            : <Lottie options={lottieOptions} 
            height='100%'
            width='100%'
            /> 
            }
          </div>
        </main>
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
